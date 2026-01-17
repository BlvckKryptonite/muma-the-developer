import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const dataProjectsIcon = "/icons/data-projects.png";

interface DataProjectsCardProps {
  index: number;
}

export function DataProjectsCard({ index }: DataProjectsCardProps) {
  return (
    <Link href="/data-projects">
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
        className="project-card relative bg-white dark:bg-slate-800/90 rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl border border-slate-200/50 dark:border-slate-700/50 transition-all duration-500 hover:shadow-2xl hover:border-blue-300/60 dark:hover:border-blue-600/60 dark:hover:shadow-2xl cursor-pointer group overflow-hidden backdrop-blur-sm"
      >
        {/* Subtle background glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-indigo-400/5 to-purple-400/5 dark:from-blue-400/10 dark:via-indigo-400/10 dark:to-purple-400/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          initial={false}
          whileHover={{
            background: [
              "linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(99, 102, 241, 0.05), rgba(139, 92, 246, 0.05))",
              "linear-gradient(225deg, rgba(99, 102, 241, 0.08), rgba(139, 92, 246, 0.08), rgba(59, 130, 246, 0.08))",
              "linear-gradient(315deg, rgba(139, 92, 246, 0.05), rgba(59, 130, 246, 0.05), rgba(99, 102, 241, 0.05))",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative z-10 flex items-start space-x-3 sm:space-x-4">
          <div className="flex-shrink-0">
            <motion.div
              className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-md shadow-emerald-500/30 dark:shadow-emerald-900/50 group-hover:shadow-lg group-hover:shadow-emerald-400/40 transition-all duration-300"
              whileHover={{
                rotate: [0, -5, 5, 0],
                scale: 1.1,
                transition: { duration: 0.4, ease: "easeInOut" },
              }}
            >
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
              </svg>
            </motion.div>
          </div>
          <div className="flex-1">
            <motion.h3
              className="font-poppins text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-2 sm:mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              Data Projects
            </motion.h3>
            <motion.p
              className="text-slate-600 dark:text-slate-300 mb-3 sm:mb-4 leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300 text-sm sm:text-base"
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2, delay: 0.05 }}
            >
              Intelligent data analytics and fraud detection systems built with Python and modern data science. Each project demonstrates real-world problem-solving through machine learning, predictive analytics, and data-driven insights.
            </motion.p>
            <motion.div
              className="inline-flex items-center text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium transition-colors group/link text-sm sm:text-base"
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
