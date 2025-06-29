import React, { useState } from 'react'
import { lifestyleData } from '../data'

const LifestyleCards = () => {
  const [loc, setLoc] = useState('Delhi')
  const data = lifestyleData[loc]

  return (
    <section id="locality" style={{ textAlign: 'center', padding: '60px 20px' }}>
      <h2>Select your locality:</h2>
      <select
        value={loc}
        onChange={(e) => setLoc(e.target.value)}
        style={{ padding: '10px', margin: '20px auto', display: 'inline-block', minWidth: '200px' }}
      >
        {Object.keys(lifestyleData).map((l) => (
          <option key={l}>{l}</option>
        ))}
      </select>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {[
          ['Nightlife', data.nightlife],
          ['Commute', data.commute],
          ['Fitness', data.fitness],
          ['Safety', data.safety],
          ['Culture', data.culture],
          ['Budget', data.budget],
        ].map(([key, v]) => (
          <div key={key} className="card">
            <h4>{key}</h4>
            <p>{v}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default LifestyleCards
