"use client"

import { useState } from "react"
import { useTheme } from "../context/ThemeContext"
import "./Navigation.css"

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isDarkMode, toggleTheme } = useTheme()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-content">
          {/* Logo */}
          <div className="nav-logo">
            <div className="logo-container">
              <div className="logo-badge">
                <span className="logo-text">EP</span>
              </div>
              <span className="brand-name">EventPulse</span>
            </div>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="nav-links-desktop">
            <div className="nav-links">
              <button onClick={() => scrollToSection("home")} className="nav-link">
                Home
              </button>
              <button onClick={() => scrollToSection("events")} className="nav-link">
                Events
              </button>
              <button onClick={() => scrollToSection("contact")} className="nav-link">
                Contact
              </button>
            </div>
          </div>

          {/* Right side controls */}
          <div className="nav-controls">
            {/* Dark Mode Toggle */}
            <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle dark mode">
              {isDarkMode ? (
                <svg className="theme-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg className="theme-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>

            {/* Sign Up Button */}
            <div className="nav-signup-desktop">
              <button className="signup-btn">Sign Up</button>
            </div>

            {/* Mobile menu button */}
            <div className="nav-mobile-toggle">
              <button onClick={toggleMenu} className="mobile-menu-btn">
                <svg className="menu-icon" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="nav-mobile">
            <div className="nav-mobile-content">
              <button onClick={() => scrollToSection("home")} className="nav-mobile-link">
                Home
              </button>
              <button onClick={() => scrollToSection("events")} className="nav-mobile-link">
                Events
              </button>
              <button onClick={() => scrollToSection("contact")} className="nav-mobile-link">
                Contact
              </button>
              <div className="nav-mobile-controls">
                <button onClick={toggleTheme} className="theme-toggle mobile">
                  {isDarkMode ? "Light Mode" : "Dark Mode"}
                </button>
                <button className="signup-btn mobile">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
