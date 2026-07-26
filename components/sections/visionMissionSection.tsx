import React from "react";

interface CoreItem {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const coreData: CoreItem[] = [
  {
    id: 4,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M27.719 5.109c-.135-.141-.266-.286-.401-.422a10 10 0 0 0-.427-.401A15.87 15.87 0 0 0 16 0A15.9 15.9 0 0 0 4.687 4.688c-6.104 6.099-6.234 15.938-.401 22.203q.194.217.396.427l.422.401A15.9 15.9 0 0 0 16 32c4.276 0 8.292-1.661 11.318-4.682c6.099-6.104 6.229-15.943.401-22.208zM5.51 5.51A14.73 14.73 0 0 1 16 1.166c3.766 0 7.318 1.396 10.068 3.943l-1.333 1.339a12.86 12.86 0 0 0-8.734-3.391A12.84 12.84 0 0 0 6.85 6.849A12.85 12.85 0 0 0 3.058 16c0 3.266 1.198 6.339 3.391 8.734L5.11 26.067C-.265 20.254-.135 11.156 5.511 5.51zm18.396 1.756v.005l-1.354 1.354A9.76 9.76 0 0 0 16 6.12a9.8 9.8 0 0 0-6.984 2.896A9.82 9.82 0 0 0 6.12 16a9.8 9.8 0 0 0 2.5 6.552l-1.349 1.354A11.68 11.68 0 0 1 4.224 16a11.7 11.7 0 0 1 3.448-8.328A11.7 11.7 0 0 1 16 4.224c2.953 0 5.734 1.078 7.906 3.042M24.714 16c0 2.328-.906 4.516-2.552 6.161s-3.833 2.557-6.161 2.557a8.7 8.7 0 0 1-5.729-2.161v-.005c-.146-.125-.292-.25-.432-.391a11 11 0 0 1-.391-.432A8.63 8.63 0 0 1 7.288 16c0-2.328.906-4.516 2.552-6.161a8.65 8.65 0 0 1 6.161-2.552c2.13 0 4.141.766 5.729 2.161c.146.125.297.25.432.391c.141.141.266.286.391.432A8.63 8.63 0 0 1 24.714 16M9.448 23.38A9.8 9.8 0 0 0 16 25.885a9.8 9.8 0 0 0 6.984-2.901A9.8 9.8 0 0 0 25.88 16a9.8 9.8 0 0 0-2.5-6.552l1.354-1.354A11.73 11.73 0 0 1 27.781 16a11.7 11.7 0 0 1-3.453 8.328A11.7 11.7 0 0 1 16 27.781a11.73 11.73 0 0 1-7.906-3.047zm17.042 3.11A14.73 14.73 0 0 1 16 30.834a14.73 14.73 0 0 1-10.068-3.943l1.339-1.333a12.87 12.87 0 0 0 8.734 3.391a12.87 12.87 0 0 0 9.151-3.797a12.87 12.87 0 0 0 3.792-9.151a12.86 12.86 0 0 0-3.391-8.729l1.333-1.339c5.375 5.813 5.245 14.911-.401 20.557z"/></svg>`,
    title: "Our Mission",
    description:
      "<p>We&nbsp;provide a quality  education that creates highly productive professionals who are ethical, entrepreneurial and prepared to succeed in the global economy. The college achieves this through excellence in teaching research and service engagement with the business community and other stakeholders.</p>",
  },
  {
    id: 5,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"><path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0"/><path d="M2 12c1.6-4.097 5.336-7 10-7s8.4 2.903 10 7c-1.6 4.097-5.336 7-10 7s-8.4-2.903-10-7"/></g></svg>`,
    title: "Our Vision",
    description:
      "<p>Our Vision is to empower students from diverse backgrounds to become productive and ethical business professionals who are among the best in the world.</p>",
  },
  {
    id: 7,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" d="M4.087 6.477a4.565 4.565 0 0 1 6.456 0L12 7.934l1.457-1.457a4.565 4.565 0 0 1 6.456 6.457l-1.457 1.456l.013.013l-6.456 6.457l-.013-.013l-.013.013l-6.456-6.457l.013-.013l-1.457-1.456a4.565 4.565 0 0 1 0-6.457Z"/></svg>`,
    title: "Our Values",
    description:
      "<p>• Innovation and Creativity</p><p>• Inclusivity and Diversity</p><p>• Responsibility and Service</p><p>• Professionalism and Leadership</p>",
  },
];

export function VisionMissionSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="w-11/12 max-w-7xl mx-auto ">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full border border-orange-200/50 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            Our Core Principles
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900"
              style={{ fontFamily: '"Times New Roman", Times, serif' }}
          >
            Vision, Mission &amp; Values
          </h2>
          <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
            The foundation of our institution – guiding everything we do.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreData.map((item) => {
            const colorMap: Record<number, string> = {
              4: "blue",
              5: "orange",
              7: "green",
            };
            const accent = colorMap[item.id] || "blue";
            const accentClasses = {
              blue: {
                border: "border-blue-200/50",
                bg: "bg-blue-50",
                icon: "text-blue-600",
                hover: "hover:shadow-blue-200/30",
              },
              orange: {
                border: "border-orange-200/50",
                bg: "bg-orange-50",
                icon: "text-orange-600",
                hover: "hover:shadow-orange-200/30",
              },
              green: {
                border: "border-green-200/50",
                bg: "bg-green-50",
                icon: "text-green-600",
                hover: "hover:shadow-green-200/30",
              },
            };
            const styles = accentClasses[accent as keyof typeof accentClasses];

            return (
              <div
                key={item.id}
                className={`group relative p-6 rounded-2xl border ${styles.border} bg-white shadow-sm hover:shadow-xl ${styles.hover} transition-all duration-300 hover:-translate-y-1 flex flex-col items-start`}
              >
                <div
                  className={`p-3 rounded-xl ${styles.bg} ${styles.icon} mb-4 transition-transform duration-300 group-hover:scale-110`}
                >
                  <div
                    className="h-8 w-8 [&>svg]:h-8 [&>svg]:w-8"
                    dangerouslySetInnerHTML={{ __html: item.icon }}
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>

                <div
                  className="text-gray-600 text-sm leading-relaxed [&>p]:mb-2 last:[&>p]:mb-0"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

