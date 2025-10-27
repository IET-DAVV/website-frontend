// components/common/SectionTitle.tsx
import React from "react";

export default function SectionTitle({ title }: { title: string }) {
  return (
    <header className="mb-6">
      {/* Matching the image: The title is large and bold. 
        We'll use text-black/slate-900 for high contrast.
      */}
      <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">
        {title}
      </h3>
      {/* Optional: If you want a GDG-style blue accent line instead of Teal:
        <div className="h-1 w-16 bg-blue-600 rounded mt-2" /> 
      */}
    </header>
  );
}