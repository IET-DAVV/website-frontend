"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { UPPER_HEADER_LINKS } from "@/constants/header/data";
import { searchContent } from "@/constants/searchContent";
import Fuse from "fuse.js";

const highlightText = (text: string, query: string) => {
  if (!query) return text;
  const escapedQuery = query.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  const regex = new RegExp("(" + escapedQuery + ")", "gi");
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i} className="bg-yellow-300">
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </>
  );
};

const SearchPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query")?.toLowerCase() || "";

  const combinedContent = [...UPPER_HEADER_LINKS, ...searchContent];

  const fuse = new Fuse(combinedContent, {
    keys: ["name", "title", "content"],
    threshold: 0.4, // Adjust threshold for fuzzy matching sensitivity
  });

  const filteredResults = query ? fuse.search(query).map(result => result.item) : combinedContent;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Search Results for "{query}"</h1>
      {filteredResults.length > 0 ? (
        <ul className="space-y-4">
          {filteredResults.map((item) => (
            <li key={"name" in item ? item.name : item.title}>
              <Link
                href={item.href}
                className="text-blue-600 hover:underline text-lg"
              >
                {"name" in item ? highlightText(item.name, query) : highlightText(item.title, query)}
              </Link>
              {"content" in item && item.content && (
                <p className="text-gray-700">{highlightText(item.content, query)}</p>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchPage;
