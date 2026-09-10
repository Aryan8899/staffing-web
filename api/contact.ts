import { API_URL } from "./config";

export async function submitContactForm(payload: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}) {
  const res = await fetch(`${API_URL}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.message || "Failed to send message");
  return data;
}