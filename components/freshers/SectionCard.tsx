import React from "react";
import "./SectionCard.css";

interface SectionCardProps {
  title: string;
}

const SectionCard: React.FC<SectionCardProps> = ({ title }) => {
  return (
    <div className="section-card">
      <h2 className="card-title">{title}</h2>
      <div className="placeholder-box">
        {/* Placeholder for document/PDF */}
        <p style={{ textAlign: "center", marginTop: "60px", color: "#aaa" }}>
          [PDF Placeholder]
        </p>
      </div>
    </div>
  );
};

export default SectionCard;
