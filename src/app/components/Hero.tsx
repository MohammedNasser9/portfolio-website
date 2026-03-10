import { motion } from "motion/react";
import imgMohammedNasserPortrait from "../../assets/03208ad9c3409339842b580fadc1f63a56a65ebe.png";

import { ArrowRight } from "lucide-react";

/**
 * Hero Component
 * Main landing section with animated introduction
 * Features: name, title, CTA buttons, and profile image
 */
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f6f6f8] to-white overflow-hidden pt-20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0f172a] leading-tight">
                Mohammed
                <br />
                Nasser
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-xl md:text-xl text-[#475569]">
                UX & UI Designer crafting modern web & mobile
                experiences I create seamless user experiences by conducting
                research, defining user flows, designing interfaces, and
                building interactive prototypes for web and mobile apps.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#work"
                className="inline-flex items-center gap-2 bg-[#135bec] text-white px-8 py-4 rounded-full font-medium hover:bg-[#0f4ac5] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
                <ArrowRight size={20} />
              </motion.a>
              <motion.a
                href="#about"
                className="inline-flex items-center gap-2 bg-white text-[#135bec] px-8 py-4 rounded-full font-medium border-2 border-[#135bec] hover:bg-[#135bec] hover:text-white transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                About Me
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-8 pt-8"
            >
              <div>
                <div className="text-3xl font-bold text-[#135bec]">1+</div>
                <div className="text-sm text-[#64748b]">Year Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#135bec]">12+</div>
                <div className="text-sm text-[#64748b]">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#135bec]">100%</div>
                <div className="text-sm text-[#64748b]">Happy Clients</div>
              </div>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Background circle decoration */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-br from-[#135bec]/20 to-transparent rounded-full blur-3xl"
              />

              <img
                src={imgMohammedNasserPortrait}
                alt="Mohammed Naseer - UX/UI Designer"
                className="relative z-10 w-full h-auto rounded-full shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#135bec] rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-[#135bec] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
