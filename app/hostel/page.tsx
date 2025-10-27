// app/hostel/page.tsx
import React from "react";
import HostelHero from "@/components/hostel/HostelHero";
import Overview from "@/components/hostel/Overview";
import Accommodation from "@/components/hostel/Accommodation";
import Facilities from "@/components/hostel/Facilities";
import Rules from "@/components/hostel/Rules";
import Administration from "@/components/hostel/Administration";
import AdmissionFee from "@/components/hostel/AdmissionFee";
import Activities from "@/components/hostel/Activities";
import QuickFacts from "@/components/hostel/QuickFacts";

export const metadata = {
  title: "Girls' Hostel • IET DAVV",
  description: "Safe. Supportive. Self-sufficient. — Girls' Hostel info, facilities, admissions, fees.",
};

export default function HostelPage() {
  return (
<main className="bg-white text-gray-800">
  <HostelHero />

  <div className="max-w-screen mx-auto px-6 md:px-10 space-y-6 mt-16 md:mt-12 mb-8">
    <Overview />
    <Accommodation />
    <Facilities />
    <Rules />
    <Administration />
    <AdmissionFee />
    <Activities />
    <QuickFacts />
  </div>
</main>
);
}