'use client';
import React from "react";
import SectionTitle from "../common/SectionTitle";
import Tilt from "react-parallax-tilt";

const BlockCard: React.FC<{ label: string; desc: string }> = ({ label, desc }) => (
  <Tilt
    tiltMaxAngleX={4}         // max horizontal tilt
    tiltMaxAngleY={4}         // max vertical tilt
    perspective={1000}         // depth perspective
    glareEnable={true}         // enable light glare
    glareMaxOpacity={0.15}      // soft reflection intensity
    glareColor="#ffffffff"       // glare color
    glarePosition="all"        // glare visible from all angles
    scale={1.07}               // subtle zoom on hover
    transitionSpeed={800}     // smooth ease
    className="rounded-xl"
  >
    <div
      className="text-white rounded-xl p-5 shadow-lg flex flex-col justify-center min-h-[170px] cursor-pointer transition-transform duration-300"
      style={{
        backgroundColor: "#3B7A9E",
      }}
    >
      <h4 className="font-bold text-xl">{label}</h4>
      <p className="text-gray-100 mt-2 font-light">{desc}</p>
    </div>
  </Tilt>
);

export default function Accommodation() {
  return (
    <section className="w-full bg-white text-left px-8 md:px-16 py-12 rounded-xl">
      <SectionTitle title="Accommodation Details" />

      {/* Card Grid */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <BlockCard
          label="Block A"
          desc="Third-year students | Double occupancy rooms"
        />
        <BlockCard
          label="Block B"
          desc="First-year students & Warden House | Triple & four-sharing rooms"
        />
        <BlockCard
          label="Block C"
          desc="Final-year, M.Sc, & Ph.D | Single occupancy rooms"
        />
        <BlockCard
          label="Block D"
          desc="Second & final-year students | Double occupancy rooms"
        />
      </div>

      {/* Info Text */}
      <p className="mt-8 text-slate-800 leading-relaxed max-w-4xl">
        All rooms include a <strong>bed, study table, chair, and almirah</strong>.{" "}
        <strong>Mattress not provided</strong>. Washrooms have{" "}
        <strong>geysers</strong> and are{" "}
        <strong>cleaned daily by staff</strong>. Two{" "}
        <strong>dustbins</strong> are placed per floor for cleanliness.
      </p>
    </section>
  );
}
