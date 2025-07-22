import { Suspense } from "react";
import ProgramOfferedClient from "@/components/programs/programsoffered"; // adjust import path

export default function ProgramsOfferedPage() {
  return (
    <Suspense fallback={<div>Loading programs...</div>}>
      <ProgramOfferedClient />
    </Suspense>
  );
}
