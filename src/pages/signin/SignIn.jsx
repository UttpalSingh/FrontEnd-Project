import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../features/userslice";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  //UI
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);
 // /////////////////////////////////////////////////////
 
  // Logic
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.user.currentUser);
  const loggedIN = useSelector((state) => state.user.userAuthenticated);

  function storeValue(e) {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  }

  function formSubmit(e) {
    e.preventDefault();
    if (!userInput.email || !userInput.password) {
      alert("Please Enter Data");
      return;
    }

    dispatch(
      userLogin({
        //send data to userlogin()
        email: userInput.email.trim(),
        password: userInput.password.trim(),
      }),
    );

    setUserInput({
      email: "",
      password: "",
    });
  }

  useEffect(() => {
    if (loggedIN) {
      navigate("/Users");
    }
  }, [loggedIN]);

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
          right: "-5%",
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
          left: "-8%",
          width: "480px",
          height: "480px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(120,100,180,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Split layout */}
      <div
        style={{
          width: "100%",
          maxWidth: "1000px",
          minHeight: "600px",
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
        {/* Left — image panel */}
        <div
          style={{
            flex: "1 1 45%",
            position: "relative",
            minHeight: "600px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <img
            src="/images/hotelBg2.jpg"
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
          {/* gradient */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(6,5,12,0.85) 0%, rgba(6,5,12,0.3) 60%, transparent 100%)",
            }}
          />

          {/* Left content */}
          <div style={{ position: "relative", zIndex: 2, padding: "2.5rem" }}>
            {/* Logo */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "auto",
                position: "absolute",
                top: "2.5rem",
                left: "2.5rem",
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

            {/* Bottom quote */}
            <div style={{ marginTop: "auto" }}>
              <div
                style={{
                  height: "1px",
                  width: "32px",
                  background: "#d4a373",
                  marginBottom: "1rem",
                }}
              />
            </div>
          </div>
        </div>

        {/* Right — form panel */}
        <div
          style={{
            flex: "1 1 55%",
            background: "#0e0d15",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "3.5rem",
            position: "relative",
          }}
        >
          {/* Subtle top-right glow inside form panel */}
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "260px",
              height: "260px",
              background:
                "radial-gradient(circle at top right, rgba(180,140,80,0.07) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          {/* Eyebrow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "1.25rem",
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
              Member Access
            </span>
          </div>

          {/* Heading */}
          <h1
            style={{
              color: "#f5f0e8",
              fontSize: "38px",
              fontWeight: "bold",
              lineHeight: 1.15,
              margin: "0 0 0.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            Welcome
            <br />
            <span style={{ color: "#d4a373" }}>Back</span>
          </h1>
          <p
            style={{
              color: "rgba(200,190,175,0.6)",
              fontSize: "14px",
              fontFamily: "sans-serif",
              margin: "0 0 2.5rem",
            }}
          >
            Sign in to manage your reservations
          </p>

          {/* Form */}
          <form
            onSubmit={formSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            {/* Email */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "6px" }}
            >
              <label
                style={{
                  color: "rgba(200,190,175,0.6)",
                  fontSize: "12px",
                  fontFamily: "sans-serif",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Email address
              </label>
              <input
                onChange={storeValue}
                name="email"
                value={userInput?.email || ""}
                type="email"
                style={{
                  padding: "13px 16px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "10px",
                  color: "#f5f0e8",
                  fontSize: "15px",
                  fontFamily: "sans-serif",
                  outline: "none",
                  transition: "border-color 0.2s, background 0.2s",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "rgba(212,163,115,0.6)";
                  e.target.style.background = "rgba(212,163,115,0.06)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(255,255,255,0.1)";
                  e.target.style.background = "rgba(255,255,255,0.05)";
                }}
              />
            </div>

            {/* Password */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "6px" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <label
                  style={{
                    color: "rgba(200,190,175,0.6)",
                    fontSize: "12px",
                    fontFamily: "sans-serif",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  Password
                </label>
              </div>
              <input
                onChange={storeValue}
                name="password"
                value={userInput?.password || ""}
                type="password"
                style={{
                  padding: "13px 16px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "10px",
                  color: "#f5f0e8",
                  fontSize: "15px",
                  fontFamily: "sans-serif",
                  outline: "none",
                  transition: "border-color 0.2s, background 0.2s",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "rgba(212,163,115,0.6)";
                  e.target.style.background = "rgba(212,163,115,0.06)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(255,255,255,0.1)";
                  e.target.style.background = "rgba(255,255,255,0.05)";
                }}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              style={{
                marginTop: "8px",
                padding: "14px",
                background: "linear-gradient(135deg, #d4a373 0%, #c4924d 100%)",
                color: "#1a0e00",
                fontSize: "15px",
                fontWeight: "700",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
                fontFamily: "sans-serif",
                letterSpacing: "0.05em",
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
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              margin: "1.75rem 0",
            }}
          >
            <div
              style={{
                flex: 1,
                height: "1px",
                background: "rgba(255,255,255,0.08)",
              }}
            />
            <span
              style={{
                color: "rgba(200,190,175,0.4)",
                fontSize: "12px",
                fontFamily: "sans-serif",
              }}
            >
              or
            </span>
            <div
              style={{
                flex: 1,
                height: "1px",
                background: "rgba(255,255,255,0.08)",
              }}
            />
          </div>

          {/* Sign up link */}
          <p
            style={{
              textAlign: "center",
              color: "rgba(200,190,175,0.55)",
              fontSize: "14px",
              fontFamily: "sans-serif",
              margin: 0,
            }}
          >
            New to HotelOpera?{" "}
            <Link
              to="/signup"
              style={{
                color: "#d4a373",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
