import React from 'react'
import Hero from '../components/landingPage/Hero.jsx'
import About from '../components/landingPage/Aboutus.jsx'
import Services from '../components/landingPage/Services.jsx'
import CustomSoftwareDevelopment from '../components/landingPage/CustomSoftwareDevelopment.jsx'
import FAQ from '../components/landingPage/FAQ.jsx'
import Team from '../components/landingPage/Team.jsx'
import ContactUs from '../components/landingPage/Contactus.jsx'

const Home = () => {
  return (
    <div>
        <Hero />
        <About />
        <Services />
        <CustomSoftwareDevelopment />
        <Team />
        <FAQ />
        <ContactUs />
    </div>
  )
}

export default Home