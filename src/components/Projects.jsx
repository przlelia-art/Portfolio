import React from "react";

const projects = [
  {
    id: 1,
    title: "User Management API",
    description:
      "API CRUD complète pour la gestion des utilisateurs avec MariaDB. Documentation interactive avec Swagger UI pour faciliter les tests et l'exploitation des endpoints par toute l'équipe.",
    technologies: ["Node.js", "MariaDB", "Swagger"],
    githubLink: "https://github.com/przlelia-art/Doc-protocolaire",
    visual: "api",
  },
  {
    id: 2,
    title: "MyMovieApp",
    description:
      "Application mobile cross-plateforme (iOS et Android) permettant d'explorer un catalogue de films, rechercher des titres et visualiser des détails complets via l'API TMDB.",
    technologies: ["React Native", "Expo", "JavaScript"],
    githubLink: "https://github.com/przlelia-art/EtnaFlix",
    visual: "movie",
  },
  {
    id: 3,
    title: "Spider Bot",
    description:
      "Robot quadrupède à 8 servos MG90S programmé en C avec ESP-IDF sur ESP32-S2. Capable de tenir debout et d'exécuter une séquence de danse synchronisée.",
    technologies: ["C", "ESP-IDF", "ESP32-S2"],
    githubLink: "https://github.com/przlelia-art/Spider_bot",
    visual: "spider",
  },
  {
    id: 4,
    title: "FashionFolio — Frontend",
    description:
      "Application mobile hybride de mode : dressing connecté, marketplace sans commission et réseau social. Construite avec React Native et Expo.",
    technologies: ["React Native", "Expo", "JWT"],
    githubLink: "https://github.com/przlelia-art/FashionFolio",
    visual: "fashion",
  },
  {
    id: 5,
    title: "FashionFolio — Backend",
    description:
      "API REST avec recommandations de tenues par IA. Le LLM Google Gemini génère des suggestions cohérentes depuis le dressing de l'utilisateur.",
    technologies: ["FastAPI", "SQLite", "Google Gemini"],
    githubLink: "https://github.com/przlelia-art/FashionFolio",
    visual: "db",
  },
  {
    id: 6,
    title: "Robot Voiture",
    description:
      "Robot autonome avec évitement d'obstacles (Arduino Uno, L298N, HC-SR04). Progressive speed reduction et bonus servo-scan ajoutés.",
    technologies: ["Arduino", "HC-SR04", "L298N"],
    githubLink: "https://github.com/przlelia-art/Robot_car",
    visual: "car",
  },
];

function ProjectVisual({ type }) {
  if (type === "api") {
    return (
      <div
        style={{
          width: "85%",
          height: "78%",
          background: "#0d0d12",
          borderRadius: "8px",
          border: "1px solid rgba(255,94,58,0.15)",
          padding: "12px",
          fontFamily: "monospace",
          fontSize: "10px",
          lineHeight: "2",
        }}
      >
        <div>
          <span style={{ color: "#5ce1ff", fontWeight: "bold" }}>GET</span>{" "}
          <span style={{ color: "rgba(255,255,255,0.5)" }}>/users</span>
        </div>
        <div>
          <span style={{ color: "#ff8a65", fontWeight: "bold" }}>POST</span>{" "}
          <span style={{ color: "rgba(255,255,255,0.5)" }}>/users</span>
        </div>
        <div>
          <span style={{ color: "#ffbd44", fontWeight: "bold" }}>PUT</span>{" "}
          <span style={{ color: "rgba(255,255,255,0.5)" }}>/users/:id</span>
        </div>
        <div style={{ color: "rgba(255,255,255,0.25)", marginTop: "4px" }}>
          200 OK ✓
        </div>
      </div>
    );
  }

  if (type === "movie") {
    return (
      <div
        style={{
          width: "60px",
          height: "118px",
          background: "#0d0d12",
          borderRadius: "10px",
          border: "2px solid rgba(255,255,255,0.1)",
          padding: "8px 6px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5px",
        }}
      >
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            style={{
              height: "26px",
              borderRadius: "3px",
              background:
                "linear-gradient(160deg, rgba(255,94,58,0.35), rgba(0,217,255,0.25))",
            }}
          />
        ))}
      </div>
    );
  }

  if (type === "spider") {
    return (
      <svg width="100%" height="100%" viewBox="0 0 300 140">
        <circle cx="150" cy="70" r="3" fill="#00d9ff" />
        <circle cx="105" cy="45" r="3" fill="#ff5e3a" />
        <circle cx="195" cy="45" r="3" fill="#ff5e3a" />
        <circle cx="105" cy="95" r="3" fill="#00d9ff" />
        <circle cx="195" cy="95" r="3" fill="#00d9ff" />
        <line x1="150" y1="70" x2="105" y2="45" stroke="rgba(255,94,58,0.4)" strokeWidth="1.5" />
        <line x1="150" y1="70" x2="195" y2="45" stroke="rgba(255,94,58,0.4)" strokeWidth="1.5" />
        <line x1="150" y1="70" x2="105" y2="95" stroke="rgba(0,217,255,0.4)" strokeWidth="1.5" />
        <line x1="150" y1="70" x2="195" y2="95" stroke="rgba(0,217,255,0.4)" strokeWidth="1.5" />
        <rect x="138" y="58" width="24" height="24" rx="4" fill="none" stroke="#5ce1ff" strokeWidth="1.5" />
      </svg>
    );
  }

  if (type === "fashion") {
    return (
      <div
        style={{
          width: "60px",
          height: "118px",
          background: "#0d0d12",
          borderRadius: "10px",
          border: "2px solid rgba(0,217,255,0.15)",
          padding: "8px 6px",
          display: "flex",
          flexDirection: "column",
          gap: "6px",
        }}
      >
        <div style={{ height: "22px", borderRadius: "4px", background: "rgba(255,94,58,0.2)" }} />
        <div style={{ height: "17px", borderRadius: "4px", background: "rgba(0,217,255,0.2)" }} />
        <div style={{ height: "17px", borderRadius: "4px", background: "rgba(0,217,255,0.2)" }} />
        <div style={{ height: "17px", borderRadius: "4px", background: "rgba(255,94,58,0.2)" }} />
      </div>
    );
  }

  if (type === "db") {
    return (
      <svg width="130" height="100" viewBox="0 0 120 100">
        <rect x="10" y="15" width="40" height="22" rx="4" fill="none" stroke="#ff8a65" strokeWidth="1.5" />
        <text x="30" y="29" fontSize="7" fill="#ff8a65" textAnchor="middle" fontFamily="monospace">API</text>
        <rect x="70" y="15" width="40" height="22" rx="4" fill="none" stroke="#5ce1ff" strokeWidth="1.5" />
        <text x="90" y="29" fontSize="6" fill="#5ce1ff" textAnchor="middle" fontFamily="monospace">Gemini</text>
        <rect x="40" y="60" width="40" height="22" rx="4" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
        <text x="60" y="74" fontSize="6" fill="rgba(255,255,255,0.5)" textAnchor="middle" fontFamily="monospace">SQLite</text>
        <line x1="30" y1="37" x2="55" y2="60" stroke="rgba(255,94,58,0.3)" strokeWidth="1.2" />
        <line x1="90" y1="37" x2="65" y2="60" stroke="rgba(0,217,255,0.3)" strokeWidth="1.2" />
      </svg>
    );
  }

  if (type === "car") {
    return (
      <svg width="140" height="100" viewBox="0 0 130 100">
        <rect x="40" y="55" width="50" height="22" rx="4" fill="none" stroke="#5ce1ff" strokeWidth="1.5" />
        <circle cx="48" cy="80" r="5" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
        <circle cx="82" cy="80" r="5" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
        <path d="M 65 55 L 65 30" stroke="#ff8a65" strokeWidth="1.5" strokeDasharray="3 3" />
        <path d="M 50 35 Q 65 20, 80 35" fill="none" stroke="#ff8a65" strokeWidth="1.5" />
        <text x="65" y="18" fontSize="7" fill="#ff8a65" textAnchor="middle" fontFamily="monospace">HC-SR04</text>
      </svg>
    );
  }

  return null;
}

