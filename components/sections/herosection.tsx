import React from "react";
import Link from "next/link";
import { 
  ArrowUpRight, 
  GraduationCap, 
  BookOpen, 
  Users,
  CalendarDays
} from "lucide-react";

const Hero: React.FC = () => {
  const heroImage =
    "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1920";

  return (
    <div className="relative min-h-screen flex flex-col bg-white text-slate-800">
      
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="University Campus"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 flex-1 flex items-center justify-center px-6 lg:px-22 mt-10 py-24">
        <div className="max-w-4xl w-full text-white text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-4 py-1.5 rounded-full border border-white/30 mb-6">
            <GraduationCap className="w-4 h-4" />
            <span>Excellence in Education Since 1965</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-4xl flex flex-col gap-4 font-bold tracking-tight leading-[1.1]">
            <span className="text-white text-4xl ">Shape your future at</span>
            <span className="text-orange-400 lg:text-5xl">Siddhartha International College</span>
          </h1>

          <p className="mt-6 text-md sm:text-md text-white max-w-2xl font-light leading-relaxed mx-auto">
            Discover a vibrant community where academic rigour meets real-world impact. 
            With over 100 undergraduate and graduate programs, we prepare you to lead 
            and innovate.
          </p>

          {/* Center buttons */}
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link
              href="/admissions"
              className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 text-sm font-semibold rounded-md shadow-lg hover:bg-amber-400 transition-all duration-200"
            >
              Apply Now
              <ArrowUpRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/visit"
              className="group inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-2 text-base font-semibold rounded-md hover:bg-white/30 transition-all duration-200"
            >
              Explore programs
              <CalendarDays className="w-5 h-5" />
            </Link>
          </div>

          {/* Center stats */}
          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 pt-8 justify-center">
            <div className="flex items-center gap-2.5">
              <BookOpen className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-medium uppercase tracking-wider text-white">100+ Programs</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Users className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-medium uppercase tracking-wider text-white">15,000+ Students</span>
            </div>
            <div className="flex items-center gap-2.5">
              <GraduationCap className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-medium uppercase tracking-wider text-white">Top 10% Nationally</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
