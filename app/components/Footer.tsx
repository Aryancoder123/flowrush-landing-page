"use client";

import React from "react";
import Image from "next/image";
import {
  Zap,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-900 border-t border-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Logo Section - Top Center */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="Flowrush Technologies"
              width={150}
              height={150}
              className="w-50 h-30"
            />
          </div>
        </div>

        {/* Email, Number, Sitemap, Privacy Policy, Terms, Disclaimer in one line */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-sm">
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4 text-blue-400" />
            <span className="text-slate-300">
              info@flowrushtechnologies.com
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4 text-blue-400" />
            <span className="text-slate-300">+91 9116098187</span>
          </div>
          <span className="text-slate-500">|</span>
          <a
            href="#"
            className="text-slate-300 hover:text-blue-400 transition-colors"
          >
            Sitemap
          </a>
          <span className="text-slate-500">|</span>
          <a
            href="#"
            className="text-slate-300 hover:text-blue-400 transition-colors"
          >
            Privacy Policy
          </a>
          <span className="text-slate-500">|</span>
          <a
            href="#"
            className="text-slate-300 hover:text-blue-400 transition-colors"
          >
            Terms and Conditions
          </a>
          <span className="text-slate-500">|</span>
          <a
            href="#"
            className="text-slate-300 hover:text-blue-400 transition-colors"
          >
            Disclaimer
          </a>
        </div>

        {/* Flowrush Description - Full Width */}
        <div className="text-center mb-8">
          <p className="text-slate-400 max-w-4xl mx-auto leading-relaxed">
            Flowrush Technologies is a brand under Flowrush & Zencore Marketing
            LLP. All services offered under this name are delivered by the
            parent entity. Names, logos, and trademarks are the property of
            their respective owners. Any mention of partner brands or
            third-party tools is for reference purposes only and does not imply
            direct association unless expressly stated.
          </p>
        </div>

        {/* Offices in one line */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-blue-400" />
            <span className="text-slate-300 font-medium">
              Jaipur, Rajasthan, India
            </span>
          </div>
          <span className="text-slate-500">|</span>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-blue-400" />
            <span className="text-slate-300 font-medium">Delhi NCR, India</span>
          </div>
          <span className="text-slate-500">|</span>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-blue-400" />
            <span className="text-slate-300 font-medium">Vaughan, Canada</span>
          </div>
        </div>

        {/* Rights Reserved - Bottom line */}
        <div className="border-t border-blue-800 pt-6">
          <div className="text-center">
            <p className="text-slate-400 text-sm">
              © 2025 Flowrush Technologies | Powered by Zencore Marketing LLP.
              All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
