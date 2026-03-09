import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Mail, Linkedin, Send, Phone } from "lucide-react";
/**
 * Contact Component
 * Call-to-action section with contact options
 */
export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="py-24 bg-[#f6f6f8]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-72 h-72 bg-[#135bec] rounded-full blur-2xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#135bec] rounded-full blur-2xl" />
          </div>

          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-5xl font-bold text-white mb-6"
            >
              Let's Work Together.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
            >
              Have a project in mind? Feel free to reach out and let's discuss it.
            </motion.p>

            {/* CTA Button */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              href="mailto:mhmdnasser912@gmail.com"
              className="inline-flex items-center gap-3 bg-[#135bec] text-white px-10 py-5 rounded-full font-medium text-lg hover:bg-[#0f4ac5] transition-all shadow-xl hover:shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send size={24} />
              Get in Touch
            </motion.a>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex justify-center gap-6 mt-12"
            >
              <motion.a
                href="mailto:mhmdnasser912@gmail.com"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#135bec] transition-all"
                aria-label="Email"
              >
                <Mail size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/mohamednasser9"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#135bec] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="https://www.behance.net/mohammednasser912"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#135bec] transition-all"
                aria-label="Behance"
              >
                Be
              </motion.a>
              <motion.a
                href="tel:+201094609672"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#135bec] transition-all"
                aria-label="Phone"
              >
                <Phone size={20} />
              </motion.a>
              
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
