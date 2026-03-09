import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Search, Lightbulb, Palette, Rocket, TestTube } from "lucide-react";

/**
 * Process Component
 * Displays the design process steps with icons
 */
export function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const processSteps = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Research",
      description: "Understanding user needs and market requirements",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Wireframe",
      description: "Creating low-fidelity layouts and user flows",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UI Design",
      description: "Crafting beautiful and functional interfaces",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Prototype",
      description: "Building interactive mockups for validation",
    },
    {
      icon: <TestTube className="w-6 h-6" />,
      title: "Testing",
      description: "Validating designs through user feedback",
    },
  ];

  return (
    <section id="process" ref={ref} className="py-24 bg-[#f6f6f8]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a]">
            Design Process
          </h2>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              {/* Icon Container */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 mx-auto mb-4 bg-white rounded-2xl border border-[#e2e8f0] flex items-center justify-center text-[#135bec] group-hover:bg-[#135bec] group-hover:text-white transition-all duration-300 shadow-sm"
              >
                {step.icon}
              </motion.div>

              {/* Title */}
              <h3 className="font-bold text-[#0f172a] mb-2">{step.title}</h3>

              {/* Description */}
              <p className="text-sm text-[#64748b]">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
