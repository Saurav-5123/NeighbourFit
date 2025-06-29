import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PreferenceForm = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    age: '', profession: '', marital: '',
    nightlife: 'Quiet', commute: 'Walkable',
    fitness: 'Parks', safety: 'Moderate',
    culture: 'Museums', budget: '',
    amenities: ''
  })

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/listings', { state: form })
  }

  return (
    <section id="form" style={{ textAlign: 'center', padding: '60px 20px' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Tell Us Your Preferences</h2>
      <form
        style={{ display: 'grid', maxWidth: '600px', margin: '0 auto', gap: '15px', textAlign: 'left' }}
        onSubmit={handleSubmit}
      >
        <label>Age:
          <input name="age" type="number" value={form.age} onChange={handleChange} required />
        </label>
        <label>Profession:
          <input name="profession" value={form.profession} onChange={handleChange} required />
        </label>
        <label>Marital Status:
          <select name="marital" value={form.marital} onChange={handleChange}>
            <option>Single</option><option>Married</option><option>Other</option>
          </select>
        </label>
        <label>Preferred Nightlife:
          <select name="nightlife" value={form.nightlife} onChange={handleChange}>
            <option>Quiet</option><option>Vibrant</option>
          </select>
        </label>
        <label>Commute Preference:
          <select name="commute" value={form.commute} onChange={handleChange}>
            <option>Walkable</option><option>Short Drive</option><option>Public Transport</option>
          </select>
        </label>
        <label>Local Availabilities:
          <select name="fitness" value={form.fitness} onChange={handleChange}>
            <option>Parks</option><option>Gyms</option><option>Trails</option><option>Temples</option><option>Clubs</option><option>Marke</option>
          </select>
        </label>
        <label>Safety Level:
          <select name="safety" value={form.safety} onChange={handleChange}>
            <option>Low</option><option>Moderate</option><option>High</option>
          </select>
        </label>
        <label>Cultural Interests:
          <select name="culture" value={form.culture} onChange={handleChange}>
            <option>Museums</option><option>Art Galleries</option><option>Both</option>
          </select>
        </label>
        <label>Budget (₹/month):
          <input name="budget" value={form.budget} onChange={handleChange} placeholder="e.g. 20000-40000" required />
        </label>
        <label>Amenities Ranking (comma-separated):
          <input name="amenities" value={form.amenities} onChange={handleChange} placeholder="Schools, Hospitals, Parks..." />
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}

export default PreferenceForm
