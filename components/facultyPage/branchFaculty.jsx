"use client";
import React from 'react'
import Title from '../common/academics/Title'
import Image from "next/image";
import Link from "next/link";
import { facultyData } from "@/constants/facultyData/data"
import { useSearchParams } from "next/navigation";

const branchFaculty = () => {
    const searchParams = useSearchParams();
    const branch = searchParams.get("branch");
    return (
        <div className=''>
            <Title title={branch} className=" text-7xl leading-tight font-newyork" />

            <div className='grid grid-cols-1 content-center sm:grid-cols-2 md:grid-cols-3 m-40 mt-10 mb-10 gap-8 p-4'>
                {facultyData.map((data, index) => (
                    data.branch == `${branch}` && (
                        <div key={index} className="max-w-[350px] bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                            <div className="relative h-48 w-[90%] border border-[#6d6d6d] flex justify-center align-middle m-4">
                                <Image
                                    src={data.image}
                                    alt="Profile"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>

                            <div className="p-2 pl-6 pr-6">
                                <h2 className="text-xl font-bold text-gray-800">{data.name} </h2>
                                <p className="font-semibold text-sm text-gray-600">{data.postion}</p>
                                <p className="mt-2 text-sm text-gray-700">
                                    Passionate educator with 10+ years in teaching AI and software development.
                                </p>

                                <p className="font-semibold mt-3 text-sm text-[#06779B]">johndoe@example.com</p>

                                <Link
                                    href ={`/facultyPage/facultyData?name=${encodeURIComponent(data.name)}`}
                                className="inline-block mt-4 w-full text-center px-4 py-2 bg-[#06779B] text-white rounded-md hover:bg-[#1a6a82] transition mb-3"
                                >
                                View More
                            </Link>
                        </div>
                        </div>
                    )))}
        </div>
        </div >
    )
}

export default branchFaculty
