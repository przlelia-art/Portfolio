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
          0%, 100 canvas { transform: scaleY(0.4); opacity: 0.6; }
          50%       { transform: scaleY(1); opacity: 1; }
        }
        @keyframes trackFlow {
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
          padding: 13px 30px;
          border-radius: 8px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14px;
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
          padding: 13px 30px;
          border-radius: 8px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14px;
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
          padding: 9px 18px; border-radius: 8px;
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

        .speedline {
          position: absolute;
          height: 2px;
          border-radius: 2px;
          filter: blur(1.5px);
          opacity: 0.6;
          pointer-events: none;
        }
        .speedline.orange { background: linear-gradient(90deg, #ff5e3a, transparent); }
        .speedline.cyan   { background: linear-gradient(270deg, #00d9ff, transparent); }

        .track-line {
          animation: trackFlow 15s linear infinite;
        }

        /* Texte géant en filigrane vertical arrière-plan */
        .bg-word {
          position: absolute;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 800;
          font-size: 160px;
          line-height: 1;
          color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.03);
          letter-spacing: 8px;
          user-select: none;
          z-index: 0;
          pointer-events: none;
        }
        .bg-word.left {
          top: 35%;
          left: -40px;
          transform: rotate(-90deg);
          transform-origin: left center;
        }
        .bg-word.right {
          bottom: 35%;
          right: -150px;
          transform: rotate(90deg);
          transform-origin: right center;
        }

        /* Cartes latérales ajustées en hauteur */
        .side-card {
          position: absolute;
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding: 20px;
          background: rgba(10, 10, 12, 0.4);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          z-index: 3;
          width: 220px;
          top: 42% !important; /* Fixe la position verticale au niveau du nom */
          transform: translateY(-50%) !important;
          transition: all 0.3s ease;
        }
        .side-card:hover {
          transform: translateY(-54%) scale(1.04) !important;
          background: rgba(15, 15, 18, 0.6);
        }
        .side-card .icon { font-size: 24px; margin-bottom: 2px; }
        .side-card .label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 10px; font-weight: 700; letter-spacing: 1.5px;
          text-transform: uppercase; color: rgba(255,255,255,0.4);
        }
        .side-card .value {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 16px; font-weight: 600; color: #fff;
        }
        .side-card .sub {
          font-size: 12px; color: rgba(255,255,255,0.35); line-height: 1.5;
        }
        .side-card.orange-accent { 
          left: 80px !important; /* Rapprochement horizontal */
          border-left: 3px solid #ff5e3a; 
          box-shadow: -10px 0 30px rgba(255,94,58,0.04);
        }
        .side-card.cyan-accent { 
          right: 80px !important; /* Rapprochement horizontal */
          border-right: 3px solid #00d9ff; 
          box-shadow: 10px 0 30px rgba(0,217,255,0.04);
        }

        /* Reponsive - Cache sur petits écrans pour garder la lisibilité */
        @media (max-width: 1250px) {
          .side-card { display: none; }
          .bg-word { font-size: 110px; }
        }

        @media (max-width: 768px) {
          .bg-word { display: none; }
          .hero-name { font-size: 46px !important; }
          .hero-buttons { flex-direction: column; width: 100%; max-width: 300px; }
          .hero-buttons a { width: 100%; text-align: center; }
        }
      `}</style>

      <section
        id="hero"
        style={{
          background: "#0a0a0c",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px 24px",
          position: "relative",
          overflow: "hidden",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {/* Halos lumineux (Glows d'arrière-plan accentués) */}
        <div style={{
          position: "absolute", width: "800px", height: "800px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,94,58,0.11) 0%, transparent 75%)",
          top: "-10%", left: "-10%", pointerEvents: "none", zIndex: 0
        }} />
        <div style={{
          position: "absolute", width: "800px", height: "800px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,217,255,0.09) 0%, transparent 75%)",
          bottom: "-10%", right: "-10%", pointerEvents: "none", zIndex: 0
        }} />

        {/* Texte géant filigrane */}
        <div className="bg-word left">DRIVE</div>
        <div className="bg-word right">DANCE</div>

        {/* Speedlines (Traînées lumineuses horizontales) */}
        <div className="speedline orange" style={{ top: "25%", left: 0, width: "280px" }} />
        <div className="speedline orange" style={{ top: "28%", left: 0, width: "140px", opacity: 0.3 }} />
        <div className="speedline cyan"   style={{ top: "65%", right: 0, width: "310px" }} />
        <div className="speedline cyan"   style={{ top: "69%", right: 0, width: "160px", opacity: 0.3 }} />

        {/* Courbes de circuits / Télémétrie en SVG fluide (Visibilité augmentée) */}
        <svg
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 1, pointerEvents: "none" }}
        >
          {/* Courbe Orange (Gauche) */}
          <path 
            className="track-line" 
            d="M -100,250 C 150,180 120,450 320,400 C 450,360 300,650 150,750" 
            stroke="#ff5e3a" strokeWidth="2" fill="none" opacity="0.22" strokeDasharray="6 10" 
          />
          <path 
            d="M -100,250 C 150,180 120,450 320,400 C 450,360 300,650 150,750" 
            stroke="#ff5e3a" strokeWidth="0.5" fill="none" opacity="0.08" 
          />
          
          {/* Courbe Cyan (Droite) */}
          <path 
            className="track-line" 
            d="M 1540,550 C 1200,620 1250,300 1050,350 C 900,390 1050,150 1200,50" 
            stroke="#00d9ff" strokeWidth="2" fill="none" opacity="0.22" strokeDasharray="6 10" 
          />
          <path 
            d="M 1540,550 C 1200,620 1250,300 1050,350 C 900,390 1050,150 1200,50" 
            stroke="#00d9ff" strokeWidth="0.5" fill="none" opacity="0.08" 
          />
        </svg>

        {/* Carte Latérale Gauche - F1 / Télémétrie */}
        <div className="side-card orange-accent">
          <div className="icon">🏎️</div>
          <div className="label">Télémétrie</div>
          <div className="value">Algorithme & F1</div>
          <div className="sub">Analyse de données et performance vécues à 300 km/h.</div>
        </div>

        {/* Carte Latérale Droite - Trajectoire / Sport */}
        <div className="side-card cyan-accent">
          <div className="icon">🧭</div>
          <div className="label">Mouvement</div>
          <div className="value">Trajectoires</div>
          <div className="sub">De la rigueur de la course à pied à la fluidité de la danse.</div>
        </div>

        {/* Contenu Principal */}
        <div
          className="hero-main-content"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            maxWidth: "720px",
            width: "100%",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* Photo avec anneau animé */}
          <div style={{ position: "relative", width: "150px", height: "150px", marginBottom: "32px" }}>
            <div className="photo-ring"></div>
            <div style={{
              width: "100%", height: "100%", borderRadius: "50%",
              overflow: "hidden", border: "4px solid #0a0a0c",
              position: "relative", zIndex: 2
            }}>
              <img
                src="/assets/photo_intra.jpg"
                alt="Lélia Perez"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          </div>

          {/* Tampons / Badges Passions */}
          <div style={{ display: "flex", gap: "8px", marginBottom: "24px", flexWrap: "wrap", justifyContent: "center" }}>
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
              fontSize: "56px", fontWeight: "700", color: "#fff",
              lineHeight: 1.1, marginBottom: "12px", letterSpacing: "-1px",
            }}
          >
            Lélia <span>Perez</span>
          </h1>

          {/* Rôle */}
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "18px", fontWeight: "500",
            color: "rgba(255,255,255,0.6)", marginBottom: "20px", letterSpacing: "0.5px",
          }}>
            Développeuse Web — toujours en mouvement
          </p>

          {/* Description */}
          <p
            className="hero-desc"
            style={{ fontSize: "15px", color: "rgba(255,255,255,0.45)", lineHeight: "1.75", maxWidth: "520px", marginBottom: "36px" }}
          >
            Étudiante en informatique à l'ETNA, passionnée par le développement web.
            Entre Formule 1, MotoGP, course à pied et danse, je transforme cette énergie
            en projets concrets et j'explore sans cesse de nouvelles technologies.
          </p>

          {/* Boutons d'action */}
          <div className="hero-buttons" style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "center", marginBottom: "44px" }}>
            <a href="#contact" className="btn-primary-hero">
              Me contacter
            </a>
            <a href="#projects" className="btn-outline-hero">
              Voir mes projets
            </a>
            <a href="#skills" className="btn-outline-hero">
              Compétences
            </a>
          </div>

          {/* Onde sonore animée */}
          <div style={{ display: "flex", alignItems: "center", gap: "4px", height: "28px", marginBottom: "40px" }}>
            {[10, 22, 14, 26, 12, 20, 8, 24, 14, 18, 10].map((h, i) => (
              <div
                key={i}
                className="soundwave-bar"
                style={{ height: `${h}px`, animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>

          {/* Liens réseaux sociaux */}
          <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
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