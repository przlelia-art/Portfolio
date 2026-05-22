import React from "react";

const projects = [
  {
    id: 1,
    title: "User Management API",
    description: "API CRUD complète pour la gestion des utilisateurs avec MariaDB. Documentation interactive avec Swagger UI pour faciliter les tests et l'exploitation des endpoints par toute l'équipe.",
    technologies: ["Node.js", "MariaDB", "Swagger"],
    githubLink: "https://github.com/przlelia-art/Doc-protocolaire",
  },
  {
    id: 2,
    title: "MyMovieApp",
    description: "Application mobile cross-plateforme (iOS et Android) permettant d'explorer un catalogue de films, rechercher des titres et visualiser des détails complets via l'API TMDB. Interface responsive avec navigation multi-écrans fluide.",
    technologies: ["React Native", "Expo", "JavaScript"],
    githubLink: "https://github.com/przlelia-art/EtnaFlix",
  },
  {
    id: 3,
    title: "F1 Data Analysis",
    description: "Projet personnel par passion pour la Formule 1. Analyse de données de Verstappen et Leclerc sur le GP de Bahreïn 2024 : temps au tour, stratégies pneus et télémétrie en qualifications.",
    technologies: ["Python", "FastF1", "Pandas", "Matplotlib", "Seaborn"],
    githubLink: "https://github.com/przlelia-art/f1-data-analysis",
  },
  {
    id: 4,
    title: "Spider Bot",
    description: "Robot quadrupède à 8 servos MG90S programmé en C avec ESP-IDF sur ESP32-S2. Capable de tenir debout et d'exécuter une séquence de danse synchronisée. Écran OLED SSD1306 avec yeux animés pour lui donner une personnalité.",
    technologies: ["C", "ESP-IDF", "ESP32-S2", "LEDC PWM", "I2C", "OLED"],
    githubLink: "https://github.com/przlelia-art",
  },
  {
    id: 5,
    title: "FashionFolio — Frontend",
    description: "Application mobile hybride de mode : dressing connecté, marketplace sans commission et réseau social. Construite avec React Native et Expo, entièrement repensée depuis un template web. Navigation imbriquée, upload photo, messagerie privée.",
    technologies: ["React Native", "Expo", "FastAPI", "React Navigation", "JWT"],
    githubLink: "https://github.com/przlelia-art",
  },
  {
    id: 6,
    title: "FashionFolio — Backend",
    description: "API REST du backend FashionFolio avec recommandations de tenues par IA. Le LLM Google Gemini génère des suggestions cohérentes depuis le dressing de l'utilisateur via une interface conversationnelle avec mémoire.",
    technologies: ["Python", "FastAPI", "SQLite", "Google Gemini", "JWT", "Pydantic"],
    githubLink: "https://github.com/przlelia-art",
  },
];

function Projects() {
  const [hoveredCard, setHoveredCard] = React.useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        #projects * {
          box-sizing: border-box;
          font-family: 'Inter', sans-serif;
        }

        .project-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          padding: 28px;
          transition: all 0.3s ease;
          cursor: default;
          display: flex;
          flex-direction: column;
        }

        .project-card:hover {
          background: rgba(255,255,255,0.05);
          border-color: rgba(139,92,246,0.3);
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }

        .project-title {
          font-size: 18px;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 10px;
          transition: color 0.2s;
        }

        .project-card:hover .project-title {
          color: #a78bfa;
        }

        .project-desc {
          font-size: 14px;
          color: rgba(255,255,255,0.45);
          line-height: 1.75;
          flex: 1;
          margin-bottom: 20px;
        }

        .tech-tag {
          display: inline-block;
          padding: 3px 10px;
          background: rgba(139,92,246,0.12);
          border: 1px solid rgba(139,92,246,0.25);
          color: #c4b5fd;
          border-radius: 5px;
          font-size: 11px;
          font-weight: 500;
        }

        .github-btn {
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
        }

        .github-btn:hover {
          background: rgba(255,255,255,0.08);
          color: white;
          border-color: rgba(255,255,255,0.2);
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
          .projects-title {
            font-size: 32px !important;
          }
        }
      `}</style>

      <section
        id="projects"
        style={{
          background: "#0d0d0f",
          minHeight: "100vh",
          padding: "100px 60px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Halo d'ambiance */}
        <div style={{
          position: "absolute", width: "500px", height: "500px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)",
          top: "50%", left: "50%", transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>

          {/* Titre */}
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.2)", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "12px" }}>
              Ce que j'ai construit
            </p>
            <h2
              className="projects-title"
              style={{ fontSize: "42px", fontWeight: "700", color: "#ffffff", marginBottom: "14px", letterSpacing: "-0.5px" }}
            >
              Mes Projets
            </h2>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.4)", maxWidth: "500px", margin: "0 auto", lineHeight: "1.7" }}>
              Une sélection de projets académiques et personnels qui reflètent mes compétences et ma curiosité.
            </p>
          </div>

          {/* Grille */}
          <div
            className="projects-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
            }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="project-card"
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-btn"
                  >
                    <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
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