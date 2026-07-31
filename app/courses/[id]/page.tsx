import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Bookmark, Share2, Clock, GraduationCap, User, BookOpen, ChevronRight } from "lucide-react";

const courses = [
    {
        id: 1,
        title: "React Development",
        category: "Frontend",
        duration: "3 Months",
        level: "Beginner",
        image:
            "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1260",
        description:
            "Learn modern React from beginner to advanced. This course covers components, hooks, routing, state management, API integration, and project development.",
    },
    {
        id: 2,
        title: "Next.js Development",
        category: "Frontend",
        duration: "2 Months",
        level: "Intermediate",
        image:
            "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260",
        description:
            "Master Next.js App Router, Server Components, API Routes, Authentication, SEO, Deployment, and build production-ready applications.",
    },
    {
        id: 3,
        title: "Node.js Development",
        category: "Backend",
        duration: "3 Months",
        level: "Intermediate",
        image:
            "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260",
        description:
            "Build scalable backend applications using Node.js, Express.js, JWT Authentication, MySQL, MongoDB, and REST APIs.",
    },
    {
        id: 4,
        title: "Laravel Development",
        category: "Backend",
        duration: "3 Months",
        level: "Intermediate",
        image:
            "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260",
        description:
            "Learn Laravel framework, authentication, Eloquent ORM, CRUD operations, APIs, and deployment.",
    },
    {
        id: 5,
        title: "UI / UX Design",
        category: "Design",
        duration: "2 Months",
        level: "Beginner",
        image:
            "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260",
        description:
            "Master Figma, Adobe XD, wireframing, prototyping, user research, and modern UI/UX principles.",
    },
    {
        id: 6,
        title: "Graphic Design",
        category: "Design",
        duration: "2 Months",
        level: "Beginner",
        image:
            "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1260",
        description:
            "Create stunning graphics using Photoshop, Illustrator, branding techniques, and creative design principles.",
    },
];

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default async function CourseDetailPage({ params }: Props) {
    const { id } = await params;

    const course = courses.find((item) => item.id === Number(id));

    if (!course) {
        notFound();
    }

    return (


        <main className="">

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
            <div className="w-11/12 mx-auto py-10">
                <nav className="text-sm text-gray-500 mb-8">
                    <Link href="/" className="hover:text-blue-600 transition">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/courses" className="hover:text-blue-600 transition">Courses</Link>
                    <span className="mx-2">/</span>
                    <span className="text-gray-700 font-medium">{course.title}</span>
                </nav>

                {/* Course Header */}
                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    <div className="relative h-100 rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src={course.image}
                            alt={course.title}
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div>
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">
                            {course.title}
                        </h1>

                        <p className="text-gray-600 leading-relaxed mb-6">
                            {course.description}
                        </p>

                        {/* Course Details Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="bg-gray-50 p-4 rounded-xl">
                                <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                                    <GraduationCap className="w-4 h-4" />
                                    <span>Level</span>
                                </div>
                                <span className="font-semibold text-gray-800">{course.level}</span>
                            </div>

                            <div className="bg-gray-50 p-4 rounded-xl">
                                <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                                    <Clock className="w-4 h-4" />
                                    <span>Duration</span>
                                </div>
                                <span className="font-semibold text-gray-800">{course.duration}</span>
                            </div>

                            <div className="bg-gray-50 p-4 rounded-xl">
                                <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                                    <User className="w-4 h-4" />
                                    <span>Instructor</span>
                                </div>
                                <span className="font-semibold text-gray-800">Dr. John Smith</span>
                            </div>

                            <div className="bg-gray-50 p-4 rounded-xl">
                                <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                                    <BookOpen className="w-4 h-4" />
                                    <span>Prerequisites</span>
                                </div>
                                <span className="font-semibold text-gray-800">High school diploma</span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition shadow-lg shadow-blue-200 flex items-center gap-2">
                                Apply Now
                                <ChevronRight className="w-4 h-4" />
                            </button>
                            <button className="border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-6 py-3 rounded-xl font-semibold transition flex items-center gap-2">
                                <Bookmark className="w-4 h-4" />
                                Save
                            </button>
                            <button className="border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-6 py-3 rounded-xl font-semibold transition flex items-center gap-2">
                                <Share2 className="w-4 h-4" />
                                Share
                            </button>
                        </div>
                    </div>
                </div>

                {/* Course Overview Section */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Course Overview</h2>
                    <div className="bg-gray-50 p-6 rounded-2xl">
                        <p className="text-gray-600 leading-relaxed">
                            Our {course.title} program combines core principles with experiential learning.
                            You'll study practical applications, industry best practices, and real-world case studies.
                            The curriculum includes hands-on projects, collaborative learning, and networking opportunities
                            with industry leaders.
                        </p>
                    </div>
                </div>

                {/* What You'll Learn Section */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">What You'll Learn</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded-xl flex items-start gap-3">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2  shrink-0" />
                            <span className="text-gray-700">Analyze business problems and develop strategic solutions</span>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-xl flex items-start gap-3">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 shrink-0" />
                            <span className="text-gray-700">Lead teams and manage projects effectively</span>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-xl flex items-start gap-3">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 shrink-0" />
                            <span className="text-gray-700">Understand financial statements and make data-driven decisions</span>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-xl flex items-start gap-3">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 shrink-0" />
                            <span className="text-gray-700">Create marketing strategies and brand positioning</span>
                        </div>
                    </div>
                </div>

                {/* Related Courses Section */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Related Courses</h2>
                    <div className="grid sm:grid-cols-3 gap-4">
                        {courses
                            .filter((item) => item.id !== course.id)
                            .slice(0, 3)
                            .map((related) => (
                                <Link
                                    key={related.id}
                                    href={`/courses/${related.id}`}
                                    className="bg-white border border-gray-200 hover:border-blue-400 rounded-xl p-4 transition-shadow hover:shadow-md group"
                                >
                                    <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition">
                                        {related.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 mt-1">{related.duration}</p>
                                </Link>
                            ))}
                    </div>
                </div>
            </div>
        </main>
    );
}