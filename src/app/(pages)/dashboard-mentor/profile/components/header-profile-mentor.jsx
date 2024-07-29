import React from 'react'
import Image from 'next/image'
import { AvatarTes } from '@/app/lib/utils/image'
import { FiEdit } from "react-icons/fi";

const HeaderProfileMentor = () => {
    return (
        <div className='flex flex-col gap-8 p-6 border-2  bg-white border-gray-200 rounded-xl'>
            <div className='flex justify-between'>
                <div className='flex gap-6 items-center'>
                    <Image
                        src={AvatarTes}
                        className="rounded-full w-32 object-cover"
                    />
                    <div>
                        <h1 className='font-bold text-2xl text-textPrimary'>Udin petot</h1>
                        <h1 className='font-semibold text-md text-secondary pt-2'>Mentor PPLG</h1>
                        <h1 className='text-md text-gray-600'>Kudus, Jawa tengah</h1>
                    </div>
                </div>
                <button className='bg-white py-3 px-4 border-2 flex h-fit items-center gap-2 font-medium hover:bg-gray-50 text-primary border-primary rounded-lg'>
                    <FiEdit />
                    Edit Profil
                </button>
            </div>
        </div>
    )
}

export default HeaderProfileMentor