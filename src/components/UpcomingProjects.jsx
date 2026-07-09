import React from "react";

function DanseVisual() {
    return (
        <svg width="120" height="150" viewBox="0 0 120 150">
            <circle cx="60" cy="18" r="10" fill="none" stroke="#00d9ff" strokeWidth="2" opacity="0.8" />
            <line x1="60" y1="28" x2="60" y2="72" stroke="#00d9ff" strokeWidth="2" opacity="0.8" />
            <line x1="60" y1="40" x2="28" y2="18" stroke="#00d9ff" strokeWidth="2" opacity="0.8" />
            <line x1="60" y1="40" x2="96" y2="52" stroke="#00d9ff" strokeWidth="2" opacity="0.8" />
            <line x1="60" y1="72" x2="30" y2="110" stroke="#00d9ff" strokeWidth="2" opacity="0.8" />
            <line x1="60" y1="72" x2="96" y2="58" stroke="#5ce1ff" strokeWidth="2" opacity="0.7" />
            <line x1="30" y1="110" x2="20" y2="118" stroke="#00d9ff" strokeWidth="1.5" opacity="0.6" />
            <circle cx="96" cy="58" r="3" fill="#ff5e3a" opacity="0.7" />
            <circle cx="15" cy="30" r="1.5" fill="#5ce1ff" opacity="0.4" />
            <circle cx="105" cy="25" r="1.5" fill="#ff5e3a" opacity="0.4" />
            <circle cx="110" cy="80" r="1.5" fill="#5ce1ff" opacity="0.4" />
            <circle cx="10" cy="90" r="1.5" fill="#ff5e3a" opacity="0.3" />
        </svg>
    );
}

function RunningVisual() {
    return (
        <svg width="85%" height="70%" viewBox="0 0 240 100">
            <line x1="0" y1="50" x2="240" y2="50" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            <line x1="0" y1="25" x2="240" y2="25" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            <line x1="0" y1="75" x2="240" y2="75" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            <polyline
                points="0,55 30,55 40,55 50,20 60,80 70,55 100,55 110,55 120,15 130,85 140,55 170,55 180,55 190,20 200,80 210,55 240,55"
                fill="none"
                stroke="#ff5e3a"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.8"
            />
            <polyline
                points="0,55 30,55 40,55 50,20 60,80 70,55 100,55 110,55 120,15 130,85 140,55 170,55 180,55 190,20 200,80 210,55 240,55"
                fill="none"
                stroke="#ff5e3a"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.1"
            />
        </svg>
    );
}

function MotoGPVisual() {
    return (
        <svg width="85%" height="75%" viewBox="0 0 240 120">
            <path
                d="M 30 60 C 30 30, 80 20, 120 30 C 160 40, 200 20, 210 50 C 220 80, 190 100, 160 95 C 130 90, 100 105, 80 95 C 60 85, 30 90, 30 60 Z"
                fill="none"
                stroke="rgba(255,189,68,0.7)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M 30 60 C 30 30, 80 20, 120 30 C 160 40, 200 20, 210 50 C 220 80, 190 100, 160 95 C 130 90, 100 105, 80 95 C 60 85, 30 90, 30 60 Z"
                fill="none"
                stroke="rgba(255,189,68,0.15)"
                strokeWidth="14"
            />
            <rect x="24" y="54" width="12" height="12" rx="2" fill="#ffbd44" opacity="0.8" />
            <circle cx="120" cy="27" r="4" fill="#ff5e3a" opacity="0.9" />
        </svg>
    );
}

const upcomingProjects = [
    {
        id: 1,
        theme: "Course à pied",
        desc: "Un projet autour de la course — suivi, analyse de performances, planification d'entraînements. La forme exacte reste à définir.",
        ideas: ["Data", "Mobile", "Running"],
        visual: "running",
        glow: "rgba(255,94,58,0.12)",
    },
    {
        id: 2,
        theme: "Danse",
        desc: "Un projet qui mêle tech et danse — peut-être une app de chorégraphies, un outil de planning ou quelque chose de plus créatif et visuel.",
        ideas: ["Créatif", "Web", "Animation"],
        visual: "danse",
        glow: "rgba(0,217,255,0.1)",
    },
    {
        id: 3,
        theme: "MotoGP",
        desc: "Dans la lignée du projet F1, un projet d'analyse de données MotoGP — stratégies de course, comparaisons de pilotes, télémétrie.",
        ideas: ["Data", "Python", "Analyse"],
        visual: "motogp",
        glow: "rgba(255,189,68,0.08)",
    },
];

