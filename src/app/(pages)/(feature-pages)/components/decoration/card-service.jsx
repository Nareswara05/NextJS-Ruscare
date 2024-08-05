"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { dotsPurplesmall } from '@/app/lib/utils/svg';
import { BsArrowRight } from 'react-icons/bs';
import PopupService from './popup-service';

const CardService = ({ title, description }) => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const handleClick = () => {
        setIsPopupVisible(true);
    };

    const handleClose = () => {
        setIsPopupVisible(false);
    };

    return (
        <div>
            <div className='group bg-white px-7 py-10 relative w-[350px] rounded-xl transition-colors duration-300 hover:bg-secondary overflow-hidden cursor-pointer' onClick={handleClick}>
                <div className='flex justify-between'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-primary text-[20px] font-bold transition-colors duration-300 group-hover:text-white'>{title}</h1>
                        <hr className='border-2 border-primary w-24 transition-colors duration-300 group-hover:border-white' />
                    </div>
                    <button  className='p-2 bg-white bg-opacity-20 rounded-full w-fit h-fit text-2xl group-hover:animate-bounce'>
                        <BsArrowRight />
                    </button>
                </div>
                <Image
                    src={dotsPurplesmall}
                    className='absolute top-0 right-0 transition-opacity duration-300 group-hover:opacity-0  '
                />
            </div>
            {isPopupVisible && (
                <PopupService title={title} description={description} onClose={handleClose} />
            )}
        </div>
    );
};

export default CardService;
