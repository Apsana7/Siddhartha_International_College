"use client";
import React from "react";
import { GraduationCap, ArrowRight, CheckCircle, BookOpen, Users, Award } from "lucide-react";
import Link from "next/link";

const aboutData = {
  id: 1,
  title: "Excellence in BHM, BIT & MBA Education",
  description: `
    <p class="text-gray-600 mb-6 leading-relaxed">
      Western Mega College stands at the forefront of higher education, offering industry-relevant programs like
      <strong> Bachelor of Science (Hons.) in Hospitality Management (BHM), Bachelor of Information Technology (Hons.) (BIT) </strong>
      and <strong>Master of Business Administration (MBA)</strong>. Our institution is committed to developing skilled hospitality professionals, innovative technology experts and the future business leaders through quality education, practical learning and real-world industry exposure. With modern facilities, experienced faculty and a career-oriented approach. We empower students to succeed in rapidly evolving global environment.
    </p>
    <div class="space-y-4 mb-8">
      <div class="flex items-start space-x-3">
        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
        <div>
          <h4 class="font-semibold text-gray-900">Industry-Focused BHM Program</h4>
          <p class="text-gray-600 text-sm">Hands-on learning with professional kitchen labs, hotel simulations, and internships at top hospitality brands.</p>
        </div>
      </div>
      <div class="flex items-start space-x-3">
        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
        <div>
          <h4 class="font-semibold text-gray-900">Globally Relevant MBA Curriculum</h4>
          <p class="text-gray-600 text-sm">Designed for aspiring business leaders with case studies, live projects, and corporate mentorships.</p>
        </div>
      </div>
      <div class="flex items-start space-x-3">
        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
        <div>
          <h4 class="font-semibold text-gray-900">Technology-Driven BIT Curriculum</h4>
          <p class="text-gray-600 text-sm">Gain expertise in programming languages, cybersecurity, database management, AI, and software development through practical projects and industry-based learning.</p>
        </div>
      </div>
    </div>
  `,
};

export function AboutCollegeSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-linear-to-br from-blue-50/80 via-white to-indigo-50/60">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #1e3a8a 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="relative z-10 w-11/12 max-w-4xl mx-auto">
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm text-blue-700 text-xs font-semibold px-4 py-1.5 rounded-full border border-blue-200/50 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            About Our College
          </div>
        </div>

        {/* Main heading – centered, bold, serif */}
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-6 leading-tight"
          style={{ fontFamily: '"Times New Roman", Times, serif' }}
        >
          {aboutData.title}
        </h2>

        <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-indigo-400 rounded-full mx-auto mb-8" />

        <div className="max-w-3xl mx-auto text-center">
          <div
            className="text-gray-600 text-base md:text-lg leading-relaxed space-y-4 [&>p]:text-gray-600 [&>p]:leading-relaxed [&>strong]:text-blue-700"
            dangerouslySetInnerHTML={{ __html: aboutData.description }}
          />
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-10">
          <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm border border-gray-100">
            <BookOpen className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">3 <span className="text-gray-400">Programs</span></span>
          </div>
          <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm border border-gray-100">
            <Users className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">15+ <span className="text-gray-400">Faculty</span></span>
          </div>
          <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm border border-gray-100">
            <Award className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Top 10% <span className="text-gray-400">Ranked</span></span>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Discover More About Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}