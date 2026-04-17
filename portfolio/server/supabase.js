import dotenv from "dotenv";

dotenv.config();

const supabaseUrl =
  process.env.SUPABASE_URL || "https://oyuoqvkbkzkznyzunklg.supabase.co";
const supabaseKey =
  process.env.SUPABASE_SERVICE_KEY ||
  process.env.SUPABASE_ANON_KEY ||
  "sb_publishable_Tj71sHWIyM1ibdyy-DtPJQ_xvq3OcDT";

if (!supabaseUrl || !supabaseKey || supabaseKey.startsWith("your-")) {
  throw new Error(
    "Missing SUPABASE_URL and SUPABASE_SERVICE_KEY or SUPABASE_ANON_KEY."
  );
}

const request = async (path, options = {}) => {
  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/${path}`, {
      ...options,
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
    });

    const text = await response.text();
    let data = null;

    if (text) {
      try {
        data = JSON.parse(text);
      } catch {
        data = text;
      }
    }

    if (!response.ok) {
      return {
        data: null,
        error: {
          message: data?.message || text || response.statusText,
        },
      };
    }

    return { data, error: null };
  } catch (error) {
    return {
      data: null,
      error: { message: error.message || "Supabase request failed." },
    };
  }
};

export const createMessage = ({ name, email, message }) =>
  request("contact_messages", {
    method: "POST",
    headers: { Prefer: "return=minimal" },
    body: JSON.stringify([{ name, email, message }]),
  });

export const listMessages = () =>
  request("contact_messages?select=*&order=created_at.desc");

export const markMessageRead = (id) =>
  request(`contact_messages?id=eq.${encodeURIComponent(id)}`, {
    method: "PATCH",
    headers: { Prefer: "return=minimal" },
    body: JSON.stringify({ read: true }),
  });

export const deleteMessage = (id) =>
  request(`contact_messages?id=eq.${encodeURIComponent(id)}`, {
    method: "DELETE",
    headers: { Prefer: "return=minimal" },
  });
