import { API_URL } from "./config";

export interface ApplyPayload {
  fullName: string;
  email: string;
  phone: string;
  coverLetter?: string;
  cv: File;
}

// Public — matches POST /api/applications/:jobId, multipart/form-data
export async function applyToJob(jobId: string, payload: ApplyPayload) {
  const formData = new FormData();
  formData.append("fullName", payload.fullName);
  formData.append("email", payload.email);
  formData.append("phone", payload.phone);
  if (payload.coverLetter) formData.append("coverLetter", payload.coverLetter);
  formData.append("cv", payload.cv);

  const res = await fetch(`${API_URL}/applications/${jobId}`, {
    method: "POST",
    body: formData, // don't set Content-Type manually — browser sets the boundary
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(data.message || "Failed to submit application");
  }

  return data;
}