import React, { useEffect, useState } from 'react'

const Users = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])


  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400;1,600&family=Jost:wght@300;400;500&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── OCEAN BACKGROUND ── */
        .ocean-bg {
          min-height: 100vh;
          width: 100%;
          position: relative;
          overflow: hidden;
          background: linear-gradient(
            180deg,
            #87ceeb 0%,
            #5ba8d4 18%,
            #3a8fbf 32%,
            #1e6fa0 45%,
            #0d5080 55%,
            #0a3d63 68%,
            #1a5c8a 80%,
            #2a7bb5 90%,
            #3a8fc4 100%
          );
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-family: 'Jost', sans-serif;
        }

        /* ── SUN ── */
        .sun {
          position: absolute;
          top: 6%;
          left: 50%;
          transform: translateX(-50%);
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: radial-gradient(circle, #fff7a0 0%, #ffd54f 40%, #ffb300 70%, rgba(255,179,0,0) 100%);
          box-shadow: 0 0 60px 30px rgba(255,213,79,0.35), 0 0 120px 60px rgba(255,183,0,0.15);
          animation: sunPulse 5s ease-in-out infinite;
        }
        @keyframes sunPulse {
          0%,100% { transform: translateX(-50%) scale(1); box-shadow: 0 0 60px 30px rgba(255,213,79,0.35), 0 0 120px 60px rgba(255,183,0,0.15); }
          50%      { transform: translateX(-50%) scale(1.06); box-shadow: 0 0 80px 40px rgba(255,213,79,0.45), 0 0 160px 80px rgba(255,183,0,0.2); }
        }

        /* ── SUN RAYS ── */
        .sun-rays {
          position: absolute;
          top: 6%;
          left: 50%;
          transform: translateX(-50%);
          width: 90px;
          height: 90px;
          animation: raysRotate 20s linear infinite;
        }
        .sun-rays::before, .sun-rays::after {
          content: '';
          position: absolute;
          inset: -40px;
          border-radius: 50%;
          background: repeating-conic-gradient(
            rgba(255,220,100,0.12) 0deg,
            transparent 5deg,
            transparent 12deg,
            rgba(255,220,100,0.12) 17deg,
            transparent 22deg,
            transparent 30deg
          );
        }
        @keyframes raysRotate { to { transform: translateX(-50%) rotate(360deg); } }

        /* ── SKY SHIMMER ── */
        .sky-shimmer {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 55%;
          background: linear-gradient(180deg, rgba(255,255,255,0.04) 0%, transparent 100%);
          animation: skyShimmer 8s ease-in-out infinite;
        }
        @keyframes skyShimmer {
          0%,100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        /* ── BIRDS ── */
        .bird {
          position: absolute;
          width: 22px;
          height: 7px;
          border-top: 2.5px solid rgba(30,60,100,0.55);
          border-radius: 50% 50% 0 0;
          animation: birdFly linear infinite;
        }
        .bird::after {
          content: '';
          position: absolute;
          right: -11px; top: -1px;
          width: 11px; height: 7px;
          border-top: 2.5px solid rgba(30,60,100,0.55);
          border-radius: 50% 50% 0 0;
        }
        @keyframes birdFly {
          0%   { transform: translate(0,0) scaleY(1); }
          25%  { transform: translate(0,0) scaleY(0.6); }
          50%  { transform: translate(0,0) scaleY(1); }
          75%  { transform: translate(0,0) scaleY(0.6); }
          100% { transform: translate(0,0) scaleY(1); }
        }
        .bird-group {
          position: absolute;
          top: 13%;
          animation: birdGroupMove linear infinite;
        }
        @keyframes birdGroupMove {
          from { left: -60px; }
          to   { left: 110%; }
        }

        /* ── OCEAN LIGHT REFLECTION ── */
        .ocean-reflection {
          position: absolute;
          top: 45%; left: 0; right: 0; bottom: 0;
          background: linear-gradient(180deg,
            rgba(255,255,255,0.07) 0%,
            rgba(255,255,255,0.03) 30%,
            transparent 100%
          );
          animation: reflectionShimmer 4s ease-in-out infinite;
        }
        @keyframes reflectionShimmer {
          0%,100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        /* ── SPARKLES ON WATER ── */
        .sparkle {
          position: absolute;
          border-radius: 50%;
          background: rgba(255,255,255,0.85);
          animation: sparklePop ease-in-out infinite;
        }
        @keyframes sparklePop {
          0%,100% { opacity: 0; transform: scale(0); }
          50%     { opacity: 1; transform: scale(1); }
        }

        /* ── WAVES ── */
        .wave-container {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 220px;
          overflow: hidden;
        }
        .wave {
          position: absolute;
          width: 220%;
          left: -60%;
          border-radius: 50% 50% 0 0;
        }
        .wave1 {
          height: 90px;
          bottom: 20px;
          background: rgba(255,255,255,0.18);
          animation: wave1 7s ease-in-out infinite;
        }
        .wave2 {
          height: 70px;
          bottom: 10px;
          background: rgba(255,255,255,0.13);
          animation: wave2 9s ease-in-out infinite;
        }
        .wave3 {
          height: 55px;
          bottom: 0;
          background: rgba(255,255,255,0.22);
          animation: wave3 6s ease-in-out infinite;
        }
        .wave4 {
          height: 40px;
          bottom: 0;
          background: rgba(230,248,255,0.35);
          animation: wave4 5s ease-in-out infinite;
        }
        @keyframes wave1 {
          0%,100% { transform: translateX(0) scaleY(1); }
          50%     { transform: translateX(5%) scaleY(1.08); }
        }
        @keyframes wave2 {
          0%,100% { transform: translateX(0) scaleY(1); }
          50%     { transform: translateX(-6%) scaleY(0.95); }
        }
        @keyframes wave3 {
          0%,100% { transform: translateX(0) scaleY(1); }
          50%     { transform: translateX(4%) scaleY(1.12); }
        }
        @keyframes wave4 {
          0%,100% { transform: translateX(0) scaleY(1); }
          50%     { transform: translateX(-3%) scaleY(0.9); }
        }

        /* ── FOAM BUBBLES ── */
        .foam {
          position: absolute;
          bottom: 2px;
          border-radius: 50%;
          background: rgba(255,255,255,0.6);
          animation: foamBob ease-in-out infinite;
        }
        @keyframes foamBob {
          0%,100% { transform: translateY(0) scale(1); opacity: 0.7; }
          50%     { transform: translateY(-4px) scale(1.1); opacity: 0.4; }
        }

        /* ── CONTENT CARD ── */
        .content-card {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 0 1rem;
          opacity: ${loaded ? 1 : 0};
        }

        .tagline {
          font-family: 'Jost', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.45em;
          color: rgba(255,255,255,0.75);
          text-transform: uppercase;
          margin-bottom: 1.6rem;
          opacity: 0;
          animation: fadeUp 0.7s ease 0.4s forwards;
        }

        .main-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(3rem, 8vw, 6.5rem);
          font-weight: 300;
          color: #fff;
          line-height: 1.05;
          text-shadow: 0 4px 30px rgba(0,50,100,0.5);
          margin-bottom: 0.5rem;
          opacity: 0;
          animation: fadeUp 0.9s ease 0.6s forwards;
        }

        .main-title em {
          font-style: italic;
          font-weight: 600;
          background: linear-gradient(135deg, #ffe066, #ffd54f, #ffb300);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .subtitle {
          font-family: 'Jost', sans-serif;
          font-size: clamp(0.85rem, 2vw, 1.05rem);
          font-weight: 300;
          color: rgba(255,255,255,0.72);
          letter-spacing: 0.12em;
          margin-bottom: 3rem;
          opacity: 0;
          animation: fadeUp 0.7s ease 0.85s forwards;
        }

        .divider {
          width: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,220,100,0.8), transparent);
          margin-bottom: 3rem;
          animation: dividerGrow 1s ease 1s forwards;
        }
        @keyframes dividerGrow {
          to { width: 140px; }
        }

        .feature-pills {
          display: flex;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
          justify-content: center;
          opacity: 0;
          animation: fadeUp 0.7s ease 1.1s forwards;
        }
        .pill {
          padding: 0.4rem 1.1rem;
          border: 1px solid rgba(255,255,255,0.25);
          border-radius: 30px;
          font-size: 0.7rem;
          letter-spacing: 0.12em;
          color: rgba(255,255,255,0.8);
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(6px);
          text-transform: uppercase;
        }

        .cta-btn {
          padding: 1rem 3.5rem;
          background: linear-gradient(135deg, #ffe066 0%, #ffb300 100%);
          border: none;
          border-radius: 2px;
          color: #003049;
          font-family: 'Jost', sans-serif;
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(255,180,0,0.35);
          transition: transform 0.22s ease, box-shadow 0.22s ease;
          opacity: 0;
          animation: fadeUp 0.7s ease 1.3s forwards;
        }
        .cta-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.35) 50%, transparent 60%);
          background-size: 200%;
          background-position: -200% center;
          transition: background-position 0.5s ease;
        }
        .cta-btn:hover::before { background-position: 200% center; }
        .cta-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 40px rgba(255,180,0,0.5);
        }

        .signin-link {
          margin-top: 1.6rem;
          font-size: 0.78rem;
          color: rgba(255,255,255,0.6);
          letter-spacing: 0.06em;
          opacity: 0;
          animation: fadeUp 0.7s ease 1.5s forwards;
        }
        .signin-link a {
          color: #ffe066;
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s;
        }
        .signin-link a:hover { border-color: #ffe066; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── SCROLL INDICATOR ── */
        .scroll-hint {
          position: absolute;
          bottom: 110px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          opacity: 0;
          animation: fadeUp 0.6s ease 2s forwards;
          z-index: 10;
        }
        .scroll-mouse {
          width: 22px; height: 36px;
          border: 1.5px solid rgba(255,255,255,0.4);
          border-radius: 12px;
          display: flex;
          justify-content: center;
          padding-top: 6px;
        }
        .scroll-dot {
          width: 4px; height: 8px;
          background: rgba(255,255,255,0.7);
          border-radius: 2px;
          animation: scrollDot 2s ease infinite;
        }
        @keyframes scrollDot {
          0%   { transform: translateY(0); opacity: 1; }
          80%  { transform: translateY(10px); opacity: 0; }
          100% { transform: translateY(0); opacity: 0; }
        }
        .scroll-label {
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          color: rgba(255,255,255,0.45);
          text-transform: uppercase;
        }

        /* ── FLOATING PALM SILHOUETTES ── */
        .palm {
          position: absolute;
          bottom: 80px;
          opacity: 0.22;
          pointer-events: none;
        }
        .palm-left { left: 0; transform: scaleX(-1); }
        .palm-right { right: 0; }
      `}</style>

      <div className="ocean-bg">
        {/* Sky shimmer */}
        <div className="sky-shimmer" />

        {/* Sun + rays */}
        <div className="sun-rays" />
        <div className="sun" />

        {/* Birds */}
        {[
          { top: '12%', delay: '0s', duration: '18s', gap: 28 },
          { top: '9%',  delay: '6s', duration: '24s', gap: 22 },
          { top: '16%', delay: '11s', duration: '20s', gap: 34 },
        ].map((b, i) => (
          <div key={i} className="bird-group" style={{ top: b.top, animationDelay: b.delay, animationDuration: b.duration }}>
            <div className="bird" style={{ left: 0 }} />
            <div className="bird" style={{ left: b.gap + 'px', top: '4px', transform: 'scale(0.8)' }} />
            <div className="bird" style={{ left: (b.gap * 1.9) + 'px', top: '-3px', transform: 'scale(0.65)' }} />
          </div>
        ))}

        {/* Ocean reflection */}
        <div className="ocean-reflection" />

        {/* Water sparkles */}
        {Array.from({ length: 18 }).map((_, i) => (
          <div key={i} className="sparkle" style={{
            left: `${5 + i * 5.5}%`,
            top: `${52 + Math.sin(i) * 8}%`,
            width: `${2 + (i % 3)}px`,
            height: `${2 + (i % 3)}px`,
            animationDuration: `${1.5 + (i % 4) * 0.7}s`,
            animationDelay: `${(i * 0.3) % 3}s`,
          }} />
        ))}

        {/* Palm silhouettes */}
        <svg className="palm palm-left" width="180" height="280" viewBox="0 0 180 280" fill="none">
          <path d="M90 280 Q88 200 85 160 Q60 140 20 100 Q55 130 82 150 Q78 120 60 80 Q80 115 83 148 Q70 100 75 60 Q82 100 84 145 Q92 110 110 70 Q98 112 86 146 Q100 115 130 90 Q108 120 87 150 Q88 200 90 280Z" fill="#0a3d63"/>
        </svg>
        <svg className="palm palm-right" width="180" height="280" viewBox="0 0 180 280" fill="none">
          <path d="M90 280 Q88 200 85 160 Q60 140 20 100 Q55 130 82 150 Q78 120 60 80 Q80 115 83 148 Q70 100 75 60 Q82 100 84 145 Q92 110 110 70 Q98 112 86 146 Q100 115 130 90 Q108 120 87 150 Q88 200 90 280Z" fill="#0a3d63"/>
        </svg>

        {/* ── MAIN CONTENT ── */}
        <div className="content-card">
          <p className="tagline">✦ Luxury Beach Hospitality ✦</p>

          <h1 className="main-title">
            Welcome<br />
            to <em>Hotel Opera</em>
          </h1>

          <p className="subtitle">
            Where the ocean meets extraordinary comfort
          </p>

          <div className="divider" />

          <div className="feature-pills">
            <span className="pill">🌊 Oceanfront Suites</span>
            <span className="pill">🌴 Private Beach</span>
            <span className="pill">✦ 5-Star Service</span>
          </div>

          <button className="cta-btn">
            Get Started
          </button>
        </div>

        {/* Waves */}
        <div className="wave-container">
          <div className="wave wave1" />
          <div className="wave wave2" />
          <div className="wave wave3" />
          <div className="wave wave4" />

          {/* Foam bubbles */}
          {Array.from({ length: 14 }).map((_, i) => (
            <div key={i} className="foam" style={{
              left: `${3 + i * 7}%`,
              width: `${4 + (i % 5) * 3}px`,
              height: `${4 + (i % 5) * 3}px`,
              animationDuration: `${2 + (i % 4) * 0.8}s`,
              animationDelay: `${(i * 0.25) % 2}s`,
              opacity: 0.4 + (i % 3) * 0.2,
            }} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Users
