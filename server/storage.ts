// In-memory storage interface for the portfolio application
import type { Portfolio, Contact, InsertPortfolio, InsertContact } from "@shared/schema";

export interface IStorage {
  // Portfolio methods
  getPortfolios(): Promise<Portfolio[]>;
  getPortfolioById(id: string): Promise<Portfolio | null>;
  createPortfolio(portfolio: InsertPortfolio): Promise<Portfolio>;
  updatePortfolio(id: string, portfolio: Partial<InsertPortfolio>): Promise<Portfolio | null>;
  deletePortfolio(id: string): Promise<boolean>;

  // Contact methods
  getContacts(): Promise<Contact[]>;
  createContact(contact: InsertContact): Promise<Contact>;
}

// In-memory storage implementation
export class MemStorage implements IStorage {
  private portfolios: Portfolio[] = [];
  private contacts: Contact[] = [];

  async getPortfolios(): Promise<Portfolio[]> {
    return [...this.portfolios];
  }

  async getPortfolioById(id: string): Promise<Portfolio | null> {
    return this.portfolios.find(p => p.id === id) || null;
  }

  async createPortfolio(portfolio: InsertPortfolio): Promise<Portfolio> {
    const newPortfolio: Portfolio = {
      ...portfolio,
      id: crypto.randomUUID(),
      createdAt: new Date(),
    };
    this.portfolios.push(newPortfolio);
    return newPortfolio;
  }

  async updatePortfolio(id: string, portfolio: Partial<InsertPortfolio>): Promise<Portfolio | null> {
    const index = this.portfolios.findIndex(p => p.id === id);
    if (index === -1) return null;

    this.portfolios[index] = { ...this.portfolios[index], ...portfolio };
    return this.portfolios[index];
  }

  async deletePortfolio(id: string): Promise<boolean> {
    const index = this.portfolios.findIndex(p => p.id === id);
    if (index === -1) return false;

    this.portfolios.splice(index, 1);
    return true;
  }

  async getContacts(): Promise<Contact[]> {
    return [...this.contacts];
  }

  async createContact(contact: InsertContact): Promise<Contact> {
    const newContact: Contact = {
      ...contact,
      id: crypto.randomUUID(),
      createdAt: new Date(),
    };
    this.contacts.push(newContact);
    return newContact;
  }
}

// Export singleton instance
export const storage = new MemStorage();