"use client"

import "./EventCard.css"

const EventCard = ({ event, onClick }) => {
  const formatDate = (dateString) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }
    return new Date(dateString).toLocaleDateString("en-US", options)
  }

  const getCategoryClass = (category) => {
    const classes = {
      Technology: "category-technology",
      Business: "category-business",
      Startup: "category-startup",
      Arts: "category-arts",
    }
    return classes[category] || "category-default"
  }

  return (
    <div className="event-card" onClick={onClick}>
      {/* Event Image */}
      <div className="event-image">
        <img src={event.image || "/placeholder.svg"} alt={event.name} />
        <div className="event-category">
          <span className={`category-badge ${getCategoryClass(event.category)}`}>{event.category}</span>
        </div>
        <div className="event-overlay">
          <span className="view-details">View Details</span>
        </div>
      </div>

      {/* Event Content */}
      <div className="event-content">
        <h3 className="event-title">{event.name}</h3>

        <div className="event-details">
          {/* Date and Time */}
          <div className="event-detail">
            <svg className="detail-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="detail-text">
              {formatDate(event.date)} at {event.time}
            </span>
          </div>

          {/* Location */}
          <div className="event-detail">
            <svg className="detail-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="detail-text">{event.location}</span>
          </div>

          {/* Price */}
          <div className="event-detail">
            <svg className="detail-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
              />
            </svg>
            <span className="detail-text price">{event.price}</span>
          </div>
        </div>

        {/* Description */}
        <p className="event-description">{event.description}</p>

        {/* Register Button */}
        <button
          className="register-btn"
          onClick={(e) => {
            e.stopPropagation()
            // Handle registration
          }}
        >
          Register Now
        </button>
      </div>
    </div>
  )
}

export default EventCard
