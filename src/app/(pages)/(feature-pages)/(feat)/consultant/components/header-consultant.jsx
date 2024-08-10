import React from 'react'
import Image from 'next/image'
import { starYellow } from '@/app/lib/utils/svg'
import DecorationConsultant from './decoratoion-consultant'

const HeaderConsultant = () => {
  return (
    <div className='w-screen h-[380px] bg-primary flex justify-center items-center relative'>
        <div className='w-fit flex flex-col relative'>
            <Image
            src={starYellow}
            className="absolute -top-16 -left-16"
            alt=''
            />
            <h1 className='font-bold text-[48px]'>Konsultan Profesional RusCare</h1>
            <Image
            src={starYellow}
            className='absolute -right-16 -bottom-16'
            alt=''
            />
        </div>
        <div className='flex justify-between absolute w-full'>
            <DecorationConsultant/>
            <DecorationConsultant/>
        </div>
    </div>
  )
}

export default HeaderConsultant