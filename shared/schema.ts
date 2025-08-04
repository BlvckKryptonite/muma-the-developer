// Shared schema definitions for the portfolio application
import { z } from "zod";
import { createInsertSchema } from "drizzle-zod";

// For now, we'll start with a simple portfolio structure
// This can be expanded later if dynamic content is needed
export const portfolioSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  link: z.string().url(),
  documentation: z.string().url(),
  icon: z.string(),
  createdAt: z.date().default(() => new Date()),
});

export type Portfolio = z.infer<typeof portfolioSchema>;

// Contact form schema for potential contact functionality
export const contactSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  message: z.string().min(1, "Message is required"),
  createdAt: z.date().default(() => new Date()),
});

export type Contact = z.infer<typeof contactSchema>;

// Insert schemas
export const insertPortfolioSchema = portfolioSchema.omit({ id: true, createdAt: true });
export const insertContactSchema = contactSchema.omit({ id: true, createdAt: true });

// Types
export type InsertPortfolio = z.infer<typeof insertPortfolioSchema>;
export type InsertContact = z.infer<typeof insertContactSchema>;