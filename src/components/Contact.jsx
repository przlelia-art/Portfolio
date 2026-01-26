import React from "react";
function Contact() {
  return (
    <section 
      id="contact" 
      style={{ 
        padding: "50px 20px", 
        textAlign: "center",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <h2>Contactez-moi</h2>
      <p>Vous pouvez me contacter par email ou via le formulaire ci-dessous.</p>

      <p>Email : <a href="mailto:perez_l@etna-alternance.net" style={{ color: "white", textDecoration: "underline" }}>perez_l@etna-alternance.net</a></p>
      <p>Téléphone : 07 78 76 31 54</p>

      <form style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px", margin: "20px auto" }}>
        <input type="text" placeholder="Nom" required style={{ padding: "10px", borderRadius: "5px", border: "none" }} />
        <input type="email" placeholder="Email" required style={{ padding: "10px", borderRadius: "5px", border: "none" }} />
        <textarea placeholder="Message" required rows="5" style={{ padding: "10px", borderRadius: "5px", border: "none" }}></textarea>
        <button type="submit" style={{ padding: "10px", backgroundColor: "#667eea", color: "#fff", border: "none", cursor: "pointer", borderRadius: "5px", fontWeight: "600" }}>
          Envoyer
        </button>
      </form>
    </section>
  );
}

export default Contact;
