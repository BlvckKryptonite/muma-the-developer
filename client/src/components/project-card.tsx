import { motion } from "framer-motion";
import { ExternalLink, Clock, FileText } from "lucide-react";

interface ProjectCardProps {
  name: string;
  description: string;
  link: string;
  documentation: string;
  icon: string;
  index: number;
}

export function ProjectCard({ name, description, link, documentation, icon, index }: ProjectCardProps) {
  const isComingSoon = link === "#";

  return (
    <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          duration: 0.8, 
          delay: index * 0.1,
          ease: "easeOut"
        }}
        whileHover={{ 
          y: -12, 
          scale: 1.03,
          rotateY: 2,
          transition: { duration: 0.4, ease: "easeOut" }
        }}
        whileTap={{ scale: 0.97 }}
        className="project-card relative bg-white dark:bg-slate-800/90 rounded-3xl p-8 shadow-xl border border-slate-200/50 dark:border-slate-700/50 transition-all duration-500 hover:shadow-2xl hover:border-blue-300/60 dark:hover:border-blue-600/60 dark:hover:shadow-2xl cursor-pointer group overflow-hidden backdrop-blur-sm"
      >
      {/* Subtle background glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-indigo-400/5 to-purple-400/5 dark:from-blue-400/10 dark:via-indigo-400/10 dark:to-purple-400/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        initial={false}
        whileHover={{
          background: [
            "linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(99, 102, 241, 0.05), rgba(139, 92, 246, 0.05))",
            "linear-gradient(225deg, rgba(99, 102, 241, 0.08), rgba(139, 92, 246, 0.08), rgba(59, 130, 246, 0.08))",
            "linear-gradient(315deg, rgba(139, 92, 246, 0.05), rgba(59, 130, 246, 0.05), rgba(99, 102, 241, 0.05))"
          ]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <div className="relative z-10 flex items-start space-x-4">
        <div className="flex-shrink-0">
          <motion.div 
            className="w-14 h-14 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center shadow-md shadow-slate-900/30 dark:shadow-slate-950/50 group-hover:shadow-lg group-hover:shadow-slate-500/25 transition-all duration-300"
            whileHover={{ 
              rotate: [0, -5, 5, 0],
              scale: 1.1,
              transition: { duration: 0.4, ease: "easeInOut" }
            }}
          >
            <motion.img 
              src={icon} 
              alt={`${name} icon`} 
              className="w-8 h-8 object-contain" 
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>
        </div>
        <div className="flex-1">
          <motion.h3 
            className="font-poppins text-xl font-semibold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            {name}
          </motion.h3>
          <motion.p 
            className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300"
            whileHover={{ x: 2 }}
            transition={{ duration: 0.2, delay: 0.05 }}
          >
            {description}
          </motion.p>
          {isComingSoon ? (
            <motion.span 
              className="inline-flex items-center text-slate-500 dark:text-slate-400 font-medium"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Clock className="w-4 h-4 mr-1" />
              </motion.div>
              Coming Soon
            </motion.span>
          ) : (
            <div className="flex items-center justify-between">
              <motion.a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors group/link"
                whileHover={{ scale: 1.05, x: 4 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                View Live
                <motion.div
                  className="ml-1"
                  whileHover={{ x: 3, y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  <ExternalLink className="w-4 h-4" />
                </motion.div>
              </motion.a>
              
              {documentation !== "#" && (
                <motion.a
                  href={documentation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 font-medium transition-colors group/link ml-auto"
                  whileHover={{ scale: 1.05, x: -4 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  Documentation
                  <motion.div
                    className="ml-1"
                    whileHover={{ x: 3, y: -3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FileText className="w-4 h-4" />
                  </motion.div>
                </motion.a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
