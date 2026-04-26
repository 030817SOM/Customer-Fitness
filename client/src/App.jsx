import { useState } from "react";

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className='hero'>
      <div className="hero-top">
        <h1 className="logo">FitQuest</h1>

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`nav-wrapper ${menuOpen ? "active" : ""}`}>
        <nav className="links">
          <a href="/" onClick={closeMenu}>Workouts</a>
          <a href="/about" onClick={closeMenu}>Progress</a>
          <a href="/login" onClick={closeMenu}>Nutrition</a>
          <a href="/register" onClick={closeMenu}>Community</a>
        </nav>

        <nav className="links2">
          <a href="/" onClick={closeMenu}>Profile</a>
          <a href="/about" onClick={closeMenu}>Get Started</a>
        </nav>
      </div>
    </div>
  );
}

export default Hero;
