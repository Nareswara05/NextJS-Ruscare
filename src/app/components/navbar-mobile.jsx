"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { logoPurple, logowhite } from '../lib/utils/svg';
import { FiLogIn } from "react-icons/fi";
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { TiArrowSortedDown } from "react-icons/ti";
import { RxCross1 } from "react-icons/rx";
function NavbarMobile() {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const data = [
        {
            menu: "Tes Psikologi",
            href: "/tes-psikologi"
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
        <div className="w-screen flex justify-between fixed px-5 py-4 bg-white shadow-md z-50">
            <div className="flex gap-6">
                <button
                    onClick={toggleMobileMenu}
                    className="cursor-pointer"
                >
                    <FontAwesomeIcon
                        icon={isMobileMenuOpen ? faTimes : faBars}
                        style={{ color: "#9F41EA", fontSize: "2em" }}
                    />
                </button>
                <Image
                    src={logoPurple}
                    alt="Logo"
                    width={120}
                    height={60}
                    className="object-contain"
                />
            </div>

            <div className=' text-textPrimary text-lg justify-end flex'>
                <button className="flex items-center space-x-1 focus:outline-none" onClick={toggleDropdown}>
                    <FiLogIn />
                    <h1 className='font-medium'>Login</h1>
                    <TiArrowSortedDown />
                </button>
                {isDropdownOpen && (
                    <div className="absolute top-24 right-10 py-5 pl-5 bg-gray-100 shadow-lg rounded-md mt-2 w-[300px]">
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

            {isMobileMenuOpen && (
                <div className="absolute top-20 inset-x-8 bg-white px-12 py-12 rounded-xl">
                    <ul className="flex flex-col text-[14px] font-bold gap-1 text-textPrimary">
                            {data.map((item) => (
                                <li key={item.id} className="hover:bg-primary hover:text-white p-4 rounded-2xl">
                                    <Link href={item.href}>
                                        <h3 className=" text-xl sm:text-2xl w-max">{item.menu}</h3>
                                    </Link>
                                </li>
                            ))}

                        </ul>
                    </div>
            )}
        </div>
    )

}


export default NavbarMobile