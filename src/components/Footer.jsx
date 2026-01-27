import React from "react";

function Footer() {
  const styles = {
    footer: {
      width: "100%",
      padding: "2rem",
      backgroundColor: "#f8f9fa",
      color: "#1a1a1a",
      textAlign: "center",
    },
    
    text: {
      margin: 0,
      fontSize: "0.9rem",
      color: "#666",
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