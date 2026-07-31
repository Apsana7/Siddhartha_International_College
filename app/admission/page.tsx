
import AdmissionForm from "@/components/admission/AdmissionForm";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Siddhartha College",
  description:
    "Learn about Siddhartha College",
};

export default function AdmissionPage() {
  return (
    <>
      <section className="relative h-[70vh] min-h-75 w-full overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1260"
          alt="About Siddhartha college"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-4xl font-bold">Admission</h1>
            <p className="mt-4 text-lg md:text-lg text-gray-200 max-w-2xl mx-auto">
             Learn practical skills and gain knowledge with our expert-led courses. Flexible, engaging, and designed to help you grow and succeed.
            </p>
          </div>
        </div>
      </section>
        <AdmissionForm/>

     
    </>
  );
}