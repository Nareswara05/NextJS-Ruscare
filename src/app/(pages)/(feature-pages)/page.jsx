import React from 'react'
import AboutLanding from './components/about-landing'
import CategoryLanding from './components/category-landing'
import HeroLanding from './components/hero-landing'
import ServiceLanding from './components/service-landing'

const page = () => {
  return (
    <div className='overflow-x-hidden bg-white flex flex-col gap-16'>
      <HeroLanding/>
      <AboutLanding/>
      <ServiceLanding/>
      <CategoryLanding/>
    </div>
  )
}

export default page