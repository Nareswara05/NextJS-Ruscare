import React from 'react'
import CardSelfcare from './components/card-selfcare'
import HeaderSelfcare from './components/header-selfcare'
import { AvatarTes } from '@/app/lib/utils/image'
import listSelfcare from '@/app/lib/service/endpoint/api/list-selfcare'

export default async function page(){
  const selfcare = await listSelfcare();


  return (
    <div className='pb-24 bg-white overflow-x-hidden flex flex-col gap-20 justify-center items-center'>
      <HeaderSelfcare />
      <div className='grid grid-cols-2 gap-6 items-center'>
        {selfcare.map((data) => (
          <CardSelfcare key={data.id} data={data} />
        ))}
      </div>
    </div>
  )
}
