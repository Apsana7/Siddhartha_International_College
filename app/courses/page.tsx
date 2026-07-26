import { Metadata } from "next";
import Image from "next/image";
import CourseList from "./courseList";

export const metadata: Metadata = {
  title: "Our Courses | BuildCo",
  description:
    "Learn practical skills and gain knowledge with our expert-led courses. Flexible, engaging, and designed to help you grow and succeed.",
};

export default function CoursesPage() {
  return (
    <>
      <section className="relative h-[70vh] min-h-75 w-full overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1260"
          alt="Our Courses"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-4xl font-bold">Our Courses</h1>
            <p className="mt-4 text-lg md:text-lg text-gray-200 max-w-2xl mx-auto">
              Learn practical skills and gain knowledge with our expert-led
              courses.
            </p>
          </div>
        </div>
      </section>

      <CourseList />
    </>
  );
}