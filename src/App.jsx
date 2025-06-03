"use client"

import { useState, useEffect } from "react"
import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import FeaturedEvents from "./components/FeaturedEvents"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"
import EventModal from "./components/EventModal"
import { ThemeProvider } from "./context/ThemeContext"
import "./App.css"

// Updated events data with real images
const eventsData = [
  {
    id: 1,
    name: "Tech Innovation Summit 2024",
    date: "2024-07-15",
    time: "09:00 AM",
    location: "Karachi Expo Centre, Karachi",
    description:
      "Join industry leaders and innovators for a day of cutting-edge technology discussions, networking, and breakthrough announcements. This summit will feature keynote speakers from major tech companies, startup pitch competitions, and hands-on workshops covering AI, blockchain, and emerging technologies.",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: "PKR 5,000",
    organizer: "Tech Pakistan",
    capacity: "500 attendees",
  },
  {
    id: 2,
    name: "Digital Marketing Masterclass",
    date: "2024-07-20",
    time: "02:00 PM",
    location: "Lahore Convention Center, Lahore",
    description:
      "Learn advanced digital marketing strategies from experts. Perfect for entrepreneurs and marketing professionals looking to scale their online presence and drive business growth through effective digital campaigns.",
    category: "Business",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
    price: "PKR 3,500",
    organizer: "Marketing Hub",
    capacity: "200 attendees",
  },
  {
    id: 3,
    name: "Startup Pitch Competition",
    date: "2024-07-25",
    time: "10:00 AM",
    location: "Islamabad Chamber of Commerce, Islamabad",
    description:
      "Watch promising startups pitch their ideas to investors. Network with entrepreneurs and venture capitalists. This event offers a unique opportunity to witness the next generation of innovative businesses.",
    category: "Startup",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    price: "Free",
    organizer: "Startup Pakistan",
    capacity: "300 attendees",
  },
  {
    id: 4,
    name: "Creative Arts Festival",
    date: "2024-08-01",
    time: "06:00 PM",
    location: "Alhamra Arts Centre, Lahore",
    description:
      "Celebrate creativity with local artists, musicians, and performers. Experience the vibrant arts scene of Pakistan through exhibitions, live performances, and interactive workshops.",
    category: "Arts",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: "PKR 1,500",
    organizer: "Arts Council",
    capacity: "400 attendees",
  },
  {
    id: 5,
    name: "E-commerce Growth Summit",
    date: "2024-08-05",
    time: "11:00 AM",
    location: "Pearl Continental Hotel, Karachi",
    description:
      "Discover strategies to scale your online business. Learn from successful e-commerce entrepreneurs and industry experts about the latest trends in online retail and digital commerce.",
    category: "Business",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: "PKR 4,000",
    organizer: "E-commerce Pakistan",
    capacity: "250 attendees",
  },
]

function App() {
  const [events, setEvents] = useState([])
  const [filteredEvents, setFilteredEvents] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Simulate fetching data
  useEffect(() => {
    const fetchEvents = () => {
      setTimeout(() => {
        setEvents(eventsData)
        setFilteredEvents(eventsData)
      }, 500)
    }

    fetchEvents()
  }, [])

  // Filter events based on search term
  useEffect(() => {
    const filtered = events.filter(
      (event) =>
        event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.category.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    setFilteredEvents(filtered)
  }, [searchTerm, events])

  const handleSearch = (term) => {
    setSearchTerm(term)
  }

  const handleEventClick = (event) => {
    setSelectedEvent(event)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedEvent(null)
  }

  return (
    <ThemeProvider>
      <div className="app">
        <Navigation />
        <Hero />
        <FeaturedEvents
          events={filteredEvents}
          onSearch={handleSearch}
          searchTerm={searchTerm}
          loading={events.length === 0}
          onEventClick={handleEventClick}
        />
        <ContactUs />
        <Footer />
        {isModalOpen && selectedEvent && <EventModal event={selectedEvent} onClose={closeModal} />}
      </div>
    </ThemeProvider>
  )
}

export default App
