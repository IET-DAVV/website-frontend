"use client";
import React, { useState } from "react";
import Header from "./Header";
import Director from "./Director";
import Departments from "./Departments";
import AdminOffice from "./AdminOffice";
import Title from "../common/academics/Title";

const Administration = () => {
  const [selectedPage, setSelectedPage] = useState<string>("Director");

  const renderContent = () => {
    switch (selectedPage) {
      case "Director":
        return <Director />;
      case "Head of Departments":
        return <Departments />;
      case "Administrative Office":
        return <AdminOffice />;
      default:
        return null;
    }
  };

  return (
    <div className="px-6 md:px-16 py-6">
      <Title title="Administration" />
      <Header onSelectCourse={setSelectedPage} />
      {renderContent()}
    </div>
  );
};

export default Administration;
