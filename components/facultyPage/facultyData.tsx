"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { User, BadgeCheck } from "lucide-react";
import {
  generateFacultyPDF,
  getCachedPDF,
  setCachedPDF,
} from "@/utils/pdfGenerator";

/* ===============================
   CONFIG
================================ */
const API_BASE =
  process.env.NEXT_PUBLIC_API_URL || "http://117.239.195.147:1337";

const normalize = (val?: string | null) =>
  val?.trim().toLowerCase() || "";

/* ===============================
   API TYPE (STRAPI RAW)
================================ */
interface FacultyApiItem {
  id: number;
  attributes: {
    Name: string;
    Designation: string;
    Department: string;

    Research_area?: string;
    about_faculty_Brief_Profile_description?: string;

    Offical_Mail_Id?: string;
    Highest_Qualification?: string;
    Joined_In?: number;

    ADMIN_or_HOD?: boolean;

    Resume?: {
      data?: {
        attributes?: {
          url: string;
          name: string;
        };
      };
    };

    Formal_photo?: {
      data?: {
        attributes?: {
          url: string;
          formats?: {
            thumbnail?: { url: string };
            small?: { url: string };
            medium?: { url: string };
            large?: { url: string };
          };
        };
      };
    };
  };
}

/* ===============================
   UI MODEL
================================ */
interface FacultyUI {
  id: number;
  name: string;
  designation: string;
  department: string;

  researchArea?: string;
  about?: string;
  email?: string;
  qualification?: string;
  joinedIn?: number;

  isHod?: boolean;

  imageUrl?: string | null;
  resumeUrl?: string | null;
  resumeName?: string | null;
}

/* ===============================
   ADAPTER (API → UI)
================================ */
const mapFacultyApiToUI = (item: FacultyApiItem): FacultyUI => {
  const a = item.attributes;

  const photo =
    a.Formal_photo?.data?.attributes?.formats?.medium?.url ||
    a.Formal_photo?.data?.attributes?.url;

  return {
    id: item.id,
    name: a.Name,
    designation: a.Designation,
    department: a.Department,

    researchArea: a.Research_area,
    about: a.about_faculty_Brief_Profile_description,
    email: a.Offical_Mail_Id,
    qualification: a.Highest_Qualification,
    joinedIn: a.Joined_In,

    isHod: a.ADMIN_or_HOD || false,

    imageUrl: photo ? `${API_BASE}${photo}` : null,

    resumeUrl: a.Resume?.data?.attributes?.url
      ? `${API_BASE}${a.Resume.data.attributes.url}`
      : null,

    resumeName: a.Resume?.data?.attributes?.name || null,
  };
};

