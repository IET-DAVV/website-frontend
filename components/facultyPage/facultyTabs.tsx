"use client";
import { useState } from "react";

interface TabItem {
    key: string;
    label: string;
    content: string[];
}

interface FacultyTabsProps {
    tabs: TabItem[];
}

export default function FacultyTabs({ tabs }: FacultyTabsProps): JSX.Element {
    const [activeTab, setActiveTab] = useState<string>("work");
    const activeContent = tabs.find((tab) => tab.key === activeTab);

    return (
        <div className="mt-8">
            {/* Tab buttons */}
            <div className="grid grid-cols-3 md:grid-cols-6 border border-gray-200 text-sm">
                {tabs.map((tab) => (
                    <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key)}
                        className={`p-2 border-r border-gray-200 font-semibold hover:bg-gray-100 ${
                            activeTab === tab.key ? "text-[#06779B] font-extrabold" : "text-black"
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tab content */}
            <div className="mt-4 p-4 border border-t-0 border-gray-200 bg-white">
                <ul className="list-disc pl-6 text-[#686868] space-y-1">
                    {activeContent?.content.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
