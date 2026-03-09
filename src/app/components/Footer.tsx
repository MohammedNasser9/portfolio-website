import { motion } from "motion/react";
import { Heart } from "lucide-react";

/**
 * Footer Component
 * Simple footer with copyright and attribution
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-[#e2e8f0]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-[#64748b] text-sm">
            © {currentYear} Mohammed Naseer. All rights reserved.
          </div>

          {/* Made with love */}
          <motion.div
            className="flex items-center gap-2 text-[#64748b] text-sm"
            whileHover={{ scale: 1.05 }}
          >
            <span>Made with</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart className="w-4 h-4 fill-red-500 text-red-500" />
            </motion.div>
            <span>using React & Tailwind</span>
          </motion.div>

          {/* Links */}
          <div className="flex gap-6">
            <a
              href="#"
              className="text-[#64748b] hover:text-[#135bec] transition-colors text-sm"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-[#64748b] hover:text-[#135bec] transition-colors text-sm"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
