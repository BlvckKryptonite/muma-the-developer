import { motion } from "framer-motion";
import { useTheme } from "@/components/theme-provider";
import { ProjectCard } from "@/components/project-card";
import { Sun, Moon, Mail } from "lucide-react";
import { useState } from "react";



const projects = [
  {
    name: "Reelalyze",
    description: "AI-powered YouTube summarizer using Streamlit, Python, and OpenAI. Extracts context-aware summaries from video transcripts and visuals.",
    link: "https://reelalyze.replit.app",
    documentation: "https://github.com/username/reelalyze",
    icon: "/icons/reelalyze.png"
  },
  {
    name: "SpendSmart",
    description: "A budgeting app built with HTML/CSS, JavaScript, and Chart.js. Helps users track expenses, savings, and gain financial awareness.",
    link: "https://spendsmart-js.netlify.app",
    documentation: "https://github.com/username/spendsmart",
    icon: "/icons/spendsmart.svg"
  },
  {
    name: "FraudShield CLI",
    description: "Python-based command-line tool to flag suspicious financial transactions using rule-based and ML-based logic.",
    link: "https://github.com/BlvckKryptonite/fraudshield",
    documentation: "https://github.com/BlvckKryptonite/fraudshield/wiki",
    icon: "/icons/fraudshield.png"
  },
  {
    name: "Currency Exchange CLI",
    description: "Real-time currency converter using Fawaz API. Built in Python and deployed to Heroku.",
    link: "https://currency-converter-cli-fad75cd3b79c.herokuapp.com/",
    documentation: "https://github.com/username/currency-converter-cli",
    icon: "/icons/currency.png"
  },
  {
    name: "ParsePilot",
    description: "Python tool that cleans CSV data, extracts nested JSON, and prepares it for analysis. Built for data preprocessing workflows.",
    link: "https://parsepilot.netlify.app",
    documentation: "https://github.com/username/parsepilot",
    icon: "/icons/parsepilot.png"
  },
  {
    name: "Muma's 'Mazing Barbeque",
    description: "Comic-book themed React & Tailwind website page with Framer Motion animations and playful scroll effects. Includes interactive ticket tiers, superhero-themed chef cards, and Stripe mock signup integration.",
    link: "https://mumasmazing-barbeque.netlify.app",
    documentation: "https://github.com/username/mumasmazing-barbeque",
    icon: "/icons/mumas-mazing-bbq.png"
  },
  {
    name: "ATM SIM",
    description: "CLI-based ATM simulator using Python. Supports secure login, balance viewing, deposit/withdrawal functions, and simulates receipts and user accounts for core banking logic.",
    link: "https://atm-sim.replit.app",
    documentation: "https://github.com/username/atm-sim",
    icon: "/icons/atm.png"
  },
  {
    name: "TypeRush",
    description: "Fast-paced typing game built solely with vanilla JavaScript. Tracks speed and accuracy while providing real-time feedback and visual cues to improve typing skills.",
    link: "https://typerush-game.netlify.app",
    documentation: "https://github.com/username/typerush",
    icon: "/icons/typerush.svg"
  },
  {
    name: "The GlowClip",
    description: "A fully functional E-commerce website and product showcase built on Shopify with the Shrine theme. Includes optimized product descriptions, refund handling logic, apps, and basic analytics integration.",
    link: "https://theglowclip.myshopify.com",
    documentation: "https://github.com/username/glowclip-docs",
    icon: "/icons/glowclip.svg"
  },
  {
    name: "ChurnChaser",
    description: "Predictive analytics prototype (Python, Streamlit) for customer churn detection in e-commerce. Integrates behavioral variables to flag at-risk customers.",
    link: "https://churnchaser.streamlit.app",
    documentation: "https://github.com/username/churnchaser",
    icon: "/icons/churnchaser.png"
  },
  {
    name: "Word Unscramble",
    description: "A browser-based JavaScript word game that challenges users to rearrange shuffled letters. Includes timer, scoring, and responsive design for a quick mental workout.",
    link: "https://word-unscramble-game.netlify.app",
    documentation: "https://github.com/username/word-unscramble",
    icon: "/icons/wordgame.svg"
  },
  {
    name: "Retail Radar",
    description: "Python-powered scraper concept for comparing prices across retailers (e.g., eBay & Amazon). Features JSON parsing, anti-scraping logic, and a simple but modern React UI (planned).",
    link: "https://retail-radar.herokuapp.com",
    documentation: "https://github.com/username/retail-radar",
    icon: "/icons/retailradar.png"
  },
  {
    name: "Game-Xit",
    description: "A three-page HTML/CSS website raising awareness about video game addiction. Features responsive design, a gaming self-assessment tool link, embedded YouTube resources, and a styled contact form with Google Maps integration.",
    link: "https://game-xit.netlify.app",
    documentation: "https://github.com/username/game-xit",
    icon: "/icons/gameexit.png"
  },
  {
    name: "Love Math",
    description: "Educational quiz game built with JavaScript, HTML, and CSS. Offers timed arithmetic challenges with score tracking and responsive feedback.",
    link: "https://love-math-quiz.netlify.app",
    documentation: "https://github.com/username/love-math",
    icon: "/icons/lovemath.png"
  },
  {
    name: "Love Running",
    description: "Multi-page fitness site created solely with vanilla HTML and CSS. Focused on clean UI, accessible layout, and responsive design for a runners club.",
    link: "https://love-running-site.netlify.app",
    documentation: "https://github.com/username/love-running",
    icon: "/icons/loverunning.png"
  }
];

