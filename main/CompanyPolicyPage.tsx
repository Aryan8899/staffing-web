"use client";

import Link from "next/link";

// ─── Section Heading ──────────────────────────────────────────────────────────
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mt-10 mb-3 flex items-start gap-3">
      <span className="w-1.5 h-6 bg-[#3B6FE8] rounded-full shrink-0 mt-1" />
      {children}
    </h2>
  );
}

// ─── Company Policy Page ──────────────────────────────────────────────────────
export default function CompanyPolicyPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Header banner */}
      <section className="bg-[#0d0d0d] text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="w-10 h-0.75 bg-orange-500 mb-4" />
          <h1 className="text-3xl sm:text-4xl font-extrabold">Company Policy</h1>
          <p className="text-gray-400 text-[14px] mt-3">
            TalentNexa Consulting — Terms, Transparency &amp; Conduct
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 py-14">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-600 text-[15px] leading-relaxed">
            At <strong className="text-gray-900">TalentNexa Consulting</strong>, we believe
            that every professional engagement should begin with clear terms and mutual
            understanding.
          </p>

          <SectionHeading>Client Agreement Is Mandatory</SectionHeading>
          <ul className="space-y-3 text-gray-600 text-[15px] leading-relaxed list-disc pl-5">
            <li>
              TalentNexa Consulting works with companies only after a formal recruitment
              agreement has been discussed, accepted and signed by both parties.
            </li>
            <li>
              The agreement clearly sets out the scope of recruitment services,
              responsibilities, commercial terms, payment conditions and other applicable
              terms.
            </li>
            <li>We do not undertake recruitment assignments without a valid agreement in place.</li>
            <li>
              This policy protects both the client and TalentNexa Consulting and ensures that
              there is no misunderstanding during the recruitment process.
            </li>
          </ul>

          <SectionHeading>No Candidate Charges</SectionHeading>
          <ul className="space-y-3 text-gray-600 text-[15px] leading-relaxed list-disc pl-5">
            <li>
              TalentNexa Consulting does not charge candidates any recruitment, registration,
              placement or interview fee.
            </li>
            <li>
              Candidates are never required to pay us for being considered or referred for an
              employment opportunity.
            </li>
            <li>
              Our recruitment services are provided under our agreed commercial arrangement
              with the client company.
            </li>
          </ul>

          <SectionHeading>Transparency &amp; Professional Conduct</SectionHeading>
          <ul className="space-y-3 text-gray-600 text-[15px] leading-relaxed list-disc pl-5">
            <li>
              We believe recruitment should be handled with honesty and professionalism. We
              do not promise candidates guaranteed selection or employment, as the final
              decision always rests with the hiring company.
            </li>
            <li>
              All candidates are expected to provide accurate information and genuine
              documents during the recruitment process.
            </li>
          </ul>

          <div className="mt-12 bg-[#EEF2FB] rounded-2xl px-8 py-8">
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
              Our principle is simple: clear agreements with clients, no recruitment fees for
              candidates, and professional conduct throughout the hiring process.
            </p>
          </div>

          <div className="mt-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#3B6FE8] font-semibold text-sm hover:underline"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}