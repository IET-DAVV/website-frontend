import AnnouncementSection from "./AnnouncementSection";
import HeroCarousel from "./HeroCarousel";
import NewsSection from "./NewsSection";

export default function NewLandingpage() {
  return (
    <div className="bg-blueShade-200 text-white">
      <main className="relative bg-hero h-screen flex items-center justify-center">
        <div className="absolute inset-0  opacity-30"></div>
        <div className="container mx-auto px-6 relative z-10 grid grid-cols-12 gap-8 pt-16 pb-16">
          <NewsSection />
          <div className="col-span-12 md:col-span-6">
            <HeroCarousel />
          </div>
          <AnnouncementSection />
        </div>
      </main>
    </div>
  );
}
