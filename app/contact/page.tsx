import { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | BuildCo",
  description:
    "Get in touch with BuildCo – we're here to answer your questions and provide a free quote for your project.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative h-[70vh] min-h-75 w-full overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1260"
          alt="Contact BuildCo"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-4xl font-bold">Get in Touch</h1>
            <p className="mt-4 text-lg md:text-lg text-gray-200 max-w-2xl mx-auto">
              Have a question or ready to start your project? Reach out to us today.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8 ">
          <ContactForm />
        </div>
      </section>

      <section className="pb-16 md:pb-24 bg-white">
        <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm">
          
           
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.001918750008!2d83.4601963752648!3d27.686335576194573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996867d0e673327%3A0xcfcb864c259c0853!2sSiddhartha%20International%20College!5e0!3m2!1sen!2snp!4v1785050636651!5m2!1sen!2snp"
               width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BuildCo Location"
              className="w-full"
    />
          </div>
        </div>
      </section>
    </>
  );
}