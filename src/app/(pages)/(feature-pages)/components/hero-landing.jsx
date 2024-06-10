import React from 'react'
import Image from 'next/image'
import { dotsPurple, starYellow } from '@/app/lib/utils/svg'
import HeroDecoration from './decoration/hero-decoration'
import HeroCard from './decoration/hero-card'

const HeroLanding = () => {
    return (
        <div className='overflow-hidden relative w-full h-full'>
            <div className='flex flex-col'>
                <div className='bg-primary h-[900px]  flex flex-col items-center px-[236px] '>
                    <div className='absolute -left-5 top-64'>
                        <div className='w-28 h-28 bg-[#8800F4] rotate-45 opacity-20 absolute -top-12 rounded-lg'></div>
                        <div className='w-28 h-28 bg-[#8800F4] rotate-45 opacity-20 rounded-lg'></div>
                    </div>
                    <div className='absolute -right-5 top-96'>
                        <div className='w-28 h-28 bg-[#8800F4] rotate-45 opacity-20 absolute -top-12 rounded-lg'></div>
                        <div className='w-28 h-28 bg-[#8800F4] rotate-45 opacity-20 rounded-lg'></div>
                    </div>
                    <div className='flex flex-col  pt-28 w-full'>
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
                        <div className='flex gap-6 w-full justify-center items-center pt-9'>
                            <button
                                class="relative px-8 py-4 rounded-md bg-transparent isolation-auto h-fit z-10 border-2 border-white  hover:border-white before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:text-white before:-right-full before:hover:right-0 before:rounded-full before:bg-secondary before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center text-white shadow-sm  hover:bg-primary disabled:opacity-50 disabled:pointer-events-none text-[16px] font-semibold gap-2"
                            >
                                Konsultasi Sekarang!
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    class="w-5 h-5 animate-bounce"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-between'>
                <Image
                src={dotsPurple}
                width={300}
                />
                <Image
                src={dotsPurple}
                width={300}
                />
                </div>
            </div>
            <div className='w-full px-[200px] absolute bottom-32 left-0 flex flex-col items-center '>

                <HeroDecoration />
                <HeroCard/>
            </div>
        </div>
    )
}

export default HeroLanding