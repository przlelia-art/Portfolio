import React from "react";

function Footer() {
  const styles = {
    footer: {
      width: "100%",
      padding: "2rem",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", // Même gradient que Skills
      color: "white",
      textAlign: "center",
    },
    
    text: {
      margin: 0,
      fontSize: "0.9rem",
      color: "rgba(255, 255, 255, 0.9)",
    },
  };

  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        © {new Date().getFullYear()} Lélia Perez - Tous droits réservés
      </p>
    </footer>
  );
}

export default Footer;