import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0a0a0f 0%, #12111a 40%, #0d1117 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        fontFamily: "'Georgia', 'Times New Roman', serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient background blobs */}
      <div style={{
        position: "fixed", top: "-20%", right: "-10%",
        width: "600px", height: "600px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(180,140,80,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "fixed", bottom: "-20%", left: "-10%",
        width: "500px", height: "500px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(120,100,180,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Main card */}
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          minHeight: "78vh",
          borderRadius: "28px",
          overflow: "hidden",
          position: "relative",
          boxShadow: "0 40px 120px rgba(0,0,0,0.7), 0 0 0 1px rgba(180,140,80,0.15)",
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Background image */}
        <img
          src="/images/hotelBg1.jpg"
          alt="hotel"
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            filter: "brightness(0.55) saturate(1.1)",
          }}
        />

        {/* Gradient overlay — bottom heavy for text legibility */}
        <div style={{
          position: "absolute", inset: 0,
          background:
            "linear-gradient(to right, rgba(6,5,12,0.82) 0%, rgba(6,5,12,0.55) 55%, rgba(6,5,12,0.25) 100%)",
        }} />

        {/* Top bar */}
        <div style={{
          position: "relative", zIndex: 2,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "2rem 3rem 0",
        }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{
              width: "36px", height: "36px",
              border: "1.5px solid rgba(212,163,115,0.7)",
              borderRadius: "8px",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "16px", color: "#d4a373",
            }}>✦</div>
            <span style={{
              color: "#f5f0e8", fontSize: "20px", fontWeight: "bold",
              letterSpacing: "0.08em",
            }}>HotelOpera</span>
          </div>
        </div>

        {/* Main content */}
        <div style={{
          position: "relative", zIndex: 2,
          flex: 1,
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "3rem 3rem 2.5rem",
          maxWidth: "680px",
        }}>
          {/* Eyebrow */}
          <div style={{
            display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.5rem",
          }}>
            <div style={{ height: "1px", width: "36px", background: "#d4a373" }} />
            <span style={{
              color: "#d4a373", fontSize: "12px", letterSpacing: "0.2em",
              textTransform: "uppercase", fontFamily: "sans-serif", fontWeight: "500",
            }}>Luxury Collection</span>
          </div>

          {/* Heading */}
          <h1 style={{
            color: "#f5f0e8", fontSize: "clamp(36px, 5vw, 60px)",
            fontWeight: "bold", lineHeight: 1.1, margin: "0 0 1.25rem",
            letterSpacing: "-0.02em",
          }}>
            Find Your<br />
            <span style={{ color: "#d4a373" }}>Perfect Stay</span>
          </h1>

          {/* Subtitle */}
          <p style={{
            color: "rgba(230,220,205,0.8)", fontSize: "17px", lineHeight: 1.7,
            maxWidth: "480px", marginBottom: "2.5rem",
            fontFamily: "sans-serif", fontWeight: "300",
          }}>
            Book luxury hotels at the best prices. Experience comfort,
            elegance and world-class service with HotelOpera.
          </p>

          {/* Buttons */}
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <Link
              to="/signin"
              style={{
                padding: "14px 36px",
                background: "linear-gradient(135deg, #d4a373 0%, #c4924d 100%)",
                color: "#1a0e00",
                fontSize: "15px", fontWeight: "700",
                borderRadius: "10px",
                textDecoration: "none",
                fontFamily: "sans-serif",
                letterSpacing: "0.03em",
                boxShadow: "0 8px 32px rgba(212,163,115,0.35)",
                transition: "transform 0.2s, box-shadow 0.2s",
                display: "inline-block",
              }}
              onMouseEnter={e => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 14px 40px rgba(212,163,115,0.5)";
              }}
              onMouseLeave={e => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 8px 32px rgba(212,163,115,0.35)";
              }}
            >
              Sign In
            </Link>

            <Link
              to="/signup"
              style={{
                padding: "14px 36px",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.25)",
                color: "#f5f0e8",
                fontSize: "15px", fontWeight: "600",
                borderRadius: "10px",
                textDecoration: "none",
                fontFamily: "sans-serif",
                letterSpacing: "0.03em",
                backdropFilter: "blur(10px)",
                transition: "background 0.2s, border-color 0.2s",
                display: "inline-block",
              }}
              onMouseEnter={e => {
                e.target.style.background = "rgba(255,255,255,0.14)";
                e.target.style.borderColor = "rgba(255,255,255,0.45)";
              }}
              onMouseLeave={e => {
                e.target.style.background = "rgba(255,255,255,0.06)";
                e.target.style.borderColor = "rgba(255,255,255,0.25)";
              }}
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
