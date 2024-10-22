import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function PsychologicalTesDetail({ data }) {
    return (
        <div className="flex flex-col items-center justify-center gap-8">
            <div>
                <h1 className='font-bold text-[36px] text-textPrimary'>{data.title}</h1>
                <h1 className='font-normal text-[16px] text-textPrimary'>{data.desc_full}</h1>
            </div>
            <div className='w-full items-start'>
                <Link href={`/psychological-test/detail/${data.slug}/question`}>
                    <button className='bg-secondary py-4 px-20 text-[16px] font-semibold text-white rounded-xl'>
                        Ikuti Tes
                    </button>
                </Link>
            </div>
        </div>
    )
}
