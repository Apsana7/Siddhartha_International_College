"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Phone, BookOpen } from "lucide-react";

const principalData = {
  id: 1,
  name: "Dr. Sunita Sharma",
  title: "Principal",
  email: "principal@college.edu",
  phone: "+977 9876543210",
  specialization: "Educational Leadership & Management",
  image: "https://i.pravatar.cc/300?img=11",
  message: `
    <p class="text-gray-700 leading-relaxed">
      Welcome to our college! We are committed to providing a nurturing environment where students can grow academically, socially, and personally. 
      Our dedicated faculty and staff work tirelessly to ensure that every student reaches their full potential. 
      Together, we build a community of lifelong learners and responsible citizens.
    </p>
    <p class="text-gray-700 leading-relaxed mt-4">
      "Education is the most powerful weapon which you can use to change the world."
    </p>
  `,
};

const facultyData = [
  {
    id: 1,
    name: "Prof. Anil K. Gupta",
    title: "Professor of Computer Science",
    email: "anil.gupta@college.edu",
    phone: "+977 9812345678",
    specialization: "Artificial Intelligence & Machine Learning",
    courses: ["Machine Learning", "Data Science", "Python Programming"],
    image: "https://i.pravatar.cc/300?img=12",
  },
  {
    id: 2,
    name: "Dr. Meera Poudel",
    title: "Associate Professor of Mathematics",
    email: "meera.poudel@college.edu",
    phone: "+977 9823456789",
    specialization: "Applied Mathematics & Statistics",
    courses: ["Calculus", "Linear Algebra", "Probability & Statistics"],
    image: "https://i.pravatar.cc/300?img=13",
  },
  {
    id: 3,
    name: "Prof. Ramesh Karki",
    title: "Assistant Professor of English",
    email: "ramesh.karki@college.edu",
    phone: "+977 9834567890",
    specialization: "English Literature & Creative Writing",
    courses: ["English Literature", "Creative Writing", "Communication Skills"],
    image: "https://i.pravatar.cc/300?img=14",
  },
  {
    id: 4,
    name: "Dr. Sita Adhikari",
    title: "Professor of Physics",
    email: "sita.adhikari@college.edu",
    phone: "+977 9845678901",
    specialization: "Quantum Mechanics & Astrophysics",
    courses: ["Quantum Physics", "Astrophysics", "Thermodynamics"],
    image: "https://i.pravatar.cc/300?img=15",
  },
  {
    id: 5,
    name: "Prof. Hari Sharma",
    title: "Associate Professor of Business Studies",
    email: "hari.sharma@college.edu",
    phone: "+977 9856789012",
    specialization: "Finance & Marketing",
    courses: ["Financial Management", "Marketing Strategy", "Entrepreneurship"],
    image: "https://i.pravatar.cc/300?img=16",
  },
];

const categories = ["All", "Principal", "Faculty"];

export default function TeamList() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const getFilteredData = () => {
    if (selectedCategory === "Principal") {
      return { principal: [principalData], faculty: [] };
    } else if (selectedCategory === "Faculty") {
      return { principal: [], faculty: facultyData };
    } else {
      return { principal: [principalData], faculty: facultyData };
    }
  };

  const { principal, faculty } = getFilteredData();

  // ---------- Card Component ----------
  const TeamMemberCard = ({
    member,
    isLarge = false,
  }: {
    member: any;
    isLarge?: boolean;
  }) => (
    <div
      className={`w-full group hover:shadow-lg transition-shadow duration-500 bg-white rounded-sm shadow-md border border-gray-100 ${
        isLarge ? "h-auto" : "h-full"
      } flex flex-col`}
    >
      <div className="p-6 pb-4 text-center bg-white">
        <div className="relative mb-4">
          <Image
            width={isLarge ? 160 : 96}
            height={isLarge ? 160 : 96}
            src={member.image}
            alt={member.name}
            className={`${
              isLarge ? "w-24 h-24" : "w-28 h-28"
            } object-cover rounded-full mx-auto border border-gray-100`}
            unoptimized
          />
        </div>
        <h3
          className={`${
            isLarge ? "text-xl" : "text-lg"
          } font-medium text-gray-900 mb-2`}
        >
          {member.name}
        </h3>
        <p className="text-blue-700 text-sm mb-3">{member.title}</p>

        {member.courses && member.courses.length > 0 && (
          <div className="flex flex-wrap gap-1 justify-center mt-2">
            {member.courses.map((course: string, idx: number) => (
              <span
                key={idx}
                className="inline-block px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
              >
                {course}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="px-6 pb-6 flex flex-col items-center space-y-1">
        {member.email && (
          <div className="flex items-center space-x-3 text-sm text-gray-500 w-full justify-center">
            <Mail className="h-4 w-4 shrink-0" />
            <span className="break-all">{member.email}</span>
          </div>
        )}
        {member.phone && (
          <div className="flex items-center space-x-3 text-sm text-gray-500 w-full justify-center">
            <Phone className="h-4 w-4 shrink-0" />
            <span>{member.phone}</span>
          </div>
        )}
        {member.specialization && (
          <div className="flex items-start space-x-3 text-sm text-gray-600 w-full justify-center">
            <BookOpen className="h-4 w-4 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-gray-700">
                Specialization:{" "}
              </span>
              <span className="text-gray-500">{member.specialization}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Filter Bar – like Courses page */}
      <section className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-200  shadow-sm">
        <div className="w-11/12 mx-auto py-4 flex flex-wrap gap-2 items-center justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 text-sm font-medium rounded-lg cursor-pointer transition duration-200 ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100  text-gray-700  hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <div className="w-11/12 mx-auto px-4 py-16">
        {/* Principal Section */}
        {principal.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-medium text-gray-900 text-center mb-2">
              Our Principal
            </h2>
            <div className="w-24 h-1 bg-blue-900 rounded-sm mx-auto mb-8"></div>
            <div className="flex justify-center">
              <div className="w-full max-w-2xl">
                <TeamMemberCard member={principal[0]} isLarge={true} />
              </div>
            </div>

            {/* Principal Message */}
            {principal[0].message && (
              <div className="mt-8 px-4 md:px-24">
                <div
                  className="prose prose-blue max-w-none bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                  dangerouslySetInnerHTML={{ __html: principal[0].message }}
                />
              </div>
            )}
          </div>
        )}

        {/* Faculty Section */}
        {faculty.length > 0 && (
          <div>
            <h2 className="text-3xl font-medium text-gray-900 text-center mb-2">
              Our Faculty Members
            </h2>
            <div className="w-24 h-1 bg-blue-900 rounded-sm mx-auto mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {faculty.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        )}

        {principal.length === 0 && faculty.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No team members found.</p>
          </div>
        )}
      </div>
    </div>
  );
}