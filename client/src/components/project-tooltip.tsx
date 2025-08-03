import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useFloating, autoUpdate, offset, flip, shift, useHover, useFocus, useDismiss, useRole, useInteractions, FloatingPortal } from "@floating-ui/react";
import { Calendar, Code, Globe, GitBranch, Clock, Star } from "lucide-react";

interface ProjectTooltipProps {
  children: React.ReactNode;
  project: {
    name: string;
    description: string;
    link: string;
    documentation: string;
    icon: string;
    techStack?: string[];
    status?: string;
    lastUpdated?: string;
    stars?: number;
    category?: string;
  };
}

export function ProjectTooltip({ children, project }: ProjectTooltipProps) {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [
      offset(12),
      flip({
        fallbackAxisSideDirection: "start",
      }),
      shift({ padding: 8 }),
    ],
    whileElementsMounted: autoUpdate,
  });

  const hover = useHover(context, {
    move: false,
    delay: { open: 300, close: 150 },
  });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "tooltip" });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ]);

  // Enhanced project details for tooltips
  const getProjectDetails = (projectName: string) => {
    const baseDetails = {
      techStack: ["JavaScript", "HTML", "CSS"],
      status: "Live",
      lastUpdated: "2024",
      stars: Math.floor(Math.random() * 50) + 10,
      category: "Web App"
    };

    const projectSpecificDetails: Record<string, Partial<typeof baseDetails>> = {
      "Reelalyze": {
        techStack: ["Python", "Streamlit", "OpenAI API", "YouTube API"],
        category: "AI/ML Tool",
        status: "Live"
      },
      "Muma's 'Mazing Barbeque": {
        techStack: ["React", "Tailwind CSS", "Framer Motion", "Stripe"],
        category: "Restaurant Website",
        status: "Live"
      },
      "ATM SIM": {
        techStack: ["Python", "CLI", "Banking Logic"],
        category: "Financial Simulator",
        status: "Live"
      },
      "TypeRush": {
        techStack: ["Vanilla JavaScript", "HTML5", "CSS3"],
        category: "Game",
        status: "Live"
      },
      "Currency Exchange CLI": {
        techStack: ["Python", "Fawaz API", "Heroku"],
        category: "Financial Tool",
        status: "Live"
      },
      "The GlowClip": {
        techStack: ["Shopify", "Liquid", "JavaScript", "CSS"],
        category: "E-commerce",
        status: "Live"
      },
      "SpendSmart": {
        techStack: ["JavaScript", "Chart.js", "HTML", "CSS"],
        category: "Finance App",
        status: "Live"
      },
      "ParsePilot": {
        techStack: ["Python", "Pandas", "JSON", "CSV"],
        category: "Data Tool",
        status: "Live"
      },
      "Game-Xit": {
        techStack: ["HTML", "CSS", "Google Maps API"],
        category: "Educational Site",
        status: "Live"
      },
      "FraudShield CLI": {
        techStack: ["Python", "Machine Learning", "CLI"],
        category: "Security Tool",
        status: "Live"
      },
      "ChurnChaser": {
        techStack: ["Python", "Streamlit", "Pandas", "ML"],
        category: "Analytics Tool",
        status: "Live"
      },
      "Word Unscramble": {
        techStack: ["JavaScript", "HTML5", "CSS3"],
        category: "Word Game",
        status: "Live"
      },
      "Retail Radar": {
        techStack: ["Python", "Web Scraping", "React", "APIs"],
        category: "Price Comparison",
        status: "Prototype"
      },
      "Love Math": {
        techStack: ["JavaScript", "HTML5", "CSS3"],
        category: "Educational Game",
        status: "Live"
      },
      "Love Running": {
        techStack: ["HTML5", "CSS3", "Responsive Design"],
        category: "Fitness Website",
        status: "Live"
      }
    };

    return {
      ...baseDetails,
      ...projectSpecificDetails[projectName]
    };
  };

  const details = getProjectDetails(project.name);

  return (
    <>
      <div ref={refs.setReference} {...getReferenceProps()}>
        {children}
      </div>
      <FloatingPortal>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={refs.setFloating}
              style={floatingStyles}
              {...getFloatingProps()}
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="z-50 max-w-sm"
            >
              <motion.div
                className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200/80 dark:border-slate-700/80 p-6 backdrop-blur-xl"
                layoutId={`tooltip-${project.name}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {/* Header with icon and title */}
                <div className="flex items-start space-x-3 mb-4">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0"
                    whileHover={{ rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={project.icon} 
                      alt={`${project.name} icon`} 
                      className="w-7 h-7 object-contain" 
                    />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-poppins text-lg font-semibold text-slate-900 dark:text-white truncate">
                      {project.name}
                    </h4>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        details.status === 'Live' 
                          ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                          : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                      }`}>
                        {details.status}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {details.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="flex items-center space-x-1 mb-2">
                    <Code className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                      Tech Stack
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {details.techStack?.map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs rounded-md font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Project Stats */}
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>Updated {details.lastUpdated}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3" />
                      <span>{details.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Globe className="w-3 h-3" />
                      <span>Public</span>
                    </div>
                  </div>
                </div>

                {/* Gradient border effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 -z-10 blur-xl opacity-50" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </FloatingPortal>
    </>
  );
}