function UpcomingProjects() {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=Inter:wght@300;400;500&display=swap');

                #upcoming-projects * {
                    box-sizing: border-box;
                    font-family: 'Inter', sans-serif;
                }

                .upcoming-card {
                    background: rgba(255,255,255,0.02);
                    border: 1px solid rgba(255,255,255,0.07);
                    border-radius: 20px;
                    overflow: hidden;
                    transition: all 0.4s ease;
                }

                .upcoming-card:hover {
                    transform: translateY(-8px);
                    border-color: rgba(255,94,58,0.3);
                    box-shadow: 0 24px 50px rgba(0,0,0,0.4);
                }

                .upcoming-visual {
                    height: 180px;
                    background: #14141a;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                }

                .upcoming-badge {
                    position: absolute;
                    bottom: 12px;
                    right: 12px;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    background: rgba(0,0,0,0.5);
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 100px;
                    padding: 4px 10px;
                    font-family: 'Space Grotesk', sans-serif;
                    font-size: 9px;
                    font-weight: 700;
                    letter-spacing: 1.5px;
                    text-transform: uppercase;
                    color: rgba(255,255,255,0.5);
                    backdrop-filter: blur(6px);
                    z-index: 3;
                }

                .upcoming-badge-dot {
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                    background: #00d9ff;
                    animation: upcomingPulse 2s infinite;
                }

                .upcoming-body {
                    padding: 24px;
                }

                .upcoming-tag {
                    font-family: 'Space Grotesk', sans-serif;
                    font-size: 10px;
                    font-weight: 700;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    color: rgba(255,255,255,0.25);
                    margin-bottom: 10px;
                }

                .upcoming-title {
                    font-family: 'Space Grotesk', sans-serif;
                    font-size: 22px;
                    font-weight: 700;
                    margin-bottom: 12px;
                    color: #fff;
                }

                .upcoming-desc {
                    font-size: 13px;
                    color: rgba(255,255,255,0.4);
                    line-height: 1.7;
                    margin-bottom: 20px;
                }

                .upcoming-ideas {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                }

                .upcoming-idea {
                    display: inline-block;
                    padding: 4px 12px;
                    background: rgba(255,255,255,0.04);
                    border: 1px solid rgba(255,255,255,0.08);
                    color: rgba(255,255,255,0.5);
                    border-radius: 100px;
                    font-size: 11px;
                    font-weight: 500;
                }

                @keyframes upcomingPulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.3; }
                }

                @media (max-width: 900px) {
                    .upcoming-grid { grid-template-columns: 1fr !important; }
                }
            `}</style>

            <section
                id="upcoming-projects"
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
                        background: "radial-gradient(circle, rgba(255,94,58,0.08) 0%, transparent 70%)",
                        top: "-150px",
                        left: "-150px",
                        pointerEvents: "none",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        width: "500px",
                        height: "500px",
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(0,217,255,0.08) 0%, transparent 70%)",
                        bottom: "-150px",
                        right: "-150px",
                        pointerEvents: "none",
                    }}
                />

                <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
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
                            Ce qui arrive
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
                                à venir
                            </span>
                        </h2>
                        <p
                            style={{
                                fontSize: "15px",
                                color: "rgba(255,255,255,0.4)",
                                maxWidth: "520px",
                                margin: "0 auto",
                                lineHeight: "1.8",
                            }}
                        >
                            Des thèmes qui me tiennent à cœur, des idées qui mijotent. Les projets n'ont pas encore de
                            forme précise — mais l'envie, elle, est bien là.
                        </p>
                    </div>

                    {/* Grille */}
                    <div
                        className="upcoming-grid"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: "24px",
                        }}
                    >
                        {upcomingProjects.map((project) => (
                            <div key={project.id} className="upcoming-card">
                                <div
                                    className="upcoming-visual"
                                    style={{
                                        background: `radial-gradient(circle at 50% 60%, ${project.glow}, transparent 70%), #14141a`,
                                    }}
                                >
                                    {project.visual === "running" && <RunningVisual />}
                                    {project.visual === "danse" && <DanseVisual />}
                                    {project.visual === "motogp" && <MotoGPVisual />}

                                    <div className="upcoming-badge">
                                        <div className="upcoming-badge-dot" />
                                        En réflexion
                                    </div>
                                </div>

                                <div className="upcoming-body">
                                    <div className="upcoming-tag">Thème</div>
                                    <div className="upcoming-title">{project.theme}</div>
                                    <div className="upcoming-desc">{project.desc}</div>
                                    <div className="upcoming-ideas">
                                        {project.ideas.map((idea, i) => (
                                            <span key={i} className="upcoming-idea">
                                                {idea}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default UpcomingProjects;