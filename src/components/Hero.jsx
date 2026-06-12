import React, { useState } from "react";

function Hero() {
  const [btn1Hover, setBtn1Hover] = useState(false);
  const [btn2Hover, setBtn2Hover] = useState(false);
  const [btn3Hover, setBtn3Hover] = useState(false);
  const [githubHover, setGithubHover] = useState(false);
  const [linkedinHover, setLinkedinHover] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500&display=swap');

        #hero * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        @keyframes wave {
          0%, 100% { transform: scaleY(0.4); opacity: 0.6; }
          50%       { transform: scaleY(1); opacity: 1; }
        }

        .hero-main-content {
          animation: fadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .photo-ring {
          position: absolute;
          inset: -8px;
          border-radius: 50%;
          border: 2px solid transparent;
          border-top-color: #ff5e3a;
          border-right-color: #00d9ff;
          animation: spin 6s linear infinite;
        }

        .stamp {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 5px 14px;
          border: 1.5px dashed rgba(255,255,255,0.15);
          border-radius: 100px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          font-family: 'Space Grotesk', sans-serif;
        }
        .stamp.orange { border-color: rgba(255,94,58,0.4); color: #ff8a65; }
        .stamp.cyan   { border-color: rgba(0,217,255,0.4); color: #5ce1ff; }

        .hero-name span {
          background: linear-gradient(90deg, #ff5e3a, #00d9ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .btn-primary-hero {
          background: linear-gradient(90deg, #ff5e3a, #ff8a3a);
          color: #0a0a0c;
          border: none;
          padding: 13px 30px;
          border-radius: 8px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s ease;
          text-decoration: none;
          letter-spacing: 0.3px;
          display: inline-block;
        }
        .btn-primary-hero:hover {
          box-shadow: 0 0 24px rgba(255,94,58,0.5);
          transform: translateY(-2px);
        }

        .btn-outline-hero {
          background: transparent;
          color: rgba(255,255,255,0.7);
          border: 1.5px solid rgba(255,255,255,0.15);
          padding: 13px 30px;
          border-radius: 8px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s ease;
          text-decoration: none;
          letter-spacing: 0.3px;
          display: inline-block;
        }
        .btn-outline-hero:hover {
          border-color: #00d9ff;
          color: #00d9ff;
          transform: translateY(-2px);
        }

        .soundwave-bar {
          width: 3px;
          background: linear-gradient(180deg, #00d9ff, #ff5e3a);
          border-radius: 2px;
          animation: wave 1.2s ease-in-out infinite;
        }

        .social-btn-hero {
          display: flex; align-items: center; gap: 6px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.5);
          padding: 9px 18px; border-radius: 8px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 600;
          text-decoration: none; transition: all 0.2s ease;
          letter-spacing: 0.3px;
        }
        .social-btn-hero:hover {
          background: rgba(255,255,255,0.07);
          color: white;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .hero-name { font-size: 42px !important; }
          .hero-desc  { font-size: 14px !important; }
          .hero-buttons { flex-direction: column; align-items: center; }
        }
      `}</style>

      <section
        id="hero"
        style={{
          background: "#0a0a0c",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 40px",
          position: "relative",
          overflow: "hidden",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {/* Halos */}
        <div style={{
          position: "absolute", width: "500px", height: "500px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,94,58,0.12) 0%, transparent 70%)",
          top: "-150px", left: "-100px", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", width: "450px", height: "450px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,217,255,0.1) 0%, transparent 70%)",
          bottom: "-120px", right: "-80px", pointerEvents: "none",
        }} />

        {/* Lignes de circuit en fond */}
        <svg
          viewBox="0 0 1000 600"
          preserveAspectRatio="none"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0, opacity: 0.5 }}
        >
          <path d="M -50 500 Q 200 450, 350 500 T 700 480 Q 900 460, 1050 520" stroke="#ff5e3a" strokeWidth="1.5" fill="none" opacity="0.25" strokeDasharray="8 8" />
          <path d="M -50 100 Q 250 60, 450 120 T 850 90 Q 1000 80, 1050 130" stroke="#00d9ff" strokeWidth="1.5" fill="none" opacity="0.2" strokeDasharray="8 8" />
        </svg>

        {/* Contenu */}
        <div
          className="hero-main-content"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            maxWidth: "800px",
            width: "100%",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* Photo avec anneau */}
          <div style={{ position: "relative", width: "160px", height: "160px", marginBottom: "28px" }}>
            <div className="photo-ring"></div>
            <div style={{
              width: "100%", height: "100%", borderRadius: "50%",
              overflow: "hidden", border: "3px solid #161618",
            }}>
              <img
                src="/assets/photo_intra.jpg"
                alt="Lélia Perez"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          </div>

          {/* Tampons passions */}
          <div style={{ display: "flex", gap: "10px", marginBottom: "20px", flexWrap: "wrap", justifyContent: "center" }}>
            <span className="stamp orange">F1 • MotoGP</span>
            <span className="stamp cyan">Runner</span>
            <span className="stamp">Danseuse</span>
            <span className="stamp orange">Voyageuse</span>
          </div>

          {/* Nom */}
          <h1
            className="hero-name"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "60px", fontWeight: "700", color: "#fff",
              lineHeight: 1.05, marginBottom: "10px", letterSpacing: "-1px",
            }}
          >
            Lélia <span>Perez</span>
          </h1>

          {/* Rôle */}
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "18px", fontWeight: "500",
            color: "rgba(255,255,255,0.55)", marginBottom: "18px", letterSpacing: "0.5px",
          }}>
            Développeuse Web — toujours en mouvement
          </p>

          {/* Description */}
          <p
            className="hero-desc"
            style={{ fontSize: "15px", color: "rgba(255,255,255,0.4)", lineHeight: "1.8", maxWidth: "480px", marginBottom: "32px" }}
          >
            Étudiante en informatique à l'ETNA, passionnée par le développement web.
            Entre Formule 1, MotoGP, course à pied et danse, je transforme cette énergie
            en projets concrets et j'explore sans cesse de nouvelles technologies.
          </p>

          {/* Boutons */}
          <div className="hero-buttons" style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "center", marginBottom: "40px" }}>
            <a
              href="#contact"
              className="btn-primary-hero"
            >
              Me contacter
            </a>
            <a
              href="#projects"
              className="btn-outline-hero"
            >
              Voir mes projets
            </a>
            <a
              href="#skills"
              className="btn-outline-hero"
            >
              Compétences
            </a>
          </div>

          {/* Onde sonore */}
          <div style={{ display: "flex", alignItems: "center", gap: "4px", height: "28px", marginBottom: "36px" }}>
            {[10, 22, 14, 26, 12, 20, 8, 24, 14, 18, 10].map((h, i) => (
              <div
                key={i}
                className="soundwave-bar"
                style={{ height: `${h}px`, animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>

          {/* Liens sociaux */}
          <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
            <a
              href="https://github.com/przlelia-art"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn-hero"
            >
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/l%C3%A9lia-perez-73a499309/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn-hero"
            >
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;