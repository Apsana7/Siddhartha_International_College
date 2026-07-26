"use client";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative w-full py-20 md:py-18 overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 z-10 bg-black/60" />

      <div className="relative z-20 w-11/12 max-w-4xl mx-auto text-center text-white">
        <h2
          className="text-3xl md:text-4xl lg:text-4xl font-bold leading-tight mb-4"
          style={{ fontFamily: '"Times New Roman", Times, serif' }}
        >
          Ready to Write Your Success Story?
        </h2>
        <p className="text-base md:text-lg text-white/80 mb-8 max-w-xl mx-auto">
          Join thousands of successful alumni who have transformed their careers
          with our world-class BHM and MBA programs.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/admission"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg"
          >
            Apply Now
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/30 text-white  px-4 py-2 rounded-lg transition-all duration-300"
          >
            Explore Programs
            <Calendar className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}