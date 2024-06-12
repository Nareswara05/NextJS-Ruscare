import React from 'react'

export default async function DescConsultant  ({dataConsultant}) {
  return (
    <div className='flex flex-col gap-6 max-w-[800px]'>
        <div className='flex flex-col gap-3'>
            <h1 className='text-[20px] font-bold text-textPrimary'>Tentang Saya</h1>
            <p className='text-base text-textPrimary opacity-80 text-[16px]'>{dataConsultant.about}</p>
        </div>
        <div className='flex flex-col gap-3'>
            <h1 className='text-[20px] font-bold text-textPrimary'>Pengalaman dan Sertifikasi</h1>
            <p className='text-base text-textPrimary opacity-80 text-[16px]'>{dataConsultant.sertfication}</p>
        </div>
    </div>
  )
}

