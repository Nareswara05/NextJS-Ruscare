import React from 'react'

export default async function DescConsultant  ({dataConsultant}) {
  return (
    <div className='flex flex-col gap-6 max-w-[800px]'>
        <div className='flex flex-col gap-3'>
            <h1 className='text-[20px] font-bold text-textPrimary'>Tentang Saya</h1>
            <p className='text-base text-textPrimary opacity-80 text-[16px]'>{dataConsultant.about_me}</p>
        </div>
    </div>
  )
}