function Projects() {
  const [hoveredCard, setHoveredCard] = React.useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=Inter:wght@300;400;500&display=swap');

        #projects * {
          box-sizing: border-box;
          font-family: 'Inter', sans-serif;
        }

        .project-card-v2 {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .project-card-v2:hover {
          background: rgba(255,255,255,0.05);
          border-color: rgba(255,94,58,0.25);
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }

        .project-visual-wrap {
          height: 140px;
          background: #14141a;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .project-body-v2 { padding: 22px; display: flex; flex-direction: column; flex: 1; }

        .project-title-v2 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 10px;
        }

        .project-desc-v2 {
          font-size: 13px;
          color: rgba(255,255,255,0.45);
          line-height: 1.7;
          flex: 1;
          margin-bottom: 18px;
        }

        .tech-tag-v2 {
          display: inline-block;
          padding: 3px 10px;
          background: rgba(255,94,58,0.1);
          border: 1px solid rgba(255,94,58,0.2);
          color: #ff8a65;
          border-radius: 5px;
          font-size: 11px;
          font-weight: 500;
        }

        .github-btn-v2 {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.6);
          padding: 7px 16px;
          border-radius: 7px;
          font-size: 12px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.2s ease;
          align-self: flex-start;
        }

        .github-btn-v2:hover {
          background: rgba(255,255,255,0.08);
          color: white;
          border-color: rgba(255,255,255,0.2);
        }

        @media (max-width: 900px) {
          .projects-grid-v2 { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .projects-grid-v2 { grid-template-columns: 1fr !important; }
          .projects-title-v2 { font-size: 32px !important; }
        }
      `}</style>

      <section
        id="projects"
        style={{
          background: "#1a1a22",
          minHeight: "100vh",
          padding: "100px 60px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Halo d'ambiance */}
        <div
          style={{
            position: "absolute",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,94,58,0.07) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "1140px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          {/* Titre */}
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "11px",
                color: "rgba(255,255,255,0.2)",
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              Ce que j'ai construit
            </p>
            <h2
              className="projects-title-v2"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "42px",
                fontWeight: "700",
                color: "#ffffff",
                marginBottom: "14px",
                letterSpacing: "-0.5px",
              }}
            >
              Mes <span style={{
                background: "linear-gradient(90deg, #ff5e3a, #00d9ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>Projets</span>
            </h2>
            <p
              style={{
                fontSize: "15px",
                color: "rgba(255,255,255,0.4)",
                maxWidth: "500px",
                margin: "0 auto",
                lineHeight: "1.7",
              }}
            >
              Une sélection de projets académiques qui reflètent mes compétences et ma curiosité.
            </p>
          </div>

          {/* Grille */}
          <div
            className="projects-grid-v2"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "22px",
            }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="project-card-v2"
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="project-visual-wrap">
                  <ProjectVisual type={project.visual} />
                </div>

                <div className="project-body-v2">
                  <h3 className="project-title-v2">{project.title}</h3>
                  <p className="project-desc-v2">{project.description}</p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "18px" }}>
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag-v2">{tech}</span>
                    ))}
                  </div>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-btn-v2"
                  >
                    <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Voir sur GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;