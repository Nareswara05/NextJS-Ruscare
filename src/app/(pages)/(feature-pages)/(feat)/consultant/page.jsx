import listConsultant from '@/app/lib/service/endpoint/api/list-consultant';
import React from 'react'
import ConsultantCard from './components/consultant-card'
import HeaderConsultant from './components/header-consultant';

export default async function ConsultantPage()  {
  const consultants = await listConsultant();

  
  return (
    <div className='bg-white py-24 overflow-x-hidden'>
      <HeaderConsultant/>
      <div className='flex flex-wrap justify-center gap-10 pt-8'>
        {consultants.map((consultant) => (
          <ConsultantCard key={consultant.id} consultant={consultant} />
        ))}
      </div>
    </div>
  )
}

