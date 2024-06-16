    import React from 'react'
    import Image from 'next/image'
    import { IoIosArrowForward } from 'react-icons/io'
    import Link from 'next/link'
    import { AvatarTes } from '@/app/lib/utils/image'


    const CardSelfcare = ({ data }) => {
        return (
            <div className='flex h-[180px] w-[650px] bg-white shadow-custom rounded-xl p-4 gap-3'>
                <Image
                    src={data.image}
                    width={100}
                    height={100}
                    className="w-[166px]  object-cover rounded-xl"
                />
                <div className='flex flex-col justify-between  '>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-semibold text-[20px] text-textPrimary'>{data.title}</h1>
                        <h3 className='text-base font-[12px] text-textPrimary'>{data.desc}</h3>
                    </div>
                    <Link href={`/selfcare/${data.id}`} className='flex gap-1 items-center text-primary'>
                        <h1 className='font-semibold'>Coba Sekarang</h1>
                        <IoIosArrowForward />
                    </Link>
                </div>
            </div>
        )
    }

    export default CardSelfcare