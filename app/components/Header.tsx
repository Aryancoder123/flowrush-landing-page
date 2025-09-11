"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Menu,
  X,
  Zap,
  Globe,
  Code,
  Cloud,
  Brain,
  Users,
  Info,
  Mail,
  ChevronDown,
  Monitor,
  Palette,
  ShoppingCart,
  Layout,
  FileText,
  Store,
  Square,
  Apple,
  Database,
  Settings,
  Shield,
  BarChart3,
  Search,
  Bot,
  Plug,
  TrendingUp,
  Brush,
  Eye,
  Smartphone,
  MessageCircle,
  Phone,
  Calendar,
  Star,
} from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showFloatingButtons, setShowFloatingButtons] = useState(false);

  const handleMouseEnter = (label: string) => {
    console.log("Mouse enter:", label);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    console.log("Mouse leave");
    setActiveDropdown(null);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "+919116098187";
    const message = "Hello! I would like to know more about your services.";
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(
      "+",
      ""
    )}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleContactClick = () => {
    setShowFloatingButtons(!showFloatingButtons);
  };

  const navigationItems = [
    {
      label: "Web Dev & Design",
      icon: Globe,
      submenu: [
        { label: "Custom Website Development", icon: Code },
        { label: "Web Design UI / UX", icon: Palette },
        { label: "Ecommerce Website Development", icon: ShoppingCart },
        { label: "Landing Page Development", icon: Layout },
        { label: "Wordpress Website", icon: FileText },
        { label: "Shopify Website", icon: Store },
        { label: "Webflow Website", icon: Square },
        { label: "Next.js Website", icon: Square },
        { label: "Framer Website", icon: Square },
        { label: "Squarespace Website", icon: Square },
      ],
    },
    {
      label: "Software & Apps",
      icon: Code,
      submenu: [
        { label: "Software Development Services", icon: Code },
        { label: "Mobile App Development Services", icon: Smartphone },
        { label: "IOS App Development Services", icon: Apple },
        { label: "Android App Development Services", icon: Smartphone },
        { label: "Progressive App Development Services", icon: Smartphone },
        { label: "Custom CRM Development Services", icon: Database },
        { label: "ERP Software Development Services", icon: Settings },
        { label: "Custom SaaS Development Services", icon: Cloud },
      ],
    },
    {
      label: "Cloud & Tech",
      icon: Cloud,
      submenu: [
        { label: "Tech Outsourcing Services", icon: Users },
        { label: "Cybersecurity Services", icon: Shield },
        { label: "Cloud Consulting Services", icon: Cloud },
        { label: "Data Analytics Services", icon: BarChart3 },
        { label: "Staff Augmentation Services", icon: Users },
        { label: "AI Intelligent Integration Services", icon: Bot },
        { label: "API Integration Services", icon: Plug },
        { label: "Task Automatic Services", icon: Settings },
      ],
    },
    {
      label: "AI Services",
      icon: Brain,
      submenu: [
        { label: "AI Marketing Automation", icon: TrendingUp },
        { label: "AI-Led Website & App Development", icon: Code },
        { label: "AI-Driven Branding & Creative Strategy", icon: Brush },
        { label: "AI Content & Design Generation", icon: Eye },
        { label: "Custom Business Automations Using AI", icon: Bot },
      ],
    },
    {
      label: "Staff Augmentation",
      icon: Users,
      submenu: [
        { label: "SEO Specialist", icon: Search },
        { label: "Website Developers", icon: Code },
        { label: "App Developers", icon: Smartphone },
        { label: "DevOps Engineers", icon: Settings },
        { label: "AI Automation Engineer", icon: Bot },
        { label: "Data Analytics Engineer", icon: BarChart3 },
        { label: "Graphic Designer", icon: Brush },
        { label: "UI/UX Designer", icon: Eye },
      ],
    },
  ];

  // Services for marquee
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
    <>
      {/* Marquee Section - Above Header with Glass Effect */}
      <div className="fixed top-0 left-0 right-0 z-50 w-full bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/30 shadow-lg">
        <div className="overflow-hidden bg-gradient-to-r from-blue-600/15 to-purple-600/15">
          <div className="flex animate-marquee-fast whitespace-nowrap py-2 sm:py-3">
            {/* First set of services */}
            {services.map((service, index) => (
              <div
                key={`first-${index}`}
                className="flex items-center mx-6 flex-shrink-0"
              >
                <Star className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                  {service}
                </span>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {services.map((service, index) => (
              <div
                key={`second-${index}`}
                className="flex items-center mx-6 flex-shrink-0"
              >
                <Star className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                  {service}
                </span>
              </div>
            ))}
            {/* Third set for even smoother animation */}
            {services.map((service, index) => (
              <div
                key={`third-${index}`}
                className="flex items-center mx-6 flex-shrink-0"
              >
                <Star className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Header Section - Glass Effect */}
      <header className="fixed top-6 sm:top-8 left-0 right-0 z-40 bg-slate-900/70 backdrop-blur-xl border-b border-slate-700/30 shadow-2xl">
        {/* Glass Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 pointer-events-none"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

        <div className="relative max-w-full mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20">
            {/* Logo - Responsive */}
            <div className="flex items-center flex-shrink-0">
              <div className="relative w-24 sm:w-28 lg:w-32">
                <Image
                  src="/logo.png"
                  alt="Flowrush Technologies Logo"
                  width={128}
                  height={20}
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
              {/* Services Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => handleMouseEnter("Services")}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center space-x-1 px-3 py-2 text-slate-300 hover:text-white transition-all duration-300 text-sm">
                  <span className="font-medium">Services</span>
                  <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                </button>

                {/* Simple Professional Services Dropdown */}
                {activeDropdown === "Services" && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[900px] bg-slate-900/95 backdrop-blur-xl rounded-xl shadow-xl border border-slate-700/50 p-5 z-[9999] max-h-[75vh] overflow-y-auto">
                    <div className="grid grid-cols-5 gap-4">
                      {navigationItems.map((category, catIndex) => (
                        <div key={catIndex} className="space-y-2">
                          <div className="flex items-center space-x-2 pb-2 mb-2 border-b border-slate-700/30">
                            <div className="w-6 h-6 bg-blue-500/20 rounded-md flex items-center justify-center">
                              <category.icon className="w-4 h-4 text-blue-400" />
                            </div>
                            <h3 className="text-white font-medium text-sm">
                              {category.label}
                            </h3>
                          </div>
                          <div className="space-y-1">
                            {category.submenu.map((subItem, subIndex) => (
                              <a
                                key={subIndex}
                                href="#"
                                className="flex items-center space-x-2 px-2 py-1.5 text-slate-400 hover:text-white hover:bg-slate-800/50 transition-all duration-200 text-xs rounded-md group"
                              >
                                <subItem.icon className="w-3 h-3 text-blue-400/70 flex-shrink-0" />
                                <span className="leading-tight">
                                  {subItem.label}
                                </span>
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* About Us Button */}
              <button
                onClick={() => setShowAboutModal(true)}
                className="flex items-center space-x-1 px-3 py-2 text-slate-300 hover:text-white transition-all duration-300 text-sm"
              >
                <Info className="w-4 h-4" />
                <span className="font-medium">About Us</span>
              </button>

              {/* Contact Us Button */}
              <button
                onClick={() => setShowContactModal(true)}
                className="flex items-center space-x-1 px-3 py-2 text-slate-300 hover:text-white transition-all duration-300 text-sm"
              >
                <Mail className="w-4 h-4" />
                <span className="font-medium">Contact Us</span>
              </button>
            </nav>

            {/* CTA Buttons - Responsive */}
            <div className="hidden md:flex items-center space-x-2 lg:space-x-3 flex-shrink-0">
              <a
                href="https://calendly.com/sahaj-baveja"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 lg:space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-2 lg:px-6 lg:py-3 rounded-lg lg:rounded-xl font-semibold text-xs lg:text-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:from-blue-500 hover:to-blue-600 whitespace-nowrap transform hover:scale-105 border border-blue-500/30 backdrop-blur-sm relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Calendar className="w-3 h-3 lg:w-4 lg:h-4 relative z-10" />
                <span className="relative z-10 hidden sm:inline">
                  Book Meeting
                </span>
                <span className="relative z-10 sm:hidden">Book</span>
              </a>
            </div>

            {/* Mobile menu button - Enhanced */}
            <button
              className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/50 backdrop-blur-sm border border-slate-700/30 transition-all duration-300 shadow-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>
          </div>

          {/* Enhanced Mobile Navigation with Glass Effect */}
          {isMenuOpen && (
            <div className="lg:hidden absolute left-0 right-0 top-full bg-slate-900/90 backdrop-blur-xl border-t border-slate-700/30 shadow-2xl">
              {/* Glass effect for mobile menu */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>

              <div className="relative px-3 sm:px-4 pt-4 pb-6 space-y-4 max-h-[85vh] overflow-y-auto">
                {/* Services Section for Mobile */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 px-4 py-3 text-white font-semibold border-b border-slate-700/50 bg-slate-800/30 rounded-lg backdrop-blur-sm">
                    <Globe className="w-5 h-5 text-blue-400" />
                    <span className="text-base">Our Services</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {navigationItems.map((category, catIndex) => (
                      <div
                        key={catIndex}
                        className="bg-slate-800/40 backdrop-blur-sm rounded-lg p-3 border border-slate-700/30"
                      >
                        <div className="flex items-center space-x-2 mb-3 pb-2 border-b border-slate-600/30">
                          <div className="w-7 h-7 bg-blue-500/20 rounded-md flex items-center justify-center">
                            <category.icon className="w-4 h-4 text-blue-400" />
                          </div>
                          <span className="font-medium text-white text-sm">
                            {category.label}
                          </span>
                        </div>
                        <div className="space-y-1.5 max-h-32 overflow-y-auto">
                          {category.submenu.map((subItem, subIndex) => (
                            <a
                              key={subIndex}
                              href="#"
                              className="flex items-center space-x-2 px-2 py-1.5 text-slate-400 hover:text-white hover:bg-slate-700/50 transition-all duration-200 text-xs rounded-md"
                            >
                              <subItem.icon className="w-3 h-3 text-blue-400/70 flex-shrink-0" />
                              <span className="leading-tight">
                                {subItem.label}
                              </span>
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons for Mobile */}
                <div className="space-y-3 pt-4 border-t border-slate-700/50">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      onClick={() => {
                        setShowAboutModal(true);
                        setIsMenuOpen(false);
                      }}
                      className="flex items-center justify-center space-x-2 px-4 py-3 text-slate-300 hover:text-white bg-slate-800/50 hover:bg-blue-800/50 backdrop-blur-sm rounded-xl transition-all duration-300 font-medium border border-slate-700/30 group"
                    >
                      <Info className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                      <span>About Us</span>
                    </button>

                    <button
                      onClick={() => {
                        setShowContactModal(true);
                        setIsMenuOpen(false);
                      }}
                      className="flex items-center justify-center space-x-2 px-4 py-3 text-slate-300 hover:text-white bg-slate-800/50 hover:bg-blue-800/50 backdrop-blur-sm rounded-xl transition-all duration-300 font-medium border border-slate-700/30 group"
                    >
                      <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                      <span>Contact Us</span>
                    </button>
                  </div>

                  <a
                    href="https://calendly.com/sahaj-baveja"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-4 rounded-xl font-semibold text-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:from-blue-500 hover:to-blue-600 w-full border border-blue-500/30 backdrop-blur-sm relative overflow-hidden group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Calendar className="w-5 h-5 relative z-10" />
                    <span className="relative z-10">Book a Meeting</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

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
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-slate-300 leading-relaxed mb-6">
                  Flowrush Technologies is the specialized technology arm of
                  Flowrush and Zencore Marketing LLP, created to deliver
                  cutting-edge white-label solutions for agencies and
                  enterprises worldwide. As a dedicated brand under Zencore, we
                  focus on empowering businesses with scalable, future-ready
                  technology services while allowing them to present solutions
                  under their own name.
                </p>

                <p className="text-slate-300 leading-relaxed mb-6">
                  Our expertise spans across web development, app development,
                  SaaS platforms, AI/ML solutions, cloud services, and custom
                  enterprise tech deliverables. We work seamlessly with
                  marketing agencies, digital firms, and corporations, ensuring
                  that their clients experience world-class services backed by
                  the latest technology stacks.
                </p>

                <p className="text-slate-300 leading-relaxed">
                  With a foundation of trust, innovation, and over a decade of
                  global delivery excellence, Flowrush Technologies has become
                  the go-to partner for agencies looking for discreet, reliable,
                  and high-quality white-label tech solutions. We don't just
                  deliver projects; we build long-term partnerships that enable
                  our clients to scale faster and stay ahead in a competitive
                  digital ecosystem.
                </p>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setShowAboutModal(false)}
                  className="btn-primary"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 rounded-2xl max-w-2xl w-full border border-slate-700">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Contact Us</h2>
                </div>
                <button
                  onClick={() => setShowContactModal(false)}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your company name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">
                      Web Development & Design
                    </option>
                    <option value="app-development">
                      Software & App Development
                    </option>
                    <option value="cloud-tech">Cloud & Tech Services</option>
                    <option value="ai-services">Artificial Intelligence</option>
                    <option value="staff-augmentation">
                      Staff Augmentation
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowContactModal(false)}
                    className="px-8 py-4 text-slate-400 hover:text-white transition-colors rounded-xl"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn-primary">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Large Floating Contact Buttons - Always Visible */}
      <div className="fixed bottom-6 right-6 z-50 space-y-4">
        {/* Contact Form Button */}
        <div className="group">
          <button
            onClick={() => setShowContactModal(true)}
            className="relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white p-5 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 hover:rotate-3 border-2 border-blue-400/20 hover:border-blue-300/40"
          >
            <Mail className="w-7 h-7" />
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full blur opacity-30 group-hover:opacity-70 transition-opacity duration-500"></div>
          </button>
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
            <div className="bg-slate-800 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-xl border border-slate-700">
              Contact Form
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-slate-800 border-y-4 border-y-transparent"></div>
            </div>
          </div>
        </div>

        {/* WhatsApp Button with Backlight Reflector */}
        <div className="group relative">
          {/* Outer Backlight Reflector Layers */}
          <div className="absolute -inset-8 bg-gradient-radial from-green-400/20 via-green-500/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse"></div>
          <div className="absolute -inset-6 bg-gradient-radial from-green-400/30 via-green-500/15 to-transparent rounded-full blur-lg opacity-40 group-hover:opacity-80 transition-all duration-500"></div>
          <div className="absolute -inset-4 bg-gradient-radial from-green-400/40 via-green-500/20 to-transparent rounded-full blur-md opacity-60 group-hover:opacity-90 transition-all duration-400"></div>

          {/* Main Button */}
          <button
            onClick={handleWhatsAppClick}
            className="relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-5 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 hover:rotate-3 border-2 border-green-400/20 hover:border-green-300/40 overflow-hidden"
          >
            {/* Inner Reflector Light */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-2 left-2 w-3 h-3 bg-white/40 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* WhatsApp Icon */}
            <svg
              className="w-7 h-7 relative z-10"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </svg>

            {/* Main Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full blur opacity-30 group-hover:opacity-70 transition-opacity duration-500"></div>
          </button>
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
            <div className="bg-slate-800 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-xl border border-slate-700">
              WhatsApp Us
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-slate-800 border-y-4 border-y-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
