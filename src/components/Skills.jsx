import React from "react";

const skillsData = [
  {
    id: 1,
    category: "Langages",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    skills: ["JavaScript", "Python", "C/C++", "HTML/CSS", "Go", "Cobol", "Bash"],
  },
  {
    id: 2,
    category: "Frameworks & Librairies",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    skills: ["React", "React Native", "Node.js", "FastAPI", "Expo", "Pandas", "Matplotlib", "Seaborn", "FastF1"],
  },
  {
    id: 3,
    category: "Bases de données",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    skills: ["MariaDB", "MySQL", "SQLite", "SQL", "Modélisation BDD"],
  },
  {
    id: 4,
    category: "Outils & DevOps",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    skills: ["Git", "GitHub", "Docker", "Swagger", "VSCode", "Figma"],
  },
  {
    id: 5,
    category: "Web & API",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    skills: ["API REST", "CRUD", "JWT", "Pydantic", "Google Gemini"],
  },
  {
    id: 6,
    category: "Systèmes embarqués",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
    skills: ["ESP32-S2", "ESP-IDF", "Arduino", "LEDC PWM", "I2C", "OLED SSD1306"],
  },
];

function Skills() {
  const [hoveredCard, setHoveredCard] = React.useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=Inter:wght@300;400;500&display=swap');

        #skills * {
          box-sizing: border-box;
          font-family: 'Inter', sans-serif;
        }

        .skill-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          padding: 32px;
          transition: all 0.3s ease;
        }

        .skill-card:hover {
          background: rgba(255,255,255,0.05);
          border-color: rgba(255,94,58,0.3);
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }

        .skill-badge {
          display: inline-block;
          padding: 6px 14px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.65);
          border-radius: 6px;
          font-size: 13px;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .skill-card:hover .skill-badge {
          border-color: rgba(255,94,58,0.25);
          background: rgba(255,94,58,0.08);
          color: #ff8a65;
        }

        @media (max-width: 900px) {
          .skills-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .skills-grid { grid-template-columns: 1fr !important; }
          .skills-title { font-size: 32px !important; }
        }
      `}</style>

      <section
        id="skills"
        style={{
          background: "#1a1a22",
          minHeight: "100vh",
          padding: "100px 60px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Halos */}
        <div style={{
          position: "absolute", width: "500px", height: "500px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,94,58,0.08) 0%, transparent 70%)",
          top: "-100px", left: "-100px", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", width: "500px", height: "500px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,217,255,0.08) 0%, transparent 70%)",
          bottom: "-100px", right: "-100px", pointerEvents: "none",
        }} />

        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>

          {/* Titre */}
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <p style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "11px", color: "rgba(255,255,255,0.2)",
              letterSpacing: "2px", textTransform: "uppercase", marginBottom: "12px",
            }}>
              Mon arsenal
            </p>
            <h2
              className="skills-title"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "42px", fontWeight: "700", marginBottom: "14px", letterSpacing: "-0.5px",
              }}
            >
              <span style={{ color: "#ffffff" }}>Mes </span>
              <span style={{
                background: "linear-gradient(90deg, #ff5e3a, #00d9ff)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Compétences
              </span>
            </h2>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "15px", color: "rgba(255,255,255,0.4)",
              maxWidth: "460px", margin: "0 auto", lineHeight: "1.7",
            }}>
              Technologies et outils que j'utilise au quotidien dans mes projets.
            </p>
          </div>

          {/* Grille */}
          <div
            className="skills-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
            }}
          >
            {skillsData.map((cat) => (
              <div
                key={cat.id}
                className="skill-card"
                onMouseEnter={() => setHoveredCard(cat.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* En-tête carte */}
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                  <img
                    src={cat.icon}
                    alt={cat.category}
                    style={{ width: "26px", height: "26px", objectFit: "contain", opacity: 0.8 }}
                  />
                  <h3 style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "17px", fontWeight: "600", color: "rgba(255,255,255,0.9)",
                  }}>
                    {cat.category}
                  </h3>
                </div>

                {/* Badges */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {cat.skills.map((skill, i) => (
                    <span key={i} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;