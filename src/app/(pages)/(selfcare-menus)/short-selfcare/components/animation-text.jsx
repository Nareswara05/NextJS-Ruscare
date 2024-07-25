"use client";

import React, { useState, useEffect } from 'react';
import shortSelfcare from '@/app/lib/service/endpoint/api/selfcare/short-selfcare';

const AnimationText = () => {
    const [textData, setTextData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchShortSelfcare = async () => {
            try {
                const response = await shortSelfcare();
                setTextData(response.data); 
            } catch (error) {
                console.error("Error fetching short selfcare data:", error);
            }
        };

        fetchShortSelfcare();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                if (prevIndex + 1 < textData.length) {
                    return prevIndex + 1;
                } else {
                    clearInterval(interval);
                    return prevIndex;
                }
            });
        }, 5000);

        return () => clearInterval(interval);
    }, [textData.length]);

    return (
        <>
            {textData.length > 0 && (
                <h1 className='text-white text-[24px] font-semibold'>{textData[currentIndex].text}</h1>
            )}
        </>
    );
};

export default AnimationText;
