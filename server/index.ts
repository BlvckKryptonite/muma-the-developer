import express from "express";
import { createServer } from "http";
import { WebSocketServer } from "ws";
import path from "path";
import routes from "./routes.js";

const app = express();
const server = createServer(app);
const isDev = process.env.NODE_ENV === "development";

// Parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Register API routes
app.use(routes);

// Serve static assets from client/public in both dev and production
app.use(express.static(path.resolve(process.cwd(), "client", "public")));

if (!isDev) {
  // In production, serve built frontend files
  const distPath = path.resolve(process.cwd(), "dist", "public");
  app.use(express.static(distPath));
  
  // Handle client-side routing - serve index.html for all non-API routes
  app.get("*", (req, res, next) => {
    if (req.path.startsWith('/api')) {
      return next();
    }
    res.sendFile(path.join(distPath, "index.html"));
  });
} else {
  // In development, serve frontend files from dist/public directory
  const distPath = path.resolve(process.cwd(), "dist", "public");
  
  // Try to serve from built client if it exists, otherwise show dev message
  app.use(express.static(distPath));
  
  // Handle client-side routing for development
  app.get("*", (req, res, next) => {
    if (req.path.startsWith('/api')) {
      return next();
    }
    
    // Try to serve index.html from dist/public, fallback to dev message
    const indexPath = path.join(distPath, "index.html");
    res.sendFile(indexPath, (err) => {
      if (err) {
        res.json({ 
          message: "Development server running - Frontend not built yet",
          instructions: "Run 'npm run build' to build the frontend, or run Vite dev server separately",
          api: "/api/*"
        });
      }
    });
  });
}

// WebSocket setup (for potential future real-time features)
const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  console.log("Client connected");
  
  ws.on("close", () => {
    console.log("Client disconnected");  
  });
});

const port = parseInt(process.env.PORT || "5000", 10);
server.listen(port, "0.0.0.0", () => {
  console.log(`Server running on http://0.0.0.0:${port} (${isDev ? 'development' : 'production'})`);
});