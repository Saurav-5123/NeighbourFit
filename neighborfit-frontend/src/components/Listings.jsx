import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const Listings = () => {
  const { state } = useLocation()

  const dummyListings = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    name: `PG/Apartment ${i + 1}`,
    location: state?.location || 'Delhi',
    rent: Math.floor(5000 + Math.random() * 5000),
    description: 'Spacious, safe, and well-connected place with nearby amenities.'
  }))

  return (
    <>
      <Navbar />
      <div className="listings-page" style={{ padding: '2rem', background: '#111', color: 'white' }}>
        <h2>Results for your Preferences</h2>
        <div className="listing-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1rem'
        }}>
          {dummyListings.map(listing => (
            <div key={listing.id} className="listing-card" style={{
              background: '#1a1a1a',
              padding: '1rem',
              borderRadius: '10px',
              boxShadow: '0 0 10px rgba(255,255,255,0.1)'
            }}>
              <h3>{listing.name}</h3>
              <p><strong>Location:</strong> {listing.location}</p>
              <p><strong>Rent:</strong> ₹{listing.rent}/month</p>
              <p>{listing.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Listings
