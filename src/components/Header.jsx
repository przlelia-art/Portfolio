import React from "react";

function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

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
      zIndex: 1001,
    },

    hamburger: {
      display: "none",
      flexDirection: "column",
      gap: "4px",
      cursor: "pointer",
      padding: "0.5rem",
      zIndex: 1001,
    },

    hamburgerLine: {
      width: "25px",
      height: "3px",
      backgroundColor: "white",
      borderRadius: "2px",
      transition: "all 0.3s ease",
    },

    navLinks: {
      display: "flex",
      gap: "2rem",
      listStyle: "none",
      margin: 0,
      padding: 0,
    },

    navLinksMobile: {
      position: "fixed",
      top: 0,
      right: 0,
      width: "70%",
      height: "100vh",
      backgroundColor: "rgba(102, 126, 234, 0.98)",
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      padding: "5rem 2rem 2rem",
      listStyle: "none",
      transform: mobileMenuOpen ? "translateX(0)" : "translateX(100%)",
      transition: "transform 0.3s ease",
      boxShadow: "-5px 0 15px rgba(0, 0, 0, 0.2)",
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

    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100vh",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: mobileMenuOpen ? "block" : "none",
      zIndex: 999,
    },
  };

  const [hoveredLink, setHoveredLink] = React.useState(null);
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

  // Détecte le redimensionnement
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      setMobileMenuOpen(false); // Ferme le menu après clic
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .hamburger {
            display: flex !important;
          }
          .nav-links-desktop {
            display: none !important;
          }
        }
      `}</style>

      {/* Overlay pour fermer le menu */}
      <div style={styles.overlay} onClick={() => setMobileMenuOpen(false)}></div>

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

          {/* Menu hamburger (mobile) */}
          <div 
            className="hamburger"
            style={styles.hamburger}
            onClick={toggleMobileMenu}
          >
            <div style={{
              ...styles.hamburgerLine,
              transform: mobileMenuOpen ? "rotate(45deg) translateY(7px)" : "none",
            }}></div>
            <div style={{
              ...styles.hamburgerLine,
              opacity: mobileMenuOpen ? 0 : 1,
            }}></div>
            <div style={{
              ...styles.hamburgerLine,
              transform: mobileMenuOpen ? "rotate(-45deg) translateY(-7px)" : "none",
            }}></div>
          </div>

          {/* Navigation desktop */}
          <ul className="nav-links-desktop" style={styles.navLinks}>
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

          {/* Navigation mobile */}
          <ul style={isMobile ? styles.navLinksMobile : { display: "none" }}>
            {navItems.map((item) => (
              <li key={item.id}>
                
                <a href={`#${item.id}`}
                  style={{
                    ...styles.navLink,
                    fontSize: "1.2rem",
                    ...(activeSection === item.id ? styles.navLinkActive : {}),
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;