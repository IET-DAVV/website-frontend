"use client";
import React, { Suspense } from "react";
import Title from "../common/academics/Title";
import Image from "next/image";
import Link from "next/link";
import { facultyData, subject } from "@/constants/facultyData/data";
import { useSearchParams } from "next/navigation";

interface FacultyMember {
  branch: string;
  image: string;
  name: string;
  EmployeeID?: string;
  description?: string;
  email?: string;
  phone?: string;
  designation: string;
  qualifications?: string[];
  tabs?: { key: string; label: string; content: any[] }[];
}

const BranchFacultyContent: React.FC = () => {
  const searchParams = useSearchParams();
  const branchParam: string | null = searchParams.get("branch");
  const branch = branchParam ? decodeURIComponent(branchParam) : null;

  // Find the correct subject from the data using a case-insensitive comparison
  const subjectData = branch
    ? subject.find((s) => s.subject.toLowerCase() === branch.toLowerCase())
    : undefined;

  // Use the exact name from the data for filtering, or the URL branch as a fallback
  const displayBranch = subjectData?.subject || branch;

  // Filter faculty by the exact branch name found
  const filteredFaculty =
    displayBranch && Array.isArray(facultyData)
      ? facultyData.filter(
          (data: FacultyMember) => data.branch === displayBranch
        )
      : [];

  return (
    <div className="w-full">
      <Title
        title={displayBranch || "Faculty"}
        className="text-7xl leading-tight font-newyork"
      />

      {filteredFaculty.length === 0 ? (
        <div className="text-center py-16 text-gray-500">
          <p className="text-lg">
            No faculty members found for {displayBranch || "this department"}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 m-20 mt-10 mb-10 p-4">
          {filteredFaculty.map((data: FacultyMember, index: number) => (
            <div
              key={index}
              className="max-w-[350px] bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image Container */}
              <div className="relative h-48 w-full bg-gray-100 flex items-center justify-center overflow-hidden">
                <Image
                  src={data.image}
                  alt={data.name}
                  width={300}
                  height={200}
                  unoptimized={true}
                  className="object-cover w-full h-full"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                  }}
                />
              </div>

              {/* Content Container */}
              <div className="p-4 pl-6 pr-6">
                <h2 className="text-xl font-bold text-gray-800 mb-1">
                  {data.name}
                </h2>
                <p className="font-semibold text-sm text-gray-600 mb-2">
                  {data.designation}
                </p>

                {data.description && (
                  <p className="text-sm text-gray-700 mb-3 line-clamp-2">
                    {data.description}
                  </p>
                )}

                {data.email && (
                  <p className="text-xs text-[#06779B] font-semibold mb-3 truncate">
                    {data.email}
                  </p>
                )}

                <Link
                  href={`/facultyPage/facultyData?name=${encodeURIComponent(
                    data.name
                  )}`}
                  className="inline-block w-full text-center px-4 py-2 bg-[#06779B] text-white rounded-md hover:bg-[#056a8a] transition duration-200 font-medium"
                >
                  View Profile
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const BranchFaculty: React.FC = () => {
  return (
    <Suspense fallback={<div className="text-center py-16">Loading...</div>}>
      <BranchFacultyContent />
    </Suspense>
  );
};

export default BranchFaculty;
