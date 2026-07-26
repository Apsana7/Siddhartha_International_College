import React from "react";

const WhyChooseUs: React.FC = () => {
    const features = [
        {
            icon: (
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
            title: "Expert Faculty",
            description:
                "Learn from industry professionals and academic leaders who bring real‑world experience into the classroom.",
        },
        {
            icon: (
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                </svg>
            ),
            title: "Modern Facilities",
            description:
                "State‑of‑the‑art labs, libraries, and collaborative spaces designed to enhance your learning experience.",
        },
        {
            icon: (
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0 1 12 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2m4 6h.01M5 20h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
                </svg>
            ),
            title: "Career Opportunities",
            description:
                "Strong industry connections, internship placements, and a dedicated career cell to jumpstart your future.",
        },
        {
            icon: (
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Scholarships & Aid",
            description:
                "Merit‑based scholarships, financial aid, and flexible payment plans to make quality education accessible.",
        },
    ];

    return (
        <section className="w-11/12 mx-auto py-16 px-4 bg-white">

            <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-xs font-semibold px-4 py-1.5 rounded-full border border-orange-200/50 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    why siddharth
                </div>
                <h2
                    className="text-3xl md:text-4xl font-bold text-gray-800"
                    style={{ fontFamily: '"Times New Roman", Times, serif' }}
                >
                    Why Choose Our College
                </h2>
                <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
                    We are committed to providing an exceptional educational experience that prepares you for success.

                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="bg-orange-50 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center text-center border border-orange-100"
                    >
                        <div className="bg-white rounded-full p-4 mb-4">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            {feature.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseUs;
