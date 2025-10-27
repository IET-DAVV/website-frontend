"use client";
//import React from 'react';
import React, { useState, useEffect } from "react";
// Define the structure for sidebar navigation items
interface NavItem {
  name: string;
  isRecent?: boolean;
}

interface LabData {
  id: string; // Unique ID for state tracking
  name: string; // Used for sidebar link text
  imageTitle: string; // Title displayed on the image (e.g., General Computing Lab II)
  mainHeading: string; // Title above the paragraph (e.g., GENERAL COMPUTING LAB II)
  imageUrl: string; // Unique image path
  isRecent?: boolean;
}

const ResearchLabPage: React.FC = () => {
  // --- Data Definitions ---

  
  
const sidebarItems: LabData[] = [
    { id: 'vlsi', name: 'VLSI LAB', imageTitle: 'VLSI Lab', mainHeading: 'VLSI LAB', imageUrl: '/images/vlsi-lab.jpg' },
    { id: 'computing', name: 'COMPUTER LAB', imageTitle: 'General Computing Lab II', mainHeading: 'GENERAL COMPUTING LAB II', imageUrl: 'https://thvnext.bing.com/th/id/OIP.vHFXtTZKazdxMLZbXLsCdgHaEv?w=245&h=180&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3' }, // Existing content
    { id: 'auditorium', name: 'AUDITORIUM', imageTitle: 'Institute Auditorium', mainHeading: 'INSTITUTE AUDITORIUM', imageUrl: '/images/institute-auditorium.jpg' },
    { id: 'electronics', name: 'ELECTRONICS LAB', imageTitle: 'Electronics Lab', mainHeading: 'ELECTRONICS LAB', imageUrl: '/images/electronics-lab.jpg' },
    { id: 'workshop', name: 'WORKSHOP', imageTitle: 'Mechanical Workshop', mainHeading: 'MECHANICAL WORKSHOP', imageUrl: '/images/mechanical-workshop.jpg' },
    { id: 'aiml', name: 'AIML LAB', imageTitle: 'AI-ML Research Center', mainHeading: 'AI-ML RESEARCH CENTER', imageUrl: '/images/aiml-lab.jpg' },
    { id: 'civil', name: 'Civil (recent)', imageTitle: 'Civil Engineering Lab', mainHeading: 'CIVIL ENGINEERING LAB', imageUrl: '/images/civil-lab.jpg', isRecent: true },
  ];
  

  const loremIpsumText: string = `Lorem ipsum ultricies risus interdum aliquet quam lobortis ex etiam mattis enim non neque dictumst turpis viverra laoreet sit amet duik ipsum egestas et nunc sed aliquet suspendisse nunc amet pellentesque non at lacinia umum consectetur elementum pharetra enim consequat si ided elementum mot pharetra ultricies faucibus ac vitae dictumstturpis viverra laoreet sit amet duik ipsum egestas et nunc sed aliquet suspendisse nunc amet pellentesque non at lacinia umum consectetur elementum pharetra enim consequat si ided elementum mot pharetra ultricies faucibus ac vitae vulputate posuere turpis feugiat tellus id iud viverras ets grign laoreet. instique tortor risus id aliqui ornare volutpat mattis sagittis et nisi quis suspendisse maecenas vot vulputate posuere turpis feugiat tellus id iud viverras ets grign laoreet. instique tortor risus id aliqui ornare volutpat mattis sagittis et nisi quis suspendisse maecenas vot volutpat porttitor amet velit elit puiuis imperdiet sed velit turpis fea latpa consequat. nunc sed ipsum viverra vulputate enim elementum pharetra tortor leo eget viverra euismod vestibulum pellentesque elit id lacus mattis nunc tincidunt elit. metus vel turpis tincidunt at mattis nunc consectetur elit. metus vel turpis tincidunt at mattis nunc consectetur elit. metus vel turpis tincidunt at metus vel turpis tincidunt at viverra euismod vestibulum pellentesque elit id lacus mattis nunc tincidunt elit. metus vel turpis tincidunt at mattis nunc consectetur elit. metus vel turpis tincidunt at mattis nunc consectetur elit. metus vel turpis tincidunt at metus vel turpis tincidunt at.`;

  // --- Helper Components (for structure and readability) ---

 const [activeLabId, setActiveLabId] = React.useState<string>('computing');
const activeLab = sidebarItems.find(item => item.id === activeLabId) || sidebarItems[1]; // Default to the second item (Computing Lab)
 const handleSidebarClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setActiveLabId(id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Hero Section: Image and Lab Title with Sidebar */}
        <section className="relative mb-12">
          <div 
            className="h-[450px] bg-cover bg-center shadow-lg relative"
            style={{ backgroundImage: "url({activeLab.imageUrl})" }} // Placeholder image path
          >
            {/* Dark Gradient Overlay for Title Visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            
            {/* Lab Title */}
            <h2 className="absolute top-0 left-0 p-8 bg-gray-200 text-black text-4xl font-light tracking-wide">
              {activeLab.imageTitle}
            </h2>
          </div>
          
          {/* Sidebar Navigation */}
          <aside className="absolute top-5 right-0 w-56 bg-gray-100 shadow-xl border border-gray-300 z-10">
            <ul className="divide-y divide-gray-300">
              {sidebarItems.map((item) => (
                <li key={item.name} className="group">
                  <a 
                    href="#" 
                    onClick={(e) => handleSidebarClick(e, item.id)}
                    className={`
                      block p-4 text-sm uppercase text-gray-700 bg-gray-200 transition duration-150
                      hover:bg-gray-200 hover:text-[#3B7A9E]
                      ${item.isRecent ? 'text-gray-500 lowercase' : ''}
                    `}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </section>

        {/* General Lab Heading (Below the image) */}
        <div className="text-center py-6 mb-8 border-y border-gray-300">
          <h2 className="text-5xl font-newyork text-gray-800 uppercase front-bold tracking-wider">
            {activeLab.mainHeading}
          </h2>
        </div>

        {/* Descriptive Content */}
        <section className="text-gray-700 text-base leading-relaxed">
          <p className="mb-6 text-justify">
            {loremIpsumText.split('. ').slice(0, 2).join('. ') + '.'}
          </p>
          <p className="mb-6 text-justify">
            {loremIpsumText.split('. ').slice(2).join('. ') + '.'}
          </p>
          {/* Add more paragraphs as needed */}
        </section>
      </main>

      
    </div>
  );
};

export default ResearchLabPage;






















































