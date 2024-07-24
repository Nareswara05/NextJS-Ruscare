import React from 'react';

function CardCategory({ name, desc, Icon, iconColor, bgColor }) {
    return (
        <div className='w-[450px] bg-transparent flex gap-4 items-start justify-start'>
            <div className={`p-4 w-fit h-fit text-2xl rounded-lg bg-opacity-10`} style={{ backgroundColor: `${bgColor}1A`, color: iconColor }}>
                <Icon />
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='text-textPrimary text-[24px] font-bold'>{name}</h1>
                <h1 className='opacity-65 font-normal text-textPrimary text-[14px] text-justify'>{desc}</h1>
            </div>
        </div>
    );
}

export default CardCategory;
