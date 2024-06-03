import React from 'react'

const HeroDecoration = () => {
  return (
    <div className=' bg-secondary rounded-2xl h-[256px]  relative w-full overflow-hidden '>
        <div className='absolute bg-[#E7BA00] w-24 h-24 rounded-lg -bottom-5 -left-5 rotate-45'></div>
        <div className='absolute bg-[#E7BA00] w-16 h-16 rounded-lg -top-2 -left-3'></div>
        <div className='absolute bg-[#E7BA00] w-16 h-16 rounded-lg -bottom-6 right-6'></div>
        <div className='absolute bg-[#E7BA00] w-16 h-16 rounded-lg -top-2 -right-3 rotate-45'></div>
    </div>
  )
}

export default HeroDecoration