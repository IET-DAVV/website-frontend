"use client";
import React, { useState } from "react";

const GrievancePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    rollno: "",
    course: "",
    email: "",
    phone: "",
    description: "",
    captchaInput: "",
  });

  const [captchaCode, setCaptchaCode] = useState(generateCaptcha());

  function generateCaptcha() {
    const chars = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";
    let code = "";
    for (let i = 0; i < 5; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.captchaInput !== captchaCode) {
      alert("Captcha did not match. Try again.");
      setCaptchaCode(generateCaptcha());
      setFormData({ ...formData, captchaInput: "" });
      return;
    }
    alert("Grievance submitted successfully!");
    console.log("Grievance Data:", formData);

    setFormData({
      name: "",
      rollno: "",
      course: "",
      email: "",
      phone: "",
      description: "",
      captchaInput: "",
    });
    setCaptchaCode(generateCaptcha());
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg">
        <h1 className="text-xl font-bold mb-6 text-center">Grievance Registration Form</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="w-full p-2 border border-gray-300 rounded-md text-sm"
          />

          <input
            type="text"
            name="rollno"
            value={formData.rollno}
            onChange={handleChange}
            placeholder="Roll Number"
            required
            className="w-full p-2 border border-gray-300 rounded-md text-sm"
          />

          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md text-sm"
          >
            <option value="">Select Course</option>
            <option value="B.Tech CSE">B.Tech CSE</option>
            <option value="B.Tech IT">B.Tech IT</option>
            <option value="B.Tech ECE">B.Tech ECE</option>
            <option value="M.Tech">M.Tech</option>
            <option value="MBA">MBA</option>
            <option value="PhD">PhD</option>
          </select>

          {/* Email with icon on right */}
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full p-2 pr-10 border border-gray-300 rounded-md text-sm"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/542/542689.png"
              alt="email icon"
              className="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2 opacity-70"
            />
          </div>

          {/* Phone with icon on right */}
          <div className="relative">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              required
              className="w-full p-2 pr-10 border border-gray-300 rounded-md text-sm"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/1551/1551230.png"
              alt="phone icon"
              className="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2 opacity-70"
            />
          </div>

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Grievance Description"
            required
            rows={4}
            className="w-full p-2 border border-gray-300 rounded-md text-sm"
          />

          {/* Captcha */}
          <div className="space-y-1">
            <div className="relative bg-gray-100 border border-gray-300 rounded p-2 text-lg font-mono tracking-widest select-none">
              <div className="absolute inset-0">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute left-0 right-0 h-px bg-gray-400 opacity-40"
                    style={{
                      top: `${Math.random() * 100}%`,
                      transform: `rotate(${Math.random() * 45 - 22}deg)`,
                    }}
                  ></div>
                ))}
              </div>
              <div className="relative z-10">{captchaCode.split("").join(" ")}</div>
            </div>
            <div className="flex items-center justify-between">
              <input
                type="text"
                name="captchaInput"
                value={formData.captchaInput}
                onChange={handleChange}
                placeholder="Enter captcha"
                required
                className="w-1/2 p-2 border border-gray-300 rounded-md text-sm"
              />
              <button
                type="button"
                onClick={() => setCaptchaCode(generateCaptcha())}
                className="text-blue-500 text-sm underline"
              >
                Refresh
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-light-blue hover:bg-[#06779B] text-white text-sm font-medium p-2 rounded-md"
          >
            Submit Grievance
          </button>
        </form>
      </div>
    </div>
  );
};

export default GrievancePage;
