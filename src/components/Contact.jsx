import React from "react";

function Contact() {
  return (
    <section id="contact" style={{ padding: "50px 20px", textAlign: "center" }}>
      <h2>Contactez-moi</h2>
      <p>Vous pouvez me contacter par email ou via le formulaire ci-dessous.</p>

      <p>Email : <a href="mailto:perez_l@etna-alternance.net">ton.perez_l@etna_alternance.net</a></p>
      <p>Téléphone : 07 78 76 31 54</p>

      <form style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px", margin: "20px auto" }}>
        <input type="text" placeholder="Nom" required style={{ padding: "10px" }} />
        <input type="email" placeholder="Email" required style={{ padding: "10px" }} />
        <textarea placeholder="Message" required rows="5" style={{ padding: "10px" }}></textarea>
        <button type="submit" style={{ padding: "10px", backgroundColor: "#4f46e5", color: "#fff", border: "none", cursor: "pointer" }}>
          Envoyer
        </button>
      </form>
    </section>
  );
}

export default Contact;
