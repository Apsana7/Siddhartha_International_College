import { AboutCollegeSection } from "@/components/sections/aboutSection";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/faqSection";
import Hero from "@/components/sections/herosection";
import { MilestonesSection } from "@/components/sections/milestones";
import { TestimonialsSection } from "@/components/sections/testimonialsection";
import { UniversitySection } from "@/components/sections/universitySection";
import { VisionMissionSection } from "@/components/sections/visionMissionSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero/>
      <UniversitySection/>
      {/* <AboutCollegeSection/> */}
      <VisionMissionSection/>
      <MilestonesSection/>
      <TestimonialsSection/>
      <CTASection/>
      <FAQSection/>
    </div>
  );
}
