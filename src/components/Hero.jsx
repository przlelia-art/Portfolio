import React from "react";
import MyPhoto from "../assets/photo_intra.jpg";

function Hero() {
  const styles = {
    heroSection: {
      width: "100%",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "80px 2rem",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      position: "relative",
      margin: 0,
      boxSizing: "border-box",
      overflow: "hidden",
    },
    
    particles: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      overflow: "hidden",
      zIndex: 0,
    },
    
    particle: {
      position: "absolute",
      borderRadius: "50%",
      background: "rgba(255, 255, 255, 0.1)",
    },
    
    heroContent: {
      maxWidth: "800px",
      textAlign: "center",
      animation: "fadeInUp 1s ease-out",
      position: "relative",
      zIndex: 1,
    },
    
    photoContainer: {
      marginBottom: "1.5rem",
    },
    
    profilePhoto: {
      width: "200px",
      height: "200px",
      borderRadius: "50%",
      objectFit: "cover",
      border: "5px solid rgba(255, 255, 255, 0.9)",
      boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      cursor: "pointer",
    },
    
    heroTitle: {
      fontSize: "2.5rem",
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
      marginBottom: "2rem",
    },
    
    btnBase: {
      padding: "12px 30px",
      borderRadius: "8px",
      textDecoration: "none",
      fontWeight: "600",
      transition: "all 0.3s ease",
      display: "inline-block",
      cursor: "pointer",
      fontSize: "1rem",
    },
    
    btnSecondary: {
      backgroundColor: "transparent",
      color: "white",
      border: "2px solid white",
    },
    
    socialLinks: {
      display: "flex",
      gap: "1rem",
      justifyContent: "center",
      flexWrap: "wrap",
    },
    
    socialButton: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "10px 20px",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      color: "white",
      textDecoration: "none",
      borderRadius: "8px",
      fontWeight: "500",
      transition: "all 0.3s ease",
      border: "2px solid rgba(255, 255, 255, 0.3)",
      backdropFilter: "blur(10px)",
    },
    
    socialIcon: {
      width: "20px",
      height: "20px",
    },
    
    scrollDown: {
      position: "absolute",
      bottom: "30px",
      left: "50%",
      transform: "translateX(-50%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      cursor: "pointer",
      animation: "bounce 2s infinite",
      zIndex: 1,
    },
    
    scrollText: {
      color: "white",
      fontSize: "0.9rem",
      marginBottom: "0.5rem",
      fontWeight: "500",
    },
    
    scrollArrow: {
      width: "30px",
      height: "30px",
      borderLeft: "3px solid white",
      borderBottom: "3px solid white",
      transform: "rotate(-45deg)",
    },
  };

  const [photoHover, setPhotoHover] = React.useState(false);
  const [btn1Hover, setBtn1Hover] = React.useState(false);
  const [btn2Hover, setBtn2Hover] = React.useState(false);
  const [btn3Hover, setBtn3Hover] = React.useState(false);
  const [githubHover, setGithubHover] = React.useState(false);
  const [linkedinHover, setLinkedinHover] = React.useState(false);

  // Génération des particules fixes
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 100 + 50,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
  }));

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          40% {
            transform: translateX(-50%) translateY(-10px);
          }
          60% {
            transform: translateX(-50%) translateY(-5px);
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
            width: 150px !important;
            height: 150px !important;
          }
        }
      `}</style>

      <section id="hero" style={styles.heroSection}>
        {/* Particules fixes */}
        <div style={styles.particles}>
          {particles.map((particle) => (
            <div
              key={particle.id}
              style={{
                ...styles.particle,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                left: particle.left,
                top: particle.top,
              }}
            />
          ))}
        </div>

        <div style={styles.heroContent}>
          <div style={styles.photoContainer}>
            <img
              src="/photo_intra.jpg"
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
              Étudiante en informatique passionnée par le développement web et la data analyse. 
              Passionnée de Formule 1, j'explore la data à travers l'analyse de données de course. 
              Je transforme mes idées en projets concrets et j'explore sans cesse de nouvelles technologies.
          </p>

          <div style={styles.heroButtons}>
            <a 
              href="#contact" 
              style={{
                ...styles.btnBase,
                ...styles.btnSecondary,
                transform: btn1Hover ? "translateY(-2px)" : "translateY(0)",
                backgroundColor: btn1Hover ? "white" : "transparent",
                color: btn1Hover ? "#667eea" : "white",
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
            <a 
              href="#skills" 
              style={{
                ...styles.btnBase,
                ...styles.btnSecondary,
                transform: btn3Hover ? "translateY(-2px)" : "translateY(0)",
                backgroundColor: btn3Hover ? "white" : "transparent",
                color: btn3Hover ? "#667eea" : "white",
              }}
              onMouseEnter={() => setBtn3Hover(true)}
              onMouseLeave={() => setBtn3Hover(false)}
            >
              Mes compétences
            </a>
          </div>

          <div style={styles.socialLinks}>
            <a 
              href="https://github.com/przlelia-art" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                ...styles.socialButton,
                transform: githubHover ? "translateY(-3px)" : "translateY(0)",
                backgroundColor: githubHover ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.1)",
                borderColor: githubHover ? "rgba(255, 255, 255, 0.5)" : "rgba(255, 255, 255, 0.3)",
                boxShadow: githubHover ? "0 5px 15px rgba(0, 0, 0, 0.3)" : "none",
              }}
              onMouseEnter={() => setGithubHover(true)}
              onMouseLeave={() => setGithubHover(false)}
            >
              <svg style={styles.socialIcon} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            
            <a 
              href="https://www.linkedin.com/in/l%C3%A9lia-perez-73a499309/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                ...styles.socialButton,
                transform: linkedinHover ? "translateY(-3px)" : "translateY(0)",
                backgroundColor: linkedinHover ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.1)",
                borderColor: linkedinHover ? "rgba(255, 255, 255, 0.5)" : "rgba(255, 255, 255, 0.3)",
                boxShadow: linkedinHover ? "0 5px 15px rgba(0, 0, 0, 0.3)" : "none",
              }}
              onMouseEnter={() => setLinkedinHover(true)}
              onMouseLeave={() => setLinkedinHover(false)}
            >
              <svg style={styles.socialIcon} fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        {/* Flèche scroll down */}
        <div style={styles.scrollDown} onClick={scrollToProjects}>
          <span style={styles.scrollText}>Découvrir</span>
          <div style={styles.scrollArrow}></div>
        </div>
      </section>
    </>
  );
}

export default Hero;