import React from 'react'
import Hero from '../../components/HomeComponents/Hero'
import Timer from '../../components/HomeComponents/Timer'
import Events from '../../components/HomeComponents/Events/Events'

const Home = () => {
  return (
    <div>
      <Hero />
      <Timer />
      <Events />
    </div>
  )
}

export default Home