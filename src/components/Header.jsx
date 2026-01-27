import React from "react";

function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("hero");

  // Détecte le scroll pour changer le style de la navbar
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const styles = {
    header: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: "1rem 2rem",
      transition: "all 0.3s ease",
      backgroundColor: scrolled 
        ? "rgba(102, 126, 234, 0.95)" 
        : "transparent",
      backdropFilter: scrolled ? "blur(10px)" : "none",
      boxShadow: scrolled 
        ? "0 2px 10px rgba(0, 0, 0, 0.1)" 
        : "none",
    },

    nav: {
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },

    logo: {
      fontSize: "1.5rem",
      fontWeight: "700",
      color: "white",
      textDecoration: "none",
    },

    navLinks: {
      display: "flex",
      gap: "2rem",
      listStyle: "none",
      margin: 0,
      padding: 0,
    },

    navLink: {
      color: "white",
      textDecoration: "none",
      fontWeight: "500",
      fontSize: "1rem",
      transition: "all 0.3s ease",
      padding: "0.5rem 1rem",
      borderRadius: "5px",
    },

    navLinkActive: {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
    },
  };

  const [hoveredLink, setHoveredLink] = React.useState(null);

  const navItems = [
    { id: "hero", label: "Accueil" },
    { id: "projects", label: "Projets" },
    { id: "skills", label: "Compétences" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <a 
          href="#hero" 
          style={styles.logo}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("hero");
          }}
        >
          Lélia Perez
        </a>

        <ul style={styles.navLinks}>
          {navItems.map((item) => (
            <li key={item.id}>
              
                <a href={`#${item.id}`}
                style={{
                  ...styles.navLink,
                  ...(activeSection === item.id ? styles.navLinkActive : {}),
                  backgroundColor: hoveredLink === item.id 
                    ? "rgba(255, 255, 255, 0.3)" 
                    : activeSection === item.id 
                      ? "rgba(255, 255, 255, 0.2)" 
                      : "transparent",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                onMouseEnter={() => setHoveredLink(item.id)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;