import React from 'react';
import Image from 'next/image';
import { dotsPurplesmall } from '@/app/lib/utils/svg';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';

const HeroCard = ({ title }) => {
    return (
        <div className='group bg-white px-7 py-10 relative w-[350px] rounded-xl transition-colors duration-300 hover:bg-secondary overflow-hidden'>
            <div className='flex justify-between'>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-primary text-[20px] font-bold transition-colors duration-300 group-hover:text-white'>{title}</h1>
                    <hr className='border-2 border-primary w-24 transition-colors duration-300 group-hover:border-white' />
                </div>
                <Link href={``} className='p-2 bg-white bg-opacity-20 rounded-full w-fit h-fit text-2xl group-hover:animate-bounce'>
                    <BsArrowRight />
                </Link>
            </div>
            <Image
                src={dotsPurplesmall}
                className='absolute top-0 right-0 transition-opacity duration-300 group-hover:opacity-0  '
            />
        </div>
    );
}

export default HeroCard;
