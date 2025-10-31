"use client"
import Image from 'next/image'
import { facultyData } from '@/constants/facultyData/data'
import { useSearchParams } from "next/navigation";
import Link from "next/link";

interface FacultyMember {
        branch: string;
        image: string;
        name: string;
        designation: string;
        EmployeeID?: string;
        qualifications: string[];
        phone?: string;
        email?: string;
        tabs?: any;
        icon?: string;
        qualification?: string | null;
}

const FacultyData = (): JSX.Element => {
        const searchParams = useSearchParams();
        const branchParam = searchParams.get("branch");
        const nameParam = searchParams.get("name");

        if (nameParam) {
                // Show individual faculty details
                const facultyName = decodeURIComponent(nameParam);
                const faculty = facultyData.find((data: FacultyMember) => data.name.toLowerCase() === facultyName.toLowerCase());

                if (!faculty) {
                        return (
                                <div className="text-center py-16 text-gray-500">
                                        <p className="text-lg">Faculty member not found</p>
                                </div>
                        );
                }

                return (
                        <div className="max-w-6xl mx-auto bg-white p-6 mt-20 mb-20">
                                {/* Header */}
                                <div className="text-[#686868] flex flex-col lg:flex-row items-center gap-6 font-medium mb-8">
                                        <div className="flex-1">
                                                <h1 className="text-4xl font-bold text-[#06779B] mb-4">{faculty.name}</h1>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                                        <p><span className="font-bold text-black">Designation:</span> {faculty.designation}</p>
                                                        <p><span className="text-black font-bold">Employee ID:</span> {faculty.EmployeeID || "N/A"}</p>
                                                        <p><span className="text-black font-bold">Phone:</span> 
                                                                {faculty.phone ? (
                                                                        <a 
                                                                                href={`tel:+91${faculty.phone.replace(/\s+/g, '')}`}
                                                                                className="text-[#06779B] hover:underline"
                                                                        >
                                                                                +91 {faculty.phone.replace(/\s+/g, '').slice(0, 5)} {faculty.phone.replace(/\s+/g, '').slice(5)}
                                                                        </a>
                                                                ) : "N/A"}
                                                        </p>
                                                        <p><span className="text-black font-bold">Email:</span> {faculty.email || "N/A"}</p>
                                                        <p><span className="text-black font-bold">Icon:</span> {(faculty as any).icon || "Detailed Profile"}</p>
                                                        <p><span className="text-black font-bold">Qualification:</span> {(faculty as any).qualification || null}</p>
                                                </div>
                                        </div>
                                        <div>
                                                <Image
                                                        src={faculty.image}
                                                        alt={faculty.name}
                                                        width={200}
                                                        height={200}
                                                        unoptimized={true}
                                                        className="rounded-md object-cover border border-gray-300"
                                                />
                                        </div>
                                </div>

                                {/* About Faculty */}
                                {faculty.description && (
                                        <div className="mb-8">
                                                <h2 className="text-2xl font-bold text-[#06779B] mb-4 border-b-2 border-[#06779B] pb-2">About Faculty</h2>
                                                <p className="text-gray-700 leading-relaxed">{faculty.description}</p>
                                        </div>
                                )}

                                {/* Education and Qualification */}
                                <div className="mb-8">
                                        <h2 className="text-2xl font-bold text-[#06779B] mb-4 border-b-2 border-[#06779B] pb-2">Education and Qualification</h2>
                                        <div className="overflow-x-auto">
                                                <table className="w-full border-collapse border border-gray-300">
                                                        <thead>
                                                                <tr className="bg-[#06779B] text-white">
                                                                        <th className="border border-gray-300 px-4 py-2 text-left">S. No.</th>
                                                                        <th className="border border-gray-300 px-4 py-2 text-left">Degree</th>
                                                                        <th className="border border-gray-300 px-4 py-2 text-left">Specialization</th>
                                                                        <th className="border border-gray-300 px-4 py-2 text-left">Year</th>
                                                                        <th className="border border-gray-300 px-4 py-2 text-left">University/Board</th>
                                                                </tr>
                                                        </thead>
                                                        <tbody>
                                                                {faculty.qualifications.map((qual: string, index: number) => {
                                                                        // Parse qualification string: "Degree (Specialization): University, Year"
                                                                        const parts = qual.split(':');
                                                                        const degreePart = parts[0]?.trim() || '';
                                                                        const universityYearPart = parts[1]?.trim() || '';
                                                                        
                                                                        // Extract degree and specialization
                                                                        const degreeMatch = degreePart.match(/^(.+?)\s*\((.+)\)$/);
                                                                        const degree = degreeMatch ? degreeMatch[1] : degreePart;
                                                                        const specialization = degreeMatch ? degreeMatch[2] : '';
                                                                        
                                                                        // Extract university and year
                                                                        const universityYearMatch = universityYearPart.match(/^(.+?),\s*(\d{4})$/);
                                                                        const university = universityYearMatch ? universityYearMatch[1] : universityYearPart;
                                                                        const year = universityYearMatch ? universityYearMatch[2] : '';
                                                                        
                                                                        return (
                                                                                <tr key={index} className="hover:bg-gray-50">
                                                                                        <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                                                                                        <td className="border border-gray-300 px-4 py-2">{degree}</td>
                                                                                        <td className="border border-gray-300 px-4 py-2">{specialization}</td>
                                                                                        <td className="border border-gray-300 px-4 py-2">{year}</td>
                                                                                        <td className="border border-gray-300 px-4 py-2">{university}</td>
                                                                                </tr>
                                                                        );
                                                                })}
                                                        </tbody>
                                                </table>
                                        </div>
                                </div>

                                {/* Work Experience */}
                                {faculty.tabs?.find(tab => tab.key === 'work') && (
                                        <div className="mb-8">
                                                <h2 className="text-2xl font-bold text-[#06779B] mb-4 border-b-2 border-[#06779B] pb-2">Work Experience</h2>
                                                <div className="overflow-x-auto">
                                                        <table className="w-full border-collapse border border-gray-300">
                                                                <thead>
                                                                        <tr className="bg-[#06779B] text-white">
                                                                                <th className="border border-gray-300 px-4 py-2 text-left">S. No.</th>
                                                                                <th className="border border-gray-300 px-4 py-2 text-left">Designation</th>
                                                                                <th className="border border-gray-300 px-4 py-2 text-left">Department</th>
                                                                                <th className="border border-gray-300 px-4 py-2 text-left">Employer Name</th>
                                                                                <th className="border border-gray-300 px-4 py-2 text-left">Duration of Employment</th>
                                                                        </tr>
                                                                </thead>
                                                                <tbody>
                                                                        {faculty.tabs.find(tab => tab.key === 'work')?.content.map((item: any, index: number) => {
                                                                                // Handle both string (legacy) and object (new) formats
                                                                                const isString = typeof item === 'string';
                                                                                return (
                                                                                        <tr key={index} className="hover:bg-gray-50">
                                                                                                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                                                                                                <td className="border border-gray-300 px-4 py-2">{isString ? item : item.designation || 'N/A'}</td>
                                                                                                <td className="border border-gray-300 px-4 py-2">{isString ? 'N/A' : item.department || 'N/A'}</td>
                                                                                                <td className="border border-gray-300 px-4 py-2">{isString ? 'N/A' : item.employerName || 'N/A'}</td>
                                                                                                <td className="border border-gray-300 px-4 py-2">{isString ? 'N/A' : item.duration || 'N/A'}</td>
                                                                                        </tr>
                                                                                );
                                                                        })}
                                                                </tbody>
                                                        </table>
                                                </div>
                                        </div>
                                )}

                                {/* Research Details */}
                                {faculty.tabs?.find(tab => tab.key === 'research') && (
                                        <div className="mb-8">
                                                <h2 className="text-2xl font-bold text-[#06779B] mb-4 border-b-2 border-[#06779B] pb-2">Research Details</h2>
                                                <div className="overflow-x-auto">
                                                        <table className="w-full border-collapse border border-gray-300">
                                                                <thead>
                                                                        <tr className="bg-[#06779B] text-white">
                                                                                <th className="border border-gray-300 px-4 py-2 text-left">S.No.</th>
                                                                                <th className="border border-gray-300 px-4 py-2 text-left">Research Type</th>
                                                                                <th className="border border-gray-300 px-4 py-2 text-left">Research Title</th>
                                                                                <th className="border border-gray-300 px-4 py-2 text-left">Publication Year</th>
                                                                        </tr>
                                                                </thead>
                                                                <tbody>
                                                                        {faculty.tabs.find(tab => tab.key === 'research')?.content.map((item: any, index: number) => {
                                                                                // Handle both string (legacy) and object (new) formats
                                                                                const isString = typeof item === 'string';
                                                                                return (
                                                                                        <tr key={index} className="hover:bg-gray-50">
                                                                                                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                                                                                                <td className="border border-gray-300 px-4 py-2">{isString ? 'Research Project' : item.researchType || 'Research Project'}</td>
                                                                                                <td className="border border-gray-300 px-4 py-2">{isString ? item : item.researchTitle || 'N/A'}</td>
                                                                                                <td className="border border-gray-300 px-4 py-2">{isString ? 'N/A' : item.publicationYear || 'N/A'}</td>
                                                                                        </tr>
                                                                                );
                                                                        })}
                                                                </tbody>
                                                        </table>
                                                </div>
                                        </div>
                                )}

                                {/* PhD Supervision */}
                                {faculty.tabs?.find(tab => tab.key === 'phd') && (
                                        <div className="mb-8">
                                                <h2 className="text-2xl font-bold text-[#06779B] mb-4 border-b-2 border-[#06779B] pb-2">PhD Supervision</h2>
                                                <div className="overflow-x-auto">
                                                        <table className="w-full border-collapse border border-gray-300">
                                                                <thead>
                                                                        <tr className="bg-[#06779B] text-white">
                                                                                <th className="border border-gray-300 px-4 py-2 text-left">S. No.</th>
                                                                                <th className="border border-gray-300 px-4 py-2 text-left">Student Name</th>
                                                                                <th className="border border-gray-300 px-4 py-2 text-left">Thesis Title</th>
                                                                                <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
                                                                                <th className="border border-gray-300 px-4 py-2 text-left">Year</th>
                                                                        </tr>
                                                                </thead>
                                                                <tbody>
                                                                        {faculty.tabs.find(tab => tab.key === 'phd')?.content.map((item: any, index: number) => {
                                                                                // Handle both string (legacy) and object (new) formats
                                                                                const isString = typeof item === 'string';
                                                                                return (
                                                                                        <tr key={index} className="hover:bg-gray-50">
                                                                                                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                                                                                                <td className="border border-gray-300 px-4 py-2">{isString ? 'N/A' : item.studentName || 'N/A'}</td>
                                                                                                <td className="border border-gray-300 px-4 py-2">{isString ? item : item.thesisTitle || 'N/A'}</td>
                                                                                                <td className="border border-gray-300 px-4 py-2">{isString ? 'Ongoing' : item.status || 'Ongoing'}</td>
                                                                                                <td className="border border-gray-300 px-4 py-2">{isString ? 'N/A' : item.year || 'N/A'}</td>
                                                                                        </tr>
                                                                                );
                                                                        })}
                                                                </tbody>
                                                        </table>
                                                </div>
                                        </div>
                                )}

                                {/* Publications */}
                                {faculty.tabs?.find(tab => tab.label.toLowerCase().includes('publication')) && (
                                        <div className="mb-8">
                                                <h2 className="text-2xl font-bold text-[#06779B] mb-4 border-b-2 border-[#06779B] pb-2">Publications</h2>
                                                <div className="overflow-x-auto">
                                                        <table className="w-full border-collapse border border-gray-300">
                                                                <thead>
                                                                        <tr className="bg-[#06779B] text-white">
                                                                                <th className="border border-gray-300 px-4 py-2 text-left">S.No.</th>
                                                                                <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
                                                                                <th className="border border-gray-300 px-4 py-2 text-left">Title</th>
                                                                                <th className="border border-gray-300 px-4 py-2 text-left">Year</th>
                                                                        </tr>
                                                                </thead>
                                                                <tbody>
                                                                        {faculty.tabs.find(tab => tab.label.toLowerCase().includes('publication'))?.content.map((item: any, index: number) => {
                                                                                // Handle both string (legacy) and object (new) formats
                                                                                const isString = typeof item === 'string';
                                                                                return (
                                                                                        <tr key={index} className="hover:bg-gray-50">
                                                                                                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                                                                                                <td className="border border-gray-300 px-4 py-2">{isString ? 'Journal/Conference' : item.type || 'Journal/Conference'}</td>
                                                                                                <td className="border border-gray-300 px-4 py-2">{isString ? item : item.title || 'N/A'}</td>
                                                                                                <td className="border border-gray-300 px-4 py-2">{isString ? 'N/A' : item.year || 'N/A'}</td>
                                                                                        </tr>
                                                                                );
                                                                        })}
                                                                </tbody>
                                                        </table>
                                                </div>
                                        </div>
                                )}

                                {/* Projects */}
                                {faculty.tabs?.find(tab => tab.label.toLowerCase().includes('project')) && (
                                        <div className="mb-8">
                                                <h2 className="text-2xl font-bold text-[#06779B] mb-4 border-b-2 border-[#06779B] pb-2">Projects</h2>
                                                <ul className="list-disc pl-6 space-y-2">
                                                        {faculty.tabs.find(tab => tab.label.toLowerCase().includes('project'))?.content.map((item: any, index: number) => (
                                                                <li key={index} className="text-gray-700">{typeof item === 'string' ? item : item.title || item}</li>
                                                        ))}
                                                </ul>
                                        </div>
                                )}

                                {/* Testing & Consultancy */}
                                {faculty.tabs?.find(tab => tab.label.toLowerCase().includes('testing') || tab.label.toLowerCase().includes('consultancy')) && (
                                        <div className="mb-8">
                                                <h2 className="text-2xl font-bold text-[#06779B] mb-4 border-b-2 border-[#06779B] pb-2">Testing & Consultancy</h2>
                                                <ul className="list-disc pl-6 space-y-2">
                                                        {faculty.tabs.find(tab => tab.label.toLowerCase().includes('testing') || tab.label.toLowerCase().includes('consultancy'))?.content.map((item: any, index: number) => (
                                                                <li key={index} className="text-gray-700">{typeof item === 'string' ? item : item.title || item}</li>
                                                        ))}
                                                </ul>
                                        </div>
                                )}

                                {/* Other Details */}
                                {faculty.tabs?.filter(tab => 
                                        !['work', 'research', 'phd'].includes(tab.key) && 
                                        !tab.label.toLowerCase().includes('publication') &&
                                        !tab.label.toLowerCase().includes('project') &&
                                        !tab.label.toLowerCase().includes('testing') &&
                                        !tab.label.toLowerCase().includes('consultancy')
                                ).map((tab, index) => (
                                        <div key={index} className="mb-8">
                                                <h2 className="text-2xl font-bold text-[#06779B] mb-4 border-b-2 border-[#06779B] pb-2">{tab.label}</h2>
                                                <ul className="list-disc pl-6 space-y-2">
                                                        {tab.content.map((item: any, itemIndex: number) => (
                                                                <li key={itemIndex} className="text-gray-700">{typeof item === 'string' ? item : item.title || item}</li>
                                                        ))}
                                                </ul>
                                        </div>
                                ))}
                        </div>
                );
        }

        // Show faculty list for branch
        const branch = branchParam ? decodeURIComponent(branchParam) : null;

        // Filter faculty by branch
        const filteredFaculty = branch 
                ? facultyData.filter((data: FacultyMember) => data.branch === branch)
                : [];

        return (
                <>
                        <div className="w-full">
                                <h1 className="text-4xl font-bold text-center text-[#06779B] mt-10 mb-10">{branch || 'Faculty'}</h1>

                                {filteredFaculty.length === 0 ? (
                                        <div className="text-center py-16 text-gray-500">
                                                <p className="text-lg">No faculty members found for {branch || 'this department'}</p>
                                        </div>
                                ) : (
                                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 m-20 mt-10 mb-10 p-4'>
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
                                                                                        img.src = '/placeholder-faculty.jpg';
                                                                                }}
                                                                        />
                                                                </div>

                                                                {/* Content Container */}
                                                                <div className="p-4 pl-6 pr-6">
                                                                        <h2 className="text-xl font-bold text-gray-800 mb-1">{data.name}</h2>
                                                                        <p className="font-semibold text-sm text-gray-600 mb-2">{data.designation}</p>
                                                                        
                                                                        {data.email && (
                                                                                <p className="text-xs text-[#06779B] font-semibold mb-3 truncate">
                                                                                        {data.email}
                                                                                </p>
                                                                        )}

                                                                        <Link
                                                                                href={`/facultyPage/facultyData?name=${encodeURIComponent(data.name)}`}
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
                </>
        );
};

export default FacultyData;
