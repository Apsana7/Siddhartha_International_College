"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Quote, Star } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "BHM Graduate, Class of 2023",
        avatar: "https://i.pravatar.cc/150?img=1",
        text: "Western Mega College gave me the skills and confidence to excel in the hospitality industry. The faculty's real‑world experience and the hands‑on training were invaluable.",
        rating: 5,
    },
    {
        id: 2,
        name: "Sarah Johnson",
        role: "BHM Graduate, Class of 2023",
        avatar: "https://i.pravatar.cc/150?img=1",
        text: "Western Mega College gave me the skills and confidence to excel in the hospitality industry. The faculty's real‑world experience and the hands‑on training were invaluable.",
        rating: 5,
    },
    {
        id: 3,
        name: "Sarah Johnson",
        role: "BHM Graduate, Class of 2023",
        avatar: "https://i.pravatar.cc/150?img=1",
        text: "Western Mega College gave me the skills and confidence to excel in the hospitality industry. The faculty's real‑world experience and the hands‑on training were invaluable.",
        rating: 5,
    },
    {
        id: 4,
        name: "Sarah Johnson",
        role: "BHM Graduate, Class of 2023",
        avatar: "https://i.pravatar.cc/150?img=1",
        text: "Western Mega College gave me the skills and confidence to excel in the hospitality industry. The faculty's real‑world experience and the hands‑on training were invaluable.",
        rating: 5,
    },
    {
        id: 5,
        name: "Sarah Johnson",
        role: "BHM Graduate, Class of 2023",
        avatar: "https://i.pravatar.cc/150?img=1",
        text: "Western Mega College gave me the skills and confidence to excel in the hospitality industry. The faculty's real‑world experience and the hands‑on training were invaluable.",
        rating: 5,
    },
    {
        id: 6,
        name: "Sarah Johnson",
        role: "BHM Graduate, Class of 2023",
        avatar: "https://i.pravatar.cc/150?img=1",
        text: "Western Mega College gave me the skills and confidence to excel in the hospitality industry. The faculty's real‑world experience and the hands‑on training were invaluable.",
        rating: 3,
    },

];

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 2 } },
        { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
};

export function TestimonialsSection() {
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="w-11/12 max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-xs font-semibold px-4 py-1.5 rounded-full border border-orange-200/50 mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                        Student Voices
                    </div>
                    <h2
                        className="text-3xl md:text-4xl font-bold text-gray-800"
                        style={{ fontFamily: '"Times New Roman", Times, serif' }}
                    >
                        What Our Students Say
                    </h2>
                    <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
                        Real experiences from our community – the best testament to our impact.
                    </p>
                </div>

                <Slider {...settings}>
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="px-3 pb-4">
                            <div className="h-full bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg border border-gray-100 transition-shadow duration-300 flex flex-col">
                                  <div className="flex justify-between items-start mb-2">
                                    <Quote className="h-8 w-8 text-blue-200" />
                                    <div className="flex items-center gap-0.5">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="h-4 w-4 fill-yellow-400 text-yellow-400"
                                            />
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 pt-2 border-t pb-4 border-gray-100">

                                    <div className="relative h-12 w-12 rounded-full overflow-hidden shrink-0 border-2 border-blue-100">
                                        <Image
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover"
                                            // Add unoptimized only if you're using Fix 2:
                                            unoptimized
                                        />
                                    </div>

                                    <div>
                                        <p className="font-semibold text-gray-800 text-sm">
                                            {testimonial.name}
                                        </p>
                                        <p className="text-xs text-gray-500">{testimonial.role}</p>
                                    </div>
                                </div>
                              
                                <p className="text-gray-700 text-sm leading-relaxed flex-1 mb-6">
                                    {testimonial.text}
                                </p>


                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}