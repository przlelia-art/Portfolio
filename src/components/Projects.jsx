import React from "react";

function Projects() {
  const styles = {
    projectsSection: {
      width: "100%",
      minHeight: "100vh",
      padding: "80px 2rem",
      backgroundColor: "#f8f9fa",
    },
    
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
    },
    
    title: {
      fontSize: "2.5rem",
      fontWeight: "700",
      textAlign: "center",
      marginBottom: "1rem",
      color: "#1a1a1a",
    },
    
    subtitle: {
      fontSize: "1.1rem",
      textAlign: "center",
      color: "#666",
      marginBottom: "3rem",
    },
    
    projectsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "2rem",
    },
    
    projectCard: {
      backgroundColor: "white",
      borderRadius: "12px",
      padding: "2rem",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      cursor: "pointer",
    },
    
    projectTitle: {
      fontSize: "1.5rem",
      fontWeight: "600",
      marginBottom: "1rem",
      color: "#667eea",
    },
    
    projectDescription: {
      fontSize: "1rem",
      color: "#666",
      lineHeight: "1.6",
      marginBottom: "1.5rem",
    },
    
    techStack: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.5rem",
      marginBottom: "1.5rem",
    },
    
    techTag: {
      padding: "0.3rem 0.8rem",
      backgroundColor: "#667eea",
      color: "white",
      borderRadius: "20px",
      fontSize: "0.85rem",
      fontWeight: "500",
    },
    
    projectLinks: {
      display: "flex",
      gap: "1rem",
    },
    
    linkButton: {
      padding: "0.5rem 1.2rem",
      backgroundColor: "#667eea",
      color: "white",
      textDecoration: "none",
      borderRadius: "6px",
      fontSize: "0.9rem",
      fontWeight: "600",
      transition: "background-color 0.3s ease",
    },
  };

  const [hoveredCard, setHoveredCard] = React.useState(null);

  // Tes projets - tu peux les modifier !
  const projects = [
    {
        id: 1,
            title: "Portfolio Personnel",
            description: "Mon portfolio interactif créé avec React et Vite, présentant mes projets et compétences en développement web.",
            technologies: ["React", "Vite", "JavaScript"],
            githubLink: "https://github.com/przlelia-art/Portfolio",
    },
    {
        id: 2,
            title: "User Management API",
            description: "API CRUD complète pour la gestion des utilisateurs avec MariaDB. Documentation interactive avec Swagger UI pour faciliter les tests et l'exploitation des endpoints par toute l'équipe.",
            technologies: ["Node.js", "MariaDB", "Swagger"],
            githubLink: "https://github.com/przlelia-art/Doc-protocolaire",
    },
    {
        id: 3,
            title: "MyMovieApp",
            description: "Application mobile cross-plateforme (iOS et Android) permettant d'explorer un catalogue de films, rechercher des titres et visualiser des détails complets via l'API TMDB. Interface responsive avec navigation multi-écrans fluide.",
            technologies: ["React Native", "Expo", "JavaScript"],
            githubLink: "https://github.com/przlelia-art/EtnaFlix",
    },
    {
        id: 4,
            title: "ThermOS",
            description: "Système de monitoring Arduino pour surveiller en temps réel la température et l'humidité ambiante avec capteur DHT11. Interface visuelle complète avec indicateurs LED et affichage LCD I2C.",
            technologies: ["Arduino", "C", "DHT11", "LCD I2C"],
            githubLink: "https://github.com/przlelia-art/Arduino",
    },

    {
        id: 5,
            title: "F1 Data Analysis",
            description: "Projet personnel réalisé en dehors des cours par passion pour la Formule 1. Analyse de données de Verstappen et Leclerc sur le GP de Bahreïn 2024 : temps au tour, stratégies pneus et télémétrie en qualifications.",            
            technologies: ["Python", "FastF1", "Pandas", "Matplotlib", "Seaborn"],
            githubLink: "https://github.com/przlelia-art/f1-data-analysis",
    },

    {
        id: 6,
            title: "COBOL Learning",
            description: "Apprentissage du langage COBOL en dehors des cours par curiosité personnelle. Exercices couvrant les bases du langage, les boucles, les calculs, les tables et la gestion de fichiers.",
            technologies: ["COBOL"],
            githubLink: "https://github.com/przlelia-art/cobol-learning",
    },

  ];

  return (
    <section id="projects" style={styles.projectsSection}>
      <div style={styles.container}>
        <h2 style={styles.title}>Mes Projets</h2>
        <p style={styles.subtitle}>
          Découvrez quelques-uns des projets sur lesquels j'ai travaillé
        </p>

        <div style={styles.projectsGrid}>
          {projects.map((project) => (
            <div
              key={project.id}
              style={{
                ...styles.projectCard,
                transform: hoveredCard === project.id ? "translateY(-10px)" : "translateY(0)",
                boxShadow: hoveredCard === project.id 
                  ? "0 8px 25px rgba(0, 0, 0, 0.15)" 
                  : "0 4px 15px rgba(0, 0, 0, 0.1)",
              }}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <h3 style={styles.projectTitle}>{project.title}</h3>
              <p style={styles.projectDescription}>{project.description}</p>
              
              <div style={styles.techStack}>
                {project.technologies.map((tech, index) => (
                  <span key={index} style={styles.techTag}>{tech}</span>
                ))}
              </div>

              <div style={styles.projectLinks}>
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={styles.linkButton}
                >
                  GitHub
                </a>
                {project.liveLink !== "#" && (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={styles.linkButton}
                  >
                    Voir le projet
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;