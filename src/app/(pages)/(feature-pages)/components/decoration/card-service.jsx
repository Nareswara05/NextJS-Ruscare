import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { dotsPurplesmall } from '@/app/lib/utils/svg'

export default function CardService  ({title}) {
  return (
    <div className='bg-white px-7 py-10 relative w-[350px] rounded-xl'>
        <div className='flex flex-col gap-2'>
            <h1 className='text-primary text-[20px] font-bold'>{title}</h1>
            <hr className='border-2 border-primary w-24'/>
        </div>
        <Image
        src={dotsPurplesmall}
        className='absolute -bottom-5 right-5'
        />
    </div>
  )
}

