"use client";

const AboutSection = () => {
  return (
    <>
      <style>{`
        .about-section {
          width: 100%;
          background: #fff;
          padding: 80px 0;
        }

        .about-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 48px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 64px;
        }

        .about-illustration-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .about-circle-bg {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 340px;
          height: 340px;
          border-radius: 50%;
          background: #f0f4fb;
          z-index: 0;
        }

        .about-dot-ring {
          position: absolute;
          bottom: 20px;
          right: 40px;
          z-index: 0;
          display: grid;
          grid-template-columns: repeat(5, 8px);
          gap: 6px;
        }

        .about-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #c5d8f0;
        }

        .about-img-wrapper {
          position: relative;
          z-index: 1;
        }

        .about-img {
          width: 340px;
          height: 300px;
          object-fit: contain;
          display: block;
        }

        .about-badge {
          position: absolute;
          bottom: 0;
          left: 20px;
          background: #fff;
          border-radius: 12px;
          padding: 16px 28px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.10);
          text-align: center;
          z-index: 2;
        }

        .about-badge-number {
          font-size: 40px;
          font-weight: 900;
          color: #4d7ab8;
          line-height: 1;
        }

        .about-badge-plus {
          color: #f0a04b;
          font-size: 36px;
        }

        .about-badge-label {
          font-size: 14px;
          font-weight: 600;
          color: #374151;
          margin-top: 4px;
        }

        .about-content {
        }

        .about-label {
          font-size: 14px;
          font-weight: 600;
          color: #4d7ab8;
          margin-bottom: 10px;
        }

        .about-underline {
          width: 40px;
          height: 3px;
          background: #f0a04b;
          border-radius: 2px;
          margin-bottom: 20px;
        }

        .about-heading {
          font-size: clamp(1.6rem, 2.5vw, 2.2rem);
          font-weight: 800;
          color: #111827;
          line-height: 1.2;
          margin: 0 0 20px;
        }

        .about-para {
          font-size: 15px;
          color: #4b5563;
          line-height: 1.75;
          margin: 0 0 18px;
        }

        .about-para-last {
          margin-bottom: 32px;
        }

        .about-cta {
          display: inline-block;
          background: #1f3f7a;
          color: #fff;
          font-size: 14px;
          font-weight: 700;
          padding: 13px 32px;
          border-radius: 6px;
          text-decoration: none;
          letter-spacing: 0.03em;
          transition: background 0.2s;
        }

        .about-cta:hover {
          background: #162e5c;
        }

        /* Tablet: 768px – 1023px */
        @media (max-width: 1023px) {
          .about-container {
            padding: 0 32px;
            gap: 40px;
          }

          .about-circle-bg {
            width: 280px;
            height: 280px;
          }

          .about-img {
            width: 280px;
            height: 240px;
          }

          .about-dot-ring {
            right: 10px;
            bottom: 10px;
          }
        }

        /* Mobile: below 768px — stack vertically */
        @media (max-width: 767px) {
          .about-section {
            padding: 52px 0;
          }

          .about-container {
            grid-template-columns: 1fr;
            padding: 0 20px;
            gap: 48px;
          }

          .about-illustration-wrapper {
            min-height: 320px;
          }

          .about-circle-bg {
            width: 260px;
            height: 260px;
          }

          .about-img {
            width: 260px;
            height: 220px;
          }

          .about-dot-ring {
            right: 0px;
            bottom: 10px;
          }

          .about-badge {
            left: 0px;
            padding: 12px 20px;
          }

          .about-badge-number {
            font-size: 32px;
          }

          .about-badge-plus {
            font-size: 28px;
          }

          .about-badge-label {
            font-size: 12px;
          }

          .about-heading {
            font-size: 1.5rem;
          }

          .about-para {
            font-size: 14px;
          }
        }

        /* Very small mobile: below 400px */
        @media (max-width: 399px) {
          .about-circle-bg {
            width: 220px;
            height: 220px;
          }

          .about-img {
            width: 220px;
            height: 190px;
          }

          .about-illustration-wrapper {
            min-height: 270px;
          }

          .about-dot-ring {
            display: none;
          }
        }
      `}</style>

      <section className="about-section">
        <div className="about-container">
          {/* LEFT: Illustration + Experience badge */}
          <div className="about-illustration-wrapper">
            {/* Circle background */}
            <div className="about-circle-bg" />

            {/* Decorative dot ring bottom-right */}
            <div className="about-dot-ring">
              {Array.from({ length: 25 }).map((_, i) => (
                <div key={i} className="about-dot" />
              ))}
            </div>

            {/* Main illustration */}
            <div className="about-img-wrapper">
              <img
                src="https://mspireventures.com/wp-content/uploads/2023/06/undraw_Interview_re_e5jn-3.png"
                alt="Interview illustration"
                className="about-img"
              />
            </div>

            {/* Experience badge */}
            <div className="about-badge">
              <div className="about-badge-number">
                2 <span className="about-badge-plus">+</span>
              </div>
              <div className="about-badge-label">Year Experience</div>
            </div>
          </div>

          {/* RIGHT: Text content */}
          <div className="about-content">
            {/* Label */}
            <div className="about-label">About Company</div>

            {/* Orange underline */}
            <div className="about-underline" />

            {/* Heading */}
            <h2 className="about-heading">
              HR Solutions: Empowering Organizations
            </h2>

            {/* Para 1 */}
            <p className="about-para">
              We at <strong style={{ color: "#111827" }}>MSPIRE Ventures</strong> offer
              quality Staffing Agency services to place the right people with the right
              jobs across India. Whether you are looking to hire new staff or find a new
              job, we're happy to offer you our services. Apart from this we are dealing
              in Contractual staffing, payroll services and RPO. Call us up to arrange an
              appointment. We'll have your hiring or job-seeking needs met in lowest turn
              around time (TAT) by our team of expert recruiters.
            </p>

            {/* Para 2 */}
            <p className="about-para about-para-last">
              We are an Early{" "}
              <strong style={{ color: "#111827" }}>
                age startup, founded by younger entrepreneurs in
              </strong>{" "}
              Recruitment Consulting, Staffing & Payroll Services, headquartered in
              Ahmedabad with a dedicated team of more than{" "}
              <strong style={{ color: "#111827" }}>50+</strong> highly qualified and
              professional, domain expert recruiters delivering quality recruitment and
              staffing solutions.
            </p>

            {/* CTA */}
            <a href="#" className="about-cta">
              Read More
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;