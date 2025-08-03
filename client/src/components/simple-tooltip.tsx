import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SimpleTooltipProps {
  children: React.ReactNode;
  content: string;
  project: {
    name: string;
    description: string;
    icon: string;
  };
}

export function SimpleTooltip({ children, content, project }: SimpleTooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative">
      <div 
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="cursor-pointer"
      >
        {children}
      </div>
      
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-50 pointer-events-none"
          >
            <div className="bg-slate-900 dark:bg-slate-800 text-white text-sm rounded-lg px-3 py-2 shadow-xl border border-slate-700/50 backdrop-blur-sm max-w-xs">
              <div className="flex items-center space-x-2 mb-2">
                <img 
                  src={project.icon} 
                  alt={`${project.name} icon`} 
                  className="w-5 h-5 object-contain" 
                />
                <span className="font-medium">{project.name}</span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">{content}</p>
              
              {/* Arrow */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                <div className="border-4 border-transparent border-t-slate-900 dark:border-t-slate-800"></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}