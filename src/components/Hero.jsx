import React from "react";
import MyPhoto from "../assets/photo_intra.jpg";


function Hero() {
  return (
    <section 
        id="hero" 
        style={{
            display: "flex", 
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            padding: "50px 20px"
        }}
        >
        <img
            src={MyPhoto}
            alt="Moi"
            style={{ width: "150px", borderRadius: "50%"}}
        />
        <div>
            <h1>Lélia Perez</h1>
            <p>
                Étudiante en informatique, je découvre et explore le monde de la programmation et du développement web. 
                J'aime créer des projets concrets, apprendre de nouveaux langages et partager mes réalisations.
            </p>
            <button>Voir mes projets</button>

        </div>
    </section>
  );
}

export default Hero;
