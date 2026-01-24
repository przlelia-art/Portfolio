import React from "react";
import MyPhoto from "../assets/photo_intra.jpg";

function Hero() {
  const styles = {
    heroSection: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "80px 2rem",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      position: "relative",
    },
    
    heroContent: {
      maxWidth: "800px",
      textAlign: "center",
      animation: "fadeInUp 1s ease-out",
    },
    
    photoContainer: {
      marginBottom: "1.5rem",
    },
    
    profilePhoto: {
      width: "150px",
      height: "150px",
      borderRadius: "50%",
      objectFit: "cover",
      border: "5px solid rgba(255, 255, 255, 0.9)",
      boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      cursor: "pointer",
    },
    
    heroTitle: {
      fontSize: "2.2rem",
      color: "white",
      marginBottom: "1rem",
      fontWeight: "700",
    },
    
    nameHighlight: {
      background: "linear-gradient(120deg, #ffd700, #ff6b6b)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },
    
    heroDescription: {
      fontSize: "1.1rem",
      color: "rgba(255, 255, 255, 0.9)",
      lineHeight: "1.6",
      marginBottom: "1.5rem",
      maxWidth: "600px",
      marginLeft: "auto",
      marginRight: "auto",
    },
    
    heroButtons: {
      display: "flex",
      gap: "1rem",
      justifyContent: "center",
      flexWrap: "wrap",
      marginBottom: "1.5rem",
    },
    
    btnBase: {
      padding: "10px 25px",
      borderRadius: "8px",
      textDecoration: "none",
      fontWeight: "600",
      transition: "all 0.3s ease",
      display: "inline-block",
      cursor: "pointer",
    },
    
    btnPrimary: {
      backgroundColor: "white",
      color: "#667eea",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
    },
    
    btnSecondary: {
      backgroundColor: "transparent",
      color: "white",
      border: "2px solid white",
    },
    
    socialLinks: {
      display: "flex",
      gap: "1.5rem",
      justifyContent: "center",
    },
    
    socialLink: {
      color: "white",
      textDecoration: "none",
      fontWeight: "500",
      transition: "color 0.3s ease",
    },
  };

  const [photoHover, setPhotoHover] = React.useState(false);
  const [btn1Hover, setBtn1Hover] = React.useState(false);
  const [btn2Hover, setBtn2Hover] = React.useState(false);

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 1.8rem !important;
          }
          .hero-description {
            font-size: 1rem !important;
          }
          .profile-photo {
            width: 120px !important;
            height: 120px !important;
          }
        }
      `}</style>

      <section id="hero" style={styles.heroSection}>
        <div style={styles.heroContent}>
          <div style={styles.photoContainer}>
            <img
              src={MyPhoto}
              alt="Lélia Perez"
              className="profile-photo"
              style={{
                ...styles.profilePhoto,
                transform: photoHover ? "scale(1.05)" : "scale(1)",
                boxShadow: photoHover 
                  ? "0 15px 50px rgba(0, 0, 0, 0.4)" 
                  : "0 10px 40px rgba(0, 0, 0, 0.3)",
              }}
              onMouseEnter={() => setPhotoHover(true)}
              onMouseLeave={() => setPhotoHover(false)}
            />
          </div>
          
          <h1 className="hero-title" style={styles.heroTitle}>
            <span style={styles.nameHighlight}>Lélia Perez</span>
          </h1>
          
          <p className="hero-description" style={styles.heroDescription}>
            Étudiante en informatique passionnée par le développement web. 
            Je transforme des idées en projets concrets et j'explore sans cesse 
            de nouvelles technologies.
          </p>

          <div style={styles.heroButtons}>
            <a 
              href="#contact" 
              style={{
                ...styles.btnBase,
                ...styles.btnPrimary,
                transform: btn1Hover ? "translateY(-2px)" : "translateY(0)",
                boxShadow: btn1Hover 
                  ? "0 6px 20px rgba(0, 0, 0, 0.3)" 
                  : "0 4px 15px rgba(0, 0, 0, 0.2)",
              }}
              onMouseEnter={() => setBtn1Hover(true)}
              onMouseLeave={() => setBtn1Hover(false)}
            >
              Me contacter
            </a>
            <a 
              href="#projects" 
              style={{
                ...styles.btnBase,
                ...styles.btnSecondary,
                transform: btn2Hover ? "translateY(-2px)" : "translateY(0)",
                backgroundColor: btn2Hover ? "white" : "transparent",
                color: btn2Hover ? "#667eea" : "white",
              }}
              onMouseEnter={() => setBtn2Hover(true)}
              onMouseLeave={() => setBtn2Hover(false)}
            >
              Voir mes projets
            </a>
          </div>

          <div style={styles.socialLinks}>
            <a 
              href="https://github.com/przlelia-art" 
              target="_blank" 
              rel="noopener noreferrer"
              style={styles.socialLink}
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/l%C3%A9lia-perez-73a499309/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={styles.socialLink}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;