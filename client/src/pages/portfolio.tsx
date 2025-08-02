import { motion } from "framer-motion";
import { useTheme } from "@/components/theme-provider";
import { ProjectCard } from "@/components/project-card";
import { Sun, Moon, Mail } from "lucide-react";

const projects = [
  {
    name: "Reelalyze",
    description: "AI-powered YouTube summarizer using Streamlit, Python, and OpenAI. Extracts context-aware summaries from video transcripts and visuals.",
    link: "https://reelalyze.replit.app",
    icon: "/icons/reelalyze.svg"
  },
  {
    name: "SpendSmart",
    description: "A budgeting app built with HTML/CSS, JavaScript, and Chart.js. Helps users track expenses, savings, and gain financial awareness.",
    link: "https://spendsmart-js.netlify.app",
    icon: "/icons/spendsmart.svg"
  },
  {
    name: "FraudShield CLI",
    description: "Python-based command-line tool to flag suspicious financial transactions using rule-based and ML-based logic.",
    link: "https://github.com/BlvckKryptonite/fraudshield",
    icon: "/icons/fraudshield.svg"
  },
  {
    name: "Currency Exchange CLI",
    description: "Real-time currency converter using Fawaz API. Built in Python and deployed to Heroku.",
    link: "https://currency-converter-cli-fad75cd3b79c.herokuapp.com/",
    icon: "/icons/currency.svg"
  },
  {
    name: "ParsePilot",
    description: "Python tool that cleans CSV data, extracts nested JSON, and prepares it for analysis. Built for data preprocessing workflows.",
    link: "#",
    icon: "/icons/parsepilot.svg"
  }
];

const techStack = {
  Frontend: [
    { name: "HTML, CSS, JavaScript", icon: "🌐" },
    { name: "React", icon: "⚛️" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Framer Motion", icon: "🎭" }
  ],
  Backend: [
    { name: "Python, Django", icon: "🐍" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Streamlit", icon: "📊" }
  ],
  "Tools & Deployment": [
    { name: "Replit, Heroku, Render", icon: "🚀" },
    { name: "Netlify, Vercel", icon: "⚡" }
  ],
  "Version Control": [
    { name: "Git, GitHub", icon: "📝" }
  ],
  APIs: [
    { name: "OpenAI API", icon: "🤖" }
  ]
};

export default function Portfolio() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-200 transition-colors duration-300">
      {/* Dark Mode Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5 text-slate-400" />
          ) : (
            <Moon className="w-5 h-5 text-slate-600" />
          )}
        </button>
      </div>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center mb-6"
          >
            <div className="w-24 h-24 mb-6 rounded-full overflow-hidden shadow-lg border-4 border-white dark:border-slate-700">
              <img 
                src="/icons/avatar.svg" 
                alt="Muma Kalobwe" 
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
              Muma Kalobwe
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              Full Stack Developer | Data & AI Enthusiast | FinTech-Focused
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex justify-center">
              <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8 text-center">
              About Me
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed text-center max-w-3xl mx-auto">
              I'm a full-stack developer with a background in psychology & criminology, now building smart solutions in fintech, fraud detection, and AI-powered tooling. I thrive at the intersection of behavioral insight and clean, scalable code.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-16 text-center">
              Featured Projects
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={project.name} className={index === 4 ? "lg:col-span-2" : ""}>
                <ProjectCard {...project} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-16 text-center">
              Core Tech Stack
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(techStack).map(([category, technologies], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
              >
                <h3 className="font-poppins text-xl font-semibold text-slate-900 dark:text-white mb-6 text-center">
                  {category}
                </h3>
                <div className="space-y-4">
                  {technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: categoryIndex * 0.1 + techIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors"
                    >
                      <div className="text-2xl flex-shrink-0">
                        {tech.icon}
                      </div>
                      <span className="text-slate-700 dark:text-slate-300 font-medium">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8">
              Let's Connect
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Reach out if you want to collaborate, hire me, or geek out over Python + FinTech.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a
              href="mailto:your.email@example.com"
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-600 dark:text-slate-400">
            © 2024 Muma Kalobwe. Built with React, Tailwind CSS & Vite.
          </p>
        </div>
      </footer>
    </div>
  );
}
