import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PreferenceForm from './components/PreferenceForm'
import LifestyleCards from './components/LifestyleCards'
import BrokerContacts from './components/BrokerContacts'
import About from './components/About'
import Footer from './components/Footer' 
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div id="form"><PreferenceForm /></div>
      <div id="locality"><LifestyleCards /></div>
      <div id="about"><About /></div>
      <div id="contact"><BrokerContacts /></div>
      
      <div id="footer"><Footer /></div>
    </>
  )
}

export default App
