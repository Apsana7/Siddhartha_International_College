"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image"; 
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Image
              src="/slogo.png"
              alt="Siddhartha International College Logo"
              width={200}
              height={60}
              className="mb-3"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Building excellence with quality, safety, and trust for over two decades.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Our Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Our Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/events"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Gallery
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/careers"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Careers
                </Link>
              </li> */}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3">Get in Touch</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-3 h-3 text-orange-500 shrink-0 mt-0.5" />
                <span>123 Builder Ave, Suite 200, City, ST 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-3 h-3 text-orange-500 shrink-0" />
                <a href="tel:+1234567890" className="hover:text-white transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-3 h-3 text-orange-500 shrink-0" />
                <a href="mailto:info@buildco.com" className="hover:text-white transition-colors">
                  info@buildco.com
                </a>
              </li>
            </ul>
           
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} BuildCo. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;