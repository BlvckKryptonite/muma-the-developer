import { motion } from "framer-motion";

export function AnimatedClock() {
  return (
    <motion.div
      className="inline-flex items-center"
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
    >
      <svg
        className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Clock circle */}
        <circle cx="12" cy="12" r="10" />
        
        {/* Hour hand */}
        <g>
          <motion.line
            x1="12"
            y1="12"
            x2="12"
            y2="7"
            animate={{ rotate: [0, 30] }}
            transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "12px 12px" }}
          />
        </g>
        
        {/* Minute hand */}
        <g>
          <motion.line
            x1="12"
            y1="12"
            x2="12"
            y2="5"
            stroke="currentColor"
            strokeWidth="1.5"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "12px 12px" }}
          />
        </g>
        
        {/* Center dot */}
        <circle cx="12" cy="12" r="1" fill="currentColor" />
      </svg>
    </motion.div>
  );
}
