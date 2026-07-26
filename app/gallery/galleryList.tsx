"use client";

import Image from "next/image";

const galleryImages = [
  {
    id: 1,
    title: "Campus Sunset",
    image:
      "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Campus",
  },
  {
    id: 2,
    title: "Library Study Session",
    image:
      "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Academic",
  },
  {
    id: 3,
    title: "Sports Day",
    image:
      "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=600",

      // "https://images.pexels.com/photos/301833/pexels-photo-301833.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Sports",
  },
  {
    id: 4,
    title: "Cultural Fest",
    image:
      "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=600",

    category: "Cultural",
  },
  {
    id: 5,
    title: "Tech Workshop",
    image:
      "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Academic",
  },
  {
    id: 6,
    title: "Concert Night",
    image:
      "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Cultural",
  },
  {
    id: 7,
    title: "Green Campus",
    image:
      "https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Campus",
  },
  {
    id: 8,
    title: "Alumni Meet",
    image:
      // "https://images.pexels.com/photos/301833/pexels-photo-301833.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=600",

    category: "Events",
  },

];

export default function GalleryList() {
  

  return (
    <section className="w-10/12 mx-auto py-16 px-4 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {galleryImages.map((item) => (
          <div
            key={item.id}
            className="group relative aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-white text-sm font-medium">{item.title}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        {/* <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
          Load More
        </button> */}
      </div>
    </section>
  );
}