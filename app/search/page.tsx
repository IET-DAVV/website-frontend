"use client";

import dynamic from "next/dynamic";

const SearchPageClient = dynamic(() => import("./SearchPageClient"), {
  ssr: false,
});

export default function SearchPage() {
  return <SearchPageClient />;
}
