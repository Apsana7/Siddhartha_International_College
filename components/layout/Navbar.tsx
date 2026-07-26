"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import logo from '../../public/ssss.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBg = isScrolled ? "bg-white shadow-lg" : "bg-black/15";
  const textColor = !isScrolled ? "text-white" : "text-blue-800";

  return (
    <header className="fixed w-full z-50 top-0">
      {/* Top Bar */}
      <div className="hidden lg:flex bg-blue-700 text-white text-xs py-1.5 px-4">
        <div className="w-11/12 mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" />
              <span>
                985-7062883</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" />
              <span>sic.butwal@gmail.com</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>Sun – Fri: 6:00 AM – 5:00 PM</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>
                Kalikapath, Butwal, Nepal, 32900</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`flex items-center h-14 lg:h-20 transition-all duration-300 ${navBg}`}
      >
        <div className="relative w-11/12 mx-auto">
          <div className="flex items-center justify-between h-14 lg:h-20">
            <Link href="/" className="flex items-center shrink-0 space-x-3">
              <Image
                width={200}
                height={100}
                src={logo}
                className="object-contain"
                alt="siddharth College"
              />

            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex text-xs items-center space-x-6">
              <Link href="/" className={`font-normal transition-colors ${textColor}`}>
                HOME
              </Link>
              <Link href="/about" className={`font-normal transition-colors ${textColor}`}>
                ABOUT
              </Link>
              <Link href="/courses" className={`font-normal uppercase transition-colors ${textColor}`}>
                COURSES
              </Link>

              {/* OUR TEAMS – now a direct link (no dropdown) */}
              <Link href="/our-teams" className={`font-normal transition-colors ${textColor}`}>
                OUR TEAMS
              </Link>

              <Link href="/gallery" className={`font-normal transition-colors ${textColor}`}>
                GALLERY
              </Link>
              <Link href="/blogs" className={`font-normal transition-colors ${textColor}`}>
                BLOGS
              </Link>
              <Link href="/events" className={`font-normal transition-colors ${textColor}`}>
                EVENTS
              </Link>
              <Link href="/admission" className={`font-normal transition-colors ${textColor}`}>
                ADMISSION
              </Link>
              <Link href="/contact" className={`font-normal transition-colors ${textColor}`}>
                CONTACT
              </Link>
            </nav>

            <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <X className={`h-6 w-6 ${textColor}`} />
              ) : (
                <Menu className={`h-6 w-6 ${textColor}`} />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 px-3 absolute inset-x-0 top-18 rounded-lg border-t bg-white/95 backdrop-blur-sm shadow-lg">
              <nav className="flex flex-col space-y-4">
                <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Home
                </Link>
                <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                  About
                </Link>
                <Link href="/courses" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Courses
                </Link>
                <Link href="/our-teams" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Our Team
                </Link>
                <Link href="/gallery" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Gallery
                </Link>
                <Link href="/blogs" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Blogs
                </Link>
                <Link href="/events" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Events
                </Link>
                <Link href="/admission" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Admission
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Contact
                </Link>
                <Link
                  href="/admission"
                  className="bg-orange-500 text-white px-4 py-2 text-center rounded-md hover:bg-orange-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Apply Online
                </Link>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
