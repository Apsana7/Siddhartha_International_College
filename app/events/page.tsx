import { Metadata } from "next";
import Image from "next/image";
import EventList from "./eventList";

export const metadata: Metadata = {
  title: "Events | Siddhartha College",
  description:
    "Stay updated with the latest events, workshops, and seminars at our college.",
};

export default function EventsPage() {
  return (
    <>
      {/* Hero Section */}
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

      {/* Client Component with filtering */}
      <EventList />
    </>
  );
}