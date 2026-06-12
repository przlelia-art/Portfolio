import React from "react";

const timelineData = [
    {
        year: "Bac général",
        title: "Spécialités HLP, SES, HGGSP",
        desc: "Un profil littéraire et social, loin de l'informatique au départ.",
    },
    {
        year: "Année de droit",
        title: "Une première orientation",
        desc: "Une année qui m'a surtout aidée à comprendre ce que je voulais vraiment faire.",
    },
    {
        year: "Pivot vers l'IT",
        title: "Le déclic",
        desc: "Inspirée par le métier de mon père dans l'IT, je me lance dans le développement.",
    },
    {
        year: "ETNA — Bachelor Informatique",
        title: "En route vers l'alternance",
        desc: "Premiers projets concrets : robotique, web, data — et une alternance trouvée pour la suite.",
    },
];

const passionsData = [
    {
        icon: "🏁",
        title: "F1 & MotoGP",
        text: "La stratégie de course m'a appris à analyser, anticiper et optimiser — exactement ce que je fais en debug ou en data analyse.",
    },
    {
        icon: "🏃",
        title: "Course à pied",
        text: "La régularité et la progression par petites étapes : un plan d'entraînement, comme un plan de projet.",
    },
    {
        icon: "💃",
        title: "Danse",
        text: "La rigueur de la chorégraphie et l'attention au détail se retrouvent dans le soin que j'apporte à mes interfaces.",
    },
    {
        icon: "✈️",
        title: "Voyages",
        text: "S'adapter à de nouveaux environnements — un peu comme apprendre une nouvelle techno ou un nouveau framework.",
    },
];

function About() {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=Inter:wght@300;400;500&display=swap');

                #about * {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                    font-family: 'Inter', sans-serif;
                }

                .about-title span {
                    background: linear-gradient(90deg, #ff5e3a, #00d9ff);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .about-timeline {
                    position: relative;
                    padding-left: 36px;
                    margin-bottom: 110px;
                }
                .about-timeline::before {
                    content: "";
                    position: absolute; left: 9px; top: 6px; bottom: 56px;
                    width: 2px;
                    background: linear-gradient(180deg, #ff5e3a, #00d9ff);
                    opacity: 0.3;
                }
                .about-timeline-item {
                    position: relative;
                    padding-bottom: 36px;
                }
                .about-timeline-item:last-child { padding-bottom: 0; }
                .about-timeline-dot {
                    position: absolute; left: -36px; top: 4px;
                    width: 18px; height: 18px; border-radius: 50%;
                    background: #1a1a22;
                    border: 2px solid #ff5e3a;
                }
                .about-timeline-item:nth-child(even) .about-timeline-dot { border-color: #00d9ff; }
                .about-timeline-year {
                    font-family: 'Space Grotesk', sans-serif;
                    font-size: 12px; font-weight: 700; letter-spacing: 2px;
                    color: rgba(255,255,255,0.3); text-transform: uppercase; margin-bottom: 4px;
                }
                .about-timeline-title {
                    font-family: 'Space Grotesk', sans-serif;
                    font-size: 17px; font-weight: 600; color: #fff; margin-bottom: 4px;
                }
                .about-timeline-desc {
                    -size: 14px; color: rgba(255,255,255,0.4); line-height: 1.6; max-width: 520px;
                }

                .passion-card {
                    background: rgba(255,255,255,0.03);
                    border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 14px;
                    padding: 22px;
                    transition: all 0.3s ease;
                }
                .passion-card:hover {
                    border-color: rgba(255,94,58,0.25);
                    transform: translateY(-4px);
                }
                .passion-icon { font-size: 26px; margin-bottom: 10px; }
                .passion-title {
                    font-family: 'Space Grotesk', sans-serif;
                    font-size: 16px; font-weight: 600; color: #fff; margin-bottom: 8px;
                }
                .passion-text {
                    font-size: 13px; color: rgba(255,255,255,0.4); line-height: 1.7;
                }

                @media (max-width: 768px) {
                    .about-title { font-size: 34px !important; }
                    .passion-grid { grid-template-columns: 1fr !important; }
                }
        `}</style>

        <section
            id="about"
            style={{
                background: "#1a1a22",
                padding: "100px 60px",
                position: "relative",
                overflow: "hidden",
                color: "#fff",
            }}
        >
            {/* Halos */}
            <div
                style={{
                    position: "absolute",
                    width: "500px",
                    height: "500px",
                    borderRadius: "50%",
                    background:
                    "radial-gradient(circle, rgba(255,94,58,0.1) 0%, transparent 70%)",
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
                    background:
                    "radial-gradient(circle, rgba(0,217,255,0.1) 0%, transparent 70%)",
                    bottom: "-150px",
                    right: "-150px",
                    pointerEvents: "none",
                }}
            />

            <div
                style={{
                    maxWidth: "1000px",
                    margin: "0 auto",
                    position: "relative",
                    zIndex: 1,
                }}
            >
            {/* BIO */}
            <p
                style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "12px",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.25)",
                    marginBottom: "14px",
                }}
            >
                À propos
            </p>
            <h1
                className="about-title"
                style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "44px",
                    fontWeight: "700",
                    marginBottom: "20px",
                    letterSpacing: "-1px",
                }}
            >
                Toujours en <span>mouvement</span>
            </h1>
            <p
                style={{
                    fontSize: "16px",
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: "1.8",
                    maxWidth: "680px",
                    marginBottom: "50px",
                }}
            >
                Étudiante en informatique à l'ETNA, je suis passionnée par le
                développement web. Entre Formule 1, MotoGP, course à pied et danse,
                je transforme cette énergie en projets concrets et j'explore sans
                cesse de nouvelles technologies. Mon parcours n'a pas toujours été
                tout droit — et c'est peut-être ça qui me rend curieuse.
            </p>

            {/* TIMELINE */}
            <h2
                style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "28px",
                    fontWeight: "700",
                    marginBottom: "40px",
                }}
            >
                Mon parcours
            </h2>

            <div className="about-timeline">
                {timelineData.map((item, i) => (
                <div className="about-timeline-item" key={i}>
                    <div className="about-timeline-dot"></div>
                    <div className="about-timeline-year">{item.year}</div>
                    <div className="about-timeline-title">{item.title}</div>
                    <div className="about-timeline-desc">{item.desc}</div>
                </div>
                ))}
            </div>

            {/* PASSIONS x DEV */}
            <h2
                style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "28px",
                    fontWeight: "700",
                    marginBottom: "40px",
                }}
            >
                Mes passions, ma façon de coder
            </h2>

            <div
                className="passion-grid"
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "18px",
                }}
            >
                {passionsData.map((p, i) => (
                <div className="passion-card" key={i}>
                    <div className="passion-icon">{p.icon}</div>
                    <div className="passion-title">{p.title}</div>
                    <div className="passion-text">{p.text}</div>
                </div>
                ))}
            </div>
            </div>
        </section>
    </>
    );
}

export default About;