
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | BuildCo",
  description:
    "Learn about BuildCo – a family‑owned construction company with over 20 years of experience delivering quality projects.",
};

export default function ScholorshipPage() {
  return (
    <>
      <section className="relative h-[50vh] min-h-75 w-full overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1260"
          alt="About BuildCo"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold">Our Courses</h1>
            <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
             Learn practical skills and gain knowledge with our expert-led courses. Flexible, engaging, and designed to help you grow and succeed.
            </p>
          </div>
        </div>
      </section>


     
    </>
  );
}