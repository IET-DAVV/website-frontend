
"use client";
import { useState, useEffect } from 'react';
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { User } from "lucide-react";
import {
  generateFacultyPDF,
  getCachedPDF,
  setCachedPDF,
} from "@/utils/pdfGenerator";

interface FacultyMember {
  id: number;
  attributes: {
    Name: string;
    emp_id: string;
    qualification: string;
    email: string;
    about_faculty: string;
    phone: string;
    Designation: string;
    Department: string;
    education_qualifcation: Array<{
      id: number;
      sno: string;
      degree: string;
      year: string;
      institute: string;
      division: string | null;
      specialization: string;
    }>;
    work_experience: Array<{
      id: number;
      sno: string;
      employer: string;
      designation: string;
      department: string;
      duration_of_employment_in_months: string;
      date_of_joining: string;
      mode_of_employment: string;
    }>;
    project_detials: Array<{
      id: number;
      sno: string;
      type: string;
      title: string;
      duration: string;
      amount: string;
      year: string;
    }>;
    research_details: Array<{
      id: number;
      sno: string;
      type: string;
      title: string;
      publication_year: string;
      paper_link: string;
      author: string;
      publishers: string;
    }>;
    phd_supervision: Array<{
      id: number;
      sno: string;
      year: string;
      thesis_title: string;
      university: string;
      student: string;
    }>;
    testing_and_consultancy: Array<{
      id: number;
      sno: string;
      description: string;
    }>;
    Formal_Image: {
      data: {
        id: number;
        attributes: {
          url: string;
          name: string;
        };
      };
    };
  };
}

