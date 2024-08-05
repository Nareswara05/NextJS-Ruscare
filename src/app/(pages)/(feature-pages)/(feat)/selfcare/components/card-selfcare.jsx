import React from 'react';
import Image from 'next/image';
import { IoIosArrowForward } from 'react-icons/io';
import Link from 'next/link';

const CardSelfcare = ({ data }) => {
    const imageUrl = `https://api.ruscarestudent.com/${data.image}`;

    return (
        <div className='flex h-[180px] w-[650px] bg-white shadow-custom rounded-xl p-4 gap-3'>
            <Image
                src={imageUrl}
                width={1000}
                height={1000}
                className="w-[166px] object-cover rounded-xl"
                alt={data.title}
            />
            <div className='flex flex-col justify-between'>
                <div className='flex flex-col gap-2'>
                    <h1 className='font-semibold text-[20px] text-textPrimary'>{data.title}</h1>
                    <h3 className='text-base font-[12px] text-textPrimary'>{data.description}</h3>
                </div>
                <Link href={data.slug} className='flex gap-1 items-center text-primary'>
                    <h1 className='font-semibold'>Coba Sekarang</h1>
                    <IoIosArrowForward />
                </Link>
            </div>
        </div>
    );
}

export default CardSelfcare;
