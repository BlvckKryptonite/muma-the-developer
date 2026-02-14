import { motion } from "framer-motion";
import { useTheme } from "@/components/theme-provider";
import { ProjectCard } from "@/components/project-card";
import { FramerProjectsCard } from "@/components/framer-projects-card";
import { DataProjectsCard } from "@/components/data-projects-card";
import { ContactModal } from "@/components/contact-modal";
import { AnimatedBackground } from "@/components/animated-background";
import { Sun, Moon, Mail, ArrowRight, Github, Linkedin } from "lucide-react";
import { useState } from "react";
const profileImage = "/assets/profile.jpg";
const profileImage2 = "/assets/dp.jpg"
const featuredProjectsIcon = "/assets/featured-projects.png";
const reelalyzeIcon = "/icons/reelalyze.png";
const bbqIcon = "/icons/mumas-mazing-bbq.png";
const atmIcon = "/icons/atm.png";
const typerushIcon = "/icons/typerush.png";
const currencyIcon = "/icons/currency.png";
const glowclipIcon = "/icons/glowclip.png";
const sceneshareIcon = "/icons/sceneshare.png";
const maxlinIcon = "/icons/maxlin.png";
const chefGusto = "/icons/chef-gusto.png";
const pickflickLogo = "/icons/pickflick.png";

