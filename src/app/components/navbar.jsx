"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { logoPurple, logowhite } from '../lib/utils/svg';
import { FiLogIn } from "react-icons/fi";
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { TiArrowSortedDown } from "react-icons/ti";
import { RxCross1 } from "react-icons/rx";


export default function Navbar() {

    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 948;



    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return width < breakpoint ? <NavbarMobile /> : <NavbarDesktop />;

}

function NavbarDesktop() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
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
        <nav className='w-screen bg-white px-20 py-[30px] flex items-center fixed'>
            <div className='grid grid-cols-3 w-full items-center'>
                <Image
                    src={logoPurple}
                    width={120}
                    height={60}
                    className="object-contain"
                    alt="logo ruscare"
                />
                <ul className="flex text-[16px] font-semibold gap-5 text-textPrimary">
                    {data.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href}>
                                <h3 className="hover-underline">{item.menu}</h3>
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
        <div className="w-screen flex justify-between fixed z-10 px-5 py-4 bg-white shadow-md ">
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
                <div className="fixed top-0 left-0 w-screen h-screen bg-white">

                    <div className="flex flex-col h-full w-full px-5 pt-4 relative justify-between">
                        <div className="flex w-full justify-between">
                            <div className="flex gap-7">
                                <div className="flex gap-6">
                                    <div className='text-primary text-4xl' onClick={toggleMobileMenu}>
                                    <RxCross1 />
                                    </div>
                                    <Image
                                        src={logoPurple}
                                        alt="Logo"
                                        width={120}
                                        height={60}
                                        className="object-contain"
                                    />
                                </div>
                                <div className={`flex items-center gap-4  font-urbanist text-base text-primary  `}>


                                </div>
                            </div>


                            

                        </div>
                        <ul className="flex flex-col text-[14px] font-bold  gap-9 text-textPrimary items-center">
                            {data.map((item) => (
                                <li key={item.id}>
                                    <Link href={item.href}>
                                        <h3 className="hover-underline text-2xl ">{item.menu}</h3>
                                    </Link>
                                </li>
                            ))}

                        </ul>
                        <div></div>
                    </div>
                    4
                </div>
            )}
        </div>
    )

}







