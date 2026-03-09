import { useRef } from "react";
import { motion, useInView } from "motion/react";

/**
 * About Component
 * Displays the about me section with fade-in animation
 */
export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-12">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a]">
              About Me
            </h2>
            <div className="w-12 h-1.5 bg-[#135bec] rounded-full" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-[#475569] text-lg leading-relaxed"
          >
            <p>
              I’m a{" "}
              <span className="font-bold text-[#135bec]">UX/UI Designer</span>{" "}
              focused on designing modern and user-friendly web and mobile
              applications. I enjoy transforming complex ideas into clear and
              intuitive digital experiences. My process usually starts with
              understanding the product vision and discussing goals with
              stakeholders. From there, I move into user research, defining user
              needs, creating wireframes, and building prototypes to shape the
              overall user experience. Once the UX foundation is clear, I focus
              on crafting the UI by designing clean, modern interfaces with
              strong visual hierarchy and usability in mind.
            </p>
            <p>
              My background includes a strong awareness of front-end
              technologies like{" "}
              <span className="font-semibold text-[#135bec]">
                React and Next.js, Tailwind, TypeScript,
              </span>{" "}
              allowing me to design with technical feasibility in mind and
              collaborate effectively with development teams. I believe that
              great design is not just about how it looks, but how it works and
              solves real problems for real people.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
