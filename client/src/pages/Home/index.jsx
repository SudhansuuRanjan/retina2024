import React from 'react'
import Hero from '../../components/HomeComponents/Hero'
import Timer from '../../components/HomeComponents/Timer'
import Events from '../../components/HomeComponents/Events/Events'
import Gallery from '../../components/HomeComponents/Gallery'
import AboutUs from '../../components/HomeComponents/AboutUs'

const Home = () => {
  return (
    <div>
      <Hero />
      <Timer />
      <Events />
      <Gallery />
      <AboutUs />
    </div>
  )
}

export default Home