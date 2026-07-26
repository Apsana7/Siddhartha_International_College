"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

const allBlogs = [
  {
    id: "1",
    title: "10 Tips for Successful Remote Learning",
    description:
      "Learn how to stay productive and engaged while studying from home.",
    excerpt:
      "Remote learning has become the new normal. Here are ten strategies to help you focus, stay motivated, and make the most of your online classes...",
    image:
      "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "Feb 15, 2025",
    author: "Dr. Anjali Sharma",
    authorAvatar:
      "https://i.pravatar.cc/150?img=1",
    category: "Study Tips",
  },
  {
    id: "2",
    title: "The Future of AI in Education",
    description:
      "How artificial intelligence is transforming learning and teaching.",
    excerpt:
      "AI-powered tools are personalizing education, automating grading, and providing real-time feedback. Explore the potential and challenges...",
    image:
      "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "Feb 10, 2025",
    author: "Prof. Rohan Mehta",
    authorAvatar:
      "https://i.pravatar.cc/150?img=2",
    category: "Technology",
  },
  {
    id: "3",
    title: "Campus Life: A Student's Perspective",
    description:
      "What it's really like to be a student at BuildCo – from academics to social life.",
    excerpt:
      "From late-night study sessions to weekend fests, campus life is a blend of hard work and fun. Hear from a student who has experienced it all...",
    image:
      "https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "Feb 5, 2025",
    author: "Sneha Patel",
    authorAvatar:
      "https://i.pravatar.cc/150?img=3",
    category: "Campus Life",
  },
  {
    id: "4",
    title: "How to Build a Stunning Portfolio",
    description:
      "Showcase your skills and land your dream job with a professional portfolio.",
    excerpt:
      "Your portfolio is your calling card. Learn the key elements of a great portfolio and how to present your work effectively...",
    image:
      "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "Jan 28, 2025",
    author: "Aisha Khan",
    authorAvatar:
      "https://i.pravatar.cc/150?img=4",
    category: "Career",
  },
  {
    id: "5",
    title: "Mental Health Matters: Managing Exam Stress",
    description:
      "Simple techniques to stay calm and focused during exam season.",
    excerpt:
      "Exam stress is real. Discover effective mindfulness practices, time management tips, and self-care routines to keep your mental well-being in check...",
    image:
    
      "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600",


    date: "Jan 20, 2025",
    author: "Dr. Meera Iyer",
    authorAvatar:
      "https://i.pravatar.cc/150?img=5",
    category: "Wellness",
  },
  {
    id: "6",
    title: "Top 5 Programming Languages to Learn in 2025",
    description:
      "Stay ahead of the curve by learning the most in-demand languages.",
    excerpt:
      "From Python to Rust, we break down the languages that are shaping the future of software development and where to start...",
    image:
    //   "https://images.pexels.com/photos/301833/pexels-photo-301833.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600",

    date: "Jan 15, 2025",
    author: "Karan Joshi",
    authorAvatar:
      "https://i.pravatar.cc/150?img=6",
    category: "Technology",
  },
];

const categories = ["All", "Study Tips", "Technology", "Campus Life", "Career", "Wellness"];

export default function BlogList() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = useMemo(() => {
    return allBlogs.filter((blog) => {
      const matchesCategory =
        selectedCategory === "All" || blog.category === selectedCategory;
      const matchesSearch =
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <>
      <section className="sticky top-0 z-10 bg-white/80  backdrop-blur-md  shadow-sm">
        <div className="w-10/12 mx-auto py-4 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex flex-wrap gap-4 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 text-sm font-medium rounded-lg whitespace-nowrap transition duration-200 ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 border border-gray-300 dark:border-gray-600 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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

      {/* Blog Cards Grid – different UI from courses */}
      <section className="w-10/12 mx-auto py-12 px-4">
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No blogs match your filters.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <div
                key={blog.id}
                className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-52 w-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Category chip */}
                  <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {blog.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0">
                      <Image
                        src={blog.authorAvatar}
                        alt={blog.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">{blog.author}</span>
                    <span className="text-xs text-gray-400 dark:text-gray-500 ml-auto">
                      {blog.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-300 text-sm leading-relaxed line-clamp-3 flex-1">
                    {blog.excerpt}
                  </p>

                  <Link
                    href={`/blogs/${blog.id}`}
                    className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors self-start"
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
            ))}
          </div>
        )}
      </section>
    </>
  );
}