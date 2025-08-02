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
  Frontend: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Framer Motion"],
  Backend: ["Python", "Django", "PostgreSQL", "Streamlit"],
  "Tools & APIs": ["OpenAI API", "Git & GitHub", "Replit", "Netlify", "Vercel", "Heroku", "Render"]
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
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="font-poppins text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Muma Kalobwe
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-xl sm:text-2xl md:text-3xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Full Stack Developer | Data & AI Enthusiast | FinTech-Focused
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(techStack).map(([category, technologies], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${
                  index === 0 ? 'from-blue-500 to-indigo-600' :
                  index === 1 ? 'from-green-500 to-emerald-600' :
                  'from-purple-500 to-indigo-600'
                } rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  {index === 0 && (
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
                    </svg>
                  )}
                  {index === 1 && (
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.26-.02.21-.01H20.83l.26.02.32.05.36.1.4.16.42.24.42.33.4.44.36.57.32.71.24.87.16 1.04.06 1.22-.05 1.23-.14 1.05-.21.88-.28.73-.32.59-.35.46-.36.36-.36.26-.35.18-.32.12-.28.07-.21.03H12.23v-3.06l.02-.21.04-.27.07-.32.1-.35.15-.37.2-.36.27-.35.33-.32.41-.27.5-.22.59-.14.69-.05h5.12l.33-.02.37-.07.4-.14.42-.2.43-.26.42-.32.39-.37.35-.4.3-.42.24-.43.18-.42.13-.4.08-.37.04-.32.01-.25V9.23l-.01-.31-.04-.32-.08-.38-.13-.42-.18-.44-.24-.43-.3-.42-.35-.4-.39-.37-.42-.32-.43-.26-.42-.2-.4-.14-.37-.07-.33-.02H3.17l-.21.01-.28.04-.32.08-.35.15-.36.2-.36.26-.35.34-.32.4-.28.42-.21.43-.14.39-.08.32-.04.2-.02.16V3.91l.01-.33.05-.32.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09-.33.22zM13.98 7.35l-.13.32-.12.33-.08.34-.05.32-.02.3v.3l.02.3.05.32.08.34.12.33.13.32.14.3.15.28.16.26.16.24.17.21.17.19.18.17.18.15.2.13.2.11.2.09.2.07.2.05.2.03.2.01.2-.01.2-.03.2-.05.2-.07.2-.09.2-.11.2-.13.18-.15.18-.17.17-.19.17-.21.16-.24.16-.26.15-.28.14-.3.13-.32.12-.33.08-.34.05-.32.02-.3v-.3l-.02-.3-.05-.32-.08-.34-.12-.33-.13-.32-.14-.3-.15-.28-.16-.26-.16-.24-.17-.21-.17-.19-.18-.17-.18-.15-.2-.13-.2-.11-.2-.09-.2-.07-.2-.05-.2-.03-.2-.01-.2.01-.2.03-.2.05-.2.07-.2.09-.2.11-.2.13-.18.15-.18.17-.17.19-.17.21-.16.24-.16.26-.15.28-.14.3z"/>
                    </svg>
                  )}
                  {index === 2 && (
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                    </svg>
                  )}
                </div>
                <h3 className="font-poppins text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  {category}
                </h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  {technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
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
