"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, GraduationCap } from "lucide-react";
interface Program {
  title: string;
  description: string;
  duration: string;
  type: string;
  colorScheme: string;
}
interface Programs {
  [key: string]: Program[];
}
const NewAcademicPrograms = () => {
  const [activeTab, setActiveTab] = useState("Bachelors");

  const programs: Programs = {
    Bachelors: [
      {
        title: "Computer Science",
        description:
          "Comprehensive program covering software development, algorithms, and emerging technologies.",
        duration: "4 years",
        type: "Bachelor",
        colorScheme: "hover:bg-cyan-500 hover:shadow-cyan-500/100",
      },
      {
        title: "Information Technology",
        description:
          "Focus on IT systems, networking, database management, and cybersecurity.",
        duration: "4 years",
        type: "Bachelor",
        colorScheme: "hover:bg-pink-500 hover:shadow-pink-500/100",
      },
      {
        title: "Electronics And Telecommunication",
        description:
          "Advanced study in electronic systems, communication networks, and signal processing.",
        duration: "4 years",
        type: "Bachelor",
        colorScheme: "hover:bg-purple-400 hover:shadow-purple-500/100",
      },
      {
        title: "Electronics And Instrumentation",
        description:
          "Specialized program in measurement systems, control engineering, and automation.",
        duration: "4 years",
        type: "Bachelor",
        colorScheme: "hover:bg-yellow-500 hover:shadow-yellow-500/100",
      },
      {
        title: "Civil Engineering",
        description:
          "Comprehensive civil engineering with focus on infrastructure and construction.",
        duration: "4 years",
        type: "Bachelor",
        colorScheme: "hover:bg-blue-500 hover:shadow-blue-500/100",
      },
      {
        title: "Mechanical Engineering",
        description:
          "Traditional mechanical engineering with modern manufacturing techniques.",
        duration: "4 years",
        type: "Bachelor",
        colorScheme: "hover:bg-green-500 hover:shadow-green-500/100",
      },
    ],
    Masters: [
      {
        title: "M.Tech Computer Science",
        description:
          "Advanced research in AI, machine learning, and software engineering.",
        duration: "2 years",
        type: "Master",
        colorScheme: "hover:bg-cyan-500 hover:shadow-cyan-500/100",
      },
      {
        title: "M.Tech Electronics",
        description:
          "Specialized master's program in advanced electronics and VLSI design.",
        duration: "2 years",
        type: "Master",
        colorScheme: "hover:bg-red-500 hover:shadow-red-500/100",
      },
      {
        title: "MBA Technology Management",
        description:
          "Management program focused on technology sector leadership.",
        duration: "2 years",
        type: "Master",
        colorScheme: "hover:bg-cyan-500 hover:shadow-cyan-500/100",
      },
    ],
    PhD: [
      {
        title: "PhD Computer Science",
        description:
          "Research doctorate in cutting-edge computer science domains.",
        duration: "3-5 years",
        type: "Doctorate",
        colorScheme: "hover:bg-cyan-500 hover:shadow-cyan-500/100",
      },
      {
        title: "PhD Electronics Engineering",
        description:
          "Advanced research in electronics and communication systems.",
        duration: "3-5 years",
        type: "Doctorate",
        colorScheme: "hover:bg-cyan-500 hover:shadow-cyan-500/100",
      },
      {
        title: "PhD Mechanical Engineering",
        description:
          "Research program in advanced mechanical and manufacturing systems.",
        duration: "3-5 years",
        type: "Doctorate",
        colorScheme: "hover:bg-cyan-500 hover:shadow-cyan-500/100",
      },
    ],
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-100 mb-4">
            Academic Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive engineering programs designed to meet industry demands
            and foster innovation
          </p>
        </div>

        {/* Program Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800 rounded-lg p-1 shadow-lg">
            {Object.keys(programs).map((tab) => (
              <Button
                key={tab}
                variant={activeTab === tab ? "default" : "ghost"}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 mx-1  font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-blue-600 text-black shadow-md hover:text-white"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                {tab}
              </Button>
            ))}
          </div>
        </div>

        {/* Program Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs[activeTab].map((program: Program, index: number) => (
            <Card
              key={index}
              className={`group hover:shadow-xl bg-gray-800 transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 ${program.colorScheme} `}
            >
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-3">
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-800 hover:bg-blue-200"
                  >
                    {program.type}
                  </Badge>
                  <div className="text-sm text-gray-500 font-medium">
                    {program.duration}
                  </div>
                </div>
                <CardTitle className="text-xl text-white group-hover:text-blue-600 transition-colors">
                  {program.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-100 mb-6 leading-relaxed">
                  {program.description}
                </CardDescription>
                <Button
                  variant="outline"
                  className="w-full bg-gray-900 text-white group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            size="lg"
            className="bg-blue-600 text-black hover:bg-blue-700 px-8 py-3"
          >
            View All Programs
            <GraduationCap className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewAcademicPrograms;