const projects = [
  {
    name: "SceneShare",
    description:
      "A full-stack Django and PostgreSQL web application enabling users to browse, rate, and review movies while managing personalized watchlists. Built as a sleek, community-driven movie review platform following the MVT architecture.",
    link: "https://sceneshare-0073094647bb.herokuapp.com/",
    documentation:
      "https://github.com/BlvckKryptonite/scene-share/blob/main/README.md",
    icon: sceneshareIcon
  },
  {
    name: "PickFlick",
    description:
      "An AI-powered movie recommendation app that reduces decision fatigue by matching user preferences to films using embeddings and vector search. Built with OpenAI and Supabase to generate personalized picks and explain recommendations in real time.",
    link: "",
    documentation: "",
    icon: pickflickLogo,
  },
  {
    name: "Muma's 'Mazing Barbeque",
    description:
      "A comic-book styled React and Tailwind website featuring Framer Motion scroll animations, interactive ticket tiers, superhero-themed chef cards, and a mock signup flow powered by Stripe. Built as a high-concept BBQ landing page.",
    link: "https://mumas-mazing-barbeque.netlify.app/",
    documentation:
      "https://github.com/BlvckKryptonite/mumas-mazing-barbeque-restored/blob/main/README.md",
    icon: bbqIcon,
  },
   {
    name: "Chef Gusto",
    description:
      "A TypeScript-powered recipe generator using unified AI for text and image creation. Features structured JSON outputs, clean React components, and a playful chef-inspired interface built for quick cooking inspiration.",
    link: "https://chef-gusto.netlify.app/",
    documentation:
      "https://github.com/BlvckKryptonite/chef-gusto/blob/main/README.md",
    icon: chefGusto,
  },
  {
    name: "ATM SIM",
    description:
      "CLI-based ATM simulator using Python. Simulates secure login, balance viewing, deposit/withdrawal functions, receipts and user accounts for core banking logic.",
    link: "https://atm-sim-muma-k.vercel.app/",
    documentation:
      "https://github.com/BlvckKryptonite/ATMSim/blob/main/README.md",
    icon: atmIcon,
  },
  {
    name: "TypeRush",
    description:
      "Fast-paced typing game built solely with vanilla JavaScript. Tracks speed and accuracy while providing real-time feedback and visual cues to improve typing skills.",
    link: "https://blvckkryptonite.github.io/TypeRush/",
    documentation:
      "https://github.com/BlvckKryptonite/TypeRush/blob/main/README.md",
    icon: typerushIcon,
  },

    {
    name: "Brew Haven",
    description:
      "A modern coffee shop website built with React, TypeScript, and Tailwind CSS. Features a premium dark theme, smooth animations, and interactive menu sections.",
    link: "https://blvckkryptonite.github.io/brew-haven/",
    documentation:
      "https://github.com/BlvckKryptonite/brew-haven/blob/main/README.md",
    icon: "./brew-haven-logo.png",
  },

    {
    name: "Maxlin Enterprise",
    description:
      "A custom cleaning services website built with React and Tailwind CSS. Includes a polished design system, smooth animations, service showcases, and an engaging user experience.",
    link: "https://maxlin-custom-site.netlify.app/",
    documentation:
      "https://github.com/BlvckKryptonite/maxlin-custom-site/blob/main/README.md",
    icon: maxlinIcon,
  },

  {
    name: "Currency Exchange CLI",
    description:
      "A terminal-based real-time currency converter using Fawaz API. Built in Python and deployed to Heroku.",
    link: "https://currency-converter-cli-fad75cd3b79c.herokuapp.com/",
    documentation:
      "https://github.com/BlvckKryptonite/currency_converter_cli/blob/main/README.md",
    icon: currencyIcon,
  },

    {
    name: "Word Unscramble",
    description:
      "A browser-based JavaScript word game designed to sharpen mental reflexes through fast-paced gameplay.",
    link: "https://blvckkryptonite.github.io/WordUnscramble/",
    documentation:
      "https://github.com/BlvckKryptonite/WordUnscramble/blob/main/README.md",
    icon: "/icons/wordgame.png",
  },
 

  // {
  //   name: "Love Running",
  //   description:
  //     "A simple multi-page fitness website built with vanilla HTML and CSS. Features a clean user interface, responsive layout, and accessible design tailored for a runners club.",
  //   link: "https://blvckkryptonite.github.io/love-running/",
  //   documentation:
  //     "https://github.com/BlvckKryptonite/love-running/blob/main/README.md",
  //   icon: "/icons/loverunning.png",
  // },
//   {
//     name: "SpendSmart",
//     description:
//       "A simple budgeting app built with HTML/CSS, JavaScript, and Chart.js. Helps users visualize expenses, savings, and get financial insight.",
//     link: "https://blvckkryptonite.github.io/SpendSmart/",
//     documentation:
//       "https://github.com/BlvckKryptonite/SpendSmart/blob/master/README.md",
//     icon: "/icons/spendsmart.png",
//   },
//   {
//     name: "ParsePilot",
//     description:
//       "Python tool that cleans CSV data, extracts nested JSON, and prepares it for analysis. Built for data preprocessing workflows.",
//     link: "https://parsepilot-b9qw.onrender.com/",
//     documentation:
//       "https://github.com/BlvckKryptonite/ParsePilot/blob/main/README.md",
//     icon: "/icons/parsepilot.png",
//   },
//   {
//     name: "Game-Xit",
//     description:
//       "A three-page HTML/CSS site built to raise awareness about video game addiction. Includes a responsive layout, embedded YouTube resources, a gaming self-assessment tool link, and a styled contact form with Google Maps integration.",
//     link: "https://blvckkryptonite.github.io/game-xit/",
//     documentation:
//       "https://github.com/BlvckKryptonite/game-xit/blob/main/README.md",
//     icon: "/icons/gameexit.png",
//   },
//   {
//     name: "FraudShield CLI",
//     description:
//       "A Python-based command-line tool that flags suspicious financial transactions using rule-based and machine learning detection. Includes tabulated outputs, color-coded alerts, and modular logic for analyzing datasets across fintech, banking, and fraud prevention.",
//     link: "#",
//     documentation:
//       "https://github.com/BlvckKryptonite/FraudShield/blob/main/README.md",
//     icon: "/icons/fraudshield.png",
//   },
//   {
//     name: "ChurnChaser",
//     description:
//       "A predictive analytics prototype built with Python and Streamlit to detect customer churn in e-commerce. Leverages behavioral variables, visual outputs, and scoring logic to help businesses flag at-risk users and prevent subscription drop-off.",
//     link: "https://churn-chaser-bugfreemuma.replit.app/",
//     documentation:
//       "https://github.com/BlvckKryptonite/ChurnChaser/blob/main/README.md",
//     icon: "/icons/churnchaser.png",
//   },
//   {
//     name: "Retail Radar",
//     description:
//       "A Python-powered price scraper designed to compare product listings across retailers like eBay and Amazon. Includes JSON parsing, basic anti-scraping measures, and a lightweight React frontend (in progress) for streamlined viewing and search.",
//     link: "https://retailradar.replit.app/",
//     documentation:
//       "https://github.com/BlvckKryptonite/retail-radar/blob/main/README.md",
//     icon: "/icons/retailradar.png",
//   },
//   {
//     name: "Love Math",
//     description:
//       "An educational quiz game built with JavaScript, HTML, and CSS. Presents arithmetic challenges with score tracking, dynamic UI updates, and responsive feedback — demonstrating strong DOM manipulation, logic handling, and front-end interaction design skills.",
//     link: "https://blvckkryptonite.github.io/love-math/",
//     documentation: "",
//     icon: "/icons/lovemath.png",
//   },
//  {
//     name: "The GlowClip",
//     description:
//       "A fully functional E-commerce website and product showcase built on Shopify with the Shrine theme.",
//     link: "https://theglowclip.com/",
//     documentation: "",
//     icon: glowclipIcon,
//   },
];

