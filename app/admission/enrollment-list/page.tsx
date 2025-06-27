// app/admission/enrollment-list/page.tsx
"use client";

import React from "react";
import EnrollmentComponent from "@/components/enrollment/EnrollmentComponent";

export default function Page() {
  console.log("✅ Page is rendering");
  return (
    <div style={{ background: "#fff5c2", padding: "20px" }}>
      <h1>✅ Page is visible!</h1>
      <EnrollmentComponent />
    </div>
  );
}
