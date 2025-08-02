# Portfolio Website

## Overview

This is a modern, responsive portfolio website for Muma Kalobwe, a full-stack developer specializing in FinTech, AI, and data-driven solutions. The application is built using React with TypeScript, styled with Tailwind CSS, and features a clean, professional design with dark/light mode support. The portfolio showcases projects, technical skills, and professional experience in an interactive, visually appealing format.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **Animations**: Framer Motion for smooth animations and transitions
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Context for theme management, TanStack Query for server state

### Backend Architecture
- **Runtime**: Node.js with Express framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Session Storage**: PostgreSQL-based session store using connect-pg-simple
- **Development**: Hot module replacement and development middleware via Vite

### Design System
- **Typography**: Inter font family for body text, Poppins for headings
- **Color Scheme**: CSS custom properties for consistent theming across light/dark modes
- **Component Library**: Comprehensive UI component system with consistent styling
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities

### Build and Development
- **Development Server**: Vite development server with HMR and error overlay
- **Production Build**: Optimized bundling with code splitting and asset optimization
- **TypeScript**: Strict type checking with path mapping for clean imports
- **Code Quality**: ESLint and TypeScript compiler checks

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon database
- **@tanstack/react-query**: Server state management and caching
- **@radix-ui/***: Headless UI components for accessibility and functionality
- **drizzle-orm**: TypeScript ORM for database operations
- **framer-motion**: Animation library for smooth UI transitions

### Development Tools
- **drizzle-kit**: Database migration and schema management
- **vite**: Build tool and development server
- **typescript**: Type checking and compilation
- **tailwindcss**: Utility-first CSS framework
- **@replit/vite-plugin-runtime-error-modal**: Development error handling

### UI and Styling
- **class-variance-authority**: Component variant management
- **clsx**: Conditional class name utility
- **tailwind-merge**: Tailwind class merging utility
- **lucide-react**: Icon library for consistent iconography

### Database and Storage
- **PostgreSQL**: Primary database for data persistence
- **Drizzle ORM**: Type-safe database operations and migrations
- **connect-pg-simple**: PostgreSQL session store for Express sessions