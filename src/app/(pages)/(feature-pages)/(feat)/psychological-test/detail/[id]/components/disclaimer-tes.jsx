import React from 'react'
import Image from 'next/image'
import { warningIcon } from '@/app/lib/utils/svg'

const DisclaimerTes = () => {
  return (
    <div className='p-[38px] bg-[#F62626] w-full flex flex-col gap-5 rounded-lg'>
        <div className='flex items-center gap-3'>
            <Image
            src={warningIcon}
            width={30}
            height={30}
            alt=''
            />
            <h1 className='text-[24px] font-semibold'>Disclaimer</h1>
        </div>
        <h1 className='text-[18px] font-normal'>Jika Anda sedang mengalami krisis psikologis yang mengancam hidup Anda, layanan ini tidak direkomendasikan.</h1>
    </div>
  )
}

export default DisclaimerTes