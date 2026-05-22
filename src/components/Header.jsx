import React from "react";

function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [hoveredLink, setHoveredLink] = React.useState(null);
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { id: "hero",     label: "Accueil" },
    { id: "projects", label: "Projets" },
    { id: "skills",   label: "Compétences" },
    { id: "contact",  label: "Contact" },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        .header-root * {
          box-sizing: border-box;
          font-family: 'Inter', sans-serif;
        }

        .nav-link-item {
          color: rgba(255,255,255,0.55);
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          padding: 6px 14px;
          border-radius: 6px;
          transition: all 0.2s ease;
          letter-spacing: 0.2px;
        }

        .nav-link-item:hover {
          color: rgba(255,255,255,0.9);
          background: rgba(255,255,255,0.07);
        }

        .nav-link-item.active {
          color: white;
          background: rgba(139,92,246,0.2);
          border: 1px solid rgba(139,92,246,0.3);
        }

        .hamburger-btn {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 8px;
          z-index: 1001;
          background: transparent;
          border: none;
        }

        .hamburger-line {
          width: 22px;
          height: 2px;
          background: rgba(255,255,255,0.7);
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .mobile-menu {
          position: fixed;
          top: 0; right: 0;
          width: 260px;
          height: 100vh;
          background: rgba(13,13,15,0.98);
          backdrop-filter: blur(20px);
          border-left: 1px solid rgba(255,255,255,0.08);
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 80px 24px 24px;
          list-style: none;
          transition: transform 0.3s ease;
          z-index: 1000;
        }

        .mobile-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.6);
          z-index: 999;
          backdrop-filter: blur(2px);
        }

        @media (max-width: 768px) {
          .hamburger-btn { display: flex !important; }
          .nav-links-desktop { display: none !important; }
        }
      `}</style>

      {/* Overlay mobile */}
      {mobileMenuOpen && (
        <div className="mobile-overlay" onClick={() => setMobileMenuOpen(false)} />
      )}

      {/* Menu mobile */}
      <ul
        className="mobile-menu"
        style={{ transform: mobileMenuOpen ? "translateX(0)" : "translateX(100%)" }}
      >
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`nav-link-item${activeSection === item.id ? " active" : ""}`}
              style={{ display: "block", fontSize: "16px" }}
              onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <header
        className="header-root"
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 998,
          padding: "0 40px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          transition: "all 0.3s ease",
          background: scrolled ? "rgba(13,13,15,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
      >
        <nav style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
          {/* Logo */}
          <a
            href="#hero"
            style={{
              fontSize: "15px",
              fontWeight: "600",
              color: "white",
              textDecoration: "none",
              letterSpacing: "0.2px",
            }}
            onClick={(e) => { e.preventDefault(); scrollToSection("hero"); }}
          >
            Lélia Perez
          </a>

          {/* Hamburger */}
          <button
            className="hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <div className="hamburger-line" style={{ transform: mobileMenuOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
            <div className="hamburger-line" style={{ opacity: mobileMenuOpen ? 0 : 1 }} />
            <div className="hamburger-line" style={{ transform: mobileMenuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
          </button>

          {/* Liens desktop */}
          <ul className="nav-links-desktop" style={{ display: "flex", gap: "4px", listStyle: "none", margin: 0, padding: 0 }}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-link-item${activeSection === item.id ? " active" : ""}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
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
    </>
  );
}

export default Header;