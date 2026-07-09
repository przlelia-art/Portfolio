import React from "react";

function Contact() {
  const [formStatus, setFormStatus] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [focused, setFocused] = React.useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus("");

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mbdyrklr", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setFormStatus("success");
        form.reset();
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
    }

    setIsSubmitting(false);
  };

  const inputStyle = (name) => ({
    width: "100%",
    padding: "14px 18px",
    background: "rgba(255,255,255,0.03)",
    border: `1px solid ${focused === name ? "rgba(255,94,58,0.5)" : "rgba(255,255,255,0.08)"}`,
    borderRadius: "10px",
    color: "#fff",
    fontSize: "14px",
    fontFamily: "'Inter', sans-serif",
    outline: "none",
    transition: "all 0.2s ease",
    boxShadow: focused === name ? "0 0 0 3px rgba(255,94,58,0.1)" : "none",
  });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=Inter:wght@300;400;500&display=swap');

        #contact * {
          box-sizing: border-box;
        }

        #contact input::placeholder,
        #contact textarea::placeholder {
          color: rgba(255,255,255,0.25);
        }

        .contact-info-card {
          display: flex;
          align-items: center;
          gap: 14px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          padding: 16px 20px;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        .contact-info-card:hover {
          border-color: rgba(255,94,58,0.3);
          transform: translateY(-3px);
        }

        .contact-icon {
          width: 40px; height: 40px;
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        .submit-btn {
          width: 100%;
          padding: "14px";
          background: linear-gradient(90deg, #ff5e3a, #ff8a3a);
          color: #0a0a0c;
          border: none;
          border-radius: 10px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.25s ease;
          letter-spacing: 0.3px;
        }
        .submit-btn:hover:not(:disabled) {
          box-shadow: 0 0 28px rgba(255,94,58,0.5);
          transform: translateY(-2px);
        }
        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <section
        id="contact"
        style={{
          background: "#1a1a22",
          minHeight: "100vh",
          padding: "100px 60px",
          position: "relative",
          overflow: "hidden",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {/* Halos */}
        <div style={{
          position: "absolute", width: "600px", height: "600px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,94,58,0.08) 0%, transparent 70%)",
          top: "-150px", left: "-150px", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", width: "600px", height: "600px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,217,255,0.08) 0%, transparent 70%)",
          bottom: "-150px", right: "-150px", pointerEvents: "none",
        }} />

        <div style={{ maxWidth: "1000px", margin: "0 auto", position: "relative", zIndex: 1 }}>

          {/* Titre */}
          <div style={{ textAlign: "center", marginBottom: "70px" }}>
            <p style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "11px", color: "rgba(255,255,255,0.2)",
              letterSpacing: "2px", textTransform: "uppercase", marginBottom: "12px",
            }}>
              Travaillons ensemble
            </p>
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "42px", fontWeight: "700", marginBottom: "14px", letterSpacing: "-0.5px",
            }}>
              <span style={{ color: "#fff" }}>Me </span>
              <span style={{
                background: "linear-gradient(90deg, #ff5e3a, #00d9ff)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                contacter
              </span>
            </h2>
            <p style={{
              fontSize: "15px", color: "rgba(255,255,255,0.4)",
              maxWidth: "460px", margin: "0 auto", lineHeight: "1.7",
            }}>
              Une question, une opportunité ou juste envie d'échanger ? Je suis disponible !
            </p>
          </div>

          {/* Grid : infos + formulaire */}
          <div
            className="contact-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.6fr",
              gap: "50px",
              alignItems: "start",
            }}
          >
            {/* Colonne gauche — infos */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

              {/* Email */}
              <a href="mailto:przlelia@gmail.com" className="contact-info-card">
                <div className="contact-icon" style={{ background: "rgba(255,94,58,0.1)" }}>
                  <svg width="18" height="18" fill="none" stroke="#ff5e3a" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", fontWeight: "700", letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "3px" }}>Email</div>
                  <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", fontWeight: "500" }}>perez_l@etna-alternance.net</div>
                </div>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/l%C3%A9lia-perez-73a499309/" target="_blank" rel="noopener noreferrer" className="contact-info-card">
                <div className="contact-icon" style={{ background: "rgba(0,217,255,0.1)" }}>
                  <svg width="18" height="18" fill="#00d9ff" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", fontWeight: "700", letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "3px" }}>LinkedIn</div>
                  <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", fontWeight: "500" }}>Lélia Perez</div>
                </div>
              </a>

              {/* GitHub */}
              <a href="https://github.com/przlelia-art" target="_blank" rel="noopener noreferrer" className="contact-info-card">
                <div className="contact-icon" style={{ background: "rgba(255,255,255,0.05)" }}>
                  <svg width="18" height="18" fill="rgba(255,255,255,0.7)" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", fontWeight: "700", letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "3px" }}>GitHub</div>
                  <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", fontWeight: "500" }}>przlelia-art</div>
                </div>
              </a>

            </div>

            {/* Colonne droite — formulaire */}
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <input
                type="text"
                name="name"
                placeholder="Votre nom"
                required
                style={inputStyle("name")}
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused(null)}
              />
              <input
                type="email"
                name="email"
                placeholder="Votre email"
                required
                style={inputStyle("email")}
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
              />
              <textarea
                name="message"
                placeholder="Votre message..."
                required
                rows="6"
                style={{ ...inputStyle("message"), resize: "vertical" }}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="submit-btn"
                style={{ padding: "14px" }}
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
              </button>

              {formStatus === "success" && (
                <div style={{
                  padding: "14px 18px",
                  background: "rgba(0,217,255,0.08)",
                  border: "1px solid rgba(0,217,255,0.2)",
                  borderRadius: "10px",
                  color: "#5ce1ff",
                  fontSize: "14px",
                  fontWeight: "500",
                }}>
                  ✓ Message envoyé avec succès ! Je te répondrai rapidement.
                </div>
              )}
              {formStatus === "error" && (
                <div style={{
                  padding: "14px 18px",
                  background: "rgba(255,94,58,0.08)",
                  border: "1px solid rgba(255,94,58,0.2)",
                  borderRadius: "10px",
                  color: "#ff8a65",
                  fontSize: "14px",
                  fontWeight: "500",
                }}>
                  ✗ Erreur lors de l'envoi. Réessaie plus tard ou contacte-moi directement par email.
                </div>
              )}
            </form>

          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;