import React from 'react'

const Hero = () => (
  <section
    id="home"
    style={{
      height: '100vh',
      background: 'url(/loggo.jpg) center/cover no-repeat',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '100px 20px',
      color: '#eee'
    }}
  >
    <h1 style={{ fontSize: '3rem', fontWeight: 'bold', lineHeight: '1.2' }}>
      Looking for a place to live peacefully? <br /> Your search ends here.
    </h1>
    <a href="#form"><button style={{ marginTop: '20px' }}>Fill Preferences</button></a>
  </section>
)

export default Hero
