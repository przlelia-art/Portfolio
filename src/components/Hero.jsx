import React, { useState } from "react";

const techStack = [
  { name: "React",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Python",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Docker",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Arduino",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" },
  { name: "Go",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
  { name: "Git",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Figma",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
];

const tags = ["React", "Python", "JavaScript", "Docker", "Systèmes embarqués", "Data F1"];

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
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(28px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(8px); }
        }

        .hero-content {
          animation: fadeInUp 0.85s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .hero-photo-side {
          animation: fadeInRight 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both;
        }

        .hero-tag {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.6);
          padding: 4px 12px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 500;
          display: inline-block;
        }

        .tech-icon-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
          cursor: default;
          transition: transform 0.2s ease;
        }

        .tech-icon-item:hover {
          transform: translateY(-4px);
        }

        .tech-icon-item img {
          width: 30px;
          height: 30px;
          object-fit: contain;
          transition: filter 0.2s ease;
          filter: grayscale(30%) brightness(0.85);
        }

        .tech-icon-item:hover img {
          filter: grayscale(0%) brightness(1);
        }

        .tech-icon-item span {
          font-size: 10px;
          color: rgba(255,255,255,0.3);
          font-weight: 500;
          letter-spacing: 0.3px;
          transition: color 0.2s;
        }

        .tech-icon-item:hover span {
          color: rgba(255,255,255,0.6);
        }

        .chevron-wrap {
          position: absolute;
          bottom: 32px;
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
          width: 22px; height: 22px;
          border-right: 2px solid rgba(139,92,246,0.6);
          border-bottom: 2px solid rgba(139,92,246,0.6);
          transform: rotate(45deg);
        }

        .chevron2 {
          width: 22px; height: 22px;
          border-right: 2px solid rgba(139,92,246,0.25);
          border-bottom: 2px solid rgba(139,92,246,0.25);
          transform: rotate(45deg);
          margin-top: -14px;
        }

        @media (max-width: 768px) {
          .hero-inner {
            flex-direction: column-reverse !important;
            text-align: center;
          }
          .hero-photo-wrap {
            width: 180px !important;
            height: 180px !important;
          }
          .hero-name {
            font-size: 36px !important;
          }
          .hero-buttons, .hero-socials, .hero-tags, .tech-icons-row {
            justify-content: center !important;
          }
        }
      `}</style>

      <section
        id="hero"
        style={{
          background: "#0d0d0f",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 60px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Halos d'ambiance */}
        <div style={{
          position: "absolute", width: "500px", height: "500px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,92,246,0.13) 0%, transparent 70%)",
          top: "-150px", right: "50px", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", width: "350px", height: "350px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
          bottom: "-50px", left: "-50px", pointerEvents: "none",
        }} />

        {/* Contenu principal */}
        <div
          className="hero-inner"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "60px",
            width: "100%",
            maxWidth: "900px",
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Colonne gauche */}
          <div className="hero-content" style={{ flex: 1 }}>
            <h1
              className="hero-name"
              style={{ fontSize: "52px", fontWeight: "700", color: "#ffffff", lineHeight: 1.1, marginBottom: "8px" }}
            >
              Lélia Perez
            </h1>

            <p style={{ fontSize: "18px", fontWeight: "400", color: "#8b5cf6", marginBottom: "20px", letterSpacing: "0.3px" }}>
              Développeuse Web &amp; Data
            </p>

            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: "1.75", maxWidth: "420px", marginBottom: "24px" }}>
              Étudiante en informatique à l'ETNA, passionnée par le développement web,
              la data analyse et la Formule 1. Je transforme des idées en projets concrets
              et explore sans cesse de nouvelles technologies.
            </p>

            {/* Tags */}
            <div className="hero-tags" style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "28px" }}>
              {tags.map((tag) => (
                <span key={tag} className="hero-tag">{tag}</span>
              ))}
            </div>

            {/* Boutons CTA */}
            <div className="hero-buttons" style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "28px" }}>
              <a
                href="#contact"
                style={{
                  background: btn1Hover ? "#7c3aed" : "#8b5cf6",
                  color: "white", border: "none", padding: "10px 24px",
                  borderRadius: "8px", fontSize: "13px", fontWeight: "600",
                  cursor: "pointer", textDecoration: "none", display: "inline-block",
                  transition: "all 0.2s ease",
                  transform: btn1Hover ? "translateY(-1px)" : "translateY(0)",
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
                  border: `1px solid ${btn2Hover ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.15)"}`,
                  padding: "10px 24px", borderRadius: "8px", fontSize: "13px", fontWeight: "500",
                  cursor: "pointer", textDecoration: "none", display: "inline-block",
                  transition: "all 0.2s ease",
                  transform: btn2Hover ? "translateY(-1px)" : "translateY(0)",
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
                  color: "white", border: "none", padding: "10px 24px",
                  borderRadius: "8px", fontSize: "13px", fontWeight: "600",
                  cursor: "pointer", textDecoration: "none", display: "inline-block",
                  transition: "all 0.2s ease",
                  transform: btn3Hover ? "translateY(-1px)" : "translateY(0)",
                }}
                onMouseEnter={() => setBtn3Hover(true)}
                onMouseLeave={() => setBtn3Hover(false)}
              >
                Mes compétences
              </a>
            </div>

            {/* Tech icons */}
            <div style={{ marginBottom: "28px" }}>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.25)", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "12px" }}>
                Stack &amp; outils
              </p>
              <div className="tech-icons-row" style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="tech-icon-item"
                    onMouseEnter={() => setHoveredTech(tech.name)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <img src={tech.icon} alt={tech.name} />
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Liens sociaux */}
            <div className="hero-socials" style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <a
                href="https://github.com/przlelia-art"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", gap: "6px",
                  background: githubHover ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.05)",
                  border: `1px solid ${githubHover ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.1)"}`,
                  color: githubHover ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.5)",
                  padding: "7px 14px", borderRadius: "8px", fontSize: "12px", fontWeight: "500",
                  textDecoration: "none", transition: "all 0.2s ease",
                  transform: githubHover ? "translateY(-1px)" : "translateY(0)",
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
                  color: linkedinHover ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.5)",
                  padding: "7px 14px", borderRadius: "8px", fontSize: "12px", fontWeight: "500",
                  textDecoration: "none", transition: "all 0.2s ease",
                  transform: linkedinHover ? "translateY(-1px)" : "translateY(0)",
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

          {/* Colonne droite — photo */}
          <div className="hero-photo-side" style={{ flexShrink: 0 }}>
            <div
              className="hero-photo-wrap"
              style={{
                width: "280px", height: "280px", borderRadius: "50%",
                overflow: "hidden", border: "3px solid rgba(139,92,246,0.4)",
              }}
            >
              <img
                src="/assets/photo_intra.jpg"
                alt="Lélia Perez"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
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