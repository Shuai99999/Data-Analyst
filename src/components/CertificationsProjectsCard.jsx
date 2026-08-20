// components/CertificationsProjectsCard.jsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Award, BarChart3, Code2, Cloud, Database } from "lucide-react";

const certifications = [
  "RHCE (Red Hat Certified Engineer), 2010",
  "OCM (Oracle Certified Master), 2014",
  "AZ-900 (Microsoft Azure Fundamentals), 2025",
];

const technicalSections = [
  {
    title: "Data Analysis & Visualization",
    icon: BarChart3,
    items: [
      "Microsoft Power BI",
      "Tableau",
      "Microsoft Excel (VLOOKUP, PivotTables, Conditional Formatting)",
      "Data cleaning, exploratory data analysis, KPI reporting, and dashboard development",
    ],
  },
  {
    title: "Programming & Analytics",
    icon: Code2,
    items: [
      "SQL (SQL Server, MySQL, PostgreSQL)",
      "Python (Pandas, NumPy, SciPy, Matplotlib)",
      "R (dplyr, tidyr, ggplot2, Shiny, tm)",
      "PySpark",
      "Git version control",
    ],
  },
  {
    title: "Database & Data Management",
    icon: Database,
    items: [
      "Relational database design and data modelling",
      "Advanced SQL queries, views, and stored procedures",
      "ETL processing and data integration",
      "Data validation, migration, and performance optimization",
    ],
  },
  {
    title: "Cloud Data Technologies",
    icon: Cloud,
    items: [
      "Microsoft Azure",
      "Azure Databricks, Azure Data Lake, and Azure Synapse Analytics",
      "Cloud-based ETL and data-processing workflows",
      "Large-scale data transformation using PySpark",
    ],
  },
];

export default function CertificationsProjectsCard() {
  return (
    <Card className="bg-white border border-cyan-200 shadow-xl card-hover">
      <CardContent className="p-6">
        <h2 className="text-xl font-bold text-cyan-700 mb-4 flex items-center gap-2">
          <Wrench size={22} aria-hidden />
          Certifications & Technical Expertise
        </h2>

        <div className="space-y-6">
          {/* Certifications as compact badges */}
          <div>
            <h3 className="text-base font-semibold text-cyan-600 mb-3 flex items-center gap-2">
              <Award size={18} aria-hidden />
              Certifications
            </h3>
            <div className="flex flex-wrap gap-2">
              {certifications.map((item) => {
                const match = item.match(/^(.+),\s*(\d{4})$/);
                const label = match ? match[1] : item;
                const year = match ? match[2] : null;
                return (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50/60 px-3 py-1.5 text-sm text-gray-700"
                  >
                    <span>{label}</span>
                    {year && (
                      <span className="shrink-0 rounded bg-cyan-100 px-1.5 py-0.5 text-xs font-medium text-cyan-700">
                        {year}
                      </span>
                    )}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Technical Expertise: single column for even flow */}
          <div>
            <h3 className="text-base font-semibold text-cyan-600 mb-3 flex items-center gap-2">
              Technical Expertise
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {technicalSections.map((section) => {
                const Icon = section.icon;
                return (
                  <div key={section.title} className="space-y-2">
                    <h3 className="text-base font-semibold text-cyan-600 border-b border-cyan-100 pb-1 flex items-center gap-2">
                      <Icon size={18} aria-hidden className="shrink-0" />
                      {section.title}
                    </h3>
                    <ul className="text-gray-700 text-sm list-disc list-inside space-y-1">
                      {section.items.map((item) => (
                        <li key={item} className="leading-snug">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
