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
      whileHover={{ y: -8 }}
      className="project-card bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:shadow-xl dark:hover:shadow-2xl"
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
            <img src={icon} alt={`${name} icon`} className="w-6 h-6 text-white" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="font-poppins text-xl font-semibold text-slate-900 dark:text-white mb-3">
            {name}
          </h3>
          <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
            {description}
          </p>
          {isComingSoon ? (
            <span className="inline-flex items-center text-slate-500 dark:text-slate-400 font-medium">
              <Clock className="w-4 h-4 mr-1" />
              Coming Soon
            </span>
          ) : (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
            >
              View Live
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
