// components/landing-page/LandingContainer.tsx
import dynamic from 'next/dynamic'
import { memo } from 'react'
import HeroSection from "@/components/landing-page/HeroSection"
import About from "@/components/landing-page/about/About"
import Recruiters from "@/components/chart/Recruiters"
import AcademicPrograms from "@/components/landing-page/academic-programs/AcademicPrograms"

// Memoize components that don't change
const MemoizedAbout = memo(About)
const MemoizedRecruiters = memo(Recruiters)
const MemoizedAcademicPrograms = memo(AcademicPrograms)

// Lazy load components below the fold
const Achievements = dynamic(() => import("@/components/achievements-carousel/Achievements"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-200 rounded"></div>
})

const Chart = dynamic(() => import("@/components/chart/Chart"))
const Events = dynamic(() => import("@/components/landing-page/events/Events"))
const StackCards = dynamic(() => import("@/components/landing-page/ClubsUpdated"))

const LandingContainer = () => {
  return (
    <div>
      {/* Above the fold - load immediately */}
      <HeroSection />
      <MemoizedAbout />
      <MemoizedRecruiters />
      <MemoizedAcademicPrograms />
      
      {/* Below the fold - lazy load */}
      <Achievements />
      <Chart />
      <Events />
      <StackCards />
    </div>
  )
}

export default LandingContainer