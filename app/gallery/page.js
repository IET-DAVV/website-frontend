// app/gallery/page.js

import PhotoGalleryPage from '@/components/photo-gallery/PhotoGalleryPage';

export const metadata = {
  title: 'Our Photo Gallery - Moments & Memories',
  description: 'Explore photos of campus life, events, academics, and infrastructure.',
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <PhotoGalleryPage />
    </main>
  );
}