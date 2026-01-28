import React from "react";

function Contact() {
  const [formStatus, setFormStatus] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);

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
        headers: {
          Accept: "application/json",
        },
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

  return (
    <section 
      id="contact" 
      style={{ 
        padding: "50px 20px", 
        textAlign: "center",
        backgroundColor: "#f8f9fa",
        color: "#1a1a1a",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <h2 style={{ color: "#1a1a1a" }}>Contactez-moi</h2>
      <p style={{ color: "#666" }}>Vous pouvez me contacter par email ou via le formulaire ci-dessous.</p>

      <p style={{ color: "#666" }}>
        Email : <a href="mailto:przlelia@gmail.com" style={{ color: "#667eea", textDecoration: "underline" }}>perez_l@etna-alternance.net</a>
      </p>
      <p style={{ color: "#666" }}>Téléphone : 07 78 76 31 54</p>

      <form 
        onSubmit={handleSubmit}
        style={{ 
          display: "flex", 
          flexDirection: "column", 
          gap: "10px", 
          maxWidth: "400px", 
          margin: "20px auto" 
        }}
      >
        <input 
          type="text" 
          name="name"
          placeholder="Nom" 
          required 
          style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ddd" }} 
        />
        <input 
          type="email" 
          name="email"
          placeholder="Email" 
          required 
          style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ddd" }} 
        />
        <textarea 
          name="message"
          placeholder="Message" 
          required 
          rows="5" 
          style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ddd" }}
        ></textarea>
        
        <button 
          type="submit" 
          disabled={isSubmitting}
          style={{ 
            padding: "10px", 
            backgroundColor: isSubmitting ? "#999" : "#667eea", 
            color: "#fff", 
            border: "none", 
            cursor: isSubmitting ? "not-allowed" : "pointer", 
            borderRadius: "5px", 
            fontWeight: "600" 
          }}
        >
          {isSubmitting ? "Envoi en cours..." : "Envoyer"}
        </button>

        {formStatus === "success" && (
          <p style={{ color: "#28a745", fontWeight: "600", marginTop: "10px" }}>
            ✅ Message envoyé avec succès !
          </p>
        )}
        {formStatus === "error" && (
          <p style={{ color: "#dc3545", fontWeight: "600", marginTop: "10px" }}>
            ❌ Erreur lors de l'envoi. Réessayez plus tard.
          </p>
        )}
      </form>
    </section>
  );
}

export default Contact;