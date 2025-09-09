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
      {/* Marquee Section - Above Header */}
      <div className="fixed top-0 left-0 right-0 z-50 w-full bg-slate-950/95 backdrop-blur-sm border-b border-slate-800/50">
        <div className="overflow-hidden bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="flex animate-marquee-fast whitespace-nowrap py-2">
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

      {/* Header Section - Below Marquee */}
      <header className="fixed top-8 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-700 shadow-lg">
        <div className="max-w-full mx-auto px-2 sm:px-4 lg:px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-start flex-shrink-0 pt-1">
              <div className="relative w-32">
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
            <nav className="hidden lg:flex items-center space-x-6 flex-1 justify-center">
              {navigationItems.map((item, index) => (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center space-x-1 px-3 py-2 text-slate-300 hover:text-white transition-all duration-300 text-sm">
                    <span className="font-medium">{item.label}</span>
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                  </button>

                  {/* Simple Horizontal Dropdown */}
                  {activeDropdown === item.label && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/4 mt-2 w-[600px] bg-slate-900/95 backdrop-blur-xl rounded-xl shadow-xl border border-slate-700/50 p-4 z-[9999]">
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        {navigationItems
                          .slice(0, 3)
                          .map((category, catIndex) => (
                            <div key={catIndex} className="space-y-2">
                              <div className="flex items-center space-x-2 pb-1 border-b border-slate-700/50">
                                <category.icon className="w-4 h-4 text-blue-400" />
                                <h3 className="text-blue-400 font-medium text-xs">
                                  {category.label}
                                </h3>
                              </div>
                              <div className="space-y-1">
                                {category.submenu.map((subItem, subIndex) => (
                                  <a
                                    key={subIndex}
                                    href="#"
                                    className="flex items-center space-x-2 px-2 py-1 text-slate-300 hover:bg-slate-700/50 hover:text-white transition-all duration-200 text-xs rounded group"
                                  >
                                    <subItem.icon className="w-3 h-3 text-blue-400 flex-shrink-0" />
                                    <span className="truncate">
                                      {subItem.label}
                                    </span>
                                  </a>
                                ))}
                              </div>
                            </div>
                          ))}
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        {navigationItems
                          .slice(3, 5)
                          .map((category, catIndex) => (
                            <div key={catIndex} className="space-y-2">
                              <div className="flex items-center space-x-2 pb-1 border-b border-slate-700/50">
                                <category.icon className="w-4 h-4 text-blue-400" />
                                <h3 className="text-blue-400 font-medium text-xs">
                                  {category.label}
                                </h3>
                              </div>
                              <div className="space-y-1">
                                {category.submenu.map((subItem, subIndex) => (
                                  <a
                                    key={subIndex}
                                    href="#"
                                    className="flex items-center space-x-2 px-2 py-1 text-slate-300 hover:bg-slate-700/50 hover:text-white transition-all duration-200 text-xs rounded group"
                                  >
                                    <subItem.icon className="w-3 h-3 text-blue-400 flex-shrink-0" />
                                    <span className="truncate">
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
              ))}

              {/* About Button */}
              <button
                onClick={() => setShowAboutModal(true)}
                className="flex items-center space-x-1 px-3 py-2 text-slate-300 hover:text-white transition-all duration-300 text-sm"
              >
                <Info className="w-4 h-4" />
                <span className="font-medium">About</span>
              </button>

              {/* Contact Button */}
              <button
                onClick={handleContactClick}
                className="flex items-center space-x-1 px-3 py-2 text-slate-300 hover:text-white transition-all duration-300 text-sm"
              >
                <Mail className="w-4 h-4" />
                <span className="font-medium">Contact</span>
              </button>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3 flex-shrink-0">
              <a
                href="https://calendly.com/sahaj-baveja"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:from-blue-500 hover:to-blue-600 whitespace-nowrap transform hover:scale-105 border border-blue-500/50 backdrop-blur-sm relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Calendar className="w-4 h-4 relative z-10" />
                <span className="relative z-10">Book Meeting</span>
              </a>
              {/* <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:from-blue-500 hover:to-blue-600 whitespace-nowrap transform hover:scale-105 border border-blue-500/50 backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Get Started</span>
              </button> */}
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800 border-t border-slate-700">
                {navigationItems.map((item, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex items-center space-x-2 px-3 py-2 text-slate-300">
                      <item.icon className="w-4 h-4" />
                      <span className="font-medium">{item.label}</span>
                    </div>
                    <div className="ml-6 space-y-1">
                      {item.submenu.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href="#"
                          className="flex items-center space-x-2 px-3 py-2 text-sm text-slate-400 hover:text-white"
                        >
                          <subItem.icon className="w-3 h-3 text-blue-400" />
                          <span>{subItem.label}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="pt-4 space-y-3 border-t border-slate-700">
                  <button
                    onClick={() => setShowAboutModal(true)}
                    className="flex items-center space-x-2 px-4 py-3 text-slate-300 hover:text-white bg-gradient-to-r from-slate-800/50 to-slate-700/50 hover:from-blue-800/50 hover:to-blue-600/50 rounded-lg transition-all duration-300 font-medium w-full group"
                  >
                    <Info className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                    <span>About Us</span>
                  </button>
                  <button
                    onClick={handleContactClick}
                    className="flex items-center space-x-2 px-4 py-3 text-slate-300 hover:text-white bg-gradient-to-r from-slate-800/50 to-slate-700/50 hover:from-blue-800/50 hover:to-blue-600/50 rounded-lg transition-all duration-300 font-medium w-full group"
                  >
                    <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    <span>Contact</span>
                  </button>
                  <a
                    href="https://calendly.com/sahaj-baveja"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3 rounded-lg font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-500 hover:to-blue-600 w-full mt-4"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book a Meeting</span>
                  </a>
                  <button className="btn-primary w-full">Get Started</button>
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

      {/* Main Floating Contact Icon */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleContactClick}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>

      {/* Floating Contact Options */}
      {showFloatingButtons && (
        <div className="fixed bottom-20 right-6 z-50 space-y-3">
          {/* Contact Form Button */}
          <button
            onClick={() => {
              setShowContactModal(true);
              setShowFloatingButtons(false);
            }}
            className="group flex items-center space-x-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            <Mail className="w-5 h-5" />
            <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Contact Form
            </span>
          </button>

          {/* WhatsApp Button */}
          <button
            onClick={() => {
              handleWhatsAppClick();
              setShowFloatingButtons(false);
            }}
            className="group flex items-center space-x-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-slide-up"
          >
            <Phone className="w-5 h-5" />
            <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              WhatsApp Us
            </span>
          </button>
        </div>
      )}
    </>
  );
}
