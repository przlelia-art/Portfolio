import React from "react";

const personalProjects = [
    {
        id: 1,
        title: "F1 Data Analysis",
        description:
            "Projet personnel réalisé par passion pour la Formule 1. Analyse de données de Verstappen et Leclerc sur le GP de Bahreïn 2024 : temps au tour, stratégies pneus et télémétrie en qualifications.",
        technologies: ["Python", "FastF1", "Pandas", "Matplotlib", "Seaborn"],
        githubLink: "https://github.com/przlelia-art/f1-data-analysis",
        visual: "f1",
    },
    {
        id: 2,
        title: "GitHub Profile README",
        description:
            "Page de profil GitHub stylée façon terminal sombre, avec mise en avant des projets, de la stack technique et des passions.",
        technologies: ["Markdown", "Design"],
        githubLink: "https://github.com/przlelia-art",
        visual: "github",
    },
    {
        id: 3,
        title: "Apprentissage COBOL",
        description:
            "Apprentissage du langage COBOL par curiosité personnelle. Exercices couvrant les bases du langage, les boucles, les calculs, les tables et la gestion de fichiers.",
        technologies: ["COBOL"],
        githubLink: "https://github.com/przlelia-art/cobol-learning",
        visual: "cobol",
    },
    {
        id: 4,
        title: "Scripts d'apprentissage C",
        description:
            "Exercices écrits de zéro en C sous WSL avec gcc, pour comprendre les bases du langage : pointeurs, allocation mémoire, structures, fichiers.",
        technologies: ["C", "WSL", "gcc"],
        githubLink: "https://github.com/przlelia-art/learning-c",
        visual: "c",
    },
];

function PersonalVisual({ type }) {
    if (type === "f1") {
        return (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    gap: "8px",
                    padding: "30px 30px 20px",
                    background: "radial-gradient(circle at 70% 30%, rgba(255,94,58,0.1), transparent 60%)",
                }}
            >
                {[40, 70, 55, 90, 65, 80, 50, 75].map((h, i) => (
                    <div
                        key={i}
                        style={{
                            width: "14px",
                            height: `${h}%`,
                            borderRadius: "3px 3px 0 0",
                            background: "linear-gradient(180deg, #ff8a65, #ff5e3a)",
                        }}
                    />
                ))}
            </div>
        );
    }

    if (type === "github") {
        return (
            <div
                style={{
                    width: "85%",
                    height: "78%",
                    background: "#0d0d12",
                    borderRadius: "8px",
                    border: "1px solid rgba(255,255,255,0.08)",
                    overflow: "hidden",
                }}
            >
                <div
                    style={{
                        height: "24px",
                        background: "rgba(255,255,255,0.04)",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        padding: "0 10px",
                    }}
                >
                    <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#ff5e3a" }} />
                    <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#ffbd44" }} />
                    <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#00d9ff" }} />
                </div>
                <div
                    style={{
                        padding: "12px",
                        fontFamily: "monospace",
                        fontSize: "10px",
                        color: "#5ce1ff",
                        lineHeight: "1.8",
                    }}
                >
                    <div style={{ opacity: 0.7, color: "#ff8a65" }}>$ whoami</div>
                    <div style={{ opacity: 0.7 }}>lelia_perez</div>
                    <div style={{ opacity: 0.7, color: "#ff8a65" }}>$ status</div>
                    <div style={{ opacity: 0.7 }}>building... ✓</div>
                </div>
            </div>
        );
    }

    if (type === "cobol") {
        return (
            <div
                style={{
                    width: "85%",
                    height: "78%",
                    background: "#0d0d12",
                    borderRadius: "8px",
                    border: "1px solid rgba(255,94,58,0.15)",
                    padding: "14px",
                    fontFamily: "monospace",
                    fontSize: "9px",
                    lineHeight: "1.9",
                }}
            >
                <div style={{ color: "rgba(255,255,255,0.3)" }}>
                    <span style={{ color: "#5ce1ff" }}>000100</span>{" "}
                    <span style={{ color: "#ff8a65", fontWeight: "bold" }}>IDENTIFICATION DIVISION.</span>
                </div>
                <div style={{ color: "rgba(255,255,255,0.3)" }}>
                    <span style={{ color: "#5ce1ff" }}>000200</span>{" "}
                    <span style={{ color: "#ff8a65", fontWeight: "bold" }}>PROGRAM-ID.</span> LEARNING.
                </div>
                <div style={{ color: "rgba(255,255,255,0.3)" }}>
                    <span style={{ color: "#5ce1ff" }}>000300</span>{" "}
                    <span style={{ color: "#ff8a65", fontWeight: "bold" }}>PROCEDURE DIVISION.</span>
                </div>
                <div style={{ color: "rgba(255,255,255,0.3)" }}>
                    <span style={{ color: "#5ce1ff" }}>000400</span> DISPLAY "HELLO WORLD".
                </div>
            </div>
        );
    }

    if (type === "c") {
        return (
            <div
                style={{
                    width: "85%",
                    height: "78%",
                    background: "#0d0d12",
                    borderRadius: "8px",
                    border: "1px solid rgba(0,217,255,0.15)",
                    overflow: "hidden",
                }}
            >
                <div style={{ padding: "14px", fontFamily: "monospace", fontSize: "10px", lineHeight: "1.85" }}>
                    <div>
                        <span style={{ color: "#ff8a65" }}>#include</span>{" "}
                        <span style={{ color: "#5ce1ff" }}>&lt;stdio.h&gt;</span>
                    </div>
                    <div style={{ color: "rgba(255,255,255,0.55)" }}>
                        <span style={{ color: "#5ce1ff" }}>int</span> main() {"{"}
                    </div>
                    <div style={{ color: "rgba(255,255,255,0.55)" }}>
                        &nbsp;&nbsp;printf(<span style={{ color: "#ff8a65" }}>"Hello"</span>);
                    </div>
                    <div style={{ color: "rgba(255,255,255,0.55)" }}>&nbsp;&nbsp;return 0;</div>
                    <div style={{ color: "rgba(255,255,255,0.55)" }}>{"}"}</div>
                </div>
            </div>
        );
    }

    return null;
}