const techStack = {
  Frontend: [
    {
      name: "HTML, CSS, JavaScript",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
        </svg>
      ),
    },
    {
      name: "React",
  icon: (
    <svg
      className="w-6 h-6"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.47 0-.92.014-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.822-.632 1.174-.91-.77-1.749-1.638-2.491-2.566.714-.167 1.462-.302 2.244-.407.18-.063.363-.094.583-.36zm7.26 0c.41.404.683 1.077.638 1.174-.758.928-1.597 1.796-2.507 2.565-.197-.352-.407-.784-.632-1.174-.224-.397-.464-.783-.704-1.16.852-.1 1.598-.267 2.244-.407.18-.063.363-.094.583-.36zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.297.676 1.9.64-.113 1.270-.295 1.888-.531-.22.592-.473 1.184-.775 1.8-.302.616-.646 1.207-1.013 1.78-.367-.573-.711-1.164-1.013-1.78-.302-.616-.555-1.208-.775-1.8.618.236 1.248.418 1.888.531.186-.603.411-1.243.676-1.9zm-9.945.02c.2.57.41 1.146.671 1.729.154.334.32.656.496.976.159.302.335.598.515.897-.177.296-.356.587-.515.897-.176.32-.342.642-.496.976-.26.583-.47 1.16-.671 1.729-.62-.124-1.22-.309-1.775-.518.302-.593.638-1.207 1.015-1.844.377-.637.79-1.297 1.264-1.976-.474-.679-.887-1.339-1.264-1.976-.377-.637-.713-1.251-1.015-1.844.555-.209 1.155-.394 1.775-.518zm4.973 1.043c.508.088 1.012.214 1.506.373-.49.695-.995 1.397-1.506 2.093v-2.466z" />
    </svg>
  ),
    },
    {
      name: "Tailwind CSS",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
        </svg>
      ),
    },
    {
      name: "Framer Motion",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
        </svg>
      ),
    },
  ],
  Backend: [
    {
      name: "Node.js",
  icon: (
    <svg className="w-6 h-6" viewBox="0 0 256 272" fill="currentColor">
      <path d="M128 .5L9.4 63.3v145.4L128 271.5l118.6-62.8V63.3zM229 197.6l-93.3 49.4V229l59.5-31.6c3-1.6 4.8-4.8 4.8-8.3v-98.3c0-3.5-1.8-6.7-4.8-8.3l-59.5-31.6V23l93.3 49.4zm-202 0V72.4L120.3 23v33.2l-59.5 31.6c-3 1.6-4.8 4.8-4.8 8.3v98.3c0 3.5 1.8 6.7 4.8 8.3l59.5 31.6v17.9L27 197.6z"/>
      <path d="M168.4 150.9c0 25-14.8 38.2-36.3 38.2-19.5 0-30.8-10.1-36.5-22.3l19.3-11.1c3.7 6.5 7.1 12 15.2 12 7.7 0 12.6-3 12.6-15.1v-82h25.7v80.3z"/>
    </svg>
  ),
    },
    {
      name: "Django",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.146 0h3.924v18.166c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.001 2.65-6.6 6.753-6.6.637 0 1.121.051 1.707.204V0zm0 9.143a3.894 3.894 0 0 0-1.325-.204c-1.988 0-3.134 1.223-3.134 3.364 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.143zM21.314 6.06v9.098c0 3.134-.229 4.638-.917 5.937-.637 1.249-1.478 2.039-3.211 2.905L13.6 22.168c1.733-.815 2.574-1.53 3.109-2.625.561-1.121.739-2.421.739-5.835V6.059h3.866zM17.448.178h3.866v4.252h-3.866V.178z" />
        </svg>
      ),
    },
    {
      name: "PostgreSQL",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.111 5.441c-.777 0-1.416.239-1.416.239l-4.086 11.444-4.44-11.444s-.829-.239-1.357-.239c-.528 0-.711.299-.711.299L8.735 9.708 7.221 5.441s-.3-.239-.888-.239c-.528 0-.711.299-.711.299L3.666 9.708 2.152 5.441s-.3-.239-.888-.239c-.588 0-.888.239-.888.239L.1 5.44S0 5.679 0 6.148c0 .469.09.647.239.888l4.264 10.67s.18.359.768.359c.469 0 .648-.24.648-.24l2.75-7.047 2.99 7.047s.18.24.648.24c.588 0 .768-.36.768-.36l7.138-17.946s.12-.358-.302-.358zm-8.135 11.263l-3.469-8.696 3.469 8.696z" />
        </svg>
      ),
    },
    {
      name: "Streamlit",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
    },
  ],
  "Tools & Deployment": [

    {
  name: "RESTful APIs",
  icon: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm3 3h6v2H9V9zm0 4h4v2H9v-2z" />
    </svg>
  ),
    },
        {
      name: "Git, GitHub (Version control)",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "Netlify",
  icon: (
    <svg
      className="w-6 h-6"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2.154L2.154 8.308v7.385L12 21.846l9.846-6.153V8.308L12 2.154zm7.308 7.662L12 18.39 4.692 9.816 12 3.23l7.308 6.586zM12 4.307L6.154 8.769 12 13.23l5.846-4.461L12 4.307zm0 10.385L7.615 10.77l-1.385 1.015 5.77 4.153 5.77-4.153-1.385-1.015L12 14.692z" />
    </svg>
  ),
    },
    {
      name: "Heroku, Render, Replit",
  icon: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <line x1="9" y1="7" x2="9" y2="17" />
      <line x1="15" y1="7" x2="15" y2="17" />
      <line x1="9" y1="12" x2="15" y2="12" />
    </svg>
  ),
    },
  ],
};

