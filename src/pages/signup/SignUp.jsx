import React, { useEffect, useState } from "react";
import { UserProvider } from "../../context";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../features/userslice";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  //UI
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);
  const inputStyle = {
    padding: "12px 16px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "10px",
    color: "#f5f0e8",
    fontSize: "14px",
    fontFamily: "sans-serif",
    outline: "none",
    transition: "border-color 0.2s, background 0.2s",
    width: "100%",
    boxSizing: "border-box",
  };

  const labelStyle = {
    color: "rgba(200,190,175,0.6)",
    fontSize: "11px",
    fontFamily: "sans-serif",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    marginBottom: "5px",
    display: "block",
  };

  const handleFocus = (e) => {
    e.target.style.borderColor = "rgba(212,163,115,0.6)";
    e.target.style.background = "rgba(212,163,115,0.06)";
  };
  const handleBlur = (e) => {
    e.target.style.borderColor = "rgba(255,255,255,0.1)";
    e.target.style.background = "rgba(255,255,255,0.05)";
  };
  // ////////////////////////////////////////////////////////

  
  //Logic
  const [input, setInput] = useState({
    name: "",
    mobile: "",
    age: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userEnter = useSelector((state) => state.user.userDetails);

  function storeData(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function submitForm(e) {
    e.preventDefault();
    if (
      !input.name ||
      !input.mobile ||
      !input.age ||
      !input.email ||
      !input.password
    ) {
      alert("Please enter data sucessfully!");
      return;
    }

    dispatch(
      registerUser({
        // send data in localstorage
        name: input.name.trim(),
        mobile: input.mobile.trim(),
        age: input.age.trim(),
        email: input.email.trim(),
        password: input.password.trim(),
      }),
    );

    setInput({
      name: "",
      mobile: "",
      age: "",
      email: "",
      password: "",
    });
  }
  useEffect(() => {
    if (userEnter) {
      navigate("/Users");
    }
  }, [userEnter]);


  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0a0a0f 0%, #12111a 40%, #0d1117 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        fontFamily: "'Georgia', 'Times New Roman', serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient blobs */}
      <div
        style={{
          position: "fixed",
          top: "-10%",
          left: "-5%",
          width: "550px",
          height: "550px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(180,140,80,0.09) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "fixed",
          bottom: "-15%",
          right: "-8%",
          width: "480px",
          height: "480px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(120,100,180,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Card */}
      <div
        style={{
          width: "100%",
          maxWidth: "1000px",
          borderRadius: "28px",
          overflow: "hidden",
          display: "flex",
          boxShadow:
            "0 40px 120px rgba(0,0,0,0.7), 0 0 0 1px rgba(180,140,80,0.15)",
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
        }}
      >
        {/* Left — form panel */}
        <div
          style={{
            flex: "1 1 52%",
            background: "#0e0d15",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "3rem 3.5rem",
            position: "relative",
          }}
        >
          {/* Glow */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "260px",
              height: "260px",
              background:
                "radial-gradient(circle at top left, rgba(180,140,80,0.07) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          {/* Eyebrow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "1.1rem",
            }}
          >
            <div
              style={{ height: "1px", width: "28px", background: "#d4a373" }}
            />
            <span
              style={{
                color: "#d4a373",
                fontSize: "11px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontFamily: "sans-serif",
                fontWeight: "500",
              }}
            >
              New Member
            </span>
          </div>

          {/* Heading */}
          <h1
            style={{
              color: "#f5f0e8",
              fontSize: "34px",
              fontWeight: "bold",
              lineHeight: 1.15,
              margin: "0 0 0.4rem",
              letterSpacing: "-0.02em",
            }}
          >
            Get Started
            <br />
            <span style={{ color: "#d4a373" }}>Today</span>
          </h1>
          <p
            style={{
              color: "rgba(200,190,175,0.55)",
              fontSize: "13px",
              fontFamily: "sans-serif",
              margin: "0 0 2rem",
            }}
          >
            Create your HotelOpera account in seconds
          </p>

          {/* Form */}
          <form
            onSubmit={submitForm}
            style={{ display: "flex", flexDirection: "column", gap: "14px" }}
          >
            {/* Row: Name + Mobile */}
            <div style={{ display: "flex", gap: "12px" }}>
              <div style={{ flex: 1 }}>
                <label style={labelStyle}>Full name</label>
                <input
                  required
                  value={input?.name || ""}
                  name="name"
                  onChange={storeData}
                  type="text"
                  style={inputStyle}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
              <div style={{ flex: 1 }}>
                <label style={labelStyle}>Mobile</label>
                <input
                  required
                  value={input?.mobile || ""}
                  name="mobile"
                  onChange={storeData}
                  type="text"
                  style={inputStyle}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
            </div>

            {/* Row: Age + Email */}
            <div style={{ display: "flex", gap: "12px" }}>
              <div style={{ flex: "0 0 30%" }}>
                <label style={labelStyle}>Age</label>
                <input
                  required
                  value={input?.age || ""}
                  name="age"
                  onChange={storeData}
                  type="text"
                  style={inputStyle}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
              <div style={{ flex: 1 }}>
                <label style={labelStyle}>Email address</label>
                <input
                  required
                  value={input?.email || ""}
                  name="email"
                  onChange={storeData}
                  type="email"
                  style={inputStyle}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label style={labelStyle}>Password</label>
              <input
                required
                value={input?.password || ""}
                name="password"
                onChange={storeData}
                type="password"
                style={inputStyle}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              style={{
                marginTop: "6px",
                padding: "13px",
                background: "linear-gradient(135deg, #d4a373 0%, #c4924d 100%)",
                color: "#1a0e00",
                fontSize: "14px",
                fontWeight: "700",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
                fontFamily: "sans-serif",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                boxShadow: "0 8px 32px rgba(212,163,115,0.3)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 14px 40px rgba(212,163,115,0.5)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 8px 32px rgba(212,163,115,0.3)";
              }}
            >
              Create Account
            </button>
          </form>

          {/* Sign in link */}
          <p
            style={{
              textAlign: "center",
              color: "rgba(200,190,175,0.55)",
              fontSize: "13px",
              fontFamily: "sans-serif",
              margin: "1.5rem 0 0",
            }}
          >
            Already have an account?{" "}
            <Link
              to="/signin"
              style={{
                color: "#d4a373",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              Sign in
            </Link>
          </p>
        </div>

        {/* Right — image panel */}
        <div
          style={{
            flex: "1 1 48%",
            position: "relative",
            minHeight: "580px",
          }}
        >
          <img
            src="/images/hotel1.jpg"
            alt="hotel"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "brightness(0.5) saturate(1.1)",
            }}
          />
          {/* Overlay gradient */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, rgba(6,5,12,0.35) 0%, rgba(6,5,12,0.65) 100%)",
            }}
          />

          {/* Logo top-right */}
          <div
            style={{
              position: "absolute",
              top: "2.5rem",
              right: "2.5rem",
              zIndex: 2,
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div
              style={{
                width: "34px",
                height: "34px",
                border: "1.5px solid rgba(212,163,115,0.7)",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
                color: "#d4a373",
              }}
            >
              ✦
            </div>
            <span
              style={{
                color: "#f5f0e8",
                fontSize: "18px",
                fontWeight: "bold",
                letterSpacing: "0.08em",
              }}
            >
              HotelOpera
            </span>
          </div>

          {/* Center text */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem",
              textAlign: "center",
            }}
          >
            <div
              style={{
                height: "1px",
                width: "36px",
                background: "#d4a373",
                margin: "0 auto 1.25rem",
              }}
            />
            <h2
              style={{
                color: "#f5f0e8",
                fontSize: "26px",
                fontWeight: "bold",
                lineHeight: 1.35,
                margin: "0 0 1rem",
                letterSpacing: "-0.01em",
              }}
            >
              Book your perfect stay
              <br />
              <span style={{ color: "#d4a373" }}>with comfort & luxury</span>
            </h2>
            <p
              style={{
                color: "rgba(230,215,195,0.7)",
                fontSize: "14px",
                fontFamily: "sans-serif",
                lineHeight: 1.6,
                maxWidth: "280px",
              }}
            >
              Join thousands of guests who trust HotelOpera for unforgettable
              experiences.
            </p>
          </div>

          {/* Bottom perks */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 2,
              borderTop: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(0,0,0,0.3)",
              padding: "1.25rem 2rem",
              display: "flex",
              justifyContent: "space-around",
              backdropFilter: "blur(6px)",
            }}
          >
            {[
              { icon: "✦", text: "Best Rates" },
              { icon: "◈", text: "Free Cancellation" },
              { icon: "◎", text: "24/7 Support" },
            ].map(({ icon, text }) => (
              <div
                key={text}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <span style={{ color: "#d4a373", fontSize: "14px" }}>
                  {icon}
                </span>
                <span
                  style={{
                    color: "rgba(230,215,195,0.75)",
                    fontSize: "11px",
                    fontFamily: "sans-serif",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
