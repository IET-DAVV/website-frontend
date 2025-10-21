// components/landing-page/LandingContainer.tsx
import dynamic from "next/dynamic";
import { memo, Suspense } from "react";
import HeroSection from "@/components/landing-page/HeroSection";
import About from "@/components/landing-page/about/About";
import Recruiters from "@/components/chart/Recruiters";
import AcademicPrograms from "@/components/landing-page/academic-programs/AcademicPrograms";

// Memoize components that don't change
const MemoizedAbout = memo(About);
const MemoizedRecruiters = memo(Recruiters);
const MemoizedAcademicPrograms = memo(AcademicPrograms);

// Lazy load components below the fold with better loading states
const Achievements = dynamic(
  () => import("@/components/achievements-carousel/Achievements"),
  {
    loading: () => (
      <div className="h-96 animate-pulse bg-gray-100 rounded-lg mx-4 md:mx-8 lg:mx-16 flex items-center justify-center">
        <div className="text-gray-400">Loading achievements...</div>
      </div>
    ),
    // Removed ssr: false to fix Next.js 15 compatibility
  }
);

const Events = dynamic(
  () => import("@/components/landing-page/events/Events"),
  {
    loading: () => (
      <div className="h-64 animate-pulse bg-gray-100 rounded-lg mx-4 md:mx-8 lg:mx-16 flex items-center justify-center">
        <div className="text-gray-400">Loading events...</div>
      </div>
    ),
  }
);

const StackCards = dynamic(
  () => import("@/components/landing-page/ClubsUpdated"),
  {
    loading: () => (
      <div className="h-80 animate-pulse bg-gray-100 rounded-lg mx-4 md:mx-8 lg:mx-16 flex items-center justify-center">
        <div className="text-gray-400">Loading clubs...</div>
      </div>
    ),
  }
);

// Loading component for Suspense fallback
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
  </div>
);

const LandingContainer = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <div className="bg-white">
        {/* Above the fold - load immediately */}
        <HeroSection />
        <div className="-mt-16 sm:-mt-28 lg:-mt-46 xl:-mt-52">
          <MemoizedRecruiters />
        </div>
        <MemoizedAbout />
        <MemoizedAcademicPrograms />

        <Events />
        <StackCards />
      </div>
    </Suspense>
  );
};

export default LandingContainer