export default function Portfolio() {
  const { theme, setTheme } = useTheme();
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 6);

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
      {/* Hero Section */}
      <section className="pt-12 sm:pt-16 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center mb-4 sm:mb-6"
          >
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mb-4 sm:mb-6 rounded-full overflow-hidden shadow-xl border-4 border-white dark:border-slate-700">
              <img
                src={profileImage2}
                alt="Muma Kalobwe"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-3 leading-tight px-2">
              Muma Kalobwe
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="px-2"
          >
            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-3 sm:mb-4 leading-relaxed">
              Software & Analytics Developer
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

          {/* Contact Button with Animated Glow Border */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 sm:mt-10 flex justify-center"
          >
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="relative group"
            >
              {/* Animated glowing border */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              />

              {/* Button with border */}
              <motion.div
                className="relative px-5 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl border-2 border-transparent hover:border-white/30 flex items-center gap-2 text-sm sm:text-base"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get In Touch</span>
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.div>
              </motion.div>
            </button>
          </motion.div>
        </div>
      </section>

     {/* Animated Projects Portfolio Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full mx-auto mb-4 sm:mb-6 lg:mb-8 max-w-24"
            />
            <motion.h2
              className="font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold text-slate-900 dark:text-white mb-6 flex items-center justify-center gap-2 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Featured Projects
              <img
                src={featuredProjectsIcon}
                alt=""
                className="h-6 sm:h-8 md:h-10 lg:h-[44px] w-auto flex-shrink-0"
              />
            </motion.h2>
            <div className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 max-w-4xl mx-auto space-y-3 sm:space-y-4 px-4 sm:px-0">
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true, margin: "-30px" }}
              >
                I've worked on a wide range of projects over the past couple of
                years, from quick experiments to full-stack apps. Below are some
                of my most recent builds.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true, margin: "-30px" }}
              >
                Most are open source and come with full documentation links. If
                something catches your eye, feel free to explore the code or
                even contribute if you have ideas for improvement.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true, margin: "-30px" }}
              >
                Got a project in mind? I'm always open to collaborating or
                helping bring bold ideas to life.
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0 * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <FramerProjectsCard index={0} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 1 * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <DataProjectsCard index={1} />
            </motion.div>
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.name}
                className=""
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: (index + 1) * 0.15,
                  ease: "easeOut",
                }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <ProjectCard {...project} index={index + 1} />
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced View More Button */}
          {projects.length > 6 && (
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex justify-center mt-8 sm:mt-12 lg:mt-16"
            >
              <motion.button
                onClick={() => setShowAllProjects(!showAllProjects)}
                whileHover={{
                  scale: 1.05,
                  y: -4,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-semibold rounded-2xl transition-all duration-500 shadow-xl hover:shadow-2xl border border-blue-500/20 text-sm sm:text-base"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  animate={{
                    background: [
                      "linear-gradient(90deg, #3b82f6, #6366f1, #8b5cf6)",
                      "linear-gradient(180deg, #6366f1, #8b5cf6, #3b82f6)",
                      "linear-gradient(270deg, #8b5cf6, #3b82f6, #6366f1)",
                      "linear-gradient(360deg, #3b82f6, #6366f1, #8b5cf6)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <span className="relative z-10">
                  {showAllProjects ? "Show Less" : "Show More"}
                </span>
                <motion.svg
                  className="w-5 h-5 ml-3 relative z-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{
                    rotate: showAllProjects ? 180 : 0,
                    y: showAllProjects ? 2 : 0,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6 sm:mb-8 text-center">
              About Me
            </h2>
          </motion.div>
          <div className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-relaxed text-center max-w-4xl mx-auto space-y-4 sm:space-y-6 px-2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-sm sm:text-base md:text-lg lg:text-xl"
            >
              I'm a software developer with a background in behavioral science,
              bridging human insight with clean, scalable code. I don't just
              build solutions, I understand why they matter.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              My journey into software began with a fascination for how people make decisions, especially in complex systems like finance and compliance. This perspective helps me craft development strategies that align
              with real-world behavior, user needs, and business goals.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              I have a strong eye for modern design, attention to detail, and respect for clarity and usability. I aim to develop systems that align human behavior with transparent, responsible innovation.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
            >
             For me, technology is about responsibility, transparency, and precision — principles I bring to every project.
            </motion.p>
          </div>
        </div>
      </section>
 
      {/* Tech Stack Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-8 sm:mb-12 lg:mb-16 text-center">
              Core Tech Stack
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {Object.entries(techStack).map(
              ([category, technologies], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-4 sm:p-6 shadow-lg border border-slate-200 dark:border-slate-700"
                >
                  <h3 className="font-poppins text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-4 sm:mb-6 text-center">
                    {category}
                  </h3>
                  <div className="space-y-4">
                    {technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: categoryIndex * 0.1 + techIndex * 0.05,
                        }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors"
                      >
                        <div className="flex-shrink-0 text-blue-600 dark:text-blue-400">
                          {tech.icon}
                        </div>
                        <span className="text-slate-700 dark:text-slate-300 font-medium">
                          {tech.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ),
            )}
          </div>
        </div>
      </section>
      {/* Educational Background Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-8 sm:mb-12 lg:mb-16 text-center">
              Educational Background
            </h2>
          </motion.div>

          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {[
              {
                institution: "Code Institute",
                degree: "Full-Stack Software Development Program",
                period: "2023 - Feb 2026",
                location: "Ireland",
                icon: (
                  <img
                    src="./code-institute-logo.png"
                    alt="Code Institute Logo"
                    className="w-8 h-8 object-contain"
                  />
                ),
              },
              {
                institution: "Malmö Universitet",
                degree: "Master of Science",
                period: "2021 - 2023",
                location: "Sweden",
                icon: (
                  <img
                    src="./malmo-university-logo.png"
                    alt="Malmö University Logo"
                    className="w-8 h-8 object-contain"
                  />
                ),
              },
              {
                institution: "The University of Zambia",
                degree: "Bachelor of Arts",
                period: "2015 - 2019",
                location: "Zambia",
                icon: (
                  <img
                    src="./zambia-university-logo.png"
                    alt="University of Zambia Logo"
                    className="w-8 h-8 object-contain"
                  />
                ),
              },
            ].map((education, index) => (
              <motion.div
                key={education.institution}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-row items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-slate-700 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-600 shadow-sm">
                    {education.icon}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start space-y-1 sm:space-y-0">
                    <div>
                      <h3 className="font-poppins text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-1">
                        {education.institution}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-2">
                        {education.location}
                      </p>
                      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
                        {education.degree}
                      </p>
                    </div>
                    <div className="sm:text-right sm:flex-shrink-0 sm:ml-4">
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                        {education.period}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Download CV Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center mt-8 sm:mt-10 lg:mt-12"
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-slate-900 dark:bg-slate-800 text-white hover:bg-slate-800 dark:hover:bg-slate-700 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              Download CV
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </motion.a>
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
              Whether you're looking to collaborate, hire a developer, or
              discuss a project idea. I’m open to freelance opportunities,
              creative partnerships, or just chatting about how tech can solve
              real-world problems.
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
                  // Try to open mailto link
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

          {/* Social Links - GitHub & LinkedIn */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center gap-4 mt-8"
          >
            {/* GitHub Link Button */}
            <motion.a
              href="https://github.com/BlvckKryptonite?tab=overview&from=2026-02-01&to=2026-02-02"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500"
            >
              <Github className="w-6 h-6" />
            </motion.a>

            {/* LinkedIn Link Button */}
            <motion.a
              href="https://www.linkedin.com/in/muma-kalobwe-b63037149/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-600 dark:text-slate-400">
            © 2026 Muma Kalobwe. Built with React, Tailwind CSS & Vite.
          </p>
        </div>
      </footer>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </motion.div>
  );
}
