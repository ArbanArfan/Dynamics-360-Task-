"use client"

import { useState } from "react"
import "./SearchBar.css"

const SearchBar = ({ onSearch, searchTerm }) => {
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm)

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(localSearchTerm)
  }

  const handleInputChange = (e) => {
    const value = e.target.value
    setLocalSearchTerm(value)
    // Real-time search
    onSearch(value)
  }

  const clearSearch = () => {
    setLocalSearchTerm("")
    onSearch("")
  }

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="search-input-container">
          <div className="search-icon">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            value={localSearchTerm}
            onChange={handleInputChange}
            placeholder="Search events by name, location, or category..."
            className="search-input"
          />
          {localSearchTerm && (
            <button type="button" onClick={clearSearch} className="clear-btn">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

export default SearchBar
