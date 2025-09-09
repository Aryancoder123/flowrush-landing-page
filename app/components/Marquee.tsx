"use client";

import React from "react";
import { Star } from "lucide-react";

export default function Marquee() {
  const services = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Cloud Solutions",
    "AI Integration",
    "E-commerce Development",
    "DevOps Services",
    "Digital Marketing",
    "Cybersecurity",
    "Data Analytics",
  ];

  return (
    <div className="w-full bg-slate-950 border-b border-slate-800 py-3">
      <div className="overflow-hidden bg-gradient-to-r from-blue-600/10 to-blue-700/10 border border-blue-500/20 py-2">
        <div className="flex animate-marquee-fast whitespace-nowrap">
          {/* First set of services */}
          {services.map((service, index) => (
            <div key={`first-${index}`} className="flex items-center mx-8">
              <Star className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
              <span className="text-sm font-medium text-blue-300">
                {service}
              </span>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {services.map((service, index) => (
            <div key={`second-${index}`} className="flex items-center mx-8">
              <Star className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
              <span className="text-sm font-medium text-blue-300">
                {service}
              </span>
            </div>
          ))}
          {/* Third set for even smoother animation */}
          {services.map((service, index) => (
            <div key={`third-${index}`} className="flex items-center mx-8">
              <Star className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
              <span className="text-sm font-medium text-blue-300">
                {service}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
