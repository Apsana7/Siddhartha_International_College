import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const courses = [
  {
    id: "1",
    title: "Computer Science",
    description:
      "Master algorithms, data structures, and software engineering principles.",
    fullDescription:
      "This comprehensive program covers everything from foundational programming to advanced machine learning. You'll work on real-world projects and gain hands-on experience with industry-standard tools. Graduates are prepared for roles in software development, data science, and system architecture.",
    image:
      "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1260",
    duration: "4 Years",
    level: "Bachelor",
    instructor: "Prof. Jane Doe",
    prerequisites: "High school diploma with mathematics",
    learningOutcomes: [
      "Write clean, efficient code in multiple programming languages",
      "Design and implement complex algorithms and data structures",
      "Build full‑stack web applications with modern frameworks",
      "Apply machine learning techniques to real‑world datasets",
      "Collaborate in agile development teams and use version control",
    ],
    curriculum: [
      "Introduction to Programming",
      "Data Structures and Algorithms",
      "Database Systems",
      "Web Development (HTML, CSS, JavaScript)",
      "Machine Learning Fundamentals",
      "Software Engineering & Project Management",
    ],
    price: "$500 per semester",
    language: "English",
    schedule: "Full‑time, on‑campus",
    instructorBio:
      "Prof. Jane Doe has over 15 years of experience in computer science education and research. She holds a Ph.D. in Artificial Intelligence from MIT and has published numerous papers on machine learning and natural language processing.",
    instructorAvatar:
      "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=200", // placeholder
  },
  {
    id: "2",
    title: "Business Administration",
    description:
      "Develop leadership, management, and strategic thinking skills for the corporate world.",
    fullDescription:
      "Our BBA program combines core business principles with experiential learning. You'll study finance, marketing, human resources, and entrepreneurship. The curriculum includes case studies, internships, and networking opportunities with industry leaders.",
    image:
      "https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=1260",
    duration: "3 Years",
    level: "Bachelor",
    instructor: "Dr. John Smith",
    prerequisites: "High school diploma",
    learningOutcomes: [
      "Analyze business problems and develop strategic solutions",
      "Lead teams and manage projects effectively",
      "Understand financial statements and make data‑driven decisions",
      "Create marketing strategies and brand positioning",
    ],
    curriculum: [
      "Principles of Management",
      "Financial Accounting",
      "Marketing Management",
      "Human Resource Management",
      "Business Ethics & Corporate Governance",
      "Entrepreneurship and Innovation",
    ],
    price: "$450 per semester",
    language: "English",
    schedule: "Part‑time, evening classes",
    instructorBio:
      "Dr. John Smith is a seasoned business consultant and professor. He holds an MBA from Harvard and has worked with Fortune 500 companies. His research focuses on leadership and organisational behaviour.",
    instructorAvatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    id: "3",
    title: "Engineering",
    description:
      "Specialize in civil, mechanical, or electrical engineering with hands-on projects.",
    fullDescription:
      "Our engineering program offers specializations in civil, mechanical, and electrical engineering. You'll have access to modern labs and industry partnerships, preparing you for a dynamic career in innovation and design.",
    image:
      "https://images.pexels.com/photos/301833/pexels-photo-301833.jpeg?auto=compress&cs=tinysrgb&w=1260",
    duration: "4 Years",
    level: "Bachelor",
    instructor: "Prof. Alan Turing",
    prerequisites: "High school diploma with physics and mathematics",
    learningOutcomes: [
      "Apply engineering principles to solve real‑world problems",
      "Design and test mechanical/electrical systems",
      "Use CAD software for 3D modeling and simulation",
      "Understand sustainability and environmental impact",
    ],
    curriculum: [
      "Engineering Mathematics",
      "Statics and Dynamics",
      "Circuit Analysis",
      "Thermodynamics",
      "Material Science",
      "Capstone Design Project",
    ],
    price: "$550 per semester",
    language: "English",
    schedule: "Full‑time, on‑campus",
    instructorBio:
      "Prof. Alan Turing is a renowned engineer with a Ph.D. from Stanford. He has led major infrastructure projects and is passionate about teaching the next generation of engineers.",
    instructorAvatar:
      "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    id: "4",
    title: "Medicine",
    description:
      "Comprehensive medical training with clinical rotations and research opportunities.",
    fullDescription:
      "This program provides a solid foundation in medical sciences, clinical skills, and patient care. Students benefit from rotations in top hospitals and research exposure to cutting-edge medical technologies.",
    image:
      "https://images.pexels.com/photos/4386463/pexels-photo-4386463.jpeg?auto=compress&cs=tinysrgb&w=1260",
    duration: "5 Years",
    level: "Doctorate",
    instructor: "Dr. Elizabeth Blackwell",
    prerequisites: "High school diploma with biology and chemistry",
    learningOutcomes: [
      "Diagnose and treat common medical conditions",
      "Perform clinical procedures and patient assessments",
      "Interpret medical imaging and laboratory results",
      "Conduct medical research and apply evidence‑based practice",
    ],
    curriculum: [
      "Human Anatomy & Physiology",
      "Pathophysiology",
      "Pharmacology",
      "Clinical Medicine",
      "Surgery & Emergency Medicine",
      "Medical Ethics & Law",
    ],
    price: "$700 per semester",
    language: "English",
    schedule: "Full‑time, on‑campus",
    instructorBio:
      "Dr. Elizabeth Blackwell is a leading physician and researcher. She has worked in multiple healthcare settings and is dedicated to training compassionate, skilled doctors.",
    instructorAvatar:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    id: "5",
    title: "Data Science",
    description:
      "Learn to extract insights from big data using machine learning and analytics.",
    fullDescription:
      "The Data Science program covers statistical analysis, machine learning, data visualization, and big data technologies. You'll work on real datasets and build predictive models to solve complex business problems.",
    image:
      "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1260",
    duration: "2 Years",
    level: "Master",
    instructor: "Dr. Fei-Fei Li",
    prerequisites: "Bachelor's degree in STEM",
    learningOutcomes: [
      "Apply statistical methods to extract insights from data",
      "Build and evaluate machine learning models",
      "Visualize data effectively using modern tools",
      "Work with big data frameworks like Hadoop and Spark",
    ],
    curriculum: [
      "Probability & Statistics",
      "Machine Learning",
      "Data Visualization",
      "Big Data Technologies",
      "Deep Learning & Neural Networks",
      "Capstone Project",
    ],
    price: "$600 per semester",
    language: "English",
    schedule: "Full‑time, on‑campus",
    instructorBio:
      "Dr. Fei-Fei Li is a leading expert in computer vision and deep learning. She is a professor at Stanford and has contributed to major AI advancements.",
    instructorAvatar:
      "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    id: "6",
    title: "Graphic Design",
    description:
      "Explore visual communication, typography, and digital design tools.",
    fullDescription:
      "This program fosters creativity and technical skills in graphic design. You'll learn branding, user interface design, print media, and digital illustration, using industry-standard software.",
    image:
      "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260",
    duration: "2 Years",
    level: "Diploma",
    instructor: "Ms. Paula Scher",
    prerequisites: "Portfolio review",
    learningOutcomes: [
      "Master Adobe Creative Suite (Photoshop, Illustrator, InDesign)",
      "Design compelling visual identities and branding",
      "Create user‑centered interface designs",
      "Produce print and digital media assets",
    ],
    curriculum: [
      "Design Principles & Color Theory",
      "Typography",
      "Branding & Identity",
      "UI/UX Design",
      "Motion Graphics",
      "Portfolio Development",
    ],
    price: "$400 per semester",
    language: "English",
    schedule: "Part‑time, weekend classes",
    instructorBio:
      "Ms. Paula Scher is an internationally acclaimed graphic designer and partner at Pentagram. She has designed iconic identities for major brands and institutions.",
    instructorAvatar:
      "https://images.pexels.com/photos/1680186/pexels-photo-1680186.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
];

function getCourse(id: string) {
  return courses.find((course) => course.id === id);
}

export async function generateStaticParams() {
  return courses.map((course) => ({
    id: course.id,
  }));
}

// ---------- Dynamic metadata ----------
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const course = getCourse(id);
  if (!course) {
    return { title: "Course Not Found" };
  }
  return {
    title: `${course.title} | BuildCo`,
    description: course.description,
  };
}

