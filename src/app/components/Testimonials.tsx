import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Star } from "lucide-react";
import imgBackground1 from "../../assets/b16211a9f9fd8fb82e6483328535ecd458530f46.png";
import imgBackground2 from "../../assets/d1de8b14dcdb224d3238629ee05b2850c42f6549.png";

/**
 * Testimonials Component
 * Displays client testimonials with ratings
 */
export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      rating: 5,
      text: "Working with this designer was an absolute pleasure. The attention to detail and understanding of user needs resulted in a product our customers love.",
      avatar: imgBackground1,
    },
    {
      name: "David Chen",
      role: "Product Manager, InnovateCo",
      rating: 5,
      text: "Exceptional UI/UX work! The designs were not only beautiful but also highly functional. Our conversion rates improved by 40% after the redesign.",
      avatar: imgBackground2,
    },
    {
      name: "Ali Hassan",
      role: "Founder, StartupHub",
      rating: 5,
      text: "A true professional who brings creativity and technical expertise together. The collaboration was smooth, and the final product exceeded our expectations.",
      avatar: imgBackground1,
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a]">
            Kind Words
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-8 border border-[#e2e8f0] shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#facc15] text-[#facc15]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#475569] mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-[#e2e8f0]">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#135bec] to-[#0f4ac5] flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-[#0f172a]">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-[#64748b]">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