const techStack = {
  Frontend: [
    { 
      name: "HTML, CSS, JavaScript", 
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
        </svg>
      )
    },
    { 
      name: "React", 
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.47 0-.92.014-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.822-.632 1.174-.91-.77-1.749-1.638-2.491-2.566.714-.167 1.462-.302 2.244-.407.18-.063.363-.094.583-.36zm7.26 0c.41.404.683 1.077.638 1.174-.758.928-1.597 1.796-2.507 2.565-.197-.352-.407-.784-.632-1.174-.224-.397-.464-.783-.704-1.16.852-.1 1.598-.267 2.244-.407.18-.063.363-.094.583-.36zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.297.676 1.9.64-.113 1.270-.295 1.888-.531-.22.592-.473 1.184-.775 1.8-.302.616-.646 1.207-1.013 1.78-.367-.573-.711-1.164-1.013-1.78-.302-.616-.555-1.208-.775-1.8.618.236 1.248.418 1.888.531.186-.603.411-1.243.676-1.9zm-9.945.02c.2.57.41 1.146.671 1.729.154.334.32.656.496.976.159.302.335.598.515.897-.177.296-.356.587-.515.897-.176.32-.342.642-.496.976-.26.583-.47 1.16-.671 1.729-.62-.124-1.22-.309-1.775-.518.302-.593.638-1.207 1.015-1.844.377-.637.79-1.297 1.264-1.976-.474-.679-.887-1.339-1.264-1.976-.377-.637-.713-1.251-1.015-1.844.555-.209 1.155-.394 1.775-.518zm4.973 1.043c.508.088 1.012.214 1.506.373-.49.695-.995 1.397-1.506 2.093v-2.466z"/>
        </svg>
      )
    },
    { 
      name: "Tailwind CSS", 
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
        </svg>
      )
    },
    { 
      name: "Framer Motion", 
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"/>
        </svg>
      )
    }
  ],
  Backend: [
    { 
      name: "Python", 
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.26-.02.21-.01H20.83l.26.02.32.05.36.1.4.16.42.24.42.33.4.44.36.57.32.71.24.87.16 1.04.06 1.22-.05 1.23-.14 1.05-.21.88-.28.73-.32.59-.35.46-.36.36-.36.26-.35.18-.32.12-.28.07-.21.03H12.23v-3.06l.02-.21.04-.27.07-.32.1-.35.15-.37.2-.36.27-.35.33-.32.41-.27.5-.22.59-.14.69-.05h5.12l.33-.02.37-.07.4-.14.42-.2.43-.26.42-.32.39-.37.35-.4.3-.42.24-.43.18-.42.13-.4.08-.37.04-.32.01-.25V9.23l-.01-.31-.04-.32-.08-.38-.13-.42-.18-.44-.24-.43-.3-.42-.35-.4-.39-.37-.42-.32-.43-.26-.42-.2-.4-.14-.37-.07-.33-.02H3.17l-.21.01-.28.04-.32.08-.35.15-.36.2-.36.26-.35.34-.32.4-.28.42-.21.43-.14.39-.08.32-.04.2-.02.16V3.91l.01-.33.05-.32.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05z"/>
        </svg>
      )
    },
    { 
      name: "Django", 
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.146 0h3.924v18.166c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.001 2.65-6.6 6.753-6.6.637 0 1.121.051 1.707.204V0zm0 9.143a3.894 3.894 0 0 0-1.325-.204c-1.988 0-3.134 1.223-3.134 3.364 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.143zM21.314 6.06v9.098c0 3.134-.229 4.638-.917 5.937-.637 1.249-1.478 2.039-3.211 2.905L13.6 22.168c1.733-.815 2.574-1.53 3.109-2.625.561-1.121.739-2.421.739-5.835V6.059h3.866zM17.448.178h3.866v4.252h-3.866V.178z"/>
        </svg>
      )
    },
    { 
      name: "PostgreSQL", 
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.111 5.441c-.777 0-1.416.239-1.416.239l-4.086 11.444-4.44-11.444s-.829-.239-1.357-.239c-.528 0-.711.299-.711.299L8.735 9.708 7.221 5.441s-.3-.239-.888-.239c-.528 0-.711.299-.711.299L3.666 9.708 2.152 5.441s-.3-.239-.888-.239c-.588 0-.888.239-.888.239L.1 5.44S0 5.679 0 6.148c0 .469.09.647.239.888l4.264 10.67s.18.359.768.359c.469 0 .648-.24.648-.24l2.75-7.047 2.99 7.047s.18.24.648.24c.588 0 .768-.36.768-.36l7.138-17.946s.12-.358-.302-.358zm-8.135 11.263l-3.469-8.696 3.469 8.696z"/>
        </svg>
      )
    },
    { 
      name: "Streamlit", 
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      )
    }
  ],
  "Tools & Deployment": [
    { 
      name: "Vercel, Netlify", 
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 22.525H0l12-21.05 12 21.05z"/>
        </svg>
      )
    },
    { 
      name: "Replit, Heroku, Render", 
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm4.64-1.96l3.54 3.54c.78.78 2.05.78 2.83 0l7.07-7.07c.78-.78.78-2.05 0-2.83-.78-.78-2.05-.78-2.83 0L12 8.93 6.75 3.68c-.78-.78-2.05-.78-2.83 0-.78.78-.78 2.05 0 2.83l2.72 2.72z"/>
        </svg>
      )
    },
    { 
      name: "Git, GitHub (Version control)", 
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    { 
      name: "OpenAI API", 
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142-.0852 4.783-2.7582a.7712.7712 0 0 0 .7806 0l5.8428 3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zm-2.4407-16.0417a4.4705 4.4705 0 0 1 2.3655-1.9728v5.8346a.7663.7663 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.4185 2.2611zm16.5651 3.8558L13.148 2.782a.0757.0757 0 0 1-.071 0L11.057 3.9507a.0757.0757 0 0 1 0 .1313l2.0201 1.1685a.0757.0757 0 0 1 .071 0l4.8303 2.7865a4.504 4.504 0 0 1-.6765 8.1042z"/>
        </svg>
      )
    }
  ]
};

