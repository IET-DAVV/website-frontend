'use client'; // Added the directive here

import React from 'react';

const StudentInformationForms = () => {
  // 1. State to track the currently active tab (default to 'data')
  const [activeTab, setActiveTab] = React.useState('data'); 

  // --- Data for INFORMATION DATA FORMS (Tab 'data') ---
  const forms = [
    // URL for CAT Achievement Form is now correctly included
    { label: "CAT Achievement Form", subtext: null, url: "https://docs.google.com/forms/d/e/1FAIpQLScj-r3PB3S59MJfhYyaBIZftOKspeKjyC2xDr9tYrcdfXujxg/viewform" },
    { label: "Student Feedback on Curriculum", subtext: null, url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSc-Ji3AkZsSJCv1Vxe37eYLGuafGN8Qhu6W0vvHBEFkfDQZqg/formrestricted" },
    { label: "GATE Achievement Form", subtext: null, url: "https://docs.google.com/forms/d/e/1FAIpQLSeOejYdBnXrvn2W77JfS1e6lJIe0vZYepOrF2E59OSBQWWGiA/formrestricted" },
    { label: "Student Satisfaction Survey Form", subtext: null, url: "https://docs.google.com/forms/d/e/1FAIpQLScO7WJBUa76DSMTYnkt3e5jFP7-vif_ddV3YjqrXuczm1n-ew/viewform?usp=send_form" },
    { label: "GRE Achievement Form", subtext: null, url: "https://docs.google.com/forms/d/e/1FAIpQLSd6_ouO24S1NBneM-33fWV6fcYh6_lma3qX6_Kmll8AFQS99w/viewform" },
    { label: "Apply for Branch/College Transfer", subtext: null, url: "https://docs.google.com/forms/d/e/1FAIpQLScrkttjCn_DhH0L85-gUj2cqNEnzCEzxoBY1oBlIdBBN2isgw/viewform" },
    { label: "Apply for CLC/Provisional Degree", subtext: null, url: "https://docs.google.com/forms/d/1hDIBxpdTIsUq6_PMTwPBnpAGfQb0RLjE4sMdYbjLRVQ/viewform?edit_requested=true" },
    { label: "Student Internship Form", subtext: "(for BE IVyr Students)", url: "https://forms.ietdavv.edu.in/Internship_form_2018.pdf" },
    { label: "College Leaving Certificate form", subtext: null, url: "https://forms.ietdavv.edu.in/CLC_Form.pdf" },
    { label: "Caution Money Form", subtext: null, url: "https://forms.ietdavv.edu.in/caution_money_Form.pdf" },
  ];
  
  const forms1 = [
    // URLs added for consistency
    { label: "Ph.D.Student Information Form", subtext: null, url: "https://forms.gle/8Hs4xwuDY3tTTTXr9" },
    { label: "Ph.D.Degree Information Form", subtext: null, url: "https://forms.gle/XKU8ceQPwmiP1p9M9" },
    { label: "Teachers Attending Professional Development programs", subtext: null, url: "https://forms.gle/pHWK2wjSVD3ipmQe7" },
    { label: "Faculty Conference Details", subtext: null, url: "https://forms.gle/rv62tCahXmdXj8MNA" },
    { label: "Workshop Attended Information", subtext: null, url: "https://forms.gle/nKrD8SHH24hi1z836" },
  ];

  // --- Data for OTHER FORMS (Tab 'other') ---
  const otherForms = [
    { label: "Advance Application", url: "#" },
    { label: "Leave Application", url: "#" },
    { label: "ME Dissertation Sheet", url: "https://forms.ietdavv.edu.in/ME_Dissertation_Format.pdf" },
    { label: "Theory Exam Bill", url: "https://forms.ietdavv.edu.in/Theory_RBill.pdf" }, 
    { label: "Stationary Requisition", url: "https://forms.ietdavv.edu.in/stationary_requisition.pdf" },
    { label: "Advance Settlement", url: "https://forms.ietdavv.edu.in/stationary_requisition.pdf" },
    { label: "Leave Application (Long)", url: "https://forms.ietdavv.edu.in/leave_application_long.pdf" },
    { label: "Faculty Joining", url: "https://forms.ietdavv.edu.in/faculty_joining.pdf" },
    { label: "Practical Exam Set", url: "https://forms.ietdavv.edu.in/practical_exam_set_new.pdf" },
    { label: "Visiting Renumeration", url: "https://forms.ietdavv.edu.in/Visiting_remuneration_bill.pdf" },
    { label: "Budget Form", url: "https://forms.ietdavv.edu.in/IET_budget_form.pdf" },
    { label: "Leave Application", url: "https://forms.ietdavv.edu.in/PFLoanRequestForm@DAVV.pdf" },
    { label: "TA/DA Bill", url: "https://forms.ietdavv.edu.in/TADABill.pdf" },
    { label: "Practical Announcement", url: "https://forms.ietdavv.edu.in/practical_announcement_notice.pdf" },
  ];

  // --- Data for TELEPHONE DIRECTORY (Tab 'directory') ---
  const directoryData = [
    {
      title: "Director's Office",
      entries: [
        { name: "Dr. Sanjiv Tokekar", residence: "2576330", ext: "401/312", mobile: "9425322306" },
      ]
    },
    {
      title: "Computer Engineering",
      entries: [
        { name: "Dr. Meena Sharma", residence: "2401676", ext: "218", mobile: "9826927378" },
        { name: "Dr. Pragya Shukla", residence: "2711422", ext: "702", mobile: "9425082663" },
        { name: "Dr. G.L.Prajapati", residence: "-", ext: "204", mobile: "9826669205" },
        { name: "Dr. Vaibhav Jain", residence: "2459191", ext: "201", mobile: "9425071648" },
        { name: "Mr. Ashish Jain", residence: "9301648032", ext: "215", mobile: "9329539402" },
        { name: "Mrs. Mala Dutta", residence: "2761368", ext: "217", mobile: "9926082431" },
        { name: "Mr. Lalit Gehlot", residence: "2621582", ext: "208", mobile: "9893166970" },
        { name: "Mr. Arpit Agrawal", residence: "2400797", ext: "216", mobile: "9424090249" },
        { name: "Mr. Amit Mittal", residence: "-", ext: "203", mobile: "9993315549" },
        { name: "Mr. Jitendra Soni", residence: "-", ext: "216", mobile: "7773803202" },
        { name: "Mrs. Nilima Karankar", residence: "9300038209", ext: "703", mobile: "9300038204" },
        { name: "Mrs. Jyoti Haweliya", residence: "-", ext: "214", mobile: "9907561756" },
        { name: "Mr. Aditya Makwe", residence: "-", ext: "206", mobile: "9425373163" },
        { name: "Ms. Harshita Sharma", residence: "-", ext: "205", mobile: "8109091485" },
        { name: "Mrs. Swati Singh", residence: "-", ext: "205", mobile: "9617494489" },
        { name: "Mr. Jay Singh", residence: "9009760191", ext: "221", mobile: "9009760191" },
        { name: "Mr. Narendra K Solunki", residence: "-", ext: "221", mobile: "7024438677" },
        { name: "Ms. Ankita Chourasia", residence: "-", ext: "-", mobile: "9424300653" },
        { name: "Ms. Vedpriya Dongre", residence: "-", ext: "-", mobile: "9753754889" },
        { name: "Mr. Ravindra Verma", residence: "8818811439", ext: "-", mobile: "9713666360" },
        { name: "Ms. Alka Aman", residence: "-", ext: "-", mobile: "9893221297" },
      ]
    },
    {
      title: "Mechanical Engineering", // Assuming department based on common structure
      entries: [
        { name: "Dr. Ashesh Tiwari", residence: "2555362", ext: "102", mobile: "9826941506" },
        { name: "Dr. Nagendra Sohani", residence: "2462037", ext: "121", mobile: "9425311674" },
        { name: "Dr. Govind Maheshwari", residence: "2440829", ext: "101", mobile: "9826247653" },
        { name: "Dr. Devendra S. Verma", residence: "2543127", ext: "122", mobile: "9826418567" },
        { name: "Dr. Suvarna Torgal", residence: "2330244", ext: "106", mobile: "9893010615" },
        { name: "Mr. Vijay Karma", residence: "2369132", ext: "103", mobile: "9424891320" },
        { name: "Dr. Sharad Chaudhary", residence: "2592125", ext: "103", mobile: "9303237602" },
        { name: "Mr. Akhilesh Lodwal", residence: "-", ext: "124", mobile: "9425353249" },
        { name: "Mr. Ajeet Bergale", residence: "-", ext: "106", mobile: "7509874451" },
        { name: "Mr. Amit Gupta", residence: "-", ext: "124", mobile: "9406653327" },
        { name: "Mr. Ibrahim Hussain", residence: "-", ext: "104", mobile: "9827047074" },
        { name: "Mr. Santosh Kansal", residence: "-", ext: "107", mobile: "8827312195" },
        { name: "Mrs. Jyoti Soni", residence: "-", ext: "-", mobile: "9575975223" },
        { name: "Mr. Omprakash Sondhya", residence: "-", ext: "-", mobile: "8359939246" },
      ]
    }
  ];

  // Helper component for centered links (used in Tab 'data')
  const FormBox = ({ label, subtext, url }) => (
    <div className="py-4 px-6 text-center hover:bg-gray-50 transition duration-150 ease-in-out cursor-pointer">
      <a 
        href={url || '#'} // Use the provided URL or default to #
        className="text-gray-900 text-base sm:text-lg hover:text-[#05769A] transition-colors font-semibold"
      >
        {label}
        {/* Render subtext only if it exists */}
        {subtext && (
          <span className="text-sm font-semibold text-[#05769A] ml-2 no-underline hover:no-underline">
            {subtext}
          </span>
        )}
      </a>
    </div>
  );
  
  // Helper component for forms with a download button (used in Tab 'other')
  const DownloadableFormBox = ({ label, url }) => (
    <div className="py-3 px-6 flex justify-between items-center transition duration-150 ease-in-out">
        {/* Form Label/Name */}
        <div className="w-1/2 text-left">
            {/* The title link is intentionally prevented from navigating */}
            <a href={url} onClick={(e) => e.preventDefault()} className="text-gray-900 text-base sm:text-lg font-semibold hover:text-[#05769A]">
                {label}
            </a>
        </div>
        
        {/* Download Button - FIX APPLIED HERE */}
        <div className="w-1/2 flex justify-end">
            <a 
                href={url} 
                // ❌ Removed onClick={(e) => e.preventDefault()} 
                // This now allows the browser to navigate to the 'url'
                className="flex items-center space-x-2 bg-[#05769A] text-white px-4 py-2 rounded-md text-sm font-medium shadow-md hover:bg-blue-800 transition-colors"
            >
                <span>Download</span>
                {/* Download Icon (using simple SVG for single-file mandate compliance) */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
            </a>
        </div>
    </div>
);


  // NEW: Helper component to render the Directory Table
  const DirectoryTable = ({ title, entries }) => (
    <div className="mb-10">
      <h3 className="text-2xl font-semibold text-[#05769A] mb-4 border-b-2 border-gray-300 inline-block pb-1">{title}</h3>
      <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 sm:px-6 py-3 text-left text-sm font-bold text-gray-600 uppercase tracking-wider w-1/4">Name</th>
              <th className="px-4 sm:px-6 py-3 text-left text-sm font-bold text-gray-600 uppercase tracking-wider w-1/4">Residence</th>
              <th className="px-4 sm:px-6 py-3 text-left text-sm font-bold text-gray-600 uppercase tracking-wider w-1/6">Ext.</th>
              <th className="px-4 sm:px-6 py-3 text-left text-sm font-bold text-gray-600 uppercase tracking-wider w-1/3">Mobile No.</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {entries.map((entry, index) => (
              <tr key={index} className="hover:bg-indigo-50 transition-colors">
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-base font-medium text-gray-900">{entry.name}</td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-base text-gray-700">{entry.residence}</td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-base text-gray-700">{entry.ext}</td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-base text-gray-700">
                  <a href={`tel:${entry.mobile}`} className="hover:underline text-[#05769A] font-medium">{entry.mobile}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );


  // Helper component for Tab Link
  const TabLink = ({ id, label }) => {
    const isActive = activeTab === id;
    
    // Tailwind classes for the tab container
    const tabContainerClasses = `px-4 sm:px-8 pb-3 cursor-pointer transition-all duration-300 ${isActive ? 'border-b-2 border-[#05769A]' : 'border-b-2 border-transparent hover:border-gray-200'}`;
    
    // Tailwind classes for the text
    const textClasses = `text-sm sm:text-base font-semibold uppercase tracking-wider ${isActive ? 'text-[#05769A]' : 'text-gray-600 hover:text-gray-800'}`;

    return (
      <div 
        className={tabContainerClasses}
        onClick={() => setActiveTab(id)} // 2. Set the active tab on click
      >
        <span className={textClasses}>
          {label}
        </span>
      </div>
    );
  };

  // Content to display when the tabs are not 'data'
  const PlaceholderContent = ({ tabName }) => (
    <div className="max-w-4xl mx-auto mt-10">
      <div className="p-10 text-center text-lg text-gray-500 bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl shadow-inner">
        Content for the **{tabName}** section will be displayed here once selected.
      </div>
    </div>
  );


  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 bg-white rounded-xl shadow-2xl">
      
      {/* Main Title */}
      <h1 className="text-4xl sm:text-5xl font-serif text-center text-[#05769A] font-light mb-10 tracking-wide">
        IET DOCUMENT REPOSITORY
      </h1>

      {/* Tab Navigation Section */}
      <div className="flex justify-center border-b border-gray-300 mb-10 space-x-2 sm:space-x-4 overflow-x-auto">
        
        {/* INFORMATION DATA FORMS Tab */}
        <TabLink id="data" label="INFORMATION DATA FORMS" />

        {/* OTHER FORMS Tab */}
        <TabLink id="other" label="OTHER FORMS" />

        {/* TELEPHONE DIRECTORY Tab */}
        <TabLink id="directory" label="TELEPHONE DIRECTORY" />
      </div>
      
      {/* 3. Conditional Content Rendering based on activeTab */}
      {activeTab === 'data' && (
        <div className="animate-in fade-in duration-300">
          
          {/* Student Information Forms Content */}
          <div className="max-w-4xl mx-auto mt-10">
            <h2 className="text-3xl font-bold text-center text-[#05769A] mb-6 border-b pb-2">
              Student Information Forms
            </h2>

            {/* List Container: Added full border, rounded corners, and divide-y for internal lines */}
            <div className="border border-gray-200 rounded-lg overflow-hidden divide-y divide-gray-200">
              {forms.map((form, index) => (
                // Passing url to FormBox
                <FormBox key={`s-${index}`} label={form.label} subtext={form.subtext} url={form.url} />
              ))}
            </div>
            
          </div>
          
          {/* Faculty Information Forms Content */}
          <div className="max-w-4xl mx-auto mt-12 pt-6">
            <h2 className="text-3xl font-bold text-center text-[#05769A] mb-6 border-b pb-2">
              Faculty Information Forms
            </h2>

            {/* List Container: Added full border, rounded corners, and divide-y for internal lines */}
            <div className="border border-gray-200 rounded-lg overflow-hidden divide-y divide-gray-200">
              {forms1.map((form, index) => (
                 // Passing url to FormBox
                <FormBox key={`f-${index}`} label={form.label} subtext={form.subtext} url={form.url} />
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'other' && (
        <div className="animate-in fade-in duration-300">
          <div className="max-w-4xl mx-auto mt-10">
            <h2 className="text-3xl font-bold text-center text-[#05769A] mb-6 border-b pb-2">
              General Forms and Requisitions
            </h2>

            {/* List Container for downloadable forms */}
            <div className="border border-gray-200 rounded-lg overflow-hidden divide-y divide-gray-200">
              {otherForms.map((form, index) => (
                <DownloadableFormBox key={`o-${index}`} label={form.label} url={form.url} />
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'directory' && (
        <div className="max-w-4xl mx-auto mt-10 animate-in fade-in duration-300">
          <h2 className="text-3xl font-bold text-center text-[#05769A] mb-6 border-b pb-2">
              Telephone Directory
          </h2>
          {directoryData.map((section, index) => (
            <DirectoryTable 
              key={`dir-${index}`} 
              title={section.title} 
              entries={section.entries} 
            />
          ))}
        </div>
      )}

    </div>
  );
};

export default StudentInformationForms;
