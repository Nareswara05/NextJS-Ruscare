"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import the usePathname hook
import { logoPurple, logowhite } from '../lib/utils/svg';
import NavAuth from './nav-auth';
import ProfileMenuNav from './profile-nav';

function NavbarDesktop() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const markerRef = useRef(null);
  const pathname = usePathname(); // Get the current pathname

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (markerRef.current) {
      observer.observe(markerRef.current);
    }

    return () => {
      if (markerRef.current) {
        observer.unobserve(markerRef.current);
      }
    };
  }, []);

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

  const specialRoutes = [
    /^\/article/, 
    /^\/psychological-test\/detail/,
    /^\/mailbox/,
    /^\/profile\/edit-profile/,
  ];

  const isSpecialRoute = specialRoutes.some(route => route.test(pathname));

  return (
    <>
      <div ref={markerRef}></div>
      <nav className={`w-screen px-20 py-[30px] flex items-center fixed z-50 transition-colors duration-300 ${isScrolled || isSpecialRoute ? 'bg-white shadow-sm text-black' : 'bg-transparent text-white'}`}>
        <div className='grid grid-cols-3 w-full items-center'>
          <Link href="/">
            <Image
              src={isScrolled || isSpecialRoute ? logoPurple : logowhite}
              width={120}
              height={60}
              className="object-contain"
              alt="logo ruscare"
            />
          </Link>
          <ul className="flex text-[16px] font-semibold gap-5 items-center justify-center">
            {data.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>
                  <h3 className="hover-underline w-max">{item.menu}</h3>
                </Link>
              </li>
            ))}
          </ul>
          <div className='text-lg justify-end flex'>
            {isLoggedIn ? <ProfileMenuNav /> : <NavAuth />}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarDesktop;
