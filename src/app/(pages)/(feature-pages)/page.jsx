import React from 'react'
import AboutLanding from './components/about-landing'
import HeroLanding from './components/hero-landing'

const page = () => {
  return (
    <div className='overflow-x-hidden bg-white flex flex-col gap-16'>
      <HeroLanding/>
      <AboutLanding/>
    </div>
  )
}

export default page