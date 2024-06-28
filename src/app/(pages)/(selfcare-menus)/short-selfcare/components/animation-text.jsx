"use client"

import React, { useState, useEffect } from 'react';

const AnimationText = () => {
    const textData = [
        {
            id: 1,
            title: 'jajajajaaj',
        },
        {
            id: 2,
            title: 'jejjejejej',
        },
        {
            id: 3,
            title: 'jujujuju',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % textData.length);
        }, 5000); // Change text every 1000ms (1 second)

        return () => clearInterval(interval); // Cleanup on component unmount
    }, [textData.length]);

    return (
        <>
            <h1 className='text-white text-[24px] font-semibold'>{textData[currentIndex].title}</h1>
        </>
    );
};

export default AnimationText;
