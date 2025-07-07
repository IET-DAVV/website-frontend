"use client";
import React, { useState } from "react";

interface AdmissionSection {
  id: string;
  title: string;
  content: string;
}

const AdmissionComponent = () => {
  const [selectedSection, setSelectedSection] = useState<string>("rules");

  const admissionData: AdmissionSection[] = [
    {
      id: "adminssion",
      title: "ADMISSION",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta lobortis tempus. Vestibulum efficitur tempor dolor a placerat. Nam placerat anim et egestas placerat. Fusce eros mauris, aliquet et placerat non, efficitur eget felis. Nam ac interdum est, vel rutrum arcu. Mauris tristique eleifend dapibus. Vivamus volutpat pretium sapien varius efficitur. Aliquam suscipit sem id tellus blandit gravida. Nulla arcu arcu, sagittis at fermentum non, convallis quis nisl. Sed accumsan pulvinar magna at pharetra. Praesent aliquam convallis convallis.

Vivamus vitae egestas mi. Etiam vel hendrerit dolor. Duis sapien velit, fermentum sollicitudin sem nec, rhoncus malesuada nisl. Maecenas congue, dolor dignissim dictum malesuada, ante nibh volutpat sapien, et ornare justo elit et sapien. Proin sed condimentum eros. In hac habitasse platea dictumst. In et enim vitae turpis maximus ultricies quis a leo. Fusce nibh leo, scelerisque in erat eu, pulvinar feugiat eros. Mauris viverra sem et porttitor tincidunt. Praesent congue viverra lacus sit amet accumsan. Nam eu diam aliquam tellus egestas convallis ac eget lacus. Aenean sed sollicitudin dui, nec molestie mi.`,
    },
    {
      id: "rules",
      title: "RULES",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta lobortis tempus. Vestibulum efficitur tempor dolor a placerat. Nam placerat anim et egestas placerat. Fusce eros mauris, aliquet et placerat non, efficitur eget felis. Nam ac interdum est, vel rutrum arcu. Mauris tristique eleifend dapibus. Vivamus volutpat pretium sapien varius efficitur. Aliquam suscipit sem id tellus blandit gravida. Nulla arcu arcu, sagittis at fermentum non, convallis quis nisl. Sed accumsan pulvinar magna at pharetra. Praesent aliquam convallis convallis.

Vivamus vitae egestas mi. Etiam vel hendrerit dolor. Duis sapien velit, fermentum sollicitudin sem nec, rhoncus malesuada nisl. Maecenas congue, dolor dignissim dictum malesuada, ante nibh volutpat sapien, et ornare justo elit et sapien. Proin sed condimentum eros. In hac habitasse platea dictumst. In et enim vitae turpis maximus ultricies quis a leo. Fusce nibh leo, scelerisque in erat eu, pulvinar feugiat eros. Mauris viverra sem et porttitor tincidunt. Praesent congue viverra lacus sit amet accumsan. Nam eu diam aliquam tellus egestas convallis ac eget lacus. Aenean sed sollicitudin dui, nec molestie mi.`,
    },
    {
      id: "facilities",
      title: "FACILITIES",
      content: `Our institution offers world-class facilities designed to support academic excellence and student development. The campus features state-of-the-art laboratories equipped with modern instruments and technology for hands-on learning experiences. Our library houses an extensive collection of books, journals, and digital resources, providing 24/7 access to academic materials.

The hostel facilities accommodate students with comfortable living spaces, nutritious dining options, and recreational areas. High-speed internet connectivity is available throughout the campus, ensuring seamless access to online resources and communication. Sports facilities include well-maintained playgrounds, gymnasium, and indoor games room to promote physical fitness and extracurricular activities.

Additionally, we provide medical facilities with qualified healthcare professionals on campus, career counseling services, and placement assistance to help students achieve their professional goals. The campus also features modern auditoriums and seminar halls for academic events and cultural activities.`,
    },
    {
      id: "fee-structure",
      title: "FEE STRUCTURE",
      content: `The fee structure is designed to be transparent and affordable while maintaining high-quality education standards. Tuition fees vary based on the program of study and are structured to provide excellent value for the comprehensive education provided.

For undergraduate programs, the annual tuition fee ranges from ₹80,000 to ₹1,20,000 depending on the branch of engineering. This includes access to all academic facilities, laboratory usage, library resources, and campus amenities. Additional charges may apply for hostel accommodation, mess facilities, and transportation services.

Scholarship opportunities are available for meritorious students and those from economically disadvantaged backgrounds. Merit-based scholarships can cover up to 50% of tuition fees, while need-based scholarships provide financial assistance based on family income criteria. Payment can be made in installments to ease the financial burden on families.

The fee structure also includes provisions for additional courses, certification programs, and extracurricular activities. All fees are subject to annual review and may be adjusted based on institutional requirements and government regulations.`,
    },
  ];

  const getCurrentContent = () => {
    const section = admissionData.find((item) => item.id === selectedSection);
    return section ? section.content : admissionData[0].content;
  };

  return (
    <div className=" bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Navigation */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Navigation Menu */}
              <div className="space-y-6">
                {admissionData.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setSelectedSection(section.id)}
                    className={`block w-full text-left text-2xl font-light tracking-wide transition-all duration-300 ${
                      selectedSection === section.id
                        ? "text-black font-medium"
                        : "text-gray-600 hover:text-gray-800"
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Vertical Divider Line */}
              <div className="absolute left-0 top-0 w-px h-full bg-gray-300"></div>

              {/* Content Area */}
              <div className="pl-12">
                <div className="prose prose-lg max-w-none">
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {getCurrentContent()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionComponent;
