import React from 'react'
import { BsCalendar2Week } from "react-icons/bs";
import { PiClockCountdownLight } from "react-icons/pi";
import { GiCheckMark } from "react-icons/gi";


const DashboardStats = () => {
  return (
    <div className=''>
        <h1 className='text-[24px] text-textPrimary font-semibold'>Statistik Konsultasi</h1>
        <div className='flex flex-row gap-3 pt-8'>
            <div className=' flex w-full justify-between p-4 bg-white shadow-custom rounded-lg'>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-[16px] text-[#202224] font-semibold'>Yang Akan Datang</h2>
                    <h1 className='text-textPrimary text-[28px] font-bold'>3</h1>
                </div>
                <div className='p-4 text-[#8280FF] bg-[#8280FF] bg-opacity-20 text-xl h-fit rounded-2xl '>
                    <BsCalendar2Week />
                </div>
            </div>
            <div className=' flex w-full justify-between p-4 bg-white shadow-custom rounded-lg'>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-[16px] text-[#202224] font-semibold'>Sedang Berlangsung</h2>
                    <h1 className='text-textPrimary text-[28px] font-bold'>3</h1>
                </div>
                <div className='p-4 text-[#FF3797] bg-[#FF3797] bg-opacity-20 text-xl h-fit rounded-2xl '>
                    <PiClockCountdownLight />
                </div>
            </div>
            <div className=' flex w-full justify-between p-4 bg-white shadow-custom rounded-lg'>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-[16px] text-[#202224] font-semibold'>Telah Selesai</h2>
                    <h1 className='text-textPrimary text-[28px] font-bold'>3</h1>
                </div>
                <div className='p-4 text-[#3AAC75] bg-[#3AAC75] bg-opacity-20 text-xl h-fit rounded-2xl '>
                    <GiCheckMark />
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashboardStats