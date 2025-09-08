'use client'

import React from 'react'
import { Zap, Mail, Phone, MapPin, Linkedin, Facebook, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-2 mb-6">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                <Zap className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold">Flowrush Technologies</span>
                        </div>
                        <p className="text-gray-400 mb-6 max-w-md">
                            Flowrush Technologies is a brand under Flowrush & Zencore Marketing LLP. All services offered under this name are delivered by the parent entity. Names, logos, and trademarks are the property of their respective owners. Any mention of partner brands or third-party tools is for reference purposes only and does not imply direct association unless expressly stated.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Sitemap Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Sitemap</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Terms and Conditions
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Disclaimer
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Offices */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Offices</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-2">
                                <MapPin className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                                <div>
                                    <span className="text-gray-400 font-medium">Jaipur</span>
                                    <p className="text-gray-500 text-sm">Jaipur Rajasthan India</p>
                                </div>
                            </li>
                            <li className="flex items-start space-x-2">
                                <MapPin className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                                <div>
                                    <span className="text-gray-400 font-medium">Delhi</span>
                                    <p className="text-gray-500 text-sm">Delhi NCR India</p>
                                </div>
                            </li>
                            <li className="flex items-start space-x-2">
                                <MapPin className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                                <div>
                                    <span className="text-gray-400 font-medium">Canada</span>
                                    <p className="text-gray-500 text-sm">Vaughan, Canada</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-center space-x-3">
                            <Mail className="w-5 h-5 text-gray-400" />
                            <span className="text-gray-400">info@flowrushtechnologies.com</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Phone className="w-5 h-5 text-gray-400" />
                            <span className="text-gray-400">+91 9116098187</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-8 pt-8">
                    <div className="text-center">
                        <p className="text-gray-400 text-sm mb-4">
                            Flowrush Technologies is a brand under Flowrush & Zencore Marketing LLP. All services offered under this name are delivered by the parent entity. Names, logos, and trademarks are the property of their respective owners. Any mention of partner brands or third-party tools is for reference purposes only and does not imply direct association unless expressly stated.
                        </p>
                        <p className="text-gray-400 text-sm">
                            © 2025 Flowrush Technologies | Powered by Zencore Marketing LLP. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
