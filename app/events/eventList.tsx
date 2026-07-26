"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

// ---------- Static Event Data ----------
const allEvents = [
  {
    id: "1",
    title: "Tech Summit 2025",
    description:
      "Join industry leaders for a day of innovation, networking, and insights into emerging technologies.",
    image:
      "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "April 15, 2025",
    location: "Main Auditorium",
    time: "9:00 AM – 5:00 PM",
    category: "Conference",
  },
  {
    id: "2",
    title: "Alumni Networking Night",
    description:
      "Connect with successful alumni and explore career opportunities in various industries.",
    image:
      "https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "May 2, 2025",
    location: "College Conference Hall",
    time: "6:00 PM – 10:00 PM",
    category: "Networking",
  },
  {
    id: "3",
    title: "Research Symposium",
    description:
      "Showcase your research projects and learn from peers and faculty mentors.",
    image:
      "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "June 10, 2025",
    location: "Science Block, Room 301",
    time: "10:00 AM – 4:00 PM",
    category: "Seminar",
  },
  {
    id: "4",
    title: "Entrepreneurship Bootcamp",
    description:
      "A three‑day intensive workshop to develop your business idea and pitch it to investors.",
    image:
      "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "July 5–7, 2025",
    location: "Incubation Center",
    time: "9:00 AM – 6:00 PM",
    category: "Workshop",
  },
  {
    id: "5",
    title: "Cultural Fest 2025",
    description:
      "Celebrate diversity with music, dance, food, and art from around the world.",
    image:
      "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=600",

      // "https://images.pexels.com/photos/4386463/pexels-photo-4386463.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "August 20, 2025",
    location: "Open Air Amphitheater",
    time: "11:00 AM – 9:00 PM",
    category: "Cultural",
  },
  {
    id: "6",
    title: "Career Fair",
    description:
      "Meet recruiters from top companies, explore internships, and land your dream job.",
    image:
      "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=600",

      // "https://images.pexels.com/photos/301833/pexels-photo-301833.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "September 12, 2025",
    location: "Sports Complex",
    time: "10:00 AM – 5:00 PM",
    category: "Career Fair",
  },
];

const categories = ["All", "Conference", "Networking", "Seminar", "Workshop", "Cultural", "Career Fair"];

export default function EventList() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEvents = useMemo(() => {
    return allEvents.filter((event) => {
      const matchesCategory =
        selectedCategory === "All" || event.category === selectedCategory;
      const matchesSearch =
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <>
      <section className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="w-10/12 mx-auto py-4 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
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
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 border border-gray-300 dark:border-gray-600 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500
              "
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

      {/* Events Grid – unique design */}
      <section className="w-10/12 mx-auto py-12 px-4">
        {filteredEvents.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No events match your filters.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2  flex flex-col"
              >
                {/* Image with date badge */}
                <div className="relative h-52 w-full bg-gray-200 dark:bg-gray-700">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-md shadow-md flex items-center gap-2">
                    <span>{event.category}</span>
                  </div>
                
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-300 text-sm leading-relaxed line-clamp-2 flex-1">
                    {event.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full flex items-center gap-1">
                      <span>📍</span> {event.location}
                    </span>
                    <Link
                      href={`/events/${event.id}`}
                      className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                    >
                      Learn More
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