"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import image1 from "../../public/slogo.png";

const courses = [
    {
        id: 1,
        title: "React Development",
        category: "Frontend",
        image: image1,
        description: "Learn modern React from beginner to advanced.",
    },
    {
        id: 2,
        title: "Next.js Development",
        category: "Frontend",
        image: image1,
        description: "Build full-stack applications using Next.js.",
    },
    {
        id: 3,
        title: "Node.js Development",
        category: "Backend",
        image: image1,
        description: "Create REST APIs and backend applications.",
    },
    {
        id: 4,
        title: "Laravel Development",
        category: "Backend",
        image: image1,
        description: "Master Laravel and build scalable web applications.",
    },
    {
        id: 5,
        title: "UI / UX Design",
        category: "Design",
        image: image1,
        description: "Learn UI/UX principles and modern design tools.",
    },
    {
        id: 6,
        title: "Graphic Design",
        category: "Design",
        image: image1,
        description: "Create stunning graphics using Adobe Photoshop and Illustrator.",
    },
];

export default function CoursesPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = [
        "All",
        ...new Set(courses.map((lesson) => lesson.category)),
    ];

    const filteredCourses = useMemo(() => {
        if (selectedCategory === "All") return courses;

        return courses.filter(
            (course) => course.category === selectedCategory
        );
    }, [selectedCategory]);

    return (
        <main>
            <section className="relative h-[70vh] min-h-75 w-full overflow-hidden">
                <Image
                    src="https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1260"
                    alt="Events"
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="text-center text-white px-4">
                        <h1 className="text-4xl md:text-4xl font-bold">Events</h1>
                        <p className="mt-4 text-lg md:text-lg text-gray-200 max-w-2xl mx-auto">
                            Stay updated with the latest events, workshops, and seminars.
                        </p>
                    </div>
                </div>
            </section>

            <section className="w-11/12 mx-auto px-6 py-16">
                <div className="flex flex-wrap gap-3 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-5 py-2 rounded-full font-medium transition-all duration-300 text-sm ${selectedCategory === category
                                ? "bg-blue-600 text-white shadow-md"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCourses.map((course) => (
                        <div
                            key={course.id}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
                        >
                            <div className="relative h-52 w-full">
                                <Image
                                    src={course.image}
                                    alt={course.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-3">
                                    <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                                        {course.category}
                                    </span>
                                </div>

                                <h2 className="text-xl font-bold text-gray-800 mb-2">
                                    {course.title}
                                </h2>

                                <p className="text-gray-600 text-sm mb-5 line-clamp-3">
                                    {course.description}
                                </p>

                                <Link
                                    href={`/courses/${course.id}`}
                                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700"
                                >
                                    Read More
                                    <svg
                                        className="w-4 h-4"
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
                    ))}
                </div>

                {filteredCourses.length === 0 && (
                    <div className="text-center py-20">
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-2xl font-bold text-gray-700 mb-2">No Courses found</h3>
                        <p className="text-gray-500">Try adjusting your category filter</p>
                    </div>
                )}
            </section>
        </main>
    );
}