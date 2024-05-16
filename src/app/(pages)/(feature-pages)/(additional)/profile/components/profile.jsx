import React from 'react'
import Image from 'next/image'
import { AvatarTes, bgProfil } from '@/app/lib/utils/image'
import Link from 'next/link'

const Profile = () => {
    return (
        <div className='h-screen bg-white flex justify-center'>
            <div className='w-screen h-72'>
                <Image
                    src={bgProfil}
                    className="w-full object-cover h-full"
                />
            </div>
            <div className='absolute items-center top-44 pb-8 px-[75px] justify-center flex flex-col    w-[500px] bg-white shadow-custom rounded-xl'>
                <div className='relative -top-16'>
                    <Image
                        src={AvatarTes}
                        className="w-[145px]  border-white border-8 object-cover h-full rounded-full "
                    />
                    <h1 className='text-[22px] font-bold text-textPrimary'>Udin Kacrut</h1>
                    <h1 className='text-[16px] font-medium text-textPrimary'>Udin@gmail.com</h1>
                </div>
                <div className='w-full flex flex-col gap-4'>
                    <div className='flex justify-between'>
                        <h1 className='font-semibold text-[16px] text-textPrimary'>Status</h1>
                        <h1 className='font-bold text-[16px] text-primary   '>Guest</h1>
                    </div>
                    <div className='flex justify-between'>
                        <h1 className='font-semibold text-[16px] text-textPrimary'>Tanggal Lahir</h1>
                        <h1 className='font-bold text-[16px] text-textPrimary'>12 Januari 1892</h1>
                    </div>
                    <div className='flex justify-between'>
                        <h1 className='font-semibold text-[16px] text-textPrimary'>Jurusan</h1>
                        <h1 className='font-bold text-[16px] text-textPrimary'>PPLG</h1>
                    </div>
                    <div className='flex justify-between'>
                        <h1 className='font-semibold text-[16px] text-textPrimary'>NIS</h1>
                        <h1 className='font-bold text-[16px] text-textPrimary'>343432424</h1>
                    </div>
                </div>
                <Link href="profile/edit-profile" className='w-full'>
                    <button className='mt-9 font-semibold rounded-lg py-4 w-full bg-primary hover:bg-purple-700 text-white text-lg'>
                        Edit Profil
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Profile