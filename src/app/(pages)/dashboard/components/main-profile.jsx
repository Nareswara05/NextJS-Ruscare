import React, { useState } from 'react'
import Image from 'next/image'
import { GoPerson } from "react-icons/go";
import { AvatarTes } from '@/app/lib/utils/image'
import { IoIosArrowDown } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";

const MenuProfileDashboard = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='relative'>
            <div className='flex gap-1 items-center cursor-pointer' onClick={toggleMenu}>
                <Image
                    src={AvatarTes}
                    width={100}
                    className='w-[44px] rounded-full'
                />
                <IoIosArrowDown className={`text-gray-400 text-2xl transition duration-200 ease-in-out ${isMenuOpen ? 'rotate-180' : ''}`} />
            </div>

            {isMenuOpen && (
                <div className='absolute top-full right-0 bg-white py-[20px] w-[226px] shadow-lg px-[10px] rounded-xl'>
                    <ul>
                        <li className='flex text-textPrimary gap-3 w-full hover:bg-gray-100 p-[10px] rounded-lg'>
                            <div className='text-xl'>
                                <GoPerson />
                            </div>
                            Profil
                        </li>
                        <li className='flex text-textPrimary gap-3 w-full hover:bg-gray-100 p-[10px] rounded-lg'>
                            <div className='text-xl'>
                                <IoMailOutline />
                            </div>
                            Mailbox
                        </li>
                        <li className='flex text-red-600 gap-3 w-full hover:bg-gray-100 p-[10px] rounded-lg'>
                            <div className='text-xl'>
                                <IoIosLogOut />
                            </div>
                            Logout
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default MenuProfileDashboard;
