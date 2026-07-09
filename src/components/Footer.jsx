import React from "react";

function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500&display=swap');

        #footer * { box-sizing: border-box; }

        .footer-link {
          color: rgba(255,255,255,0.4);
          text-decoration: none;
          font-size: 13px;
          transition: color 0.2s ease;
        }
        .footer-link:hover { color: #ff5e3a; }

        .footer-divider {
          width: 1px;
          height: 14px;
          background: rgba(255,255,255,0.15);
        }
      `}</style>

      <footer
        id="footer"
        style={{
          background: "#0f0f14",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "40px 60px",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <div style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "20px",
        }}>

          {/* Gauche — nom + copyright */}
          <div>
            <p style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "15px", fontWeight: "600", color: "#fff",
              marginBottom: "4px",
            }}>
              Lélia Perez
            </p>
            <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)" }}>
              © {new Date().getFullYear()} — Tous droits réservés
            </p>
          </div>

          {/* Centre — tagline */}
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "13px",
            color: "rgba(255,255,255,0.2)",
            letterSpacing: "0.5px",
          }}>
            Développeuse Web —{" "}
            <span style={{
              background: "linear-gradient(90deg, #ff5e3a, #00d9ff)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              toujours en mouvement
            </span>
          </p>

          {/* Droite — liens */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <a href="https://github.com/przlelia-art" target="_blank" rel="noopener noreferrer" className="footer-link">
              GitHub
            </a>
            <div className="footer-divider" />
            <a href="https://www.linkedin.com/in/l%C3%A9lia-perez-73a499309/" target="_blank" rel="noopener noreferrer" className="footer-link">
              LinkedIn
            </a>
            <div className="footer-divider" />
            <a href="mailto:przlelia@gmail.com" className="footer-link">
              Email
            </a>
          </div>

        </div>
      </footer>
    </>
  );
}

export default Footer;