import { motion } from "framer-motion";
import { ExternalLink, Clock } from "lucide-react";

interface ProjectCardProps {
  name: string;
  description: string;
  link: string;
  icon: string;
  index: number;
}

export function ProjectCard({ name, description, link, icon, index }: ProjectCardProps) {
  const isComingSoon = link === "#";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.98 }}
      className="project-card bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-600 dark:hover:shadow-2xl cursor-pointer group"
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <motion.div 
            className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300"
            whileHover={{ 
              rotate: [0, -5, 5, 0],
              scale: 1.1,
              transition: { duration: 0.4, ease: "easeInOut" }
            }}
          >
            <motion.img 
              src={icon} 
              alt={`${name} icon`} 
              className="w-6 h-6 text-white" 
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
          )}
        </div>
      </div>
    </motion.div>
  );
}
