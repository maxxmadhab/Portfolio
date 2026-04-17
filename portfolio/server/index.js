import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRouter from "./contact.js";
import messagesRouter from "./messages.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const allowedOrigins = [
  process.env.CLIENT_URL,
  "https://port-opal-beta.vercel.app",
  "http://localhost:5173",
].filter(Boolean);

// ── Middleware ──────────────────────────────────────────────
app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());

// ── Request logger (dev) ────────────────────────────────────
app.use((req, _res, next) => {
  if (process.env.NODE_ENV !== "production") {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  }
  next();
});

// ── Routes ──────────────────────────────────────────────────
app.get("/", (_req, res) => res.json({ status: "ok", message: "Portfolio API running" }));
app.use("/api/contact", contactRouter);
app.use("/api/messages", messagesRouter);   // Admin: view stored messages

// ── 404 fallback ────────────────────────────────────────────
app.use((_req, res) => res.status(404).json({ error: "Route not found" }));

// ── Global error handler ────────────────────────────────────
app.use((err, _req, res, _next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal server error" });
});

app.listen(PORT, () =>
  console.log(`🚀 Server running at http://localhost:${PORT}`)
);
