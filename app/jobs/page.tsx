"use client";

import { useEffect, useState } from "react";
import Header from "@/layout/Header";
import { getActiveJobs, type Job } from "@/api/job";
import JobCard from "@/main/JobCard";

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getActiveJobs()
      .then(setJobs)
      .catch((err) => setError(err.message || "Failed to load jobs"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Header />
      <section id="jobs" className="mx-auto max-w-6xl px-4 py-12 md:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
            Current Openings
          </h1>
          <p className="mt-2 text-gray-500">
            Explore roles our clients are currently hiring for.
          </p>
        </div>

        {loading && <p className="text-center text-gray-500">Loading job openings...</p>}
        {error && (
          <p className="text-center text-red-600">
            {error} — is the backend running on localhost:5000?
          </p>
        )}
        {!loading && !error && jobs.length === 0 && (
          <p className="text-center text-gray-500">No open positions right now. Check back soon!</p>
        )}
        {!loading && jobs.length > 0 && (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job) => (
              <JobCard key={job._id} job={job} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}