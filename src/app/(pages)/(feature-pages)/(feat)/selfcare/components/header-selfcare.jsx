import React from 'react'
import Image from 'next/image'
import { waveSelfcare } from '@/app/lib/utils/svg'

const HeaderSelfcare = () => {
    return (
        <div className='w-screen h-[444px] bg-primary flex justify-center items-center relative'>
            <Image
                src={waveSelfcare}
                alt=''
                className='w-full absolute bottom-0'
            />
            <div className='w-fit flex flex-col relative'>
                <h1 className='font-bold text-[48px] text-center'>Sudahkah Kamu
                    Mengenali Diri Sendiri?</h1>
                <h3 className='font-medium text-center text-white text-[20px] opacity-70'>Kenali diri dulu, baru tentukan yang terbaik untukmu</h3>
            </div>
        </div>
    )
}

export default HeaderSelfcare