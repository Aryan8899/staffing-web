import { API_URL } from "./config";

export async function subscribeEmail(email: string) {
  const res = await fetch(`${API_URL}/subscribers`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.message || "Failed to subscribe");
  return data;
}