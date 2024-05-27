import React, { useState } from 'react';
import { RxDashboard } from 'react-icons/rx';
import { CiMail, CiLogout } from "react-icons/ci";
import { AvatarTes } from '../lib/utils/image';
import { IoIosArrowDown } from 'react-icons/io';
import Image from 'next/image';
import Link from 'next/link';
import { GoPerson } from 'react-icons/go';
import logout from '../lib/service/endpoint/auth/logout';
import swal from 'sweetalert';  
import Swal from 'sweetalert2';

const ProfileMenuNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = async () => {
        try {
            await logout();
            localStorage.removeItem('token'); 
            window.location.href = '/'; 
        } catch (error) {
            console.error('Gagal logout:', error);
        }
    };

    const confirmLogout = () => {
        Swal.fire({
            title: 'Apakah kamu yakin?',
            text: "Setelah keluar, Anda harus masuk lagi untuk mengakses akun Anda.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Iya, Keluar'
        }).then((result) => {
            if (result.isConfirmed) {
                handleLogout();
            }
        });
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
                <div className='absolute top-20 right-0 bg-white py-[20px] w-[226px] shadow-lg px-[10px] rounded-xl'>
                    <ul>
                        <li className='cursor-pointer flex text-textPrimary gap-3 w-full hover:bg-gray-100 p-[10px] rounded-lg'>
                            <Link href="/dashboard" className='flex gap-3 items-center'>
                                <div className='text-xl'>
                                    <RxDashboard />
                                </div>
                                Dashboard
                            </Link>
                        </li>
                        <li className= 'cursor-pointer flex text-textPrimary gap-3 w-full hover:bg-gray-100 p-[10px] rounded-lg'>
                            <Link href="/profile" className='flex gap-3 items-center'>
                                <div className='text-xl'>
                                    <GoPerson />
                                </div>
                                Profil Saya
                            </Link>
                        </li>
                        <li className='cursor-pointer flex text-textPrimary gap-3 w-full hover:bg-gray-100 p-[10px] rounded-lg'>
                            <Link href="/dashboard" className='flex gap-3 items-center'>
                                <div className='text-xl'>
                                    <CiMail  />
                                </div>
                                Mailbox
                            </Link>
                        </li>
                        <li onClick={confirmLogout} className=' cursor-pointer flex  gap-3 w-full text-red-600 hover:bg-gray-100 p-[10px] rounded-lg'>
                            <div className='flex gap-3 items-center'>
                                <div className='text-xl'>
                                    <CiLogout />
                                </div>
                                Logout
                            </div>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default ProfileMenuNav;
