// components/SkillList.jsx
import React from "react";
import Skill from "./Skill";

const skills = [
  { skill: "SQL & Data Modelling", level: "advanced", color: "#0891B2" },
  { skill: "Python Analytics", level: "advanced", color: "#2563EB" },
  { skill: "Microsoft Excel", level: "advanced", color: "#15803D" },
  { skill: "Power BI & DAX", level: "intermediate", color: "#EAB308" },
  { skill: "Tableau", level: "intermediate", color: "#EA580C" },
  { skill: "ETL & Data Integration", level: "advanced", color: "#7C3AED" },
  { skill: "Azure Data Services", level: "intermediate", color: "#0078D4" },
  { skill: "AWS Analytics Services", level: "intermediate", color: "#F59E0B" },
];

export default function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skillObj) => (
        <Skill
          key={skillObj.skill}
          skill={skillObj.skill}
          level={skillObj.level}
          color={skillObj.color}
        />
      ))}
    </div>
  );
}
