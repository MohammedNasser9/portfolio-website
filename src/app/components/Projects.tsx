import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight } from "lucide-react";
import imgProject1 from "../../assets/f59160046c9a3c3fa995737bb0b2575d8aed1b9c.png";
import imgProject2 from "../../assets/efaa74af87883b2eaba1ff92ec9b35c650f077f5.png";
import imgProject3 from "../../assets/2bab7aad8c11833074284f10e41a681c0c475a86.png";
import imgProject4 from "../../assets/7cccfc9599446311cfe5742fb9fc40899cd864ce.png";
import imgProject5 from "../../assets/ccdd9b608cd2ffb9214744c9d2b72e49782389f0.png";
import imgProject6 from "../../assets/9ff2c675faaca6f42d4a63937a4dd7f4dbbdce29.png";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const projects = [
    {
      title: "Otlob Food Delivery ",
      tags: ["UX Research", "UI Design", "Mobile App"],
      image: imgProject2,
      description:
        "Developed a food delivery app with smooth UX and attractive UI. Conducted user interviews, flowcharts, wireframes, and interactive prototypes for optimal usability.",
      link: "https://www.behance.net/gallery/244985217/Otlob-Food-Delivery-Mobile-App-UIUX-Case-Study",
    },
    {
      title: "MedCare Clinic",
      tags: ["UX Research", "UI Design", "Web Design"],
      image: imgProject6,
      description:
        "Designed a medical clinic booking platform with seamless UX. Conducted stakeholder interviews, user journeys, wireframes, and UI design emphasizing usability and clarity.",
      link: "https://www.behance.net/gallery/245011631/MedCare-Medical-Clinic-Booking-Website-UIUX",
    },
    {
      title: "E-commerce Website",
      tags: ["UX Research", "UI Design", "Figma"],
      image: imgProject3,
      description:
        "Designed a fully responsive e-commerce website with seamless user experience. Conducted stakeholder interviews, user research, wireframes, and high-fidelity UI design focusing on usability, hierarchy, and accessibility.",
      link: "https://www.behance.net/gallery/245347953/E-commerce-Website-UIUX-Design",
    },
    {
      title: "Admin Dashboard",
      tags: ["UX Research", "UI Design", "Dashboard"],
      image: imgProject1,
      description:
        "Created a clean and intuitive admin dashboard. Conducted user flows, wireframing, and interactive prototypes to optimize efficiency and user satisfaction.",
      link: "https://www.behance.net/gallery/245347709/Admin-Dashboard",
    },
    {
      title: "Luminal Landing Page",
      tags: ["UX Research", "UI Design", "Landing Page"],
      image: imgProject4,
      description:
        "Designed a modern landing page with focus on conversion and user engagement. Wireframes, usability testing, and responsive UI design were implemented.",
      link: "https://www.behance.net/gallery/245440295/Luminal-Landing-Page",
    },
    {
      title: "Aura Luxury Fashion",
      tags: ["UX Research", "UI Design", "Mobile App"],
      image: imgProject5,
      description:
        "Crafted a curated luxury fashion app. Focused on visual hierarchy, accessibility, and delightful interactions. Wireframes, user testing, and high-fidelity UI delivered.",
      link: "https://www.behance.net/gallery/245212775/Aura-Curated-Luxury-Fashion-App-UI-Design",
    },
  ];

  return (
    <section id="work" ref={ref} className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
            Featured Projects
          </h2>
          <p className="text-[#64748b] text-lg">
            A selection of my recent UX/UI design works.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl overflow-hidden border border-[#e2e8f0] shadow-sm hover:shadow-2xl transition-all duration-300">
                {/* Image Container */}
                <div className="relative bg-[#f1f5f9] overflow-hidden aspect-[4/3]">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-[#135bec]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1 }}
                      className="text-white flex items-center gap-2"
                    >
                      View Project
                      <ArrowRight size={20} />
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  {/* Tags */}
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-[rgba(19,91,236,0.1)] text-[#135bec] text-xs font-bold px-2 py-1 rounded uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#0f172a] group-hover:text-[#135bec] transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#64748b] line-clamp-4">
                    {project.description}
                  </p>

                  {/* Link */}
                  <div className="mt-2 text-[#135bec] ml-1 flex gap-2 font-bold">
                    Explore Project<ArrowRight className="inline-block " />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
