"use client";
import  { useState, useEffect, useRef } from "react";
import { Users, Briefcase, Award, GraduationCap } from "lucide-react";

const milestones = [
  {
    id: 3,
    count: "40+",
    label: "Industry-Expert Faculty",
    icon: Users,
  },
  {
    id: 4,
    count: "90%",
    label: "Placement Rate",
    icon: Briefcase,
  },
  {
    id: 5,
    count: "10+",
    label: "Years of Excellence",
    icon: Award,
  },
  {
    id: 6,
    count: "700+",
    label: "Graduates",
    icon: GraduationCap,
  },
];

export function MilestonesSection() {
  const [counts, setCounts] = useState<{ [key: number]: number }>({});
  const sectionRef = useRef<HTMLElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;
            startCounting();
          }
        });
      },
      { threshold: 0.3 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const startCounting = () => {
    const duration = 2500;
    const stepTime = 16;

    const initialCounts: { [key: number]: number } = {};
    const targets: { [key: number]: number } = {};

    milestones.forEach((item) => {
      const target = parseInt(item.count.replace(/[^0-9]/g, ""));
      targets[item.id] = target;
      initialCounts[item.id] = 0;
    });

    setCounts(initialCounts);

    const steps = duration / stepTime;
    const increments: { [key: number]: number } = {};
    Object.keys(targets).forEach((id) => {
      const numId = parseInt(id);
      increments[numId] = targets[numId] / steps;
    });

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep += 1;
      const newCounts: { [key: number]: number } = {};
      let allDone = true;

      milestones.forEach((item) => {
        const id = item.id;
        const target = targets[id];
        const increment = increments[id];
        let value = Math.min(increment * currentStep, target);
        if (value < target) allDone = false;
        newCounts[id] = value;
      });

      setCounts(newCounts);

      if (allDone) {
        clearInterval(interval);
        const finalCounts: { [key: number]: number } = {};
        milestones.forEach((item) => {
          finalCounts[item.id] = targets[item.id];
        });
        setCounts(finalCounts);
      }
    }, stepTime);
  };

  const getCount = (id: number): number => {
    return counts[id] !== undefined ? counts[id] : 0;
  };

  const formatDisplay = (id: number, original: string): string => {
    const numeric = Math.floor(getCount(id));
    const suffix = original.replace(/[0-9]/g, "");
    return `${numeric}${suffix}`;
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-3 bg-blue-900"
    >
      <div className="w-11/12 max-w-7xl mx-auto">
        

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {milestones.map((item) => {
            const Icon = item.icon;
            const isCounting = Object.keys(counts).length > 0;
            const displayValue = isCounting
              ? formatDisplay(item.id, item.count)
              : "0";

            return (
              <div
                key={item.id}
                className="group relative p-6 md:p-8 text-center hover:-translate-y-1"
              >
               
                <div className="text-4xl md:text-3xl font-bold text-white mb-2 tabular-nums">
                  {displayValue}
                </div>

                <div className="text-sm  text-white uppercase tracking-wider">
                  {item.label}
                </div>

              </div>
            );
          })}
        </div>

        <p className="text-center text-xs text-gray-400 mt-2">
          Continuously growing – join our journey of success.
        </p>
      </div>
    </section>
  );
}