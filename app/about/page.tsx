import WhyChooseUs from "@/components/sections/chooseUs";
import { CTASection } from "@/components/sections/CTASection";
import { TestimonialsSection } from "@/components/sections/testimonialsection";
import { VisionMissionSection } from "@/components/sections/visionMissionSection";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "About Us | BuildCo",
    description:
        "Learn about BuildCo – a family‑owned construction company with over 20 years of experience delivering quality projects.",
};

export default function AboutPage() {
    return (
        <>
            <section className="relative h-[70vh] min-h-75 w-full overflow-hidden">
                <Image
                    src="https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1260"
                    alt="About BuildCo"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="text-center text-white px-4">
                        <h1 className="text-4xl md:text-4xl font-bold">About Us</h1>
                        <p className="mt-4 text-lg md:text-lg text-gray-200 max-w-2xl mx-auto">
                            Building excellence with quality, safety, and trust for over two decades.
                        </p>
                    </div>
                </div>
            </section>

            <VisionMissionSection />
            <TestimonialsSection />

              <WhyChooseUs />
            <CTASection />
          

        </>
    );
}