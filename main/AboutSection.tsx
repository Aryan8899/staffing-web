"use client";

const AboutSection = () => {
  return (
    <section
      style={{
        width: "100%",
        background: "#fff",
        padding: "80px 0",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 48px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          gap: 64,
        }}
      >
        {/* LEFT: Illustration + Experience badge */}
        <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
          {/* Circle background */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 340,
              height: 340,
              borderRadius: "50%",
              background: "#f0f4fb",
              zIndex: 0,
            }}
          />

          {/* Decorative dot ring bottom-right */}
          <div
            style={{
              position: "absolute",
              bottom: 20,
              right: 40,
              zIndex: 0,
              display: "grid",
              gridTemplateColumns: "repeat(5, 8px)",
              gap: 6,
            }}
          >
            {Array.from({ length: 25 }).map((_, i) => (
              <div
                key={i}
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: "#c5d8f0",
                }}
              />
            ))}
          </div>

          {/* Main illustration */}
          <div style={{ position: "relative", zIndex: 1 }}>
            <img
              src="https://mspireventures.com/wp-content/uploads/2023/06/undraw_Interview_re_e5jn-3.png"
              alt="Interview illustration"
              style={{
                width: 340,
                height: 300,
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>

          {/* Experience badge */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 20,
              background: "#fff",
              borderRadius: 12,
              padding: "16px 28px",
              boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
              textAlign: "center",
              zIndex: 2,
            }}
          >
            <div
              style={{
                fontSize: 40,
                fontWeight: 900,
                color: "#4d7ab8",
                lineHeight: 1,
              }}
            >
              2{" "}
              <span style={{ color: "#f0a04b", fontSize: 36 }}>+</span>
            </div>
            <div
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "#374151",
                marginTop: 4,
              }}
            >
              Year Experience
            </div>
          </div>
        </div>

        {/* RIGHT: Text content */}
        <div>
          {/* Label */}
          <div
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "#4d7ab8",
              marginBottom: 10,
            }}
          >
            About Company
          </div>

          {/* Orange underline */}
          <div
            style={{
              width: 40,
              height: 3,
              background: "#f0a04b",
              borderRadius: 2,
              marginBottom: 20,
            }}
          />

          {/* Heading */}
          <h2
            style={{
              fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
              fontWeight: 800,
              color: "#111827",
              lineHeight: 1.2,
              margin: "0 0 20px",
            }}
          >
            HR Solutions: Empowering Organizations
          </h2>

          {/* Para 1 */}
          <p
            style={{
              fontSize: 15,
              color: "#4b5563",
              lineHeight: 1.75,
              margin: "0 0 18px",
            }}
          >
            We at <strong style={{ color: "#111827" }}>MSPIRE Ventures</strong> offer
            quality Staffing Agency services to place the right people with the right
            jobs across India. Whether you are looking to hire new staff or find a new
            job, we're happy to offer you our services. Apart from this we are dealing
            in Contractual staffing, payroll services and RPO. Call us up to arrange an
            appointment. We'll have your hiring or job-seeking needs met in lowest turn
            around time (TAT) by our team of expert recruiters.
          </p>

          {/* Para 2 */}
          <p
            style={{
              fontSize: 15,
              color: "#4b5563",
              lineHeight: 1.75,
              margin: "0 0 32px",
            }}
          >
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
          <a
            href="#"
            style={{
              display: "inline-block",
              background: "#1f3f7a",
              color: "#fff",
              fontSize: 14,
              fontWeight: 700,
              padding: "13px 32px",
              borderRadius: 6,
              textDecoration: "none",
              letterSpacing: "0.03em",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.background = "#162e5c")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.background = "#1f3f7a")
            }
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;