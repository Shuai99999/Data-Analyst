import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, Code2 } from "lucide-react";

const baseUrl = import.meta.env.BASE_URL;

const codeProjects = [
  {
    title: "Enterprise ETL Data Platform",
    category: "Data Engineering",
    image: `${baseUrl}etl-data-pipeline.png`,
    alt: "Illustrated enterprise ETL data pipeline",
    url: "https://github.com/Shuai99999/dataxDemo",
    description:
      "Built during my professional career in China, this production-grade data pipeline orchestrated data extraction from multiple mission-critical enterprise systems into a centralized Hadoop data lake.",
    technologies: ["Oracle", "MySQL", "Hadoop", "Impala"],
  },
  {
    title: "Airbnb Market Trends",
    category: "Data Visualization",
    image: `${baseUrl}tableau-airbnb-dashboard.png`,
    alt: "Airbnb market trends Tableau dashboard preview",
    url: "https://public.tableau.com/views/AirBnBFullProject_17845237140140/Dashboard1?:language=zh-CN&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    description:
      "An interactive Tableau dashboard exploring rental pricing, revenue patterns, and location-based consumer trends in the Airbnb market.",
    technologies: ["Tableau", "Market Analysis", "Data Storytelling"],
  },
  {
    title: "Data Professional Survey",
    category: "Business Intelligence",
    image: `${baseUrl}powerbi-survey.png`,
    alt: "Power BI Data Professional Survey dashboard preview",
    url: `${baseUrl}powerbi-survey.png`,
    description:
      "A Power BI analysis of 630 data professionals, uncovering patterns in salary, programming languages, job roles, and work-life satisfaction.",
    technologies: ["Power BI", "Survey Data", "DAX"],
  },
];

export default function CodeSection() {
  return (
    <Card className="bg-white border border-cyan-200 shadow-xl card-hover">
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold text-cyan-700 mb-1 flex items-center gap-2">
          <Code2 size={22} aria-hidden />
          Data Lab
        </h2>
        <p className="text-sm text-gray-500 mb-5">
          Click a project preview to open the full repository, dashboard, or report.
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {codeProjects.map((project, index) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group overflow-hidden rounded-xl border border-cyan-100 bg-gray-50 outline-none transition hover:-translate-y-1 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-cyan-500 ${
                index === 0 ? "sm:col-span-2" : ""
              }`}
            >
              <div
                className={`overflow-hidden bg-gray-100 ${
                  index === 0 ? "max-h-[360px]" : "aspect-[16/10]"
                }`}
              >
                <img
                  src={project.image}
                  alt={project.alt}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <div className="p-5">
                <p className="mb-1 text-xs font-bold uppercase tracking-[0.18em] text-cyan-600">
                  {project.category}
                </p>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-cyan-800">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="shrink-0 text-cyan-700"
                    size={20}
                    aria-hidden
                  />
                </div>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-cyan-200 bg-white px-2.5 py-1 text-xs font-medium text-cyan-800"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
