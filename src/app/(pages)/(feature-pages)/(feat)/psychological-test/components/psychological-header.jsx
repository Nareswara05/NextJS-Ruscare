import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import Image from 'next/image';
import { meditation } from '@/app/lib/utils/image';
import { dotsYellow } from '@/app/lib/utils/svg';


const PsychologicalHeader = () => {
    return (
        <div className='h-[600px] bg-primary w-full flex justify-center items-center px-32 gap-9 relative overflow-hidden'>
            <div className='flex flex-col gap-8'>
                <div className='flex flex-col gap-1'>
                    <h1 className='font-bold text-[48px]'>Pertumbuhan Pribadi Dimulai Di Sini</h1>
                    <h1 className='text-[16px] font-normal'>Temukan Jalan Anda Menuju Kesejahteraan Emosional yang Berkelanjutan dan Keseimbangan Hidup yang Memuaskan, Dimulai dengan Langkah Pertama Menuju Pemahaman Diri dan Pengelolaan Emosi yang Sehat.</h1>
                </div>
                <div className='text-secondary font-bold flex items-center'>
                    Coba Sekarang
                    <FaArrowRightLong />
                </div>
            </div>
            <Image
            src={meditation}
            width={500}
            height={500}
            className="object-cover"
            />
            <div className='w-[167px] h-[167px] rounded-full bg-[#913BD7] absolute -top-12 -right-10'></div>
            <div className='w-[167px] h-[167px] rounded-full bg-[#913BD7] absolute -bottom-16 -left-16'></div>
            <div className='w-[167px] h-[167px] rounded-full bg-[#913BD7] opacity-50 absolute bottom-0 -left-24'></div>
            <Image
            src={dotsYellow}
            width={100}
            height={100}
            className='absolute right-0 bottom-0 object-cover'
            />

        </div>
    )
}

export default PsychologicalHeader