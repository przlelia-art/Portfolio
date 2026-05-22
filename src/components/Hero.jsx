import React, { useState } from "react";

const techStack = [
  { name: "React",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Python",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Docker",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Arduino",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" },
  { name: "Git",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Figma",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
];

function Hero() {
  const [btn1Hover, setBtn1Hover] = useState(false);
  const [btn2Hover, setBtn2Hover] = useState(false);
  const [btn3Hover, setBtn3Hover] = useState(false);
  const [githubHover, setGithubHover] = useState(false);
  const [linkedinHover, setLinkedinHover] = useState(false);
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        #hero * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: 'Inter', sans-serif;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(8px); }
        }

        .hero-main-content {
          animation: fadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .tech-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          transition: transform 0.2s ease;
          cursor: default;
        }
        .tech-item:hover { transform: translateY(-4px); }
        .tech-item img {
          width: 32px; height: 32px; object-fit: contain;
          filter: grayscale(20%) brightness(0.85);
          transition: filter 0.2s ease;
        }
        .tech-item:hover img { filter: grayscale(0%) brightness(1); }
        .tech-item span {
          font-size: 11px;
          color: rgba(255,255,255,0.3);
          font-weight: 500;
          transition: color 0.2s ease;
        }
        .tech-item:hover span { color: rgba(255,255,255,0.65); }

        .chevron-wrap {
          position: absolute;
          bottom: 28px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          z-index: 1;
          cursor: pointer;
          animation: bounce 2.5s ease-in-out infinite;
        }
        .chevron {
          width: 20px; height: 20px;
          border-right: 2px solid rgba(139,92,246,0.55);
          border-bottom: 2px solid rgba(139,92,246,0.55);
          transform: rotate(45deg);
        }
        .chevron2 {
          width: 20px; height: 20px;
          border-right: 2px solid rgba(139,92,246,0.2);
          border-bottom: 2px solid rgba(139,92,246,0.2);
          transform: rotate(45deg);
          margin-top: -13px;
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
          background: "#0d0d0f",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "100px 40px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Halos d'ambiance */}
        <div style={{
          position: "absolute", width: "600px", height: "600px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 65%)",
          top: "-200px", left: "50%", transform: "translateX(-50%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", width: "300px", height: "300px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)",
          bottom: 0, left: "-80px", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", width: "300px", height: "300px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)",
          bottom: 0, right: "-80px", pointerEvents: "none",
        }} />

        {/* Contenu centré */}
        <div
          className="hero-main-content"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            maxWidth: "750px",
            width: "100%",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Photo */}
          <div style={{
            width: "150px", height: "150px", borderRadius: "50%",
            overflow: "hidden", border: "3px solid rgba(139,92,246,0.5)",
            marginBottom: "24px",
            boxShadow: "0 0 40px rgba(139,92,246,0.15)",
          }}>
            <img
              src="/assets/photo_intra.jpg"
              alt="Lélia Perez"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>

          {/* Nom */}
          <h1
            className="hero-name"
            style={{ fontSize: "64px", fontWeight: "700", color: "#fff", lineHeight: 1.05, marginBottom: "10px", letterSpacing: "-1px" }}
          >
            Lélia Perez
          </h1>

          {/* Rôle */}
          <p style={{ fontSize: "20px", color: "#8b5cf6", marginBottom: "18px", letterSpacing: "0.3px" }}>
            Développeuse Web &amp; Data
          </p>

          {/* Description */}
          <p
            className="hero-desc"
            style={{ fontSize: "15px", color: "rgba(255,255,255,0.45)", lineHeight: "1.8", maxWidth: "520px", marginBottom: "32px" }}
          >
            Étudiante en informatique à l'ETNA, passionnée par le développement web,
            la data analyse et la Formule 1. Je transforme des idées en projets concrets
            et explore sans cesse de nouvelles technologies.
          </p>

          {/* Boutons */}
          <div
            className="hero-buttons"
            style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center", marginBottom: "36px" }}
          >
            <a
              href="#contact"
              style={{
                background: btn1Hover ? "#7c3aed" : "#8b5cf6",
                color: "white", border: "none", padding: "11px 28px",
                borderRadius: "8px", fontSize: "14px", fontWeight: "600",
                cursor: "pointer", textDecoration: "none", display: "inline-block",
                transition: "all 0.2s ease",
                transform: btn1Hover ? "translateY(-2px)" : "translateY(0)",
              }}
              onMouseEnter={() => setBtn1Hover(true)}
              onMouseLeave={() => setBtn1Hover(false)}
            >
              Me contacter
            </a>

            <a
              href="#projects"
              style={{
                background: "transparent",
                color: btn2Hover ? "white" : "rgba(255,255,255,0.7)",
                border: `1px solid ${btn2Hover ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.15)"}`,
                padding: "11px 28px", borderRadius: "8px", fontSize: "14px", fontWeight: "500",
                cursor: "pointer", textDecoration: "none", display: "inline-block",
                transition: "all 0.2s ease",
                transform: btn2Hover ? "translateY(-2px)" : "translateY(0)",
              }}
              onMouseEnter={() => setBtn2Hover(true)}
              onMouseLeave={() => setBtn2Hover(false)}
            >
              Voir mes projets
            </a>

            <a
              href="#skills"
              style={{
                background: btn3Hover ? "#7c3aed" : "#8b5cf6",
                color: "white", border: "none", padding: "11px 28px",
                borderRadius: "8px", fontSize: "14px", fontWeight: "600",
                cursor: "pointer", textDecoration: "none", display: "inline-block",
                transition: "all 0.2s ease",
                transform: btn3Hover ? "translateY(-2px)" : "translateY(0)",
              }}
              onMouseEnter={() => setBtn3Hover(true)}
              onMouseLeave={() => setBtn3Hover(false)}
            >
              Mes compétences
            </a>
          </div>

          {/* Séparateur */}
          <div style={{ width: "100%", height: "1px", background: "rgba(255,255,255,0.06)", marginBottom: "32px" }} />

          {/* Tech icons */}
          <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.2)", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px" }}>
            Stack &amp; outils
          </p>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center", marginBottom: "32px" }}>
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="tech-item"
                onMouseEnter={() => setHoveredTech(tech.name)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                <img src={tech.icon} alt={tech.name} />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>

          {/* Liens sociaux */}
          <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
            <a
              href="https://github.com/przlelia-art"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", gap: "6px",
                background: githubHover ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.05)",
                border: `1px solid ${githubHover ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.1)"}`,
                color: githubHover ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.5)",
                padding: "8px 16px", borderRadius: "8px", fontSize: "12px", fontWeight: "500",
                textDecoration: "none", transition: "all 0.2s ease",
                transform: githubHover ? "translateY(-2px)" : "translateY(0)",
              }}
              onMouseEnter={() => setGithubHover(true)}
              onMouseLeave={() => setGithubHover(false)}
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
              style={{
                display: "flex", alignItems: "center", gap: "6px",
                background: linkedinHover ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.05)",
                border: `1px solid ${linkedinHover ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.1)"}`,
                color: linkedinHover ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.5)",
                padding: "8px 16px", borderRadius: "8px", fontSize: "12px", fontWeight: "500",
                textDecoration: "none", transition: "all 0.2s ease",
                transform: linkedinHover ? "translateY(-2px)" : "translateY(0)",
              }}
              onMouseEnter={() => setLinkedinHover(true)}
              onMouseLeave={() => setLinkedinHover(false)}
            >
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        {/* Chevron scroll */}
        <div className="chevron-wrap">
          <div className="chevron"></div>
          <div className="chevron2"></div>
        </div>
      </section>
    </>
  );
}

export default Hero;