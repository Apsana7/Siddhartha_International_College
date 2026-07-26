"use client";
import  { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  id: string;
  title: string;
  description: string;
}

const faqData: FAQItem[] = [
  {
    id: "007c767e-cdfd-4170-90cf-f55e44d6ef34",
    title: "Does the college provide internship opportunities?",
    description:
      "<p>Yes, we have strong partnerships with various industries and organizations that provide internship opportunities to our students. Our career services department works closely with students to secure internships that align with their academic and career goals, giving them valuable real-world experience.</p>",
  },
  {
    id: "0366f15b-6d1e-419c-ab29-4e9c23759356",
    title: "What is the faculty-to-student ratio?",
    description:
      "<p>We maintain a low faculty-to-student ratio to ensure personalized attention and quality education. Our typical class sizes range from 30-40 students, allowing for interactive learning and individual guidance from our experienced faculty members.</p>",
  },
  {
    id: "12e6407b-5bff-4e7c-a6fc-0d4752156f96",
    title: "How can I apply for admission?",
    description:
      "<p>You can apply for admission by filling out our online application form on the website, or by visiting our campus in person. Required documents typically include academic transcripts, identification documents, and passport-sized photographs. Our admissions team is available to guide you through the process.</p>",
  },
  {
    id: "494fde00-2db0-4a8d-b2d8-e720f97c1756",
    title: "What programs does Western Mega College offer?",
    description:
      "<p><span>Western Mega College offers industry-focused higher education programs, including the </span><strong><span>Bachelor of Science (Hons) in Hospitality Management</span></strong><span>, </span><strong><span>Bachelor of Information Technology (Hons)</span></strong><span>, and </span><strong><span>Master of Business Administration (MBA)</span></strong><span>. Designed to combine academic excellence with practical learning, our programs equip students with the knowledge, skills, and industry exposure needed to excel in their professional careers.</span></p>",
  },
  {
    id: "e9a1b00a-623b-47e9-a29b-74791c09575a",
    title: "Are scholarships available for students?",
    description:
      "<p>Yes, Western Mega College offers various scholarship programs based on academic merit, financial need, and extracurricular achievements. We believe in making quality education accessible to deserving students. Please contact our financial aid office for specific scholarship opportunities and eligibility criteria.</p>",
  },
  {
    id: "f6d38934-bb44-4cb4-8853-e55e0c7b7811",
    title: "What facilities are available on campus?",
    description:
      "<p>Our campus features modern classrooms, well-equipped laboratories, a comprehensive library, computer labs with high-speed internet, sports facilities, a cafeteria, and dedicated study areas. We continuously invest in our infrastructure to provide an optimal learning environment for our students.</p>",
  },
];

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 md:py-24 bg-linear-to-br from-slate-50 via-white to-blue-50/30">
      <div className="w-11/12 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-xs font-semibold px-4 py-1.5 rounded-full border border-orange-200/50 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            Got Questions?
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-800"
            style={{ fontFamily: '"Times New Roman", Times, serif' }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 mt-2">
            Find answers to the most common questions about our college.
          </p>
        </div>

        <div className="space-y-3">
          {faqData.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="rounded-xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md border border-gray-100 bg-white"
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full px-5 md:px-6 py-4 flex items-center justify-between gap-4 text-left transition-colors duration-200 hover:bg-blue-50/50"
                >
                  <span className="font-medium text-gray-800 text-sm md:text-base">
                    {item.title}
                  </span>
                  <span className="shrink-0 p-1 rounded-full bg-blue-50 text-blue-600 transition-transform duration-300">
                    {isOpen ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-200 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 md:px-6 pb-5 pt-1 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                    <div
                      dangerouslySetInnerHTML={{ __html: item.description }}
                      className="[&>p]:mb-2 last:[&>p]:mb-0 [&>strong]:text-blue-600"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-xs text-gray-400 mt-8">
          Still have questions?{" "}
          <a href="/contact" className="text-blue-600 hover:underline font-medium">
            Contact us
          </a>{" "}
          and we'll be happy to help.
        </p>
      </div>
    </section>
  );
}