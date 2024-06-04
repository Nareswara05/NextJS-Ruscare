import listCategory from '@/app/lib/service/endpoint/api/list-category';
import React from 'react';
import CardCategory from './decoration/card-category';
import { VscLayers} from 'react-icons/vsc'; 
import { MdOutlineFaceRetouchingNatural } from "react-icons/md";
import { MdOutlineMenuBook } from "react-icons/md";
import { FaEarthAmericas } from "react-icons/fa6";
import Image from 'next/image';
import { dotsYellow } from '@/app/lib/utils/svg';




export default async function CategoryLanding() {
    const categories = await listCategory();

    const categoryConfig = {
        'Konseling Pribadi': {
            Icon: MdOutlineFaceRetouchingNatural,
            iconColor: '#473BF0',
            bgColor: '#473BF0'
        },
        'Konseling Karir': {
            Icon: VscLayers,
            iconColor: '#F64B4B',
            bgColor: '#F64B4B'
        },
        'Konseling Belajar': {
            Icon: MdOutlineMenuBook,
            iconColor: '#68D585',
            bgColor: '#68D585'
        },
        'Konseling Social': {
            Icon: FaEarthAmericas,
            iconColor: '#F4C918',
            bgColor: '#F4C918'
        },
    };

    return (
        <div className='flex flex-col items-center gap-16 p-24 relative'>
            <h1 className='text-center text-[48px] font-bold text-primary'>KATEGORI KONSELING</h1>
            <div className='flex flex-wrap gap-16 justify-center items-center py-20'>
                {categories.map((item, index) => {
                    const config = categoryConfig[item.name] || {};
                    return (
                        <CardCategory
                            key={index}
                            name={item.name}
                            desc={item.description}
                            Icon={config.Icon || VscLayers} 
                            iconColor={config.iconColor || '#F64B4B'} 
                            bgColor={config.bgColor || '#F64B4B'} 
                        />
                    );
                })}
            </div>
            <Image
            src={dotsYellow}
            className='absolute right-0 top-20'
            />
            <Image
            src={dotsYellow}
            className='absolute left-0 top-96'
            />
        </div>
    );
}
