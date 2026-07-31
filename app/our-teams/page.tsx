import { Metadata } from "next";
import Image from "next/image";
import TeamList from "./teamList";

export const metadata: Metadata = {
  title: "Our Team | Siddhartha College",
  description:
    "Meet our dedicated principal and faculty members who drive excellence in education.",
};

export default function TeamPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[70vh] min-h-75 w-full overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Our Team"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-4xl font-bold">Our Team</h1>
            <p className="mt-4 text-lg md:text-lg text-gray-200 max-w-2xl mx-auto">
              Meet the dedicated professionals who make our college a center of excellence.
            </p>
          </div>
        </div>
      </section>

      <TeamList />
    </>
  );
}