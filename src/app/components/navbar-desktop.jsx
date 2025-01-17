"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import the usePathname hook
import { logoPurple, logowhite } from '../lib/utils/svg';
import NavAuth from './nav-auth';
import ProfileMenuNav from './profile-nav';
import { FiLogIn } from 'react-icons/fi';

function NavbarDesktop() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const markerRef = useRef(null);
  const pathname = usePathname(); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
  
    const currentMarkerRef = markerRef.current; 
  
    if (currentMarkerRef) {
      observer.observe(currentMarkerRef);
    }
  
    return () => {
      if (currentMarkerRef) { 
        observer.unobserve(currentMarkerRef);
      }
    };
  }, []);
  

  useEffect(() => {
    const cookies = document.cookie.split('; ');
    const tokenCookie = cookies.find(cookie => cookie.startsWith('token='));

    if (tokenCookie) {
      const token = tokenCookie.split('=')[1];
      if (token) {
        setIsLoggedIn(true);
      }
    }
  }, []);

  const data = [
    {
      menu: "Kenali Dirimu",
      href: "/psychological-test"
    },
    {
      menu: "Artikel",
      href: "/article"
    },
    {
      menu: "Konselor",
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
    /^\/consultant\//,
  ];

  const isSpecialRoute = specialRoutes.some(route => route.test(pathname));

  return (
    <>
      <div ref={markerRef}></div>
      <nav className={`w-screen px-20 py-[30px] flex items-center fixed z-50 transition-colors duration-300 ${isScrolled || isSpecialRoute ? 'bg-white shadow-sm text-black' : 'bg-transparent text-white' }`}>
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
            {isLoggedIn ? <ProfileMenuNav /> : 
            <Link href="auth/login">
                <button className={`px-8 py-3 hover:bg-primary  duration-300 ease-in transition-all hover:gap-6   border-primary rounded-xl border-2 ${isScrolled || isSpecialRoute ? 'bg-white  text-primary hover:text-white' : 'bg-transparent border-white hover:bg-white hover:text-primary  text-white' } flex items-center gap-2`}>
                    <FiLogIn />
                    Login
                </button>
            </Link>}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarDesktop;