// ---------- Page Component ----------
export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const course = getCourse(id);

  if (!course) {
    notFound();
  }

  // Get related courses (excluding current)
  const relatedCourses = courses.filter((c) => c.id !== course.id).slice(0, 3);

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[70vh] min-h-75 w-full overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-4xl font-bold">{course.title}</h1>
            <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              {course.description}
            </p>
            <Link
              href="/admission"
              className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-200"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="w-11/12 mx-auto py-4  px-4 text-sm text-gray-500 dark:text-gray-400 bg-white">
       <div className="mb-6 flex gap-1 items-center">
        <ArrowLeft className="text-orange-600 w-4 h-4"/>
            <Link href="/courses" className="text-orange-600 text-sm underline underline-offset-2">Back to courses</Link>

            </div>
        <ol className="flex items-center space-x-2">
           
          <li>
            <Link href="/" className="hover:text-blue-600">Home</Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/courses" className="hover:text-blue-600">Courses</Link>
          </li>
          <li>/</li>
          <li className="text-gray-700 dark:text-gray-300 font-medium truncate">
            {course.title}
          </li>
        </ol>
      </nav>

      <section className="w-10/12 mx-auto py-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Course Overview
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {course.fullDescription || course.description}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 text-center">
                <div className="text-2xl mb-1">🎓</div>
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">Level</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{course.level}</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 text-center">
                <div className="text-2xl mb-1">⏳</div>
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">Duration</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{course.duration}</p>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4 text-center">
                <div className="text-2xl mb-1">👨‍🏫</div>
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">Instructor</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{course.instructor}</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4 text-center">
                <div className="text-2xl mb-1">📋</div>
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">Prerequisites</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{course.prerequisites}</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                 What You'll Learn
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                {course.learningOutcomes?.map((outcome, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    {outcome}
                  </li>
                )) || (
                  <li>No specific outcomes listed.</li>
                )}
              </ul>
            </div>

            {/* Curriculum */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                Course Curriculum
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                {course.curriculum?.map((item, idx) => (
                  <li key={idx} className="flex items-center border-b border-gray-100 dark:border-gray-700 py-2 last:border-0">
                    <span className="text-blue-500 font-medium mr-3">{idx + 1}</span>
                    {item}
                  </li>
                )) || (
                  <li>Curriculum not available.</li>
                )}
              </ul>
            </div>

            {/* Instructor */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                👤 Instructor
              </h3>
              <div className="flex items-start space-x-4">
                <div className="relative w-20 h-20 rounded-full overflow-hidden shrink-0 bg-gray-200 dark:bg-gray-700">
                  {course.instructorAvatar ? (
                    <Image
                      src={course.instructorAvatar}
                      alt={course.instructor}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-3xl">
                      👤
                    </div>
                  )}
                </div>
                <div>
                  <p className="font-semibold text-gray-800 dark:text-white">
                    {course.instructor}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {course.instructorBio || "Instructor bio coming soon."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right sidebar */}
          <div className="space-y-6">
            {/* Quick actions */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 top-6">
              <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-4">
                Enroll Now
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Price</span>
                  <span className="font-semibold text-gray-800 dark:text-white">
                    {course.price || "Contact for details"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Language</span>
                  <span className="font-semibold text-gray-800 dark:text-white">
                    {course.language || "English"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Schedule</span>
                  <span className="font-semibold text-gray-800 dark:text-white">
                    {course.schedule || "Flexible"}
                  </span>
                </div>
              </div>
              <Link
                href="/admission"
                className="mt-6 w-full block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
              >
                Apply Now
              </Link>
              <button className="mt-3 w-full block text-center bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 font-semibold py-2 rounded-lg transition duration-200">
                 Save
              </button>
              <button className="mt-2 w-full block text-center bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 font-semibold py-2 rounded-lg transition duration-200">
                 Share
              </button>
            </div>

            {/* Related Courses */}
            {relatedCourses.length > 0 && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
                <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-4">
                  Related Courses
                </h4>
                <ul className="space-y-4">
                  {relatedCourses.map((rel) => (
                    <li key={rel.id}>
                      <Link
                        href={`/courses/${rel.id}`}
                        className="flex items-center space-x-3 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded-lg transition"
                      >
                        <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-gray-200 dark:bg-gray-700">
                          <Image
                            src={rel.image}
                            alt={rel.title}
                            fill
                            className="object-cover"
                            sizes="64px"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-800 dark:text-white">
                            {rel.title}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {rel.duration}
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
