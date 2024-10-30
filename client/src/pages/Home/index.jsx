import React from 'react'
import Hero from '../../components/HomeComponents/Hero'
import Timer from '../../components/HomeComponents/Timer'
import Events from '../../components/HomeComponents/Events/Events'
import Gallery from '../../components/HomeComponents/Gallery'

const Home = () => {
  return (
    <div>
      <Hero />
      <Timer />
      <Events />
      <Gallery />
    </div>
  )
}

export default Home