/* ===============================
   COMPONENT
================================ */
const FacultyData = (): JSX.Element => {
  const searchParams = useSearchParams();
  const branchParam = searchParams.get("branch");
  const nameParam = searchParams.get("name");

  const [facultyList, setFacultyList] = useState<FacultyUI[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pdfLoading, setPdfLoading] = useState<Record<string, boolean>>({});

  /* ===============================
     FETCH DATA
  ================================ */
  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const res = await fetch(
          `${API_BASE}/api/faculty-datas?populate=*`
        );

        if (!res.ok) throw new Error("API failed");

        const json = await res.json();

        const mapped: FacultyUI[] = (json.data || []).map(
          (item: FacultyApiItem) => mapFacultyApiToUI(item)
        );

        setFacultyList(mapped);
      } catch (err) {
        console.error(err);
        setError("Failed to load faculty data");
      } finally {
        setLoading(false);
      }
    };

    fetchFaculty();
  }, []);

  /* ===============================
     PDF HANDLER
  ================================ */
  const handleProfileClick = async (faculty: FacultyUI) => {
    const key = `faculty-${faculty.id}`;
    setPdfLoading((p) => ({ ...p, [key]: true }));

    try {
      let pdfBlob = getCachedPDF(key);

      if (!pdfBlob) {
        pdfBlob = await generateFacultyPDF({
          name: faculty.name,
          designation: faculty.designation,
          department: faculty.department,
          email: faculty.email,
          qualification: faculty.qualification,
          about: faculty.about,
          imageUrl: faculty.imageUrl,
        } as any);

        setCachedPDF(key, pdfBlob);
      }

      const url = URL.createObjectURL(pdfBlob);
      window.open(url, "_blank");
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    } finally {
      setPdfLoading((p) => ({ ...p, [key]: false }));
    }
  };

  /* ===============================
     STATES
  ================================ */
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-12 w-12 border-b-2 border-[#06779B]" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20 text-red-500">
        {error}
      </div>
    );
  }

  /* ===============================
     SINGLE FACULTY VIEW
  ================================ */
  if (nameParam) {
    const facultyName = decodeURIComponent(nameParam).toLowerCase();

    const faculty = facultyList.find(
      (f) => normalize(f.name) === facultyName
    );

    if (!faculty) {
      return <div className="text-center py-20">Faculty not found</div>;
    }

    return (
      <div className="max-w-6xl mx-auto mt-20 mb-20 p-6 bg-white">
        <div className="flex gap-6 items-start">
          <Image
            src={faculty.imageUrl || "/placeholder-faculty.jpg"}
            alt={faculty.name}
            width={220}
            height={280}
            className="rounded border object-cover"
            unoptimized
          />

          <div className="flex-1">
            <h1 className="text-3xl font-bold text-[#06779B] flex items-center gap-2">
              {faculty.name}
              {faculty.isHod && (
                <span className="flex items-center gap-1 text-sm bg-green-100 text-green-700 px-2 py-1 rounded">
                  <BadgeCheck size={14} /> HOD / ADMIN
                </span>
              )}
            </h1>

            <p className="mt-2">{faculty.designation}</p>
            <p>{faculty.department}</p>

            <p className="mt-2">
              <strong>Email:</strong> {faculty.email || "N/A"}
            </p>

            <p>
              <strong>Qualification:</strong>{" "}
              {faculty.qualification || "N/A"}
            </p>

            {faculty.resumeUrl && (
              <p className="mt-2">
                <strong>Resume:</strong>{" "}
                <a
                  href={faculty.resumeUrl}
                  target="_blank"
                  className="text-[#06779B] underline"
                >
                  Download CV
                </a>
              </p>
            )}

            <button
              onClick={() => handleProfileClick(faculty)}
              className="mt-4 flex items-center gap-2 text-[#06779B]"
            >
              <User size={16} />
              {pdfLoading[`faculty-${faculty.id}`]
                ? "Generating PDF..."
                : "Download Profile PDF"}
            </button>
          </div>
        </div>

        {faculty.researchArea && (
          <div className="mt-8">
            <h2 className="text-xl font-bold text-[#06779B]">
              Research Areas
            </h2>
            <p>{faculty.researchArea}</p>
          </div>
        )}

        {faculty.about && (
          <div className="mt-6 whitespace-pre-line text-gray-700">
            {faculty.about}
          </div>
        )}
      </div>
    );
  }

  /* ===============================
     FACULTY LIST VIEW
  ================================ */
  const branchName = branchParam
    ? decodeURIComponent(branchParam)
    : null;

  const filtered = branchName
    ? facultyList.filter(
        (f) =>
          normalize(f.department) === normalize(branchName)
      )
    : facultyList;

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl text-center text-[#06779B] mt-10">
        {branchName || "Faculty"}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-10">
        {filtered.map((faculty) => (
          <div
            key={faculty.id}
            className="bg-white border rounded shadow"
          >
            <Image
              src={faculty.imageUrl || "/placeholder-faculty.jpg"}
              alt={faculty.name}
              width={300}
              height={220}
              className="w-full h-48 object-cover"
              unoptimized
            />

            <div className="p-4">
              <h2 className="font-bold flex items-center gap-2">
                {faculty.name}
                {faculty.isHod && (
                  <BadgeCheck
                    size={16}
                    className="text-green-600"
                  />
                )}
              </h2>

              <p className="text-sm">{faculty.designation}</p>

              <Link
                href={`/facultyPage/facultyData?name=${encodeURIComponent(
                  faculty.name
                )}`}
                className="block mt-3 text-center bg-[#06779B] text-white py-2 rounded"
              >
                View Profile
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacultyData;
