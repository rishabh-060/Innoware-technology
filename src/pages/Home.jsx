import React from 'react'
import Hero from '../components/landingPage/hero'
import About from '../components/landingPage/Aboutus'
import Services from '../components/landingPage/Services'
import CustomSoftwareDevelopment from '../components/landingPage/CustomSoftwareDevelopment'
import FAQ from '../components/landingPage/FAQ'
import Team from '../components/landingPage/Team'
import ContactUs from '../components/landingPage/Contactus'

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