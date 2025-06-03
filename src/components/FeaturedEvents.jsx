"use client"

import EventCard from "./EventCard"
import SearchBar from "./SearchBar"
import "./FeaturedEvents.css"

const FeaturedEvents = ({ events, onSearch, searchTerm, loading, onEventClick }) => {
  return (
    <section id="events" className="featured-events">
      <div className="events-container">
        {/* Section Header */}
        <div className="events-header">
          <h2 className="events-title">Featured Events</h2>
          <p className="events-subtitle">
            Discover exciting events happening in your area. From professional networking to creative workshops, there's
            something for everyone.
          </p>
        </div>

        {/* Search Bar */}
        <SearchBar onSearch={onSearch} searchTerm={searchTerm} />

        {/* Events Grid */}
        <div className="events-content">
          {loading ? (
            <div className="loading-container">
              <div className="loading-spinner"></div>
            </div>
          ) : events.length === 0 ? (
            <div className="no-events">
              <div className="no-events-icon">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="no-events-title">No events found</h3>
              <p className="no-events-text">Try adjusting your search terms to find more events.</p>
            </div>
          ) : (
            <div className="events-grid">
              {events.map((event) => (
                <EventCard key={event.id} event={event} onClick={() => onEventClick(event)} />
              ))}
            </div>
          )}
        </div>

        {/* Results count */}
        {!loading && events.length > 0 && (
          <div className="events-results">
            <p className="results-text">
              Showing {events.length} event{events.length !== 1 ? "s" : ""}
              {searchTerm && ` for "${searchTerm}"`}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default FeaturedEvents
