import React from 'react'
import Image from 'next/image'
import { starYellow } from '@/app/lib/utils/svg'

const HeroLanding = () => {
    return (
        <div className='bg-primary h-screen w-screen flex flex-col items-center px-[236px]'>
            <div className='flex flex-col  pt-44 w-full'>
                <div className='flex w-full justify-start'>
                    <Image
                        src={starYellow}
                    />
                </div>
                <h1 className='text-white text-[52px] text-center font-bold'>Memiliki <span className='text-secondary'>Masalah</span> di sekolah?
                    Kami disini siap membantu!</h1>
                <div className='flex w-full justify-end'>
                    <Image
                        src={starYellow}
                    />
                </div>
                <h1 className='text-[20px] text-white font-normal text-center'>Mari kita dapatkan solusi dari semua masalahmu bersama mentor terbaik</h1>
                <div className='flex gap-6 w-full justify-center items-center pt-6'>
                <button
                        class="relative px-8 py-4 rounded-md bg-secondary isolation-auto h-fit z-10 border-2 border-primary  hover:border-white before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:text-white before:-right-full before:hover:right-0 before:rounded-full before:bg-primary before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center text-white shadow-sm  hover:bg-secondary disabled:opacity-50 disabled:pointer-events-none text-[16px] font-semibold"
                    >
                        Konsultasi Sekarang!
                    </button>
                    <button
                        class="relative px-8 py-4 rounded-md bg-transparent isolation-auto h-fit z-10 border-2 border-white before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:text-white before:-right-full before:hover:right-0 before:rounded-full before:bg-secondary before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center text-white shadow-sm  hover:bg-primary disabled:opacity-50 disabled:pointer-events-none hover:border-primary text-[16px] font-semibold"
                    >
                        Jelajahi Sekarang!
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HeroLanding