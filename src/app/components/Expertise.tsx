import { useRef } from "react";
import { motion, useInView } from "motion/react";
import svgPaths from "../../imports/svg-38jan5k44n";
import { Lightbulb, Wrench, Code2 } from "lucide-react";

/**
 * Expertise Component
 * Displays skill cards with stagger animation on scroll
 */
export function Expertise() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const expertiseCards = [
    {
      icon: <Lightbulb className="w-6 h-6 text-[#135bec]" />,
      title: "UX/UI Design",
      skills: [
        "User Research",
        "User Flow & Logic",
        "Wireframing",
        "High-Fi Design",
      ],
    },
    {
      icon: <Wrench className="w-6 h-6 text-[#135bec]" />,
      title: "Tools",
      skills: ["Figma", "Adobe XD", "Photoshop", "Illustrator"],
    },
    {
      icon: <Code2 className="w-6 h-6 text-[#135bec]" />,
      title: "Dev Awareness",
      skills: [
        "React / Next.js",
        "CSS (Tailwind-Bootstrap)",
        "Javascript & Typescript",
        "Git & Github",
      ],
    },
  ];

  return (
    <section id="expertise" ref={ref} className="py-24 bg-[#f6f6f8]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a]">
            My Expertise
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {expertiseCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-8 border border-[#e2e8f0] shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-[rgba(19,91,236,0.1)] rounded-xl flex items-center justify-center mb-6">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#0f172a] mb-6">
                {card.title}
              </h3>

              {/* Skills List */}
              <ul className="space-y-3">
                {card.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#135bec] rounded-full" />
                    <span className="text-[#64748b]">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
