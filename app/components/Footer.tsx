"use client";

import React, { useState } from "react";
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
  Twitter,
  Globe,
  ArrowRight,
  ExternalLink,
  Info,
  Shield,
  FileText,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <>
      <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 border-t border-slate-700/50 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0 bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23334155' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <Image
                  src="/logo.png"
                  alt="Flowrush Technologies"
                  width={180}
                  height={45}
                  className="object-contain"
                />
              </div>
              <p className="text-slate-300 leading-relaxed max-w-md">
                Empowering businesses with cutting-edge technology solutions. We
                deliver scalable, future-ready services that drive digital
                transformation and growth.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-slate-800/50 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-slate-800/50 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-slate-800/50 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-slate-800/50 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-slate-800/50 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-white font-semibold text-lg flex items-center">
                <Globe className="w-5 h-5 mr-2 text-blue-400" />
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => setShowAboutModal(true)}
                    className="text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setShowContactModal(true)}
                    className="text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Contact Us
                  </button>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-white font-semibold text-lg flex items-center">
                <MessageCircle className="w-5 h-5 mr-2 text-blue-400" />
                Get in Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <Mail className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-slate-300 group-hover:text-white transition-colors">
                      info@flowrushtechnologies.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 group">
                  <Phone className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-slate-300 group-hover:text-white transition-colors">
                      +91 9116098187
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 group">
                  <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div className="space-y-1">
                    <p className="text-slate-300 group-hover:text-white transition-colors text-sm">
                      Jaipur, Rajasthan, India
                    </p>
                    <p className="text-slate-300 group-hover:text-white transition-colors text-sm">
                      Delhi NCR, India
                    </p>
                    <p className="text-slate-300 group-hover:text-white transition-colors text-sm">
                      Vaughan, Canada
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Company Description */}
          <div className="border-t border-slate-700/50 pt-8 mb-8">
            <div className="bg-slate-800/30 rounded-xl p-6 backdrop-blur-sm border border-slate-700/30">
              <p className="text-slate-300 text-center leading-relaxed">
                <span className="text-white font-medium">
                  Flowrush Technologies
                </span>{" "}
                is a brand under Flowrush & Zencore Marketing LLP. All services
                offered under this name are delivered by the parent entity.
                Names, logos, and trademarks are the property of their
                respective owners. Any mention of partner brands or third-party
                tools is for reference purposes only and does not imply direct
                association unless expressly stated.
              </p>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-slate-700/50 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-slate-400 text-sm text-center md:text-left">
                © 2025{" "}
                <span className="text-white font-medium">
                  Flowrush Technologies
                </span>{" "}
                | Powered by{" "}
                <span className="text-blue-400">Zencore Marketing LLP</span>.
                All Rights Reserved.
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors flex items-center"
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* About Us Modal */}
      {showAboutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-700">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    About Us – Flowrush Technologies
                  </h2>
                </div>
                <button
                  onClick={() => setShowAboutModal(false)}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-slate-300 leading-relaxed mb-6">
                  Flowrush Technologies is the specialized technology arm of
                  Flowrush and Zencore Marketing LLP, created to deliver
                  cutting-edge white-label solutions for agencies and
                  enterprises worldwide.
                </p>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Our expertise spans across web development, app development,
                  SaaS platforms, AI/ML solutions, cloud services, and custom
                  enterprise tech deliverables.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  With a foundation of trust, innovation, and over a decade of
                  global delivery excellence, Flowrush Technologies has become
                  the go-to partner for agencies looking for discreet, reliable,
                  and high-quality white-label tech solutions.
                </p>
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setShowAboutModal(false)}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Modal - Mobile Responsive */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-3 sm:p-4 lg:p-6">
          <div className="bg-slate-800 rounded-xl sm:rounded-2xl w-full max-w-xs sm:max-w-lg lg:max-w-2xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto border border-slate-700">
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="flex justify-between items-start mb-4 sm:mb-6">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                    <Mail className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                    Contact Us
                  </h2>
                </div>
                <button
                  onClick={() => setShowContactModal(false)}
                  className="text-slate-400 hover:text-white transition-colors p-1 sm:p-2 rounded-lg hover:bg-slate-700/50"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <form className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-300 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-300 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-slate-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-slate-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-slate-300 mb-2">
                    Service Interested In
                  </label>
                  <select className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base">
                    <option value="">Select a service</option>
                    <option value="web-development">
                      Web Development & Design
                    </option>
                    <option value="app-development">
                      Mobile App Development
                    </option>
                    <option value="ai-services">AI & Machine Learning</option>
                    <option value="cloud-services">
                      Cloud & Tech Services
                    </option>
                    <option value="staff-augmentation">
                      Staff Augmentation
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowContactModal(false)}
                    className="w-full sm:w-auto px-6 py-3 text-slate-400 hover:text-white transition-colors rounded-xl border border-slate-600 hover:border-slate-500 text-sm sm:text-base"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 text-sm sm:text-base"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
