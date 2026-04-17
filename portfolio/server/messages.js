import { Router } from "express";
import { deleteMessage, listMessages, markMessageRead } from "./supabase.js";

const router = Router();

// ── Simple API key auth middleware ──────────────────────────
const requireApiKey = (req, res, next) => {
  const key = req.headers["x-admin-key"];
  if (!key || key !== process.env.ADMIN_API_KEY) {
    return res.status(401).json({ error: "Unauthorized." });
  }
  next();
};

// ── GET /api/messages  → list all messages ──────────────────
router.get("/", requireApiKey, async (_req, res) => {
  const { data, error } = await listMessages();

  if (error) return res.status(500).json({ error: error.message });
  return res.json({ messages: data });
});

// ── PATCH /api/messages/:id/read  → mark as read ───────────
router.patch("/:id/read", requireApiKey, async (req, res) => {
  const { id } = req.params;
  const { error } = await markMessageRead(id);

  if (error) return res.status(500).json({ error: error.message });
  return res.json({ success: true });
});

// ── DELETE /api/messages/:id  → delete a message ───────────
router.delete("/:id", requireApiKey, async (req, res) => {
  const { id } = req.params;
  const { error } = await deleteMessage(id);

  if (error) return res.status(500).json({ error: error.message });
  return res.json({ success: true });
});

export default router;
