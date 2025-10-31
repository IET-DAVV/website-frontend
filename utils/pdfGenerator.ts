import jsPDF from 'jspdf';

export interface FacultyData {
  name: string;
  designation: string;
  email: string;
  phone?: string;
  EmployeeID?: string;
  qualifications: string[];
  description?: string;
  tabs?: any[];
  branch?: string;
  image?: string;
}

export const generateFacultyPDF = (faculty: FacultyData): Promise<Blob> => {
  return new Promise((resolve) => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    let yPosition = 20;

    // Helper function to add text with word wrapping
    const addWrappedText = (text: string, x: number, y: number, maxWidth: number, fontSize: number = 10) => {
      doc.setFontSize(fontSize);
      const lines = doc.splitTextToSize(text, maxWidth);
      doc.text(lines, x, y);
      return y + (lines.length * 5);
    };

    // Helper function to check if we need a new page
    const checkNewPage = (currentY: number, spaceNeeded: number = 20) => {
      if (currentY + spaceNeeded > pageHeight - 20) {
        doc.addPage();
        return 20;
      }
      return currentY;
    };

    // Helper function to load image as base64
    const loadImageAsBase64 = (imageUrl: string): Promise<string> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          canvas.width = img.width;
          canvas.height = img.height;
          ctx?.drawImage(img, 0, 0);
          const dataURL = canvas.toDataURL('image/jpeg', 0.8);
          resolve(dataURL);
        };
        img.onerror = () => {
          // If image fails to load, resolve with empty string
          resolve('');
        };
        img.src = imageUrl;
      });
    };

    // Load faculty image if available
    const loadImageAndGeneratePDF = async () => {
      let facultyImageBase64 = '';

      if (faculty.image) {
        try {
          facultyImageBase64 = await loadImageAsBase64(faculty.image);
        } catch (error) {
          console.warn('Failed to load faculty image:', error);
        }
      }

      // Title
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      doc.text('FACULTY PROFILE', pageWidth / 2, yPosition, { align: 'center' });
      yPosition += 15;

      doc.setFontSize(14);
      doc.text(faculty.name, pageWidth / 2, yPosition, { align: 'center' });
      yPosition += 20;

      // Add faculty image if available
      if (facultyImageBase64) {
        try {
          const imageX = pageWidth - 60; // Position image on the right
          const imageY = 40;
          const imageWidth = 40;
          const imageHeight = 50;

          doc.addImage(facultyImageBase64, 'JPEG', imageX, imageY, imageWidth, imageHeight);
          yPosition = Math.max(yPosition, imageY + imageHeight + 10);
        } catch (error) {
          console.warn('Failed to add image to PDF:', error);
        }
      }

      // 1. Personal Information
      yPosition = checkNewPage(yPosition, 30);
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text('1. Personal Information', 20, yPosition);
      yPosition += 10;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);

      const personalInfo = [
        `(i) Name: ${faculty.name}`,
        `(ii) Qualification: ${faculty.qualifications[faculty.qualifications.length - 1]?.split(':')[0] || 'N/A'}`,
        `(iii) Designation: ${faculty.designation}`,
        `(iv) Email-id: ${faculty.email}`,
        `(v) Employee No.: ${faculty.EmployeeID || 'N/A'}`,
        `(vi) Department: ${faculty.branch || 'N/A'}`,
        `(vii) Experience: 22+ years`
      ];

      personalInfo.forEach(info => {
        yPosition = checkNewPage(yPosition, 8);
        doc.text(info, 25, yPosition);
        yPosition += 6;
      });

      yPosition += 10;

      // 2. Educational Qualification
      yPosition = checkNewPage(yPosition, 30);
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text('2. Educational Qualification', 20, yPosition);
      yPosition += 10;

      // Table headers
      doc.setFontSize(9);
      doc.setFont('helvetica', 'bold');
      const tableX = 20;
      const colWidths = [15, 35, 40, 20, 50];
      const headers = ['S.No.', 'Degree', 'Specialization', 'Year', 'University/Board'];

      headers.forEach((header, index) => {
        let x = tableX;
        for (let i = 0; i < index; i++) {
          x += colWidths[i];
        }
        doc.text(header, x, yPosition);
      });

      yPosition += 8;

      // Table content
      doc.setFont('helvetica', 'normal');
      faculty.qualifications.forEach((qual, index) => {
        yPosition = checkNewPage(yPosition, 8);

        // Parse qualification string
        const parts = qual.split(':');
        const degreePart = parts[0]?.trim() || '';
        const universityYearPart = parts[1]?.trim() || '';

        const degreeMatch = degreePart.match(/^(.+?)\s*\((.+)\)$/);
        const degree = degreeMatch ? degreeMatch[1] : degreePart;
        const specialization = degreeMatch ? degreeMatch[2] : '';

        const universityYearMatch = universityYearPart.match(/^(.+?),\s*(\d{4})$/);
        const university = universityYearMatch ? universityYearMatch[1] : universityYearPart;
        const year = universityYearMatch ? universityYearMatch[2] : '';

        const rowData = [
          (index + 1).toString(),
          degree,
          specialization,
          year,
          university
        ];

        let x = tableX;
        rowData.forEach((data, colIndex) => {
          doc.text(data, x, yPosition);
          x += colWidths[colIndex];
        });

        yPosition += 6;
      });

      yPosition += 10;

      // 3. Research Interests
      if (faculty.description) {
        yPosition = checkNewPage(yPosition, 20);
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.text('3. Research Interests', 20, yPosition);
        yPosition += 10;

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);
        yPosition = addWrappedText(faculty.description, 25, yPosition, pageWidth - 45);
        yPosition += 10;
      }

      // 4. Research Paper Publications
      if (faculty.tabs?.find(tab => tab.key === 'publications')) {
        yPosition = checkNewPage(yPosition, 20);
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.text('4. Research Paper Publications', 20, yPosition);
        yPosition += 10;

        const publications = faculty.tabs.find(tab => tab.key === 'publications')?.content || [];

        // (I) International/National Journal Publications
        const journals = publications.filter((pub: any) => pub.type === 'Journal');
        if (journals.length > 0) {
          yPosition = checkNewPage(yPosition, 15);
          doc.setFontSize(10);
          doc.setFont('helvetica', 'bold');
          doc.text('(I) International/National Journal Publications', 25, yPosition);
          yPosition += 8;

          doc.setFont('helvetica', 'normal');
          journals.forEach((pub: any) => {
            yPosition = checkNewPage(yPosition, 6);
            const title = typeof pub === 'string' ? pub : `"${pub.title}", ${pub.year}`;
            yPosition = addWrappedText(`• ${title}`, 30, yPosition, pageWidth - 50, 9);
          });
        }

        // (II) International/National Conference Publications
        const conferences = publications.filter((pub: any) => pub.type === 'Conference');
        if (conferences.length > 0) {
          yPosition = checkNewPage(yPosition, 15);
          doc.setFontSize(10);
          doc.setFont('helvetica', 'bold');
          doc.text('(II) International/National Conference Publications', 25, yPosition);
          yPosition += 8;

          doc.setFont('helvetica', 'normal');
          conferences.forEach((pub: any) => {
            yPosition = checkNewPage(yPosition, 6);
            const title = typeof pub === 'string' ? pub : `"${pub.title}", ${pub.year}`;
            yPosition = addWrappedText(`• ${title}`, 30, yPosition, pageWidth - 50, 9);
          });
        }

        yPosition += 10;
      }

      // 5. Work Experience
      if (faculty.tabs?.find(tab => tab.key === 'work')) {
        yPosition = checkNewPage(yPosition, 20);
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.text('5. Work Experience', 20, yPosition);
        yPosition += 10;

        const workExp = faculty.tabs.find(tab => tab.key === 'work')?.content || [];
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);

        workExp.forEach((work: any) => {
          yPosition = checkNewPage(yPosition, 6);
          if (typeof work === 'string') {
            yPosition = addWrappedText(`• ${work}`, 25, yPosition, pageWidth - 45, 9);
          } else {
            const workText = `${work.designation}, ${work.department}, ${work.employerName} (${work.duration})`;
            yPosition = addWrappedText(`• ${workText}`, 25, yPosition, pageWidth - 45, 9);
          }
        });

        yPosition += 10;
      }

      // 6. PhD Supervision
      if (faculty.tabs?.find(tab => tab.key === 'phd')) {
        yPosition = checkNewPage(yPosition, 20);
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.text('6. PhD Supervision', 20, yPosition);
        yPosition += 10;

        const phdSupervision = faculty.tabs.find(tab => tab.key === 'phd')?.content || [];
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);

        phdSupervision.forEach((phd: any) => {
          yPosition = checkNewPage(yPosition, 6);
          if (typeof phd === 'string') {
            yPosition = addWrappedText(`• ${phd}`, 25, yPosition, pageWidth - 45, 9);
          } else {
            const phdText = `${phd.studentName}: "${phd.thesisTitle}" (${phd.status}, ${phd.year})`;
            yPosition = addWrappedText(`• ${phdText}`, 25, yPosition, pageWidth - 45, 9);
          }
        });

        yPosition += 10;
      }

      // 7. Projects
      if (faculty.tabs?.find(tab => tab.key === 'projects')) {
        yPosition = checkNewPage(yPosition, 20);
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.text('7. Projects', 20, yPosition);
        yPosition += 10;

        const projects = faculty.tabs.find(tab => tab.key === 'projects')?.content || [];
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);

        projects.forEach((project: any) => {
          yPosition = checkNewPage(yPosition, 6);
          const projectText = typeof project === 'string' ? project : project.title || project;
          yPosition = addWrappedText(`• ${projectText}`, 25, yPosition, pageWidth - 45, 9);
        });

        yPosition += 10;
      }

      // 8. Testing & Consultancy
      if (faculty.tabs?.find(tab => tab.key === 'testing')) {
        yPosition = checkNewPage(yPosition, 20);
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.text('8. Testing & Consultancy', 20, yPosition);
        yPosition += 10;

        const testing = faculty.tabs.find(tab => tab.key === 'testing')?.content || [];
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);

        testing.forEach((test: any) => {
          yPosition = checkNewPage(yPosition, 6);
          const testText = typeof test === 'string' ? test : test.title || test;
          yPosition = addWrappedText(`• ${testText}`, 25, yPosition, pageWidth - 45, 9);
        });
      }

      // Footer
      const footerY = pageHeight - 15;
      doc.setFontSize(8);
      doc.setFont('helvetica', 'normal');
      doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 20, footerY);
      doc.text('IET DAVV, Indore', pageWidth - 20, footerY, { align: 'right' });

      // Generate blob
      const pdfBlob = doc.output('blob');
      resolve(pdfBlob);
    };

    // Call the async function
    loadImageAndGeneratePDF();
  });
};
const PDF_CACHE_KEY = 'faculty_pdf_cache';
const CACHE_EXPIRY = 24 * 60 * 60 * 1000; // 24 hours

