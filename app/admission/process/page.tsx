import React from "react";

import AdmissionBox from "@/components/process/process";
import ProcessContent from "@/components/process/processcontent";

export default function ProcessPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <AdmissionBox />
      <ProcessContent />
    </main>
  );
}
