"use client"

import "./Hero.css"

const Hero = () => {
  const scrollToEvents = () => {
    const eventsSection = document.getElementById("events")
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Discover Events Near You</h1>
          <p className="hero-subtitle">
            Find and attend the best local events happening in your city. From tech conferences to food festivals, we've
            got you covered.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={scrollToEvents}>
              <span>Browse All Events</span>
              <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button className="btn-secondary">Submit Your Event</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