function PersonalProjects() {
    const [hoveredCard, setHoveredCard] = React.useState(null);

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=Inter:wght@300;400;500&display=swap');

                #personal-projects * {
                    box-sizing: border-box;
                    font-family: 'Inter', sans-serif;
                }

                .pp-card {
                    background: rgba(255,255,255,0.03);
                    border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 16px;
                    overflow: hidden;
                    transition: all 0.3s ease;
                    display: flex;
                    flex-direction: column;
                }
                .pp-card:hover {
                    background: rgba(255,255,255,0.05);
                    border-color: rgba(255,94,58,0.25);
                    transform: translateY(-6px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
                }

                .pp-visual {
                    height: 150px;
                    background: #14141a;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }

                .pp-body { padding: 22px; display: flex; flex-direction: column; flex: 1; }

                .pp-title {
                    font-family: 'Space Grotesk', sans-serif;
                    font-size: 16px; font-weight: 600; color: #ffffff; margin-bottom: 10px;
                }
                .pp-desc {
                    font-size: 13px; color: rgba(255,255,255,0.45);
                    line-height: 1.7; flex: 1; margin-bottom: 16px;
                }

                .pp-tech {
                    display: inline-block; padding: 3px 10px;
                    background: rgba(255,94,58,0.1); border: 1px solid rgba(255,94,58,0.2);
                    color: #ff8a65; border-radius: 5px; font-size: 11px; font-weight: 500;
                }

                .pp-github {
                    display: inline-flex; align-items: center; gap: 6px;
                    background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
                    color: rgba(255,255,255,0.6); padding: 7px 16px; border-radius: 7px;
                    font-size: 12px; font-weight: 500; text-decoration: none;
                    transition: all 0.2s ease; align-self: flex-start;
                }
                .pp-github:hover {
                    background: rgba(255,255,255,0.08); color: white;
                    border-color: rgba(255,255,255,0.2);
                }

                /* Learning cards */
                .learning-card {
                    background: rgba(255,255,255,0.02);
                    border: 1px solid rgba(255,255,255,0.06);
                    border-radius: 12px; padding: 20px;
                    transition: all 0.3s ease;
                }
                .learning-card:hover {
                    border-color: rgba(0,217,255,0.2);
                    transform: translateY(-3px);
                }

                .learning-status {
                    display: inline-flex; align-items: center; gap: 6px;
                    font-family: 'Space Grotesk', sans-serif;
                    font-size: 10px; font-weight: 700; letter-spacing: 1px;
                    text-transform: uppercase; color: #5ce1ff; margin-bottom: 10px;
                }
                .learning-status.envie { color: rgba(255,255,255,0.35); }

                .status-dot {
                    width: 6px; height: 6px; border-radius: 50%; background: #00d9ff;
                    animation: statusPulse 2s infinite;
                }
                .status-dot.envie { background: rgba(255,255,255,0.3); animation: none; }

                @keyframes statusPulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }

                .learning-title {
                    font-family: 'Space Grotesk', sans-serif;
                    font-size: 15px; font-weight: 600; color: #fff; margin-bottom: 6px;
                }
                .learning-note {
                    font-size: 12px; color: rgba(255,255,255,0.4); line-height: 1.6;
                }

                @media (max-width: 900px) {
                    .pp-grid { grid-template-columns: repeat(2, 1fr) !important; }
                    .learning-grid { grid-template-columns: repeat(2, 1fr) !important; }
                }
                @media (max-width: 600px) {
                    .pp-grid { grid-template-columns: 1fr !important; }
                    .learning-grid { grid-template-columns: 1fr !important; }
                }
            `}</style>

            <section
                id="personal-projects"
                style={{
                    background: "#1a1a22",
                    minHeight: "100vh",
                    padding: "100px 60px",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Halos */}
                <div
                    style={{
                        position: "absolute",
                        width: "500px",
                        height: "500px",
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(255,94,58,0.07) 0%, transparent 70%)",
                        top: "-100px",
                        left: "-100px",
                        pointerEvents: "none",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        width: "500px",
                        height: "500px",
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(0,217,255,0.07) 0%, transparent 70%)",
                        bottom: "-100px",
                        right: "-100px",
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
                            Au-delà des cours
                        </p>
                        <h2
                            style={{
                                fontFamily: "'Space Grotesk', sans-serif",
                                fontSize: "42px",
                                fontWeight: "700",
                                color: "#ffffff",
                                marginBottom: "14px",
                                letterSpacing: "-0.5px",
                            }}
                        >
                            Projets{" "}
                            <span
                                style={{
                                    background: "linear-gradient(90deg, #ff5e3a, #00d9ff)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                perso
                            </span>
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
                            Ce que je construis par curiosité, en dehors du cursus.
                        </p>
                    </div>

                    {/* Grille projets */}
                    <div
                        className="pp-grid"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(2, 1fr)",
                            gap: "22px",
                            marginBottom: "80px",
                        }}
                    >
                        {personalProjects.map((project) => (
                            <div
                                key={project.id}
                                className="pp-card"
                                onMouseEnter={() => setHoveredCard(project.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <div className="pp-visual">
                                    <PersonalVisual type={project.visual} />
                                </div>
                                <div className="pp-body">
                                    <h3 className="pp-title">{project.title}</h3>
                                    <p className="pp-desc">{project.description}</p>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexWrap: "wrap",
                                            gap: "6px",
                                            marginBottom: "16px",
                                        }}
                                    >
                                        {project.technologies.map((tech, i) => (
                                            <span key={i} className="pp-tech">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="pp-github"
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

export default PersonalProjects;