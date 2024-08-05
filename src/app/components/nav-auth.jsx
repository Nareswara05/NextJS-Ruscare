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
            <Link href="auth/login">
                <button className='px-8 py-3 hover:bg-primary hover:text-white border-primary rounded-xl border  flex items-center gap-2'>
                    <FiLogIn />
                    Login
                </button>
            </Link>
        </div>
    )
}

export default NavAuth