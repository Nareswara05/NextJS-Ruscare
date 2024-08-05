import React, { useState } from 'react'
import { FiLogIn } from 'react-icons/fi';
import Link from 'next/link';

const NavAuth = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return (
        <div>
            
        </div>
    )
}

export default NavAuth