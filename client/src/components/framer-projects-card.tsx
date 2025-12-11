import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

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
        className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/30 dark:via-indigo-950/30 dark:to-purple-950/30 rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl border border-blue-200/60 dark:border-blue-700/60 transition-all duration-500 hover:shadow-2xl hover:border-blue-300/80 dark:hover:border-blue-600/80 dark:hover:shadow-2xl cursor-pointer group overflow-hidden backdrop-blur-sm min-h-full flex items-center justify-center"
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-indigo-400/10 to-purple-400/10 dark:from-blue-400/20 dark:via-indigo-400/20 dark:to-purple-400/20 rounded-3xl"
          animate={{
            background: [
              "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1))",
              "linear-gradient(225deg, rgba(99, 102, 241, 0.15), rgba(139, 92, 246, 0.15), rgba(59, 130, 246, 0.15))",
              "linear-gradient(315deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1), rgba(99, 102, 241, 0.1))",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Animated dots/circles */}
        <motion.div
          className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-40"
          animate={{
            y: [0, -10, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-8 left-8 w-2 h-2 bg-indigo-400 rounded-full opacity-40"
          animate={{
            y: [0, 10, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        <div className="relative z-10 text-center flex flex-col items-center justify-center">
          <motion.div
            className="mb-4 sm:mb-6"
            whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <svg
              className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-blue-600 dark:text-blue-400"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
            </svg>
          </motion.div>

          <motion.h3
            className="font-poppins text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Framer Projects
          </motion.h3>

          <motion.p
            className="text-slate-600 dark:text-slate-300 mb-4 sm:mb-6 leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300 text-sm sm:text-base max-w-md"
            whileHover={{ x: 2 }}
            transition={{ duration: 0.2, delay: 0.05 }}
          >
            Explore beautiful, modern websites built with Framer
          </motion.p>

          <motion.div
            className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
            whileHover={{ scale: 1.05, x: 4 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore
            <motion.div
              className="ml-2"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
}
