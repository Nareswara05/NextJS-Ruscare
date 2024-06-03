import React from 'react'
import CardService from './decoration/card-service'

const ServiceLanding = () => {
    const data = [
        {
            title: 'Konseling Individual',
        },
        {
            title: 'Konseling Kelompok',
        },
        {
            title: 'Bimbingan Kelompok',
        },
        {
            title: 'Layanan Klasikal',
        },
        {
            title: 'Layanan Konsultasi',
        },
    ]
    return (
        <div className='w-full p-36 bg-primary flex flex-col items-center justify-center'>
            <div className='text-center'>
                <h1 className='font-bold text-[36px]'>LAYANAN KONSULTASI</h1>
                <h1 className='opacity-65 font-normal text-[20px]'>Kami memiliki layanan berkualitas yang dapat kamu gunakan di RusCare ini</h1>
            </div>
            <div className='flex flex-wrap gap-4 pt-16 items-center justify-center'>
                {data.map((item, index) => (
                    <CardService key={index} title={item.title} />
                ))}
            </div>
        </div>
    )
}

export default ServiceLanding

