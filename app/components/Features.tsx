"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Users,
  Shield,
  BarChart3,
  Clock,
  Smartphone,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Process tasks and workflows at unprecedented speed with our optimized engine.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Seamlessly collaborate with your team members in real-time across all projects.",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-level security with end-to-end encryption and compliance certifications.",
    color: "from-green-400 to-green-600",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Get deep insights into your productivity with comprehensive analytics and reports.",
    color: "from-purple-400 to-purple-600",
  },
  {
    icon: Clock,
    title: "Time Tracking",
    description:
      "Track time spent on tasks and projects with automatic time detection.",
    color: "from-pink-400 to-pink-600",
  },
  {
    icon: Smartphone,
    title: "Mobile Ready",
    description:
      "Access your workflows anywhere with our fully responsive mobile application.",
    color: "from-indigo-400 to-indigo-600",
  },
];

const benefits = [
  "Increase productivity by 300%",
  "Reduce project completion time by 50%",
  "Eliminate manual repetitive tasks",
  "Improve team communication",
  "Real-time project monitoring",
  "Automated reporting and insights",
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for{" "}
            <span className="gradient-text">Modern Teams</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to streamline your workflow, boost productivity,
            and achieve your goals faster than ever before.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-transparent"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Benefits list */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Flowrush?
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Join thousands of teams who have transformed their productivity
                with Flowrush's powerful automation and collaboration tools.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="mt-8 group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>

            {/* Right side - Visual element */}
            <div className="relative">
              <div className="relative">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-2xl opacity-20"></div>

                {/* Main visual */}
                <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                  <div className="space-y-6">
                    {/* Progress indicators */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-600">
                          Productivity Boost
                        </span>
                        <span className="text-sm font-bold text-green-600">
                          +300%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-600">
                          Time Saved
                        </span>
                        <span className="text-sm font-bold text-blue-600">
                          -50%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-blue-400 to-blue-600 h-3 rounded-full"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-600">
                          Team Efficiency
                        </span>
                        <span className="text-sm font-bold text-purple-600">
                          +250%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-purple-400 to-purple-600 h-3 rounded-full"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                    </div>

                    {/* Chart representation */}
                    <div className="mt-8 p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900 mb-2">
                          98%
                        </div>
                        <div className="text-sm text-gray-600">
                          Customer Satisfaction
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
