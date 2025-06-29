import React from 'react'

const Navbar = () => (
  <nav style={{
    display: 'flex', justifyContent: 'space-between', padding: '15px 40px',
    background: '#1a1a1a', position: 'fixed', top: 0, width: '100%', zIndex: 1000
  }}>
    <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
      <span style={{ color: 'white' }}>Neighbour</span>
      <span style={{ color: 'red' }}>Fit</span>
    </div>
    <div style={{ display: 'flex', gap: '20px' }}>
      {['Home', 'Locality', 'Form', 'About', 'Contact'].map(id => (
        <a href={`#${id.toLowerCase()}`} style={{ color: '#ddd', textDecoration: 'none', fontSize: '16px' }}>{id}</a>
      ))}
    </div>
  </nav>
)

export default Navbar
