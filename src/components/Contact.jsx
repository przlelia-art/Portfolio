import React from "react";

function Contact() {
  return (
    <section 
      id="contact" 
      style={{ 
        padding: "50px 20px", 
        textAlign: "center",
        backgroundColor: "#f8f9fa", // Même couleur que Projects
        color: "#1a1a1a", // Texte foncé
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <h2 style={{ color: "#1a1a1a" }}>Contactez-moi</h2>
      <p style={{ color: "#666" }}>Vous pouvez me contacter par email ou via le formulaire ci-dessous.</p>

      <p style={{ color: "#666" }}>Email : <a href="mailto:perez_l@etna-alternance.net" style={{ color: "#667eea", textDecoration: "underline" }}>perez_l@etna-alternance.net</a></p>
      <p style={{ color: "#666" }}>Téléphone : 07 78 76 31 54</p>

      <form style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px", margin: "20px auto" }}>
        <input type="text" placeholder="Nom" required style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ddd" }} />
        <input type="email" placeholder="Email" required style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ddd" }} />
        <textarea placeholder="Message" required rows="5" style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ddd" }}></textarea>
        <button type="submit" style={{ padding: "10px", backgroundColor: "#667eea", color: "#fff", border: "none", cursor: "pointer", borderRadius: "5px", fontWeight: "600" }}>
          Envoyer
        </button>
      </form>
    </section>
  );
}

export default Contact;