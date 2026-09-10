"use client";

import { useState } from "react";
import { MapPin, Building2, Clock } from "lucide-react";
import type { Job } from "../api/job";
import ApplyModal from "../modal/ApplyModal";

const jobTypeColors: Record<string, string> = {
  "Full-Time": "bg-blue-50 text-blue-700",
  "Part-Time": "bg-purple-50 text-purple-700",
  Internship: "bg-amber-50 text-amber-700",
  Contract: "bg-emerald-50 text-emerald-700",
};

export default function JobCard({ job }: { job: Job }) {
  const [showApply, setShowApply] = useState(false);

  const postedDate = new Date(job.createdAt).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <>
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-[#3f5fa6]/30 flex flex-col">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold text-gray-900">{job.title}</h3>
          <span
            className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
              jobTypeColors[job.jobType] || "bg-gray-100 text-gray-700"
            }`}
          >
            {job.jobType}
          </span>
        </div>

        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500">
          <span className="flex items-center gap-1.5">
            <Building2 size={14} /> {job.company}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin size={14} /> {job.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={14} /> Posted {postedDate}
          </span>
        </div>

        <p className="mt-3 text-sm text-gray-600 line-clamp-3 flex-1">{job.description}</p>

        {job.salary && (
          <p className="mt-3 text-sm font-semibold text-[#3f5fa6]">{job.salary}</p>
        )}

        <button
          onClick={() => setShowApply(true)}
          className="mt-4 w-full rounded-lg bg-[#3f5fa6] py-2.5 text-sm font-semibold text-white hover:bg-[#34508f] transition-colors"
        >
          Apply Now
        </button>
      </div>

      {showApply && <ApplyModal job={job} onClose={() => setShowApply(false)} />}
    </>
  );
}