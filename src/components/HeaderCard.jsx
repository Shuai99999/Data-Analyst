// components/HeaderCard.jsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Mail, Phone, MessageCircle, MapPin } from "lucide-react";

export default function HeaderCard() {
  return (
    <Card className="bg-white border border-cyan-200 shadow-xl card-hover">
      <CardContent className="p-6">
        <section>
          <h1 className="text-5xl font-extrabold text-cyan-700 mb-1">
            Shuai Gao
          </h1>
          <p className="text-base text-gray-600 mb-4 flex items-center gap-1.5">
            <MapPin size={18} aria-hidden />
            Red Deer, AB, CA
          </p>
          <div className="flex gap-4 flex-wrap mb-4">
            <Button asChild variant="outline">
              <a href="mailto:gaoshuai099@gmail.com">
                <Mail className="mr-2" size={18} /> Email
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="https://github.com/Shuai99999" target="_blank">
                <Github className="mr-2" size={18} /> GitHub
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="tel:+15878760888">
                <Phone className="mr-2" size={18} /> 587-876-0888
              </a>
            </Button>
            <Button asChild variant="outline">
              <a
                href="https://wa.me/15878760888"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2" size={18} /> WhatsApp
              </a>
            </Button>
          </div>
          <div className="space-y-4 text-lg text-gray-700">
            <p>
              International Computer Programming student at Red Deer Polytechnic
              in Alberta, graduating in late 2026, with extensive experience in
              enterprise databases, large-scale data environments, and technology
              leadership.
            </p>
            <p>
              Data and database professional with 16 years of experience working
              with Oracle, SQL Server, MySQL, and complex enterprise systems,
              including analysis of high-volume transportation and supply-chain
              data. Skilled in SQL, Python, Excel, Power BI, Tableau, data
              cleaning, ETL, visualization, database performance optimization,
              and translating complex datasets into actionable business insights.
            </p>
            <p>
              Combines strong technical expertise with eight years of team
              leadership at Haier Group, offering a practical understanding of
              data infrastructure, business operations, and stakeholder
              requirements. Seeking Data Analyst, Business Intelligence Analyst,
              or database-focused analytics opportunities.
            </p>
          </div>
        </section>
      </CardContent>
    </Card>
  );
}
