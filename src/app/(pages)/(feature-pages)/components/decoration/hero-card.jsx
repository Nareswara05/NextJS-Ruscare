"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { mentor, student } from '@/app/lib/utils/image';
import { logoNotext } from '@/app/lib/utils/svg';
import Link from 'next/link';

const HeroCard = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='flex flex-col absolute items-center justify-center -top-24'>
            <Image
                src={logoNotext}
                className="p-4 bg-primary rounded-full h-fit border-[8px] border-white object-cover absolute -bottom-9 hover:animate-spin  z-10"
                width={100}
                height={100}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                alt=''
            />
            <div className='flex gap-12'>
                <div className={`flex flex-col items-center justify-center card-1 transform transition-transform duration-500 ease-in-out ${isHovered ? '-rotate-6' : ''}`}>
                    <Image
                        src={student}
                        className='rounded-2xl w-full h-[250px] border-[10px] border-white object-cover'
                        alt=''
                    />
                    <Link href="/dashboard" className='absolute -bottom-9'>
                        <button className=' px-8 py-3 max-w-56 bg-primary border-[6px] rounded-xl border-white text-white hover:bg-purple-700 font-semibold'>Masuk sebagai peserta didik</button>
                    </Link>
                </div>
                <div className={`flex flex-col items-center justify-center card-2 transform transition-transform duration-500 ease-in-out ${isHovered ? 'rotate-6' : ''}`}>
                    <Image
                        src={mentor}
                        className='rounded-2xl w-full h-[250px] border-[10px] border-white object-cover'
                        alt=''
                    />
                    <Link href="https://ruscare-mentor.vercel.app" className='absolute -bottom-9'>
                        <button className=' px-8 py-3 max-w-56 bg-secondary border-[6px] rounded-xl border-white text-white hover:bg-yellow-500 font-semibold '>Masuk sebagai mentor</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HeroCard;
