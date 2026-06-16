import React from "react";

function About() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=Inter:wght@300;400;500&display=swap');

        #about * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .about-title span {
          background: linear-gradient(90deg, #ff5e3a, #00d9ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* --- STRUCTURE LAYOUT --- */
        .about-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 60px;
          margin-top: 48px;
          position: relative;
          z-index: 5;
        }

        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }

        /* --- TIMELINE --- */
        .timeline-container {
          position: relative;
          padding-left: 0;
          margin-left: 20px;
          display: flex;
          flex-direction: column;
          gap: 48px;
        }

        /* Ligne verticale avec le dégradé */
        .timeline-container::before {
          content: '';
          position: absolute;
          left: 0;
          top: 8px;
          bottom: 8px;
          width: 3px;
          background: linear-gradient(to bottom, #ff5e3a, #ff9e3a, #00d9ff, #0077ff);
          border-radius: 4px;
          opacity: 0.8;
          box-shadow: 0 0 10px rgba(255, 94, 58, 0.2);
        }

        .timeline-item {
          position: relative;
          display: flex;
          flex-direction: column;
        }

        /* Ronds ajustés sur l'axe de la ligne */
        .timeline-dot {
          position: absolute;
          left: -6px;
          top: 4px;
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background: #1a1a22;
          border: 3px solid #ff5e3a;
          box-shadow: 0 0 12px rgba(255, 94, 58, 0.6);
          z-index: 10;
          transition: all 0.3s ease;
        }

        .timeline-dot.cyan {
          border-color: #00d9ff;
          box-shadow: 0 0 12px rgba(0, 217, 255, 0.6);
        }

        /* ZONE TAMPON POUR ÉLOIGNER L'ÉCRITURE DE LA LIGNE */
        .timeline-content {
          margin-left: 100px;
        }

        .timeline-tag {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.35);
          margin-bottom: 6px;
        }

        .timeline-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 18px;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 8px;
        }

        .timeline-desc {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.55);
          line-height: 1.6;
        }

        /* --- BENTO PASSIONS --- */
        .passions-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        @media (max-width: 640px) {
          .passions-grid {
            grid-template-columns: 1fr;
          }
        }

        .passion-card {
          background: rgba(255, 255, 255, 0.015);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 16px;
          padding: 24px;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          gap: 12px;
          backdrop-filter: blur(4px);
        }

        .passion-card:hover {
          background: rgba(255, 255, 255, 0.03);
          border-color: rgba(0, 217, 255, 0.2);
          transform: translateY(-4px);
        }

        .passion-icon {
          font-size: 28px;
        }

        .passion-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: #ffffff;
        }

        .passion-desc {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.45);
          line-height: 1.5;
        }

        /* --- LIGNES DE FOND --- */
        .bg-track {
          position: absolute;
          width: 140%;
          height: 100%;
          top: 0;
          left: -20%;
          opacity: 0.15;
          z-index: 1;
        }
      `}</style>

      <section
        id="about"
        style={{
          background: "#1a1a22",
          minHeight: "100vh",
          padding: "120px 24px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "'Inter', sans-serif",
          position: "relative",
          overflow: "hidden"
        }}
      >
        {/* Halo Orange - Haut Gauche */}
        <div style={{
          position: "absolute", width: "700px", height: "700px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,94,58,0.06) 0%, transparent 70%)",
          top: "-20%", left: "-15%", pointerEvents: "none"
        }} />

        {/* Halo Cyan - Bas Droite */}
        <div style={{
          position: "absolute", width: "700px", height: "700px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,217,255,0.06) 0%, transparent 70%)",
          bottom: "-20%", right: "-15%", pointerEvents: "none"
        }} />

        {/* Trajectoires SVG */}
        <svg className="bg-track" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" pointerEvents="none">
          <path d="M-100 200 C 300 400, 800 100, 1600 350" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="6 6"/>
          <path d="M-100 450 C 400 200, 900 600, 1600 500" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="4 8"/>
        </svg>

        {/* CONTENEUR PRINCIPAL */}
        <div style={{ width: "100%", maxWidth: "1140px", margin: "0 auto", position: "relative", zIndex: 10 }}>

          {/* En-tête */}
          <div style={{ maxWidth: "680px", marginBottom: "64px" }}>
            <h2
              className="about-title"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "44px",
                fontWeight: "700",
                color: "#fff",
                marginBottom: "20px",
                letterSpacing: "-0.5px"
              }}
            >
              Toujours en <span>mouvement</span>
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "rgba(255,255,255,0.6)",
                lineHeight: "1.8"
              }}
            >
              Étudiante en informatique à l'ETNA, je suis passionnée par le développement web.
              Entre Formule 1, MotoGP, course à pied et danse, je transforme cette énergie en projets
              concrets et j'explore sans cesse de nouvelles technologies. Mon parcours n'a pas
              toujours été tout droit — et c'est peut-être ça qui me rend curieuse.
            </p>
          </div>

          <div className="about-grid">

            {/* PARCOURS */}
            <div>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "22px",
                  fontWeight: "600",
                  color: "#fff",
                  marginBottom: "36px"
                }}
              >
                Mon parcours
              </h3>

              <div className="timeline-container">
                <div className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <div className="timeline-tag">Bac Général</div>
                    <h4 className="timeline-title">Spécialités HLP, SES, HGGSP</h4>
                    <p className="timeline-desc">
                      Un profil littéraire et social, loin de l'informatique au départ. Un bagage précieux pour la rédaction, la communication et l'analyse.
                    </p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-dot cyan" />
                  <div className="timeline-content">
                    <div className="timeline-tag">Année de droit</div>
                    <h4 className="timeline-title">Une première orientation</h4>
                    <p className="timeline-desc">
                      Une année charnière qui m'a surtout aidée à comprendre ce que je voulais vraiment faire, tout en aiguisant ma rigueur et ma logique.
                    </p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <div className="timeline-tag">Pivot vers l'IT</div>
                    <h4 className="timeline-title">Le déclic</h4>
                    <p className="timeline-desc">
                      Inspirée par le métier de mon père dans l'IT, je décide de sauter le pas et de me lancer à corps perdu dans l'univers du développement.
                    </p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-dot cyan" />
                  <div className="timeline-content">
                    <div className="timeline-tag">ETNA — Bachelor Informatique</div>
                    <h4 className="timeline-title">En route vers l'alternance</h4>
                    <p className="timeline-desc">
                      Premiers projets concrets : robotique, web, data — et une alternance trouvée pour lier la théorie à la pratique d'entreprise.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* PASSIONS */}
            <div>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "22px",
                  fontWeight: "600",
                  color: "#fff",
                  marginBottom: "36px"
                }}
              >
                Mes passions, ma façon de coder
              </h3>

              <div className="passions-grid">
                <div className="passion-card">
                  <div className="passion-icon">🏁</div>
                  <h4 className="passion-title">F1 & MotoGP</h4>
                  <p className="passion-desc">
                    La stratégie de course m'a appris à analyser, anticiper et optimiser — exactement ce que je fais en debug ou en traitement de données.
                  </p>
                </div>

                <div className="passion-card">
                  <div className="passion-icon">🏃‍♀️</div>
                  <h4 className="passion-title">Course à pied</h4>
                  <p className="passion-desc">
                    La régularité et la progression par petites étapes : un plan d'entraînement fonctionne exactement comme un plan de sprint projet.
                  </p>
                </div>

                <div className="passion-card">
                  <div className="passion-icon">💃</div>
                  <h4 className="passion-title">Danse</h4>
                  <p className="passion-desc">
                    La rigueur de la chorégraphie et l'attention au moindre detail se retrouvent directement dans le soin que j'apporte à mes interfaces et au CSS.
                  </p>
                </div>

                <div className="passion-card">
                  <div className="passion-icon">✈️</div>
                  <h4 className="passion-title">Voyages</h4>
                  <p className="passion-desc">
                    S'adapter en permanence à de nouveaux environnements — c'est un peu comme apprendre une nouvelle techno ou apprivoiser un framework.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default About;