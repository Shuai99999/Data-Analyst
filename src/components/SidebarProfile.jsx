// components/SidebarProfile.jsx
import React from "react";
import { Card } from "@/components/ui/card";
import { CloudCog, Sparkles } from "lucide-react";
import SkillList from "./SkillList";

export default function SidebarProfile() {
  return (
    <div className="rounded-xl overflow-hidden border border-sky-200 bg-white shadow-xl">
      <img
        src={`${import.meta.env.BASE_URL}portrait.jpg`}
        alt="Shuai Gao portrait"
        className="w-full h-full object-cover aspect-video"
      />
      <div className="p-4 text-sm text-center">
        <h3 className="text-lg font-semibold text-sky-700 mb-2 flex items-center justify-center gap-2">
          <CloudCog size={20} aria-hidden />
          Learning in the Cloud
        </h3>
        <p className="sidebar-intro text-sky-700">
          Since moving to Canada, I have used much of my free time to explore the
          data and analytics services available across Microsoft Azure and AWS.
          I regularly study how cloud platforms support modern data lakes, ETL
          pipelines, distributed processing, analytics warehouses, and business
          intelligence solutions. My current focus includes Azure Databricks,
          Azure Data Lake, Azure Synapse Analytics, PySpark workflows, and the
          AWS services that help teams turn large-scale data into reliable
          business insights.
        </p>
      </div>
      <div className="p-4 border-t border-sky-100">
        <h3 className="text-lg font-semibold text-sky-700 mb-2 flex items-center justify-center gap-2">
          <Sparkles size={20} aria-hidden />
          Data Analytics Skills
        </h3>
        <SkillList />
      </div>
    </div>
  );
}
