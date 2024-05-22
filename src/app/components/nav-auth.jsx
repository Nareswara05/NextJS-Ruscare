import React, { useState } from 'react'
import { FiLogIn } from 'react-icons/fi';
import { TiArrowSortedDown } from 'react-icons/ti';
import Link from 'next/link';

const NavAuth = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return (
        <div>
            <button className="flex items-center space-x-1 focus:outline-none" onClick={toggleDropdown}>
                <FiLogIn  />
                <h1 className='font-medium'>Login</h1>
                <TiArrowSortedDown />
            </button>
            {isDropdownOpen && (
                <div className="absolute top-24 right-20 py-5 pl-5 bg-gray-100 shadow-lg rounded-md mt-2 w-[300px]">
                    <h1 className='text-primary text-[14px] font-bold'>Selamat Datang Di RusCare</h1>
                    <ul className="py-2 flex">
                        <li>
                            <Link href="/register">
                                <h2 className="block px-8 py-2 font-medium text-[16px] text-white bg-primary rounded-l-full">Daftar</h2>
                            </Link>
                        </li>
                        <li>
                            <Link href="/login">
                                <h2 className="block px-8 py-2 font-medium text-[16px] text-white bg-[#C680FF] rounded-r-full">Masuk</h2>
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default NavAuth