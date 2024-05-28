import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function CardPsychological({ data }) {

   
    return (
        <div className='w-[300px] h-[568px] bg-white shadow-custom flex flex-col items-center justify-between py-5 px-7'>
            <div className="flex flex-col gap-4 items-center">
                <Image
                    src={data.image}
                    width={200}
                    height={200}
                    className='object-cover'
                />
                <div className="flex flex-col gap-2">
                    <h1 className='text-[20px] text-textPrimary font-semibold '>{data.title}</h1>
                    <h1 className='text-[12px] text-textPrimary font-normal '>{data.desc}</h1>
                </div>
            </div>
            <Link className='w-full' href={`/psychological-test/${data.id}`}>
                <button className='w-full py-4 bg-secondary hover:bg-yellow-500 text-[16px] font-semibold text-white rounded-2xl    '>
                    Ikuti Tes
                </button>
            </Link>
        </div>
    )
}

