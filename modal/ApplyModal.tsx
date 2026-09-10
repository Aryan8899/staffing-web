"use client";

import { useState } from "react";
import { X, UploadCloud, CheckCircle2 } from "lucide-react";
import { applyToJob } from "../api/applications";
import type { Job } from "../api/job";

export default function ApplyModal({
  job,
  onClose,
}: {
  job: Job;
  onClose: () => void;
}) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const allowed = [".pdf", ".doc", ".docx"];
    const ext = file.name.slice(file.name.lastIndexOf(".")).toLowerCase();
    if (!allowed.includes(ext)) {
      setError("Only .pdf, .doc, or .docx files are allowed");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setError("File must be under 5MB");
      return;
    }

    setError("");
    setCvFile(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!cvFile) {
      setError("Please upload your CV");
      return;
    }

    setLoading(true);
    try {
      await applyToJob(job._id, { fullName, email, phone, coverLetter, cv: cvFile });
      setSuccess(true);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-700"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {success ? (
          <div className="flex flex-col items-center py-8 text-center">
            <CheckCircle2 size={48} className="text-green-500 mb-3" />
            <h3 className="text-lg font-bold text-gray-900">Application Submitted!</h3>
            <p className="mt-1 text-sm text-gray-500">
              Thanks for applying to <strong>{job.title}</strong>. Our team will review your CV and reach out if there's a match.
            </p>
            <button
              onClick={onClose}
              className="mt-6 rounded-lg bg-[#3f5fa6] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#34508f]"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h3 className="text-lg font-bold text-gray-900">
              Apply for {job.title}
            </h3>
            <p className="text-sm text-gray-500 mb-4">{job.company} — {job.location}</p>

            {error && (
              <div className="mb-4 rounded-lg bg-red-50 px-4 py-2 text-sm text-red-700">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Full Name"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#3f5fa6]/40"
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#3f5fa6]/40"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#3f5fa6]/40"
              />
              <textarea
                placeholder="Cover Letter (optional)"
                rows={3}
                value={coverLetter}
                onChange={(e) => setCoverLetter(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#3f5fa6]/40"
              />

              <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-gray-300 px-4 py-6 text-center hover:border-[#3f5fa6]/50 transition-colors">
                <UploadCloud size={22} className="text-gray-400" />
                <span className="text-sm text-gray-600">
                  {cvFile ? cvFile.name : "Click to upload your CV (PDF, DOC, DOCX — max 5MB)"}
                </span>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-[#3f5fa6] py-2.5 text-sm font-semibold text-white hover:bg-[#34508f] transition-colors disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}