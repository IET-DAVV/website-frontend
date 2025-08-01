"use client"
import Image from 'next/image'
import { facultyData } from '@/constants/facultyData/data'
import FacultyTabs from "./facultyTabs"
import { useSearchParams } from "next/navigation";

const facultydata = () => {
    const searchParams = useSearchParams();
    const params = searchParams.get("name")
    return (
        <>
            <div>
                {facultyData.map((data, index) => (
                    data.name == `${params}` && (

                        <div key={index}>
                            <div className=" m-80 bg-white p-6 mt-20 mb-20">
                                {/* Header */}
                                <div className="text-[#686868] flex flex-col text-lg md:flex-row items-center gap-6 font-medium">
                                    <div className="flex-1">
                                        <h1 className="text-3xl font-bold text-[#06779B]">{data.name}</h1>
                                        <p className="text-sm text-[#686868]">{data.position}</p>
                                        <p className=" mt-4 text-[#686868]"><span className="font-bold text-black">Professor:</span> {data.designation}</p>
                                        <p><span className="text-black font-bold">Email:</span> {data.email || " "}</p>
                                        <p><span className="text-black font-bold">Phone:</span> {data.phone || " "}</p>
                                        <p><span className="text-black font-bold">DOB:</span> {data.dob || " "}</p>
                                    </div>
                                    <div>
                                        <Image
                                            src={data.image}
                                            alt={data.name}
                                            width={200}
                                            height={200}
                                            className="rounded-md object-cover border border-gray-300"
                                        />
                                    </div>
                                </div>

                                {/* Qualifications */}
                                <div className="mt-6">
                                    <h2 className="text-lg mb-2 text-black font-bold">Educational Qualification:</h2>
                                    <ul className="list-disc pl-6 text-[#686868]  font-medium">
                                        {data.qualifications.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                {data.tabs && <FacultyTabs tabs={data.tabs} />}
                            </div>
                        </div>
                    )
                ))
                }
            </div>
        </>
    )
}

export default facultydata
