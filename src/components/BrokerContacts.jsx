import React from 'react'
import { brokers } from '../data'

const BrokerContacts = () => (
  <section id="contact" style={{ textAlign: 'center', padding: '60px 20px' }}>
    <h2>Our Brokers & PG Listings</h2>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {brokers.map((b, i) => (
        <div key={i} className="card" style={{ maxWidth: '350px' }}>
          <h3>{b.name}</h3>
          <p><strong>PGs:</strong> {b.properties.join(', ')}</p>
          <p><strong>Location:</strong> {b.city}</p>
          <p><strong>Phone:</strong> {b.phone}</p>
        </div>
      ))}
    </div>
  </section>
)

export default BrokerContacts
