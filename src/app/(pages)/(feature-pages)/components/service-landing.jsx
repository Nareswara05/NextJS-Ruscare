import React from 'react';
import CardService from './decoration/card-service';
import Image from 'next/image';
import { halfcircle } from '@/app/lib/utils/svg';
import listService from '@/app/lib/service/endpoint/api/list-service';

export default async function ServiceLanding ()  {
    const services = await listService();
    return (
        <div className='w-full p-36  bg-primary flex flex-col items-center justify-center relative'>
            <div className='absolute -left-5 top-80'>
                <div className='w-28 h-28 bg-[#8800F4] rotate-45 opacity-20 absolute -top-12 rounded-lg'></div>
                <div className='w-28 h-28 bg-[#8800F4] rotate-45 opacity-20 rounded-lg'></div>
            </div>
            <div className='absolute -right-5 top-[400px]'>
                <div className='w-28 h-28 bg-[#8800F4] rotate-45 opacity-20 absolute -top-12 rounded-lg'></div>
                <div className='w-28 h-28 bg-[#8800F4] rotate-45 opacity-20 rounded-lg'></div>
            </div>
            <Image
                src={halfcircle}
                className='absolute left-20 top-20'
            />
            <div className='text-center'>
                <h1 className='font-bold text-[36px]'>LAYANAN KONSULTASI</h1>
                <h1 className='opacity-65 font-normal text-[20px]'>Kami memiliki layanan berkualitas yang dapat kamu gunakan di RusCare ini</h1>
            </div>
            <div className='flex flex-wrap gap-8 pt-16 items-center justify-center'>
                {services.map((item, index) => (
                    <CardService key={index} title={item.name} description={item.description} />
                ))}
            </div>
        </div>
    )
}