const FacultyData = (): JSX.Element => {
  const searchParams = useSearchParams();
  const branch = searchParams.get("branch");
  const nameParam = searchParams.get("name");
  
  const [facultyData, setFacultyData] = useState<FacultyMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pdfLoading, setPdfLoading] = useState<{ [key: string]: boolean }>({});

  // Fetch faculty data from API
  useEffect(() => {
    const fetchFacultyData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Replace with your actual API endpoint
        const response = await fetch('http://117.239.195.147:1337/api/faculty-datas?populate=*');
        
        if (!response.ok) {
          throw new Error('Failed to fetch faculty data from backend API');
        }
        
        const result = await response.json();
        setFacultyData(result.data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error fetching faculty data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchFacultyData();
  }, []);

  // Enable smooth scrolling for navigation
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  const handleProfileClick = async (
    faculty: FacultyMember,
    facultyIdentifier: number | string
  ) => {
    const cacheKey = `${branch}-${facultyIdentifier}`;
    setPdfLoading((prev) => ({ ...prev, [cacheKey]: true }));

    try {
      let pdfBlob = getCachedPDF(cacheKey);

      if (!pdfBlob) {
        // Map the fetched faculty structure to the shape expected by generateFacultyPDF
        const attrs = faculty.attributes;
        const facultyForPdf = {
          name: attrs.Name,
          designation: attrs.Designation,
          email: attrs.email,
          empId: attrs.emp_id,
          phone: attrs.phone,
          about: attrs.about_faculty,
          department: attrs.Department,
          qualification: attrs.qualification,
          qualifications: attrs.education_qualifcation || [],
          workExperience: attrs.work_experience || [],
          projects: attrs.project_detials || [],
          publications: attrs.research_details || [],
          phdSupervision: attrs.phd_supervision || [],
          testingAndConsultancy: attrs.testing_and_consultancy || [],
          imageUrl: attrs.Formal_Image?.data?.attributes?.url
            ? `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'}${attrs.Formal_Image.data.attributes.url}`
            : null,
        };

        // Cast to any to satisfy the expected parameter type of generateFacultyPDF
        pdfBlob = await generateFacultyPDF(facultyForPdf as any);
        setCachedPDF(cacheKey, pdfBlob);
      }

      const pdfUrl = URL.createObjectURL(pdfBlob);
      window.open(pdfUrl, "_blank");

      setTimeout(() => {
        URL.revokeObjectURL(pdfUrl);
      }, 1000);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Error generating PDF. Please try again.");
    } finally {
      setPdfLoading((prev) => ({ ...prev, [cacheKey]: false }));
    }
  };

  // Show loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#06779B] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading faculty data...</p>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="text-center py-16 text-red-500">
        <p className="text-lg">Error: {error}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-4 px-4 py-2 bg-[#06779B] text-white rounded-md hover:bg-[#056a8a]"
        >
          Retry
        </button>
      </div>
    );
  }

  if (nameParam) {
    // Show individual faculty details
    const facultyName = decodeURIComponent(nameParam);
    const facultyMember = facultyData.find(
      (data) =>
        data.attributes.Name.toLowerCase() === facultyName.toLowerCase()
    );

    if (!facultyMember) {
      return (
        <div className="text-center py-16 text-gray-500">
          <p className="text-lg">Faculty member not found</p>
        </div>
      );
    }

    const faculty = facultyMember.attributes;
    const imageUrl = faculty.Formal_Image?.data?.attributes?.url 
      ? `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'}${faculty.Formal_Image.data.attributes.url}`
      : '/placeholder-faculty.jpg';

    return (
      <div className="max-w-7xl mx-auto bg-white p-6 mt-20 mb-20 relative flex gap-6">
        {/* Navigation Menu */}
        <div className="sticky top-24 w-64 bg-gradient-to-b from-white to-gray-50 shadow-xl rounded-lg p-4 border border-gray-200 h-fit max-h-[calc(100vh-8rem)] overflow-y-auto flex-shrink-0">
          <h3 className="text-lg font-bold text-[#06779B] mb-4 border-b-2 border-[#06779B] pb-2 flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                clipRule="evenodd"
              />
            </svg>
            Quick Navigation
          </h3>
          <nav className="space-y-1">
            {faculty.about_faculty && (
              <a
                href="#about-faculty"
                className="block text-sm text-gray-700 hover:text-[#06779B] hover:bg-[#06779B]/10 px-3 py-2 rounded-md transition-all duration-200 border-l-2 border-transparent hover:border-[#06779B]"
              >
                About Faculty
              </a>
            )}
            <a
              href="#education-qualification"
              className="block text-sm text-gray-700 hover:text-[#06779B] hover:bg-[#06779B]/10 px-3 py-2 rounded-md transition-all duration-200 border-l-2 border-transparent hover:border-[#06779B]"
            >
              Education & Qualification
            </a>
            {faculty.work_experience?.length > 0 && (
              <a
                href="#work-experience"
                className="block text-sm text-gray-700 hover:text-[#06779B] hover:bg-[#06779B]/10 px-3 py-2 rounded-md transition-all duration-200 border-l-2 border-transparent hover:border-[#06779B]"
              >
                Work Experience
              </a>
            )}
            {faculty.research_details?.length > 0 && (
              <a
                href="#publications"
                className="block text-sm text-gray-700 hover:text-[#06779B] hover:bg-[#06779B]/10 px-3 py-2 rounded-md transition-all duration-200 border-l-2 border-transparent hover:border-[#06779B]"
              >
                Publications
              </a>
            )}
            {faculty.phd_supervision?.length > 0 && (
              <a
                href="#phd-supervision"
                className="block text-sm text-gray-700 hover:text-[#06779B] hover:bg-[#06779B]/10 px-3 py-2 rounded-md transition-all duration-200 border-l-2 border-transparent hover:border-[#06779B]"
              >
                PhD Supervision
              </a>
            )}
            {faculty.project_detials?.length > 0 && (
              <a
                href="#projects"
                className="block text-sm text-gray-700 hover:text-[#06779B] hover:bg-[#06779B]/10 px-3 py-2 rounded-md transition-all duration-200 border-l-2 border-transparent hover:border-[#06779B]"
              >
                Projects
              </a>
            )}
            {faculty.testing_and_consultancy?.length > 0 && (
              <a
                href="#testing-consultancy"
                className="block text-sm text-gray-700 hover:text-[#06779B] hover:bg-[#06779B]/10 px-3 py-2 rounded-md transition-all duration-200 border-l-2 border-transparent hover:border-[#06779B]"
              >
                Testing & Consultancy
              </a>
            )}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="text-[#686868] flex flex-col lg:flex-row items-center gap-6 font-medium mb-8">
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-[#06779B] mb-4">
                {faculty.Name}
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <p>
                  <span className="font-bold text-black">Designation:</span>{" "}
                  {faculty.Designation}
                </p>
                <p>
                  <span className="text-black font-bold">Employee ID:</span>{" "}
                  {faculty.emp_id || "N/A"}
                </p>
                <p>
                  <span className="text-black font-bold">Phone:</span>
                  {faculty.phone ? (
                    <a
                      href={`tel:${faculty.phone}`}
                      className="text-[#06779B] hover:underline ml-1"
                    >
                      {faculty.phone}
                    </a>
                  ) : (
                    " N/A"
                  )}
                </p>
                <p>
                  <span className="text-black font-bold">Email:</span>{" "}
                  <a href={`mailto:${faculty.email}`} className="text-[#06779B] hover:underline">
                    {faculty.email || "N/A"}
                  </a>
                </p>
                <p>
                  <span className="text-black font-bold">Profile:</span>
                  <button
                    onClick={() => handleProfileClick(facultyMember, faculty.Name)}
                    disabled={pdfLoading[`${branch}-${faculty.Name}`]}
                    className="inline-flex items-center gap-2 text-[#06779B] hover:text-[#056a8a] hover:underline ml-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <User size={16} />
                    <span>
                      {pdfLoading[`${branch}-${faculty.Name}`]
                        ? "Generating PDF..."
                        : "Detailed Profile"}
                    </span>
                  </button>
                </p>
                <p>
                  <span className="text-black font-bold">Qualification:</span>{" "}
                  {faculty.qualification !== "N/A\t" ? faculty.qualification : "N/A"}
                </p>
              </div>
            </div>
            <div>
              <Image
                src={imageUrl}
                alt={faculty.Name}
                width={200}
                height={200}
                unoptimized={true}
                className="rounded-md object-cover border border-gray-300"
              />
            </div>
          </div>

          {/* About Faculty */}
          {faculty.about_faculty && (
            <div id="about-faculty" className="mb-8">
              <h2 className="text-2xl font-bold text-[#06779B] mb-4 border-b-2 border-[#06779B] pb-2">
                Research Area
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {faculty.about_faculty}
              </p>
            </div>
          )}

          {/* Education and Qualification */}
          {faculty.education_qualifcation?.length > 0 && (
            <div id="education-qualification" className="mb-8">
              <h2 className="text-2xl font-bold text-[#06779B] mb-4 border-b-2 border-[#06779B] pb-2">
                Education and Qualification
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-[#06779B] text-white">
                      <th className="border border-gray-300 px-4 py-2 text-left">S. No.</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Degree</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Specialization</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Year</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">University/Board</th>
                    </tr>
                  </thead>
                  <tbody>
                    {faculty.education_qualifcation.map((qual, index) => (
                      <tr key={qual.id} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                        <td className="border border-gray-300 px-4 py-2">{qual.degree}</td>
                        <td className="border border-gray-300 px-4 py-2">{qual.specialization}</td>
                        <td className="border border-gray-300 px-4 py-2">{qual.year}</td>
                        <td className="border border-gray-300 px-4 py-2">{qual.institute}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Work Experience */}
          {faculty.work_experience?.length > 0 && (
            <div id="work-experience" className="mb-8">
              <h2 className="text-2xl font-bold text-[#06779B] mb-4 border-b-2 border-[#06779B] pb-2">
                Work Experience
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-[#06779B] text-white">
                      <th className="border border-gray-300 px-4 py-2 text-left">S. No.</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Designation</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Department</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Employer Name</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Duration</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Mode of Employment</th>
                    </tr>
                  </thead>
                  <tbody>
                    {faculty.work_experience.map((exp, index) => (
                      <tr key={exp.id} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                        <td className="border border-gray-300 px-4 py-2">{exp.designation}</td>
                        <td className="border border-gray-300 px-4 py-2">{exp.department}</td>
                        <td className="border border-gray-300 px-4 py-2">{exp.employer}</td>
                        <td className="border border-gray-300 px-4 py-2">{exp.duration_of_employment_in_months}</td>
                        <td className="border border-gray-300 px-4 py-2">{exp.mode_of_employment}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Publications */}
          {faculty.research_details?.length > 0 && (
            <div id="publications" className="mb-8">
              <h2 className="text-2xl font-bold text-[#06779B] mb-4 border-b-2 border-[#06779B] pb-2">
                Publications
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-[#06779B] text-white">
                      <th className="border border-gray-300 px-4 py-2 text-left">S.No.</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Title</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Year</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Paper Link</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Authors</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Publishers</th>
                    </tr>
                  </thead>
                  <tbody>
                    {faculty.research_details.map((pub, index) => (
                      <tr key={pub.id} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                        <td className="border border-gray-300 px-4 py-2">{pub.type}</td>
                        <td className="border border-gray-300 px-4 py-2">{pub.title}</td>
                        <td className="border border-gray-300 px-4 py-2">{pub.publication_year}</td>
                        <td className="border border-gray-300 px-4 py-2">
                          {pub.paper_link && pub.paper_link !== "N/A\t" ? (
                            <a href={pub.paper_link} target="_blank" rel="noopener noreferrer" className="text-[#06779B] hover:underline">
                              Link
                            </a>
                          ) : (
                            "N/A"
                          )}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">{pub.author}</td>
                        <td className="border border-gray-300 px-4 py-2">{pub.publishers}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* PhD Supervision */}
          {faculty.phd_supervision?.length > 0 && (
            <div id="phd-supervision" className="mb-8">
              <h2 className="text-2xl font-bold text-[#06779B] mb-4 border-b-2 border-[#06779B] pb-2">
                PhD Supervision
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-[#06779B] text-white">
                      <th className="border border-gray-300 px-4 py-2 text-left">S. No.</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Student Name</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">University/Institute</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Thesis Title</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Year</th>
                    </tr>
                  </thead>
                  <tbody>
                    {faculty.phd_supervision.map((phd, index) => (
                      <tr key={phd.id} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                        <td className="border border-gray-300 px-4 py-2">{phd.student}</td>
                        <td className="border border-gray-300 px-4 py-2">{phd.university}</td>
                        <td className="border border-gray-300 px-4 py-2">{phd.thesis_title}</td>
                        <td className="border border-gray-300 px-4 py-2">{phd.year}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Projects */}
          {faculty.project_detials?.length > 0 && (
            <div id="projects" className="mb-8">
              <h2 className="text-2xl font-bold text-[#06779B] mb-4 border-b-2 border-[#06779B] pb-2">
                Projects
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-[#06779B] text-white">
                      <th className="border border-gray-300 px-4 py-2 text-left">S. No.</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Title</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Duration</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Amount</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Year</th>
                    </tr>
                  </thead>
                  <tbody>
                    {faculty.project_detials.map((proj, index) => (
                      <tr key={proj.id} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                        <td className="border border-gray-300 px-4 py-2">{proj.type}</td>
                        <td className="border border-gray-300 px-4 py-2">{proj.title}</td>
                        <td className="border border-gray-300 px-4 py-2">{proj.duration}</td>
                        <td className="border border-gray-300 px-4 py-2">{proj.amount}</td>
                        <td className="border border-gray-300 px-4 py-2">{proj.year}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Testing & Consultancy */}
          {faculty.testing_and_consultancy?.length > 0 && (
            <div id="testing-consultancy" className="mb-8">
              <h2 className="text-2xl font-bold text-[#06779B] mb-4 border-b-2 border-[#06779B] pb-2">
                Testing & Consultancy
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                {faculty.testing_and_consultancy.map((item) => (
                  <li key={item.id} className="text-gray-700">
                    {item.description}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Show faculty list for branch
  const branchParam = searchParams.get("branch");
  const branchName = branchParam ? decodeURIComponent(branchParam) : null;

  // Filter faculty by department
  const filteredFaculty = branchName
    ? facultyData.filter((data) => data.attributes.Department === branchName)
    : facultyData;

  return (
    <>
      <div className="w-full">
        <h1 className="text-4xl font-bold text-center text-[#06779B] mt-10 mb-10">
          {branchName || "Faculty"}
        </h1>

        {filteredFaculty.length === 0 ? (
          <div className="text-center py-16 text-gray-500">
            <p className="text-lg">
              No faculty members found for {branchName || "this department"}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 m-20 mt-10 mb-10 p-4">
            {filteredFaculty.map((data) => {
              const faculty = data.attributes;
              const imageUrl = faculty.Formal_Image?.data?.attributes?.url 
                ? `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'}${faculty.Formal_Image.data.attributes.url}`
                : '/placeholder-faculty.jpg';

              return (
                <div
                  key={data.id}
                  className="max-w-[350px] bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Image Container */}
                  <div className="relative h-48 w-full bg-gray-100 flex items-center justify-center overflow-hidden">
                    <Image
                      src={imageUrl}
                      alt={faculty.Name}
                      width={300}
                      height={200}
                      unoptimized={true}
                      className="object-cover w-full h-full"
                      onError={(e) => {
                        const img = e.target as HTMLImageElement;
                        img.src = "/placeholder-faculty.jpg";
                      }}
                    />
                  </div>

                  {/* Content Container */}
                  <div className="p-4 pl-6 pr-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-1">
                      {faculty.Name}
                    </h2>
                    <p className="font-semibold text-sm text-gray-600 mb-2">
                      {faculty.Designation}
                    </p>

                    {faculty.email && (
                      <p className="text-xs text-[#06779B] font-semibold mb-3 truncate">
                        {faculty.email}
                      </p>
                    )}

                    <Link
                      href={`/facultyPage/facultyData?name=${encodeURIComponent(
                        faculty.Name
                      )}`}
                      className="inline-block w-full text-center px-4 py-2 bg-[#06779B] text-white rounded-md hover:bg-[#056a8a] transition duration-200 font-medium"
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default FacultyData;