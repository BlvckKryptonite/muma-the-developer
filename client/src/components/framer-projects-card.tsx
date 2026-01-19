import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const framerProjectsIcon = "/icons/framer.png";

interface FramerProjectsCardProps {
  index: number;
}

export function FramerProjectsCard({ index }: FramerProjectsCardProps) {
  return (
    <Link href="/framer-projects">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: index * 0.1,
          ease: "easeOut",
        }}
        whileHover={{
          y: -12,
          scale: 1.03,
          rotateY: 2,
          transition: { duration: 0.4, ease: "easeOut" },
        }}
        whileTap={{ scale: 0.97 }}
        className="project-card relative bg-white dark:bg-slate-800/90 rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl border border-slate-200/50 dark:border-slate-700/50 transition-all duration-500 hover:shadow-2xl dark:hover:shadow-2xl cursor-pointer group overflow-hidden backdrop-blur-sm"
      >

        <div className="relative z-10 flex items-start space-x-4 sm:space-x-6">
          <div className="flex-shrink-0">
            <motion.div
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center shadow-md shadow-slate-900/30 dark:shadow-slate-950/50 group-hover:shadow-lg group-hover:shadow-slate-500/25 transition-all duration-300"
              whileHover={{
                rotate: [0, -5, 5, 0],
                scale: 1.1,
                transition: { duration: 0.4, ease: "easeInOut" },
              }}
            >
              <img
                  src={framerProjectsIcon}
                  alt="icon"
                  className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-contain bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center shadow-md shadow-slate-900/30 dark:shadow-slate-950/50 group-hover:shadow-lg group-hover:shadow-slate-500/25 transition-all duration-300"
                />


            </motion.div>
          </div>
          <div className="flex-1">
            <motion.h3
              className="font-poppins text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-2 sm:mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              Framer Projects
            </motion.h3>
            <motion.p
              className="text-slate-600 dark:text-slate-300 mb-3 sm:mb-4 leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300 text-sm sm:text-base"
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2, delay: 0.05 }}
            >
              Stunning, high-performance websites meticulously designed and developed using Framer. Each embodies modern design principles, combining sleek aesthetics with smooth animations. Built to deliver both visual impact and seamless functionality across devices.
            </motion.p>
            <motion.div
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors group/link text-sm sm:text-base"
              whileHover={{ scale: 1.05, x: 4 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Explore Collection
              <motion.div
                className="ml-2"
                whileHover={{ x: 3, y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
