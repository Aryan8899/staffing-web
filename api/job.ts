import { API_URL } from "./config";

export type JobType = "Full-Time" | "Part-Time" | "Internship" | "Contract";

export interface Job {
  _id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  requirements?: string;
  salary?: string;
  jobType: JobType;
  isActive: boolean;
  createdAt: string;
}

// Public — matches GET /api/jobs (only active jobs, admin-posted, no auth needed)
export async function getActiveJobs(): Promise<Job[]> {
  const res = await fetch(`${API_URL}/jobs`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load jobs");
  return res.json();
}