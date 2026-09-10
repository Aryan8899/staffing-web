"use client";

const AboutSection = () => {
  return (
    <>
      <style>{`
        .about-section {
          width: 100%;
          background: #fff;
          padding: 80px 0;
          scroll-margin-top: 130px;
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
          width: 420px;
          height: 420px;
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
          width: 420px;
          height: 380px;
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
            width: 340px;
            height: 340px;
          }

          .about-img {
            width: 340px;
            height: 300px;
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
            min-height: 360px;
          }

          .about-circle-bg {
            width: 320px;
            height: 320px;
          }

          .about-img {
            width: 320px;
            height: 280px;
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
            width: 260px;
            height: 260px;
          }

          .about-img {
            width: 260px;
            height: 220px;
          }

          .about-illustration-wrapper {
            min-height: 300px;
          }

          .about-dot-ring {
            display: none;
          }
        }
      `}</style>

      <section id="about" className="about-section">
        <div className="about-container">
          {/* LEFT: Illustration + Experience badge */}
          <div className="about-illustration-wrapper">
            {/* Circle background */}
            

            {/* Decorative dot ring bottom-right */}
            

            {/* Main illustration */}
            <div className="about-img-wrapper">
              <img
                src="https://www.legalbites.in/wp-content/uploads/2016/09/Company_picture.jpg"
                alt="Interview illustration"
                className="about-img"
              />
            </div>

            {/* Experience badge */}
            <div className="about-badge">
              <div className="about-badge-number">
                4 <span className="about-badge-plus">+</span>
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
              We believe great businesses are built by great people.
            </h2>

            {/* Para 1 */}
            <p className="about-para">
              We at <strong style={{ color: "#111827" }}>TalentNexa Consulting</strong> provides recruitment and talent acquisition support to companies looking for reliable and skilled professionals.

              Our approach is simple: understand what the company needs, identify suitable candidates,

              carefully screen profiles, and help both sides move forward with clarity and professionalism.

              We work with candidates across different experience levels, from fresh graduates beginning their careers to experienced professionals looking for their next opportunity.

              Our focus is on quality, communication and long-term professional relationships.            </p>

            {/* CTA */}
            {/* <a href="#" className="about-cta">
              Read More
            </a> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;