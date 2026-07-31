import { Metadata } from "next";
import Image from "next/image";
import BlogList from "./BlogList";

export const metadata: Metadata = {
  title: "Blogs | Siddhartha College",
  description:
    "Read insightful articles, industry trends, and stories from our community.",
};

export default function BlogsPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[70vh] min-h-75 w-full overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260"
          alt="Blogs"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-4xl font-bold">Blogs</h1>
            <p className="mt-4 text-lg md:text-lg text-gray-200 max-w-2xl mx-auto">
              Explore articles, insights, and stories from our community.
            </p>
          </div>
        </div>
      </section>

      <BlogList />
    </>
  );
}