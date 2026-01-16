import React from "react";
import MyPhoto from "../assets/photo_intra.jpg";

function Hero() {
  return (
    <section
      id="hero"
      style={{
        textAlign: "center",
        padding: "50px 20px",
      }}
    >
      <img
        src={MyPhoto}
        alt="Moi"
        style={{
          width: "150px",
          borderRadius: "50%",
          marginBottom: "20px", // espace entre photo et texte
        }}
      />
      <h1>Lélia Perez</h1>
      <p>
        Étudiante en informatique, je découvre et explore le monde de la programmation et du développement web. 
        J'aime créer des projets concrets, apprendre de nouveaux langages et partager mes réalisations.
      </p>

      {/* Bouton en dessous du texte */}
      <div style={{ marginTop: "20px" }}>
        <a
          href="#contact"
          style={{
            display: "inline-block",
            padding: "10px 20px",
            backgroundColor: "#4f46e5",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Me contacter
        </a>
      </div>
    </section>
  );
}

export default Hero;
