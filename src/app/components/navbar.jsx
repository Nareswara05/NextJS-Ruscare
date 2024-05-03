"use client"

import React, { useState, useEffect } from 'react';
import NavbarDesktop from './navbar-desktop';
import NavbarMobile from './navbar-mobile';



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










