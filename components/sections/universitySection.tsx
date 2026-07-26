import Link from "next/link";
import Image from "next/image";
import { Sparkles, Users, BookOpen, Award } from "lucide-react";

export function UniversitySection() {
  const unidetail = {
    title: "Empowering Future Leaders Since 1965",
    description: `
      <p class="mb-3">
        Western Mega College is a premier institution dedicated to academic excellence, 
        innovation, and holistic development. With a legacy spanning over five decades, 
        we have nurtured thousands of professionals who now lead in diverse fields 
        across the globe.
      </p>
      <p>
        Our state-of-the-art campus, research-driven approach, and strong industry 
        partnerships ensure that every student receives an education that is both 
        rigorous and relevant. We believe in shaping not just careers, but character.
      </p>
    `,
  };

  const stats = [
    { icon: Users, value: "15,000+", label: "Students" },
    { icon: BookOpen, value: "100+", label: "Programs" },
    { icon: Award, value: "Top 10%", label: "Nationally" },
  ];

  return (
    <section className="py-16 md:py-24 bg-linear-to-br from-slate-50 via-white to-blue-50/40">
      <div className="w-11/12  mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full border border-orange-200/50">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              Excellence in Education
            </div>

            <h2
              className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900 leading-tight"
              style={{ fontFamily: '"Times New Roman", Times, serif' }}
            >
              {unidetail.title}
            </h2>

            <div
              className="text-gray-600 text-sm md:text-md font-light leading-relaxed space-y-3"
              dangerouslySetInnerHTML={{ __html: unidetail.description }}
            />

            <div className="flex items-center justify-between pt-2  w-full border-gray-200/50">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="p-2 text-blue-600">
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="https://www.lincoln.edu.my/"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-3 py-2 rounded-lg font-medium shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:bg-blue-700 transition-all duration-300"
              >
                Discover More
              </Link>
              <Link
                href="/admission"
                className="inline-flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-3 py-2 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 transition-colors duration-300"
              >
                Apply Now
                <span className="text-lg">→</span>
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-200/30">
              <Image
                src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="University Campus"
                width={800}
                height={400}
                className="w-full h-[70vh] object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-amber-400/10" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg border border-white/20">
                <p className="text-xs font-semibold text-gray-800 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  #1 Ranked University
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

