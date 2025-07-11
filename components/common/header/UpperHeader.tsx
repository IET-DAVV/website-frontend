import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { UPPER_HEADER_LINKS } from "@/constants/header/data";
import { searchContent } from "@/constants/searchContent";
import Link from "next/link";
import { IoCall, IoMail, IoSearch } from "react-icons/io5";

const UpperHeader = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const router = useRouter();

  const combinedContent = [...UPPER_HEADER_LINKS, ...searchContent];

  interface LinkItem {
    name: string;
    href: string;
  }

  interface ContentItem {
    title: string;
    content: string;
    href: string;
  }

  const filteredSuggestions = combinedContent.filter((item: LinkItem | ContentItem) => {
    const query = searchQuery.toLowerCase();
    if ('name' in item) {
      return item.name.toLowerCase().includes(query);
    } else {
      return (
        item.title.toLowerCase().includes(query) ||
        (item.content && item.content.toLowerCase().includes(query))
      );
    }
  });

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setShowSuggestions(false);
    }
  };

  return (
    <div className="bg-black w-full px-4 py-2 text-white text-xs">
      <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-center">
        {/* Left: Contact Info */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-10 space-y-1 md:space-y-0">
          <a
            href="mailto:webmaster@ietdavv.edu.in"
            className="flex items-center space-x-2 cursor-pointer text-white"
          >
            <IoMail />
            <p className="hover:border-b-2 hover:border-white">webmaster@ietdavv.edu.in</p>
          </a>
          <div className="flex items-center space-x-2 hover:border-b-2 hover:border-white cursor-pointer">
            <IoCall />
            <p>+91 98260 00000</p>
          </div>
        </div>

        {/* Right: Links + Search */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-10 space-y-2 md:space-y-0 mt-2 md:mt-0">
          {/* Top Links */}
          <div className="flex flex-wrap justify-start md:justify-end gap-3">
            {UPPER_HEADER_LINKS.map((link) => (
              <Link
                className="hover:border-b-2 hover:border-white"
                href={link.href}
                key={link.name}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Search Box */}
          <form onSubmit={handleSearchSubmit} className="relative flex items-center bg-white rounded-full space-x-1 py-1 px-3 text-black w-full md:w-auto">
            <IoSearch />
            <input
              type="text"
              placeholder="Search"
              className="outline-none placeholder:text-xs w-full bg-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              autoComplete="off"
            />
            {showSuggestions && filteredSuggestions.length > 0 && (
              <ul className="absolute top-full left-0 mt-1 max-h-48 w-full overflow-auto rounded-md bg-white shadow-lg z-50 text-black">
                {filteredSuggestions.map((suggestion) => (
                  <li
                    key={suggestion.href}
                    className="cursor-pointer px-3 py-2 hover:bg-gray-200"
                    onMouseDown={() => {
                      router.push(suggestion.href);
                      setSearchQuery("");
                      setShowSuggestions(false);
                    }}
                  >
            {'name' in suggestion ? suggestion.name : suggestion.title}
            {'content' in suggestion && suggestion.content && (
              <p className="text-xs text-gray-600">{suggestion.content}</p>
            )}
                  </li>
                ))}
              </ul>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpperHeader;
