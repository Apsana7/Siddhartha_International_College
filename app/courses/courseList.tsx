"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

const allCourses = [
  {
    id: "1",
    title: "Python with Django",
    description:
      "Build robust web applications with Python and the Django framework.",
    image:
      "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1260",
    duration: "4 Months",
    level: "Intermediate",
    category: "Web Development",
  },
  {
    id: "2",
    title: "UI/UX Design",
    description:
      "Master user interface and user experience design principles.",
    image:
      "https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=1260",
    duration: "3 Months",
    level: "Beginner",
    category: "UI/UX Design",
  },
  {
    id: "3",
    title: "Flutter",
    description:
      "Cross‑platform mobile app development with Flutter and Dart.",
    image:
      "https://images.pexels.com/photos/301833/pexels-photo-301833.jpeg?auto=compress&cs=tinysrgb&w=1260",
    duration: "3 Months",
    level: "Intermediate",
    category: "Mobile App Development",
  },
  {
    id: "4",
    title: "SEO and Digital Marketing",
    description:
      "Optimize websites and drive traffic with proven digital marketing strategies.",
    image:
      "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1260",

    duration: "2 Months",
    level: "Beginner",
    category: "SEO and Digital Marketing Services",
  },
  {
    id: "5",
    title: "Software Development",
    description:
      "Full‑stack software development with modern tools and best practices.",
    image:
      "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1260",
    duration: "6 Months",
    level: "Advanced",
    category: "Software Development",
  },
  {
    id: "6",
    title: "Web Development",
    description:
      "Master HTML, CSS, JavaScript, and modern frameworks like React and Next.js.",
    image:
      "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260",
    duration: "4 Months",
    level: "Beginner",
    category: "Web Development",
  },
  {
    id: "7",
    title: "Designing",
    description:
      "Graphic design, branding, and visual communication using Adobe Creative Suite.",
    image:
      "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260",
    duration: "3 Months",
    level: "Beginner",
    category: "Designing",
  },
];

const categories = [
  "All",
  "Designing",
  "Mobile App Development",
  "SEO and Digital Marketing Services",
  "Software Development",
  "UI/UX Design",
  "Web Development",
];

export default function CourseList() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = useMemo(() => {
    return allCourses.filter((course) => {
      const matchesCategory =
        selectedCategory === "All" || course.category === selectedCategory;
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <>
      {/* Filter Bar */}
      <section className="mt-10 z-10 bg-white  shadow-sm">
        <div className="w-11/12 mx-auto py-4 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex flex-wrap gap-4 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 text-sm font-medium rounded-lg  whitespace-nowrap transition duration-200 ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-100  text-gray-700  hover:bg-gray-200 "
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg bg-gray-50  text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg
              className="absolute left-3 top-2.5 w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Course Cards */}
      <section className="w-11/12 mx-auto py-12 px-4">
        {filteredCourses.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500  text-lg">
              No courses match your filters.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="group bg-white  rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-48 w-full bg-gray-200">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {course.level}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-gray-500  text-sm leading-relaxed line-clamp-2">
                    {course.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs font-medium text-gray-400  bg-gray-100 px-3 py-1 rounded-full">
                      🕒 {course.duration}
                    </span>
                    <Link
                      href={`/courses/${course.id}`}
                      className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800  transition-colors"
                    >
                      Read More
                      <svg
                        className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}