export const getCachedPDF = (cacheKey: string): Blob | null => {
  try {
    const cache = JSON.parse(localStorage.getItem(PDF_CACHE_KEY) || '{}');
    const cached = cache[cacheKey];
    if (cached && Date.now() - cached.timestamp < CACHE_EXPIRY) {
      // Convert base64 back to blob
      const byteCharacters = atob(cached.data);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      return new Blob([byteArray], { type: 'application/pdf' });
    }
    return null;
  } catch {
    return null;
  }
};

export const setCachedPDF = (cacheKey: string, pdfBlob: Blob): void => {
  try {
    // Convert blob to base64 for storage
    const reader = new FileReader();
    reader.onload = () => {
      const base64 = (reader.result as string).split(',')[1];
      const cache = JSON.parse(localStorage.getItem(PDF_CACHE_KEY) || '{}');
      cache[cacheKey] = {
        data: base64,
        timestamp: Date.now()
      };
      localStorage.setItem(PDF_CACHE_KEY, JSON.stringify(cache));
    };
    reader.readAsDataURL(pdfBlob);
  } catch {
    // Ignore cache errors
  }
};

export const clearPDFCache = (cacheKey?: string): void => {
  try {
    if (cacheKey) {
      const cache = JSON.parse(localStorage.getItem(PDF_CACHE_KEY) || '{}');
      delete cache[cacheKey];
      localStorage.setItem(PDF_CACHE_KEY, JSON.stringify(cache));
    } else {
      localStorage.removeItem(PDF_CACHE_KEY);
    }
  } catch {
    // Ignore cache errors
  }
};