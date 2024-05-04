"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { logoPurple, logowhite } from '../lib/utils/svg';
import { FiLogIn } from "react-icons/fi";
import { TiArrowSortedDown } from "react-icons/ti";


function NavbarDesktop() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const data = [
        {
            menu: "Tes Psikologi",
            href: "/psychological-test"
        },
        {
            menu: "Artikel",
            href: "/article"
        },
        {
            menu: "Konsultan",
            href: "/consultant"
        },
        {
            menu: "Selfcare",
            href: "/selfcare"
        },
    ];

    return (
        <nav className='w-screen bg-white px-20 py-[30px] flex items-center fixed'>
            <div className='grid grid-cols-3 w-full items-center'>
                <Image
                    src={logoPurple}
                    width={120}
                    height={60}
                    className="object-contain"
                    alt="logo ruscare"
                />
                <ul className="flex text-[16px] font-semibold gap-5 text-textPrimary items-center justify-center">
                    {data.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href}>
                                <h3 className="hover-underline w-max">{item.menu}</h3>
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className=' text-textPrimary text-lg justify-end flex'>
                    <button className="flex items-center space-x-1 focus:outline-none" onClick={toggleDropdown}>
                        <FiLogIn />
                        <h1 className='font-medium'>Login</h1>
                        <TiArrowSortedDown />
                    </button>
                    {isDropdownOpen && (
                        <div className="absolute top-24 right-20 py-5 pl-5 bg-gray-100 shadow-lg rounded-md mt-2 w-[300px]">
                            <h1 className='text-primary text-[14px] font-bold'>Selamat Datang Di RusCare</h1>
                            <ul className="py-2 flex">
                                <li>
                                    <Link href="/login">
                                        <h2 className="block px-8 py-2 font-medium text-[16px] text-white bg-primary rounded-l-full">Daftar</h2>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/register">
                                        <h2 className="block px-8 py-2 font-medium text-[16px] text-white bg-[#C680FF] rounded-r-full">Masuk</h2>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavbarDesktop