import { Router } from "express";
import { createMessage } from "./supabase.js";

const router = Router();

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }

  const { error } = await createMessage({
    name: String(name).trim(),
    email: String(email).trim(),
    message: String(message).trim(),
  });

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(201).json({ success: true });
});

export default router;
