"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { logoPurple } from '../lib/utils/svg';
import NavAuth from './nav-auth';
import ProfileMenuNav from './profile-nav';

function NavbarDesktop() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

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
    <nav className='w-screen bg-white px-20 py-[30px] flex items-center fixed shadow-sm z-50'>
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
        <div className='text-textPrimary text-lg justify-end flex'>
          {isLoggedIn ? <ProfileMenuNav /> : <NavAuth />}
        </div>
      </div>
    </nav>
  );
};

export default NavbarDesktop;
