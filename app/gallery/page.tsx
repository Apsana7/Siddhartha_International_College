import { Metadata } from "next";
import Image from "next/image";
import GalleryList from "./galleryList";

export const metadata: Metadata = {
  title: "Gallery | BuildCo",
  description:
    "Explore our campus life, events, and facilities through a collection of memorable moments captured in photos.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="relative h-[70vh] min-h-75 w-full overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260"
          alt="Gallery"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-4xl font-bold">Gallery</h1>
            <p className="mt-4 text-lg md:text-lg text-gray-200 max-w-2xl mx-auto">
              A glimpse into our vibrant campus life – moments that inspire and connect.
            </p>
          </div>
        </div>
      </section>

      <GalleryList />
    </>
  );
}