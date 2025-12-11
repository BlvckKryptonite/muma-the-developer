import { Router } from "express";
import { storage } from "./storage.js";
import { insertPortfolioSchema, insertContactSchema } from "@shared/schema.js";
import { sendContactEmail } from "./email.js";
import { z } from "zod";

const router = Router();

// Portfolio routes
router.get("/api/portfolios", async (req, res) => {
  try {
    const portfolios = await storage.getPortfolios();
    res.json(portfolios);
  } catch (error) {
    console.error("Error fetching portfolios:", error);
    res.status(500).json({ error: "Failed to fetch portfolios" });
  }
});

router.get("/api/portfolios/:id", async (req, res) => {
  try {
    const portfolio = await storage.getPortfolioById(req.params.id);
    if (!portfolio) {
      return res.status(404).json({ error: "Portfolio not found" });
    }
    res.json(portfolio);
  } catch (error) {
    console.error("Error fetching portfolio:", error);
    res.status(500).json({ error: "Failed to fetch portfolio" });
  }
});

router.post("/api/portfolios", async (req, res) => {
  try {
    const validatedData = insertPortfolioSchema.parse(req.body);
    const portfolio = await storage.createPortfolio(validatedData);
    res.status(201).json(portfolio);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: "Invalid data", details: error.errors });
    }
    console.error("Error creating portfolio:", error);
    res.status(500).json({ error: "Failed to create portfolio" });
  }
});

router.put("/api/portfolios/:id", async (req, res) => {
  try {
    const validatedData = insertPortfolioSchema.partial().parse(req.body);
    const portfolio = await storage.updatePortfolio(req.params.id, validatedData);
    if (!portfolio) {
      return res.status(404).json({ error: "Portfolio not found" });
    }
    res.json(portfolio);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: "Invalid data", details: error.errors });
    }
    console.error("Error updating portfolio:", error);
    res.status(500).json({ error: "Failed to update portfolio" });
  }
});

router.delete("/api/portfolios/:id", async (req, res) => {
  try {
    const success = await storage.deletePortfolio(req.params.id);
    if (!success) {
      return res.status(404).json({ error: "Portfolio not found" });
    }
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting portfolio:", error);
    res.status(500).json({ error: "Failed to delete portfolio" });
  }
});

// Contact routes
router.get("/api/contacts", async (req, res) => {
  try {
    const contacts = await storage.getContacts();
    res.json(contacts);
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).json({ error: "Failed to fetch contacts" });
  }
});

router.post("/api/contacts", async (req, res) => {
  try {
    const validatedData = insertContactSchema.parse(req.body);
    const contact = await storage.createContact(validatedData);
    res.status(201).json(contact);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: "Invalid data", details: error.errors });
    }
    console.error("Error creating contact:", error);
    res.status(500).json({ error: "Failed to create contact" });
  }
});

// Health check endpoint
router.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

export default router;
