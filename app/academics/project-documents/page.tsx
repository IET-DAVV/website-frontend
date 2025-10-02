// app/documents/page.tsx

import ProjectDocumentsSection from '@/components/projectDocument/ProjectDocumentsSection';

// You can define metadata for the page here if using Next.js 13+
export const metadata = {
  title: 'Project Documents - For BE IV Year Students',
  description: 'Download formats for thesis, synopsis, SDS, SRS, and project reports for final year students.',
};

// This component will be rendered at the /documents route
export default function ProjectDocumentsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* The component containing all the content and animations */}
      <ProjectDocumentsSection />
    </main>
  );
}