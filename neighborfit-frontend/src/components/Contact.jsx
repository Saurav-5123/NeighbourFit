import React from 'react'

const brokers = [
  { name: "Ravi Kumar", location: "Delhi", contact: "9876543210" },
  { name: "Sonal Mehta", location: "Mumbai", contact: "9812345678" },
  { name: "Arjun Das", location: "Bangalore", contact: "9001122233" },
  { name: "Neha Singh", location: "Pune", contact: "9900099999" },
]

function Contact() {
  return (
    <section>
      <h2>Our Brokers</h2>
      <ul>
        {brokers.map((broker, index) => (
          <li key={index}>
            <strong>{broker.name}</strong> - {broker.location} - 📞 {broker.contact}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Contact