export default function Portfolio() {
  const { theme, setTheme } = useTheme();
  const [showAllProjects, setShowAllProjects] = useState(false);
  
  const displayedProjects = showAllProjects ? projects : projects.slice(0, 6);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-200 transition-all duration-500 ease-in-out">
      {/* Dark Mode Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <motion.button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-200 dark:border-slate-700 backdrop-blur-sm"
        >
          <motion.div
            initial={false}
            animate={{ 
              rotate: theme === "dark" ? 0 : 180,
              opacity: 1 
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-slate-600" />
            )}
          </motion.div>
        </motion.button>
      </div>

      {/* Hero Section */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center mb-6"
          >
            <div className="w-20 h-20 mb-4 rounded-full overflow-hidden shadow-lg border-4 border-white dark:border-slate-700">
              <img 
                src="/icons/avatar.svg" 
                alt="Muma Kalobwe" 
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-3 leading-tight">
              Muma Kalobwe
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
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

      {/* Animated Projects Portfolio Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full mx-auto mb-8 max-w-24"
            />
            <motion.h2 
              className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Featured Projects
            </motion.h2>
            <motion.p 
              className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              A showcase of innovative solutions spanning FinTech, AI, and full-stack development
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {displayedProjects.map((project, index) => (
              <motion.div 
                key={project.name} 
                className={index === 4 && displayedProjects.length === 5 ? "lg:col-span-2" : ""}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: "easeOut"
                }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <ProjectCard {...project} index={index} />
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
              className="flex justify-center mt-16"
            >
              <motion.button
                onClick={() => setShowAllProjects(!showAllProjects)}
                whileHover={{ 
                  scale: 1.05, 
                  y: -4,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-semibold rounded-2xl transition-all duration-500 shadow-xl hover:shadow-2xl border border-blue-500/20"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  animate={{
                    background: [
                      "linear-gradient(90deg, #3b82f6, #6366f1, #8b5cf6)",
                      "linear-gradient(180deg, #6366f1, #8b5cf6, #3b82f6)",
                      "linear-gradient(270deg, #8b5cf6, #3b82f6, #6366f1)",
                      "linear-gradient(360deg, #3b82f6, #6366f1, #8b5cf6)"
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <span className="relative z-10">
                  {showAllProjects ? 'Show Less' : 'Show More'}
                </span>
                <motion.svg
                  className="w-5 h-5 ml-3 relative z-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ 
                    rotate: showAllProjects ? 180 : 0,
                    y: showAllProjects ? 2 : 0
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </motion.button>
            </motion.div>
          )}
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
            ))}
          </div>
        </div>
      </section>

      {/* Educational Background Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-16 text-center">
              Educational Background
            </h2>
          </motion.div>
          
          <div className="space-y-8">
            {[
              {
                institution: "Code Institute",
                degree: "Full-Stack Software Development Program",
                period: "2023 - Present",
                icon: (
                  <img 
                    src="/code-institute-logo.png"
                    alt="Code Institute Logo" 
                    className="w-8 h-8 object-contain"
                  />
                )
              },
              {
                institution: "Malmö Universitet",
                degree: "Master of Science",
                period: "2021 - 2023",
                icon: (
                  <img 
                    src="/malmo-university-logo.png"
                    alt="Malmö University Logo" 
                    className="w-8 h-8 object-contain"
                  />
                )
              },
              {
                institution: "The University of Zambia",
                degree: "Bachelor of Arts",
                period: "2015 - 2019",
                icon: (
                  <img 
                    src="/zambia-university-logo.png"
                    alt="University of Zambia Logo" 
                    className="w-8 h-8 object-contain"
                  />
                )
              }
            ].map((education, index) => (
              <motion.div
                key={education.institution}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-white dark:bg-slate-700 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-600 shadow-sm">
                    {education.icon}
                  </div>
                </div>
                <div className="flex-1 min-w-0 flex justify-between items-start">
                  <div>
                    <h3 className="font-poppins text-xl font-semibold text-slate-900 dark:text-white mb-1">
                      {education.institution}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      {education.degree}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0 ml-4">
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                      {education.period}
                    </p>
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
            className="flex justify-center mt-12"
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center px-6 py-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-600 hover:border-slate-300 dark:hover:border-slate-500 rounded-xl font-medium transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Download CV
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
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
