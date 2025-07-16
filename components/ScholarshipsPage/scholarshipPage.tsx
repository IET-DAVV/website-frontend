"use client";
import { scholarshipData } from "@/constants/scholarshipPage/data";
import "@/styles/fonts.css";
import Title from "../common/academics/Title";

const ScholarshipPage = () => {
    return (
        <div className="pt-10">
            <Title title="Scholarships 2023-24" className="text-7xl leading-tight font-newyork" />

            <div className="h-[1px] w-[90%] mx-auto border border-[#cecece]"></div>
            {scholarshipData.map((section, index) => (
                <div key={index} className=" mb-16 mt-10 font-manrope ">
                    <div className="border divide-y divide-[#959595] max-w-5xl w-full mx-auto border-[#959595] ">
                        {section.items.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex justify-between px-10 py-5 relative after:absolute after:w-[1px] after:bg-[#959595] after:top-0 after:right-[23%] after:h-full"
                            >
                                <span className="text-lg font-medium">
                                    {item.label}
                                </span>
                                <a
                                    href={item.file}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#06779B] text-white px-10 py-2 rounded-[6px] inline-flex items-center gap-1 text-sm"
                                >
                                    Click Here
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ScholarshipPage;
