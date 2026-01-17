import { motion } from "framer-motion";
import { useTheme } from "@/components/theme-provider";
import { ProjectCard } from "@/components/project-card";
import { AnimatedBackground } from "@/components/animated-background";
import { Sun, Moon, Mail, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

const fraudsightLogo = "/icons/fraudshield.png";

const dataProjects = [
  {
    name: "FraudSight",
    description:
      "A sophisticated fraud detection and prevention system built with Python and machine learning. Analyzes financial transactions in real-time using rule-based detection and predictive models to flag suspicious activity. Features tabulated outputs, color-coded alerts, and modular logic for comprehensive transaction analysis across fintech and banking sectors.",
    link: "https://fraudsight-df3ce1bad96c.herokuapp.com/",
    documentation:
      "https://github.com/BlvckKryptonite/fraudsight/blob/main/README.md",
    icon: fraudsightLogo,
  },
];

export default function DataProjects() {
  const { theme, setTheme } = useTheme();

  return (
    <motion.div
      className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-200 transition-all duration-500 ease-in-out relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Dark Mode Toggle */}
      <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50">
        <motion.button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 sm:p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-200 dark:border-slate-700 backdrop-blur-sm"
        >
          <motion.div
            initial={false}
            animate={{
              rotate: theme === "dark" ? 0 : 180,
              opacity: 1,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
            ) : (
              <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600" />
            )}
          </motion.div>
        </motion.button>
      </div>

      {/* Back to Portfolio Button */}
      <div className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50">
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 sm:p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-200 dark:border-slate-700 backdrop-blur-sm flex items-center justify-center"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600 dark:text-slate-300" />
          </motion.button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="pt-12 sm:pt-16 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-3 leading-tight px-2">
              Data Projects
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="px-2"
          >
            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-3 sm:mb-4 leading-relaxed">
              Intelligent data analytics and fraud detection systems built with Python and modern data science. Each project demonstrates real-world problem-solving through machine learning, predictive analytics, and actionable insights.
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

      {/* Data Projects Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {dataProjects.map((project, index) => (
              <motion.div
                key={project.name}
                className={
                  dataProjects.length === 1
                    ? "lg:col-span-2 max-w-2xl mx-auto"
                    : ""
                }
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <ProjectCard {...project} index={index} />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8">
              Let's Connect 💡
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed font-light text-center">
              Interested in data analytics or fraud detection solutions for your business? Let's discuss how to leverage data-driven insights for your needs.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a
              href="mailto:Mumathedeveloper@gmail.com"
              onClick={(e) => {
                try {
                  window.location.href = "mailto:Mumathedeveloper@gmail.com";
                } catch (error) {
                  console.log("Mailto failed, please copy email manually");
                }
              }}
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Get In Touch
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-600 dark:text-slate-400">
            © 2025 Muma Kalobwe. Built with React, Tailwind CSS & Vite.
          </p>
        </div>
      </footer>
    </motion.div>
  );
}
