import React from 'react'
import { AvatarTes } from '@/app/lib/utils/image'
import { TbEdit } from "react-icons/tb";
import Image from 'next/image'


const ChangeProfilePicture = () => {
    return (
        <div className='relative w-fit h-fit'>
            <Image
                src={AvatarTes}
                className="w-48 rounded-full object-cover"
            />
            <div className='p-3 text-xl bg-primary text-white absolute right-0 bottom-0 rounded-full'>
                <TbEdit />
            </div>
        </div>)
}

export default ChangeProfilePicture