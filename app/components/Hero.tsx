"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Star,
  Users,
  Zap,
  Globe,
  UserCheck,
  Headphones,
  Lock,
  Target,
  CheckCircle,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";

type TechCategory =
  | "Web development"
  | "Mobile development"
  | "Cloud & DevOps"
  | "AI & ML"
  | "SEO & Analytics"
  | "Design & UX";

export default function Hero() {
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

  const typingServices = [
    "Web Development",
    "Mobile App Development",
    "Software Development",
    "AI Integration",
    "Cloud Solutions",
    "E-commerce Development",
    "UI/UX Design",
    "Digital Marketing",
  ];

  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [selectedTechCategory, setSelectedTechCategory] =
    useState<TechCategory>("Web development");

  // Tech stack logos mapping
  const techStackLogos: Record<TechCategory, string[]> = {
    "Web development": [
      "/LOGOS/next.js-tkpt01eo0tpocevvyxrsc.webp",
      "/LOGOS/Unofficial_JavaScript_logo_2.svg.webp",
      "/LOGOS/Microsoft_.NET_logo.svg.webp",
      "/LOGOS/PHP-logo.svg.webp",
      "/LOGOS/Laravel-Logo.wine.webp",
      "/LOGOS/Vue.js_Logo_2.svg.webp",
      "/LOGOS/python-logo-png_seeklogo-273830.webp",
      "/LOGOS/Spring_Boot_Logo_full.webp",
    ],
    "Mobile development": [
      "/LOGOS/lockup_flutter_horizontal.c823e53b3a1a7b0d36a9.webp",
      "/LOGOS/swift-logo-F41F53A22D-seeklogo.com-removebg-preview.webp",
      "/LOGOS/kotlin-2-logo.webp",
      "/LOGOS/objective-c-logo-png_seeklogo-340070.webp",
      "/LOGOS/java-logo-png_seeklogo-158094-removebg-preview.webp",
      "/LOGOS/rapidbrains-xamarin.webp",
    ],
    "Cloud & DevOps": [
      "/LOGOS/Amazon-Web-Services-AWS-Logo.webp",
      "/LOGOS/Google-Cloud-Logo-PNG-Isolated-File.webp",
      "/LOGOS/Microsoft_Azure_Logo.svg.webp",
      "/LOGOS/docker_logo.webp",
      "/LOGOS/Kubernetes_logo_without_workmark.svg.webp",
      "/LOGOS/openshift_logo_icon_169886.webp",
      "/LOGOS/apache-logo-png_seeklogo-314278.webp",
    ],
    "AI & ML": [
      "/LOGOS/python-logo-png_seeklogo-273830.webp",
      "/LOGOS/1683823510dall-e-logo-png.webp",
      "/LOGOS/stability.webp",
      "/LOGOS/eleutherai.webp",
      "/LOGOS/Ai2_logo_pink_padding_RGB.webp",
    ],
    "SEO & Analytics": [
      "/LOGOS/lockup_ic_Google_Analytics_vert_388px_clr.webp",
      "/LOGOS/new-Google-Partner-logo-png-medium-size.webp",
      "/LOGOS/wordpress-logo-wordpress-icon-transparent-free-png.webp",
    ],
    "Design & UX": [
      "/LOGOS/figma-logo-512.webp",
      "/LOGOS/Adobe_XD_CC_icon.svg.webp",
      "/LOGOS/adobe-photoshop-logo-png_seeklogo-380560.webp",
      "/LOGOS/sketch-logo-png_seeklogo-336627.webp",
      "/LOGOS/marvel-logo-png_seeklogo-297983.webp",
    ],
  };

  // FAQ state and data
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqData = [
    {
      question: "Do you offer white-label development services?",
      answer:
        "Yes, we specialize in white-label development services. We work completely behind the scenes, delivering fully branded solutions under your agency's name while maintaining strict confidentiality with NDAs.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We serve a wide range of industries including healthcare, fintech, e-commerce, SaaS, education, real estate, and more. Our diverse expertise allows us to adapt to any industry's specific requirements and compliance needs.",
    },
    {
      question: "Can you work with our existing design or development team?",
      answer:
        "Absolutely! We seamlessly integrate with your existing teams, whether you need additional development capacity, specialized expertise, or want us to handle specific project components while your team focuses on other priorities.",
    },
    {
      question: "What technologies do you specialize in?",
      answer:
        "We specialize in modern web technologies (React, Next.js, Node.js), mobile development (Flutter, React Native, Swift, Kotlin), cloud platforms (AWS, Azure, GCP), and emerging technologies like AI/ML integration.",
    },
    {
      question: "Do you provide post-launch support and maintenance?",
      answer:
        "Yes, we offer comprehensive post-launch support including bug fixes, security updates, performance optimization, feature enhancements, and 24/7 monitoring to ensure your projects remain stable and successful.",
    },
    {
      question: "How do you ensure confidentiality and IP protection?",
      answer:
        "We operate under strict NDAs and have robust security protocols in place. All our team members sign confidentiality agreements, and we use secure development practices to protect your intellectual property and client data.",
    },
    {
      question: "What's your typical project turnaround time?",
      answer:
        "Project timelines vary based on complexity and scope. Simple websites typically take 2-4 weeks, while complex applications can take 8-16 weeks. We always provide realistic timelines and keep you updated throughout the development process.",
    },
    {
      question: "Can I hire a dedicated developer or a full team?",
      answer:
        "Yes, we offer both dedicated developers and full-stack teams based on your needs. You can scale up or down as required, and our developers work as an extension of your team with direct communication channels.",
    },
    {
      question: "Is there a minimum project size or budget?",
      answer:
        "We work with projects of various sizes. While we focus on quality partnerships rather than one-off small tasks, we're flexible and can discuss project requirements to find the best fit for both parties.",
    },
  ];

  useEffect(() => {
    const currentService = typingServices[currentServiceIndex];

    if (isTyping) {
      if (displayedText.length < currentService.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentService.slice(0, displayedText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setCurrentServiceIndex((prev) => (prev + 1) % typingServices.length);
        setIsTyping(true);
      }
    }
  }, [displayedText, isTyping, currentServiceIndex, typingServices]);

  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Marquee Services */}
          <div className="overflow-hidden bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-full mb-8 py-3">
            <div className="flex animate-marquee whitespace-nowrap">
              {/* First set of services */}
              {services.map((service, index) => (
                <div key={`first-${index}`} className="flex items-center mx-4">
                  <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                  <span className="text-sm font-medium text-blue-300">
                    {service}
                  </span>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {services.map((service, index) => (
                <div key={`second-${index}`} className="flex items-center mx-4">
                  <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                  <span className="text-sm font-medium text-blue-300">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Main Heading with Typing Animation */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 min-h-[2.5em]"
          >
            White Label Global Experts in
            <br />
            <span className="gradient-text">
              {displayedText}
              <span className="animate-pulse">|</span>
            </span>
          </motion.h1>

          {/* Strategic Partnership Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-200 mb-6 max-w-4xl mx-auto leading-relaxed"
          >
            We provide comprehensive global white-label technology solutions,
            working closely with a curated selection of agencies to serve as
            their trusted strategic technology partners. Our aim is to enhance
            their offerings and drive innovation in their projects.
          </motion.p>

          {/* Dashboard Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-12 max-w-5xl mx-auto"
          >
            <div className="relative">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-3xl opacity-20 scale-105"></div>

              {/* Dashboard image container */}
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 border border-slate-700/50 shadow-2xl">
                <Image
                  src="/dashboard.png"
                  alt="Flowrush Technologies Dashboard"
                  width={1200}
                  height={700}
                  className="w-full h-auto rounded-lg shadow-lg"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Why Choose Flowrush Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Why Choose{" "}
              <span className="gradient-text">Flowrush Technologies</span>
              <br />
              as Your White Label Partner
            </h2>
          </motion.div>

          {/* Features and Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 max-w-7xl mx-auto"
          >
            {/* Left Side - Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Global Expertise */}
              <div className="flex items-start space-x-3 p-4 bg-slate-800/30 rounded-xl border border-slate-700/50">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Global Expertise
                  </h3>
                  <p className="text-slate-300 text-sm">
                    Delivering cutting-edge web, software, and app solutions
                    trusted by agencies worldwide.
                  </p>
                </div>
              </div>

              {/* Seamless White-Label Partnership */}
              <div className="flex items-start space-x-3 p-4 bg-slate-800/30 rounded-xl border border-slate-700/50">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <UserCheck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Seamless White-Label Partnership
                  </h3>
                  <p className="text-slate-300 text-sm">
                    We work as your invisible tech team, ensuring your brand
                    always stays in the spotlight.
                  </p>
                </div>
              </div>

              {/* Scalable & Custom Solutions */}
              <div className="flex items-start space-x-3 p-4 bg-slate-800/30 rounded-xl border border-slate-700/50">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Scalable & Custom Solutions
                  </h3>
                  <p className="text-slate-300 text-sm">
                    Tailored development that grows with your client's needs and
                    business goals.
                  </p>
                </div>
              </div>

              {/* 24/7 Global Support */}
              <div className="flex items-start space-x-3 p-4 bg-slate-800/30 rounded-xl border border-slate-700/50">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    24/7 Global Support
                  </h3>
                  <p className="text-slate-300 text-sm">
                    Round-the-clock availability to ensure smooth project
                    execution and timely assistance.
                  </p>
                </div>
              </div>

              {/* Strong NDA & Confidentiality */}
              <div className="flex items-start space-x-3 p-4 bg-slate-800/30 rounded-xl border border-slate-700/50">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Strong NDA & Confidentiality
                  </h3>
                  <p className="text-slate-300 text-sm">
                    Strict non-disclosure and data security policies to
                    safeguard your business and client trust.
                  </p>
                </div>
              </div>

              {/* Selective Agency Focus */}
              <div className="flex items-start space-x-3 p-4 bg-slate-800/30 rounded-xl border border-slate-700/50">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Selective Agency Focus
                  </h3>
                  <p className="text-slate-300 text-sm">
                    We partner with chosen agencies, offering dedicated
                    attention and long-term collaboration.
                  </p>
                </div>
              </div>

              {/* Global Trust */}
              <div className="flex items-start space-x-3 p-4 bg-slate-800/30 rounded-xl border border-slate-700/50 md:col-span-2">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Global Trust
                  </h3>
                  <p className="text-slate-300 text-sm">
                    Chosen by leading digital vendors and agencies worldwide for
                    reliable delivery.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 shadow-2xl">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Get Started Today
                  </h3>
                  <p className="text-slate-300 text-sm">
                    Ready to partner with us? Let's discuss your project needs.
                  </p>
                </div>

                <form className="space-y-4">
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-300 mb-1"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-300 mb-1"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  {/* Company and Service Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-slate-300 mb-1"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
                        placeholder="Company name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-slate-300 mb-1"
                      >
                        Service
                      </label>
                      <select
                        id="service"
                        className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
                      >
                        <option value="">Select service</option>
                        <option value="web-development">Web Development</option>
                        <option value="mobile-app">Mobile Apps</option>
                        <option value="software-development">
                          Software Dev
                        </option>
                        <option value="ui-ux-design">UI/UX Design</option>
                        <option value="ai-integration">AI Integration</option>
                        <option value="cloud-solutions">Cloud Solutions</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-300 mb-1"
                    >
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none text-sm"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-500 hover:to-blue-600 transform hover:scale-105"
                  >
                    Send Message
                  </button>

                  {/* Privacy Note */}
                  <p className="text-xs text-slate-400 text-center leading-relaxed">
                    By submitting this form, you agree to our privacy policy.
                  </p>
                </form>
              </div>
            </div>
          </motion.div>

          {/* White-Label Development Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="gradient-text">White-Label Development</span>
              <br />
              You Can Rely On
            </h2>
            <p className="text-lg text-slate-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              Focus on growing your business while we handle the technical
              execution behind the scenes. Our white-label development services
              are designed for agencies and consultants who need a dependable
              partner to deliver high-quality web, software, and app
              solutions—on time, on brand, and under strict confidentiality.
            </p>

            {/* Dashboard Stats Section */}
            <div className="max-w-6xl mx-auto">
              <div className="relative">
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-3xl opacity-20 scale-105"></div>

                {/* Main dashboard container */}
                <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
                  {/* Top Stats Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {/* Projects Delivered */}
                    <div className="text-center p-6 bg-slate-900/30 rounded-2xl border border-slate-700/30">
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-3xl lg:text-4xl font-bold text-blue-400 mb-2">
                        2,000+
                      </div>
                      <div className="text-sm text-slate-300 font-medium">
                        projects delivered
                      </div>
                      <div className="text-xs text-slate-400 mt-1">
                        Successfully completed
                      </div>
                    </div>

                    {/* Countries Served */}
                    <div className="text-center p-6 bg-slate-900/30 rounded-2xl border border-slate-700/30">
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-3xl lg:text-4xl font-bold text-blue-400 mb-2">
                        25+
                      </div>
                      <div className="text-sm text-slate-300 font-medium">
                        countries served
                      </div>
                      <div className="text-xs text-slate-400 mt-1">
                        Global presence
                      </div>
                    </div>

                    {/* Years of Expertise */}
                    <div className="text-center p-6 bg-slate-900/30 rounded-2xl border border-slate-700/30">
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-3xl lg:text-4xl font-bold text-blue-400 mb-2">
                        8+
                      </div>
                      <div className="text-sm text-slate-300 font-medium">
                        years of expertise
                      </div>
                      <div className="text-xs text-slate-400 mt-1">
                        Industry experience
                      </div>
                    </div>

                    {/* Agency Partnerships */}
                    <div className="text-center p-6 bg-slate-900/30 rounded-2xl border border-slate-700/30">
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-3xl lg:text-4xl font-bold text-blue-400 mb-2">
                        150+
                      </div>
                      <div className="text-sm text-slate-300 font-medium">
                        agency partnerships
                      </div>
                      <div className="text-xs text-slate-400 mt-1">
                        Trusted relationships
                      </div>
                    </div>
                  </div>

                  {/* Development Dashboard Section */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Side - Dashboard Badge */}
                    <div className="lg:col-span-1">
                      <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 rounded-2xl p-6 border border-blue-500/30 h-full">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                              <Target className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-white font-semibold">
                              Development Dashboard
                            </span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span className="text-xs text-green-400 font-medium">
                              Live
                            </span>
                          </div>
                        </div>

                        <div className="text-center py-8">
                          <div className="text-sm text-slate-300 mb-2">
                            Real-time project insights
                          </div>
                          <div className="grid grid-cols-3 gap-4 mb-6">
                            <div className="text-center">
                              <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center mx-auto mb-2">
                                <Zap className="w-6 h-6 text-blue-400" />
                              </div>
                              <div className="text-xs text-slate-400">
                                Web Dev
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center mx-auto mb-2">
                                <Users className="w-6 h-6 text-purple-400" />
                              </div>
                              <div className="text-xs text-slate-400">
                                Mobile
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center mx-auto mb-2">
                                <Globe className="w-6 h-6 text-green-400" />
                              </div>
                              <div className="text-xs text-slate-400">
                                Backend
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Performance Metrics */}
                    <div className="lg:col-span-2">
                      <div className="bg-slate-900/30 rounded-2xl p-6 border border-slate-700/30 h-full">
                        <div className="flex items-center space-x-2 mb-6">
                          <Zap className="w-5 h-5 text-blue-400" />
                          <h3 className="text-lg font-semibold text-white">
                            Performance Metrics
                          </h3>
                        </div>

                        <div className="space-y-6">
                          {/* Client Satisfaction */}
                          <div>
                            <div className="flex justify-between items-center mb-3">
                              <span className="text-slate-300 font-medium">
                                Client Satisfaction
                              </span>
                              <span className="text-blue-400 font-bold text-lg">
                                98%
                              </span>
                            </div>
                            <div className="w-full bg-slate-700 rounded-full h-3">
                              <div
                                className="bg-gradient-to-r from-blue-500 to-cyan-400 h-3 rounded-full transition-all duration-1000 ease-out"
                                style={{ width: "98%" }}
                              ></div>
                            </div>
                          </div>

                          {/* On-Time Delivery */}
                          <div>
                            <div className="flex justify-between items-center mb-3">
                              <span className="text-slate-300 font-medium">
                                On-Time Delivery
                              </span>
                              <span className="text-green-400 font-bold text-lg">
                                95%
                              </span>
                            </div>
                            <div className="w-full bg-slate-700 rounded-full h-3">
                              <div
                                className="bg-gradient-to-r from-green-500 to-emerald-400 h-3 rounded-full transition-all duration-1000 ease-out"
                                style={{ width: "95%" }}
                              ></div>
                            </div>
                          </div>

                          {/* Quality Score */}
                          <div>
                            <div className="flex justify-between items-center mb-3">
                              <span className="text-slate-300 font-medium">
                                Quality Score
                              </span>
                              <span className="text-purple-400 font-bold text-lg">
                                97%
                              </span>
                            </div>
                            <div className="w-full bg-slate-700 rounded-full h-3">
                              <div
                                className="bg-gradient-to-r from-purple-500 to-pink-400 h-3 rounded-full transition-all duration-1000 ease-out"
                                style={{ width: "97%" }}
                              ></div>
                            </div>
                          </div>
                        </div>

                        {/* Bottom badges */}
                        <div className="grid grid-cols-2 gap-4 mt-6">
                          <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-600/30">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center">
                                <Lock className="w-4 h-4 text-blue-400" />
                              </div>
                              <div>
                                <div className="text-white font-semibold text-sm">
                                  Secure
                                </div>
                                <div className="text-slate-400 text-xs">
                                  Protected
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-600/30">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-green-600/20 rounded-lg flex items-center justify-center">
                                <Zap className="w-4 h-4 text-green-400" />
                              </div>
                              <div>
                                <div className="text-white font-semibold text-sm">
                                  Fast
                                </div>
                                <div className="text-slate-400 text-xs">
                                  Optimized
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 5-Step Process Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
              {/* Left Side - Content */}
              <div className="text-left">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                  <span className="gradient-text">5-Step Process</span> to Keep
                  <br />
                  Your Clients Happy
                </h2>
                <p className="text-lg text-slate-200 leading-relaxed">
                  Our streamlined methodology ensures every project delivers
                  exceptional results that exceed expectations
                </p>
              </div>

              {/* Right Side - Step Cards */}
              <div className="relative">
                <div className="overflow-hidden">
                  <div className="flex space-x-4 animate-slide-left">
                    {/* Step 1 - Discovery & Planning */}
                    <div className="min-w-[300px] bg-gradient-to-br from-blue-900/40 to-blue-800/40 rounded-2xl p-6 border border-blue-700/50 shadow-xl">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                          <span className="text-white font-bold">1</span>
                        </div>
                        <div className="text-xs text-blue-400 font-medium">
                          Discovery
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-3">
                        Discovery & Planning
                      </h3>
                      <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                        We dive deep into your requirements, understand your
                        vision, and create a comprehensive project roadmap.
                      </p>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full w-full"></div>
                      </div>
                    </div>

                    {/* Step 2 - Design & Prototype */}
                    <div className="min-w-[300px] bg-gradient-to-br from-purple-900/40 to-purple-800/40 rounded-2xl p-6 border border-purple-700/50 shadow-xl">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center">
                          <span className="text-white font-bold">2</span>
                        </div>
                        <div className="text-xs text-purple-400 font-medium">
                          Design
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-3">
                        Design & Prototype
                      </h3>
                      <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                        Our designers create stunning, user-friendly interfaces
                        with interactive prototypes for your approval.
                      </p>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full w-full"></div>
                      </div>
                    </div>

                    {/* Step 3 - Development */}
                    <div className="min-w-[300px] bg-gradient-to-br from-green-900/40 to-green-800/40 rounded-2xl p-6 border border-green-700/50 shadow-xl">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center">
                          <span className="text-white font-bold">3</span>
                        </div>
                        <div className="text-xs text-green-400 font-medium">
                          Development
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-3">
                        Development
                      </h3>
                      <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                        Our expert developers bring your vision to life using
                        cutting-edge technologies and best practices.
                      </p>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full w-full"></div>
                      </div>
                    </div>

                    {/* Step 4 - Testing & QA */}
                    <div className="min-w-[300px] bg-gradient-to-br from-yellow-900/40 to-orange-800/40 rounded-2xl p-6 border border-yellow-700/50 shadow-xl">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 bg-yellow-600 rounded-xl flex items-center justify-center">
                          <span className="text-white font-bold">4</span>
                        </div>
                        <div className="text-xs text-yellow-400 font-medium">
                          Testing
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-3">
                        Testing & QA
                      </h3>
                      <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                        Rigorous testing ensures bug-free, high-performance
                        solutions that meet the highest quality standards.
                      </p>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full w-full"></div>
                      </div>
                    </div>

                    {/* Step 5 - Launch & Support */}
                    <div className="min-w-[300px] bg-gradient-to-br from-cyan-900/40 to-teal-800/40 rounded-2xl p-6 border border-cyan-700/50 shadow-xl">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 bg-cyan-600 rounded-xl flex items-center justify-center">
                          <span className="text-white font-bold">5</span>
                        </div>
                        <div className="text-xs text-cyan-400 font-medium">
                          Launch
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-3">
                        Launch & Support
                      </h3>
                      <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                        Seamless deployment with ongoing support and maintenance
                        to ensure your project's continued success.
                      </p>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-cyan-500 to-teal-500 h-2 rounded-full w-full"></div>
                      </div>
                    </div>

                    {/* Duplicate cards for seamless loop */}
                    <div className="min-w-[300px] bg-gradient-to-br from-blue-900/40 to-blue-800/40 rounded-2xl p-6 border border-blue-700/50 shadow-xl">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                          <span className="text-white font-bold">1</span>
                        </div>
                        <div className="text-xs text-blue-400 font-medium">
                          Discovery
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-3">
                        Discovery & Planning
                      </h3>
                      <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                        We dive deep into your requirements, understand your
                        vision, and create a comprehensive project roadmap.
                      </p>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full w-full"></div>
                      </div>
                    </div>

                    <div className="min-w-[300px] bg-gradient-to-br from-purple-900/40 to-purple-800/40 rounded-2xl p-6 border border-purple-700/50 shadow-xl">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center">
                          <span className="text-white font-bold">2</span>
                        </div>
                        <div className="text-xs text-purple-400 font-medium">
                          Design
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-3">
                        Design & Prototype
                      </h3>
                      <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                        Our designers create stunning, user-friendly interfaces
                        with interactive prototypes for your approval.
                      </p>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full w-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step Indicators */}
                <div className="flex justify-center mt-6 space-x-2">
                  {[1, 2, 3, 4, 5].map((step) => (
                    <div
                      key={step}
                      className="w-2 h-2 rounded-full bg-slate-600 hover:bg-blue-400 transition-colors cursor-pointer"
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Team Extension Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mb-16"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Think of us as an{" "}
                <span className="gradient-text">extension of your team</span>
              </h2>
              <p className="text-lg text-slate-200 leading-relaxed">
                Let's kick things off with a no-pressure consultation and
                explore how we can grow together—because when you succeed, we
                all succeed.
              </p>
            </div>
          </motion.div>

          {/* Why Agencies Trust Flowrush Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mb-16"
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                  Why Agencies Worldwide Trust{" "}
                  <span className="gradient-text">Flowrush</span> as Their Tech
                  Partner
                </h2>
              </div>

              {/* Cards Grid - 2 rows of 3 cards each */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Card 1 - Strict Confidentiality */}
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-blue-500/30 group">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors">
                    <Lock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Strict Confidentiality & White-Label Delivery
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    We operate under NDAs and deliver fully branded
                    solutions—your clients never know we're there.
                  </p>
                </div>

                {/* Card 2 - Scalable Teams */}
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-purple-500/30 group">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-500 transition-colors">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Scalable On-Demand Teams
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    Quickly expand your development capacity with dedicated
                    experts, without the overhead.
                  </p>
                </div>

                {/* Card 3 - Reliable Delivery */}
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-green-500/30 group">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-500 transition-colors">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Reliable, On-Time Delivery
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    We meet your deadlines—no delays, no excuses—so you can
                    maintain client trust.
                  </p>
                </div>

                {/* Card 4 - Custom Solutions */}
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-yellow-500/30 group">
                  <div className="w-12 h-12 bg-yellow-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-yellow-500 transition-colors">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Custom-Built Solutions
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    Every product is tailored to your client's unique goals,
                    tech stack, and business needs.
                  </p>
                </div>

                {/* Card 5 - Transparent Communication */}
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-cyan-500/30 group">
                  <div className="w-12 h-12 bg-cyan-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-cyan-500 transition-colors">
                    <Headphones className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Transparent Communication
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    No tech jargon—just clear, consistent updates and
                    collaboration at every step.
                  </p>
                </div>

                {/* Card 6 - Post-Launch Support */}
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-indigo-500/30 group">
                  <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-indigo-500 transition-colors">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Post-Launch Support & Maintenance
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    We offer lifetime support, ensuring your client projects
                    remain stable and successful long after delivery.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Reviews and Testimonials Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mb-16"
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                  <span className="gradient-text">
                    Reviews and Testimonials
                  </span>
                  <br />
                  from Our Agency Partners
                </h2>
                <p className="text-lg text-slate-200">
                  Hear from agencies worldwide who trust Flowrush as their
                  white-label development partner
                </p>
              </div>

              {/* Reviews Grid - 3 cards in a row */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Review 1 */}
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-blue-500/30 group">
                  {/* Stars Rating */}
                  <div className="flex items-center mb-6">
                    {[1, 2, 3, 4].map((star) => (
                      <Star
                        key={star}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                    <Star className="w-5 h-5 text-yellow-400 fill-current opacity-50" />
                    <span className="ml-2 text-sm text-slate-400">4.5/5</span>
                  </div>

                  {/* Review Text */}
                  <blockquote className="text-slate-200 leading-relaxed mb-6 italic">
                    "Flowrush has been an incredible white-label partner. Their
                    team seamlessly integrates with ours, delivering exceptional
                    results while keeping our brand front and center. Our
                    clients are thrilled with the quality."
                  </blockquote>

                  {/* Reviewer Info */}
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        AG
                      </span>
                    </div>
                    <div className="ml-3">
                      <div className="text-white font-medium">
                        Agency Partner
                      </div>
                      <div className="text-slate-400 text-sm">
                        Digital Marketing Agency
                      </div>
                    </div>
                  </div>
                </div>

                {/* Review 2 */}
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-purple-500/30 group">
                  {/* Stars Rating */}
                  <div className="flex items-center mb-6">
                    {[1, 2, 3, 4].map((star) => (
                      <Star
                        key={star}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                    <Star className="w-5 h-5 text-yellow-400 fill-current opacity-50" />
                    <span className="ml-2 text-sm text-slate-400">4.5/5</span>
                  </div>

                  {/* Review Text */}
                  <blockquote className="text-slate-200 leading-relaxed mb-6 italic">
                    "The level of expertise and professionalism is outstanding.
                    Flowrush delivers exactly what we need, on time and under
                    strict confidentiality. They've become our trusted
                    development arm."
                  </blockquote>

                  {/* Reviewer Info */}
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        TP
                      </span>
                    </div>
                    <div className="ml-3">
                      <div className="text-white font-medium">Tech Partner</div>
                      <div className="text-slate-400 text-sm">
                        Software Consultancy
                      </div>
                    </div>
                  </div>
                </div>

                {/* Review 3 */}
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-green-500/30 group">
                  {/* Stars Rating */}
                  <div className="flex items-center mb-6">
                    {[1, 2, 3, 4].map((star) => (
                      <Star
                        key={star}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                    <Star className="w-5 h-5 text-yellow-400 fill-current opacity-50" />
                    <span className="ml-2 text-sm text-slate-400">4.5/5</span>
                  </div>

                  {/* Review Text */}
                  <blockquote className="text-slate-200 leading-relaxed mb-6 italic">
                    "Working with Flowrush feels like having an extended
                    in-house team. Their white-label approach is perfect - our
                    clients never know we partner with them, which is exactly
                    what we wanted."
                  </blockquote>

                  {/* Reviewer Info */}
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        WA
                      </span>
                    </div>
                    <div className="ml-3">
                      <div className="text-white font-medium">Web Agency</div>
                      <div className="text-slate-400 text-sm">
                        Creative Design Studio
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tools and Stack Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mb-16"
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                  <span className="gradient-text">Tools and Stack</span>
                  <br />
                  We Use
                </h2>
                <p className="text-lg text-slate-200 max-w-3xl mx-auto">
                  We leverage the latest technologies and frameworks to build
                  scalable, high-performance solutions across all platforms
                </p>
              </div>

              {/* Tech Category Chips */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {(Object.keys(techStackLogos) as TechCategory[]).map(
                  (category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedTechCategory(category)}
                      className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                        selectedTechCategory === category
                          ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                          : "bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:bg-slate-700/50 hover:text-white"
                      }`}
                    >
                      {category}
                    </button>
                  )
                )}
              </div>

              {/* Tech Stack Logos */}
              <motion.div
                key={selectedTechCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto"
              >
                {techStackLogos[selectedTechCategory].map((logo, index) => (
                  <motion.div
                    key={`${selectedTechCategory}-${index}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/30 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl group"
                  >
                    <div className="w-full h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={logo}
                        alt={`${selectedTechCategory} technology`}
                        width={64}
                        height={64}
                        className="max-w-full max-h-full object-contain filter brightness-90 group-hover:brightness-100 transition-all duration-300"
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mb-16"
          >
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                  <span className="gradient-text">Frequently Asked</span>
                  <br />
                  Questions
                </h2>
                <p className="text-lg text-slate-200">
                  Get answers to common questions about our services and
                  processes
                </p>
              </div>

              {/* FAQ Items */}
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden hover:border-blue-500/30 transition-all duration-300"
                  >
                    <button
                      onClick={() =>
                        setOpenFAQ(openFAQ === index ? null : index)
                      }
                      className="w-full px-6 py-6 text-left flex items-center justify-between group hover:bg-slate-700/30 transition-all duration-200"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm group-hover:bg-blue-500 transition-colors">
                          {index + 1}
                        </div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                          {faq.question}
                        </h3>
                      </div>
                      <ChevronDown
                        className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${
                          openFAQ === index ? "rotate-180 text-blue-400" : ""
                        }`}
                      />
                    </button>

                    <motion.div
                      initial={false}
                      animate={{
                        height: openFAQ === index ? "auto" : 0,
                        opacity: openFAQ === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0">
                        <div className="pl-12">
                          <p className="text-slate-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* Contact CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.5 }}
                className="text-center mt-12"
              >
                <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-blue-500/20">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Still have questions?
                  </h3>
                  <p className="text-slate-300 mb-6">
                    We're here to help! Get in touch with our team for
                    personalized answers.
                  </p>
                  <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:from-blue-500 hover:to-blue-600">
                    Contact Us
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* 24/7 Global Connectivity Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="mb-16"
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Side - Content */}
                <div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                    <span className="gradient-text">
                      24/7 Global Connectivity
                    </span>
                    <br />
                    That Works Around You
                  </h2>
                  <p className="text-lg text-slate-200 leading-relaxed mb-8">
                    No matter where you are, we're always within reach. With
                    teams across time zones, Flowrush ensures round-the-clock
                    communication, seamless collaboration, and real-time
                    updates—because your deadlines don't wait, and neither do
                    we.
                  </p>

                  {/* Global Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                        <Globe className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">
                          Global Teams
                        </h4>
                        <p className="text-slate-400 text-sm">
                          Across multiple time zones
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                        <Headphones className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">
                          24/7 Support
                        </h4>
                        <p className="text-slate-400 text-sm">
                          Always available
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                        <Zap className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">
                          Real-time Updates
                        </h4>
                        <p className="text-slate-400 text-sm">
                          Instant communication
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">
                          Seamless Collaboration
                        </h4>
                        <p className="text-slate-400 text-sm">
                          Integrated workflows
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Contact Form */}
                <div>
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Get Started Today
                      </h3>
                      <p className="text-slate-300">
                        Connect with Our Global Team
                      </p>
                    </div>

                    <form className="space-y-6">
                      {/* Full Name and Email Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="fullName"
                            className="block text-sm font-medium text-slate-300 mb-2"
                          >
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="fullName"
                            className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            placeholder="Your full name"
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-slate-300 mb-2"
                          >
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            placeholder="your@email.com"
                            required
                          />
                        </div>
                      </div>

                      {/* Company Field */}
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
                          className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="Your company name"
                        />
                      </div>

                      {/* City and Country Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="city"
                            className="block text-sm font-medium text-slate-300 mb-2"
                          >
                            City
                          </label>
                          <input
                            type="text"
                            id="city"
                            className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            placeholder="Your city"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="country"
                            className="block text-sm font-medium text-slate-300 mb-2"
                          >
                            Country
                          </label>
                          <input
                            type="text"
                            id="country"
                            className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            placeholder="Your country"
                          />
                        </div>
                      </div>

                      {/* WhatsApp Number */}
                      <div>
                        <label
                          htmlFor="whatsapp"
                          className="block text-sm font-medium text-slate-300 mb-2"
                        >
                          WhatsApp Number
                        </label>
                        <input
                          type="tel"
                          id="whatsapp"
                          className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>

                      {/* Message Field */}
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-slate-300 mb-2"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                          placeholder="Tell us about your project requirements..."
                        ></textarea>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-500 hover:to-blue-600 transform hover:scale-105"
                      >
                        Connect with Our Team
                      </button>

                      {/* Privacy Note */}
                      <p className="text-xs text-slate-400 text-center leading-relaxed">
                        By submitting this form, you agree to our privacy policy
                        and terms of service.
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
