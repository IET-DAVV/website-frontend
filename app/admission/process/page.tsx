import React from "react";
import AdmissionBox from "@/components/process/process";
import ProcessContent from "@/components/process/processcontent";

export default function ProcessPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-5xl font-serif text-[#0077C2] text-center font-semibold mb-10">
        PROCESS
      </h1>
      <AdmissionBox />
      <ProcessContent />
    </main>
  );
}
