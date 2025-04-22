import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import axios from "axios";

export async function registerRoutes(app: Express): Promise<Server> {
  // Add a proxy endpoint for Google Sheets data
  app.get('/api/products', async (req: Request, res: Response) => {
    try {
      const SHEET_URL = "https://docs.google.com/spreadsheets/d/1ZQFhHfbv7t0feGMlihnnHT8qiIkcHJEk3RIq3i3yPJ0/gviz/tq?";
      
      const response = await axios.get(SHEET_URL);
      
      // Return the raw response to let client handle parsing
      res.send(response.data);
    } catch (error) {
      console.error('Error fetching Google Sheets data:', error);
      res.status(500).json({ 
        error: 'Failed to fetch products data',
        details: error instanceof Error ? error.message : String(error)
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
