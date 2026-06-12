import React from "react";

function Hero() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=Inter:wght@300;400;500&display=swap');

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
        @keyframes travel {
          to { stroke-dashoffset: -2400; }
        }
        @keyframes dashFlow {
          to { stroke-dashoffset: -200; }
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
          padding: 12px 26px;
          border-radius: 8px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
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
          padding: 12px 26px;
          border-radius: 8px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
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
          padding: 8px 16px; border-radius: 8px;
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

        /* Circuits */
        .circuit-base-orange { fill: none; stroke: #ff6a3a; stroke-width: 1.5; opacity: 0.28; }
        .circuit-base-cyan   { fill: none; stroke: #00d9ff; stroke-width: 1.5; opacity: 0.16; }

        .circuit-light-orange {
          fill: none; stroke: #ff8a65; stroke-width: 2.5; stroke-linecap: round;
          stroke-dasharray: 60 2340;
          opacity: 0.9;
          animation: travel 10s linear infinite;
          filter: drop-shadow(0 0 6px rgba(255,94,58,0.8));
        }
        .circuit-light-cyan {
          fill: none; stroke: #5ce1ff; stroke-width: 2.5; stroke-linecap: round;
          stroke-dasharray: 60 2340;
          opacity: 0.9;
          animation: travel 12s linear infinite;
          animation-delay: -4s;
          filter: drop-shadow(0 0 6px rgba(0,217,255,0.8));
        }

        /* Lignes pointillées légères */
        .dash-line {
          fill: none;
          stroke-width: 1;
          stroke-dasharray: 6 10;
          opacity: 0.12;
          animation: dashFlow 8s linear infinite;
        }
        .dash-line.orange { stroke: #ff5e3a; }
        .dash-line.cyan { stroke: #00d9ff; }

        @media (max-width: 768px) {
          .hero-name { font-size: 42px !important; }
          .hero-desc  { font-size: 14px !important; }
          .hero-buttons { flex-direction: column; align-items: center; }
        }

        /* Cartes latérales */
        .side-card {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 22px 26px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          backdrop-filter: blur(8px);
          z-index: 1;
          max-width: 310px;
        }
        .side-card.left { left: 50px; bottom: 90px; }
        .side-card.right { right: 50px; top: 90px; }

        .side-icon {
          width: 54px; height: 54px; border-radius: 50%; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          font-size: 24px; position: relative;
        }
        .side-icon::before {
          content: "";
          position: absolute; inset: 0; border-radius: 50%;
          border: 2px solid transparent;
        }
        .side-card.left .side-icon::before { border-top-color: #ff5e3a; border-right-color: #00d9ff; }
        .side-card.right .side-icon::before { border-top-color: #00d9ff; border-right-color: #ff5e3a; }

        .side-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 700; letter-spacing: 2px;
          text-transform: uppercase; color: rgba(255,255,255,0.3);
          margin-bottom: 3px;
        }
        .side-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 18px; font-weight: 600; color: #fff;
          margin-bottom: 4px;
        }
        .side-sub {
          font-size: 14px; color: rgba(255,255,255,0.35); line-height: 1.45;
        }

        @media (max-width: 1100px) {
          .side-card { display: none; }
        }
      `}</style>

      <section
        id="hero"
        style={{
          background: "#1a1a22",
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
          position: "absolute", width: "600px", height: "600px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,94,58,0.13) 0%, transparent 70%)",
          top: "-180px", left: "-180px", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", width: "550px", height: "550px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,217,255,0.12) 0%, transparent 70%)",
          bottom: "-150px", right: "-150px", pointerEvents: "none",
        }} />

        {/* Circuits */}
        <svg
          viewBox="0 0 1600 900"
          preserveAspectRatio="xMidYMid slice"
          style={{ position: "absolute", inset: 0, zIndex: 0, width: "100%", height: "100%" }}
        >
          {/* Circuit gauche (orange) */}
          <path className="circuit-base-orange" d="M -100 650 L 150 650 C 250 650, 280 550, 220 480 C 160 410, 220 320, 320 320 L 480 320 C 560 320, 600 250, 540 190 C 480 130, 360 150, 320 230 C 280 310, 150 300, 120 200 C 90 100, -50 80, -120 160" />
          <path className="circuit-light-orange" d="M -100 650 L 150 650 C 250 650, 280 550, 220 480 C 160 410, 220 320, 320 320 L 480 320 C 560 320, 600 250, 540 190 C 480 130, 360 150, 320 230 C 280 310, 150 300, 120 200 C 90 100, -50 80, -120 160" />

          {/* Circuit droit (cyan) */}
          <path className="circuit-base-cyan" d="M 1700 250 L 1450 250 C 1350 250, 1320 350, 1380 420 C 1440 490, 1380 580, 1280 580 L 1120 580 C 1040 580, 1000 650, 1060 710 C 1120 770, 1240 750, 1280 670 C 1320 590, 1450 600, 1480 700 C 1510 800, 1660 820, 1730 740" />
          <path className="circuit-light-cyan" d="M 1700 250 L 1450 250 C 1350 250, 1320 350, 1380 420 C 1440 490, 1380 580, 1280 580 L 1120 580 C 1040 580, 1000 650, 1060 710 C 1120 770, 1240 750, 1280 670 C 1320 590, 1450 600, 1480 700 C 1510 800, 1660 820, 1730 740" />

          {/* Lignes pointillées discrètes */}

          {/* Ligne pointillée courbe en haut */}
          <path className="dash-line cyan" d="M -50 150 Q 400 90, 850 140 T 1700 120" />

          {/* Ligne pointillée courbe en bas */}
          <path className="dash-line orange" d="M -50 750 Q 400 810, 850 760 T 1700 780" />

          {/* Pointillé parallèle au circuit gauche (orange) */}
          <path className="dash-line orange" d="M -75 625 L 145 625 C 230 625, 255 545, 200 485 C 150 425, 200 345, 295 345 L 460 345 C 530 345, 565 270, 510 215 C 460 160, 355 175, 320 245 C 290 310, 165 300, 140 215 C 115 130, -10 115, -75 185" />

          {/* Pointillé parallèle au circuit droit (cyan) */}
          <path className="dash-line cyan" d="M 1675 275 L 1455 275 C 1365 275, 1340 360, 1390 420 C 1440 480, 1390 560, 1300 560 L 1150 560 C 1080 560, 1045 625, 1100 680 C 1155 735, 1265 720, 1300 650 C 1335 580, 1450 590, 1480 680 C 1510 770, 1645 790, 1705 720" />
        </svg>

        {/* Carte latérale gauche */}
        <div className="side-card left">
          <div className="side-icon">🏁</div>
          <div>
            <div className="side-label">Télémétrie</div>
            <div className="side-title">Algorithme & F1</div>
            <div className="side-sub">Stratégie de course, logique de dev - même état d'esprit.</div>
          </div>
        </div>

        {/* Carte latérale droite */}
        <div className="side-card right">
          <div className="side-icon">🧭</div>
          <div>
            <div className="side-label">Mouvement</div>
            <div className="side-title">Trajectoires</div>
            <div className="side-sub">De la rigueur de la course à pied à la fluidité de la danse.</div>
          </div>
        </div>

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
          <div style={{ position: "relative", width: "240px", height: "240px", marginBottom: "24px" }}>
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
          <div style={{ display: "flex", gap: "10px", marginBottom: "18px", flexWrap: "wrap", justifyContent: "center" }}>
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
              fontSize: "78px", fontWeight: "700", color: "#fff",
              lineHeight: 1.05, marginBottom: "8px", letterSpacing: "-1px",
            }}
          >
            Lélia <span>Perez</span>
          </h1>

          {/* Rôle */}
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "23px", fontWeight: "500",
            color: "rgba(255,255,255,0.55)", marginBottom: "16px", letterSpacing: "0.5px",
          }}>
            Développeuse Web - toujours en mouvement
          </p>

          {/* Boutons */}
          <div className="hero-buttons" style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "center", marginBottom: "30px" }}>
            <a href="#contact" className="btn-primary-hero">
              Me contacter
            </a>
            <a href="#projects" className="btn-outline-hero">
              Voir mes projets
            </a>
            <a href="#skills" className="btn-primary-hero">
              Compétences
            </a>
          </div>

          {/* Onde sonore */}
          <div style={{ display: "flex", alignItems: "center", gap: "4px", height: "24px", marginBottom: "30px" }}>
            {[8, 18, 12, 22, 10, 16, 7, 20, 12, 15, 8].map((h, i) => (
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