import React, { useState } from 'react'
import Image from 'next/image'
import { GoPerson } from "react-icons/go";
import { AvatarTes } from '@/app/lib/utils/image'
import { IoIosArrowDown } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import Link from 'next/link';
import Logout from '@/app/lib/service/endpoint/auth/logout';
import Swal from 'sweetalert2';
import { CiLogout } from 'react-icons/ci';

const MenuProfileDashboard = () => {
    const handleLogout = async () => {
        try {
            await Logout();
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

        <div className='text-3xl text-red-600 cursor-pointer hover:bg-red-600 p-2 hover:bg-opacity-20 hover:rounded-lg' onClick={confirmLogout}>
            <CiLogout />
        </div>

    );
};

export default MenuProfileDashboard;
