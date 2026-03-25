import React from "react";

function Skills() {
  const styles = {
    skillsSection: {
      width: "100%",
      minHeight: "100vh",
      padding: "80px 2rem",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
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
      color: "white",
    },
    
    subtitle: {
      fontSize: "1.1rem",
      textAlign: "center",
      color: "rgba(255, 255, 255, 0.9)",
      marginBottom: "3rem",
    },
    
    categoriesGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "2rem",
    },
    
    categoryCard: {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(10px)",
      borderRadius: "12px",
      padding: "2rem",
      border: "2px solid rgba(255, 255, 255, 0.2)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    
    categoryTitle: {
      fontSize: "1.3rem",
      fontWeight: "600",
      marginBottom: "1.5rem",
      color: "white",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    },
    
    skillsList: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    },
    
    skillItem: {
      display: "flex",
      alignItems: "center",
      gap: "0.8rem",
    },
    
    skillBadge: {
      padding: "0.4rem 1rem",
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      color: "white",
      borderRadius: "20px",
      fontSize: "0.95rem",
      fontWeight: "500",
      border: "1px solid rgba(255, 255, 255, 0.3)",
    },
  };

  const [hoveredCard, setHoveredCard] = React.useState(null);

  const skillsData = [
    {
      id: 1,
      category: "💻 Langages",
      icon: "💻",
      skills: ["JavaScript", "Python", "C", "HTML/CSS", "COBOL"]
    },
    {
      id: 2,
      category: "⚛️ Frameworks & Librairies",
      icon: "⚛️",
      skills: ["React", "React Native", "Node.js", "Vite", "Pandas", "Matplotlib","Seaborn", "FastF1"]
    },
    {
      id: 3,
      category: "🗄️ Bases de données",
      icon: "🗄️",
      skills: ["MariaDB", "MySQL"]
    },
    {
      id: 4,
      category: "🛠️ Outils & Technologies",
      icon: "🛠️",
      skills: ["Git", "GitHub", "Swagger", "Arduino", "VSCode", "Expo"]
    },
    {
      id: 5,
      category: "🌐 Web & API",
      icon: "🌐",
      skills: ["API REST", "CRUD", "Documentation API"]
    },
    {
      id: 6,
      category: "🤖 Hardware",
      icon: "🤖",
      skills: ["Arduino", "DHT11", "LCD I2C", "LED"]
    },
  ];

  return (
    <section id="skills" style={styles.skillsSection}>
      <div style={styles.container}>
        <h2 style={styles.title}>Mes Compétences</h2>
        <p style={styles.subtitle}>
          Technologies et outils que je maîtrise
        </p>

        <div style={styles.categoriesGrid}>
          {skillsData.map((category) => (
            <div
              key={category.id}
              style={{
                ...styles.categoryCard,
                transform: hoveredCard === category.id ? "translateY(-10px)" : "translateY(0)",
                boxShadow: hoveredCard === category.id 
                  ? "0 10px 30px rgba(0, 0, 0, 0.3)" 
                  : "none",
              }}
              onMouseEnter={() => setHoveredCard(category.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <h3 style={styles.categoryTitle}>
                {category.category}
              </h3>
              
              <div style={styles.skillsList}>
                {category.skills.map((skill, index) => (
                  <div key={index} style={styles.skillItem}>
                    <span style={styles.skillBadge}>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;