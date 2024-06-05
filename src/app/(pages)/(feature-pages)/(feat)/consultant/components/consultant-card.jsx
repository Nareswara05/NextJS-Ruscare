import React from 'react';
import Image from 'next/image';
import { FaGraduationCap } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import Link from 'next/link';

const ConsultantCard = ({ consultant }) => {
    let major = "";

    if (consultant.grade_id === 1) {
        major = "PPLG";
    } else if (consultant.grade_id === 2) {
        major = "Animasi 3D";
    } else if (consultant.grade_id === 3) {
        major = "Animasi 2D";
    } else if (consultant.grade_id === 4) {
        major = "Desain Grafis";
    } else if (consultant.grade_id === 5) {
        major = "Teknik Grafika";
    }

    const getMajorStyles = (major) => {
        switch (major) {
            case 'PPLG':
                return 'bg-[#F4C918] text-[#F4C918] bg-opacity-20';
            case 'Animasi 3D':
                return 'bg-[#FF6523] text-[#FF6523] bg-opacity-20';
            case 'Desain Grafis':
                return 'bg-[#2347FF] text-[#2347FF] bg-opacity-20';
            case 'Animasi 2D':
                return 'bg-[#9F41EA] text-[#9F41EA] bg-opacity-20';
            case 'Teknik Grafika':
                return 'bg-[#2CDC3E] text-[#2CDC3E] bg-opacity-20';
            default:
                return '';
        }
    };

    let pronouns = "";
    if (consultant.gender === "perempuan") {
        pronouns = "She/Her";
    } else if (consultant.gender === "laki-laki") {
        pronouns = "He/Him";
    } else {
        pronouns = "Unknown";
    }

    return (
        <div className='p-8 bg-white rounded-lg shadow-custom flex flex-col w-[400px] justify-between'>
            <Image
                src={consultant.avatar}
                alt={consultant.name}
                className='w-[114px] rounded-full object-cover'
                width={114}
                height={114}
            />
            <div className='flex flex-col gap-[10px]'>
                <div className='flex flex-wrap items-center gap-2'>
                    <h2 className='font-semibold text-[20px] w-fit text-textPrimary'>{consultant.name}</h2>
                    <h2 className='text-[12px] font-semibold text-[#616161]'>{pronouns}</h2>
                </div>
                <div className='text-textPrimary flex items-center gap-2'>
                    <FaGraduationCap />
                    <h1 className=' text-[14px] font-medium'>{consultant.last_education}</h1>
                </div>
                <div className='flex items-center gap-2'>
                    <h1 className='font-semibold text-textPrimary text-[16px]'>Mentor Jurusan:</h1>
                    <h2 className={`w-[158px] py-2 rounded-lg text-center text-[16px] font-bold ${getMajorStyles(major)}`}>
                        {major}
                    </h2>
                </div>
            </div>
            <Link href={`/consultant/${consultant.id}`}>
                <h1 className='flex text-primary font-semibold text-lg items-center gap-2 pt-8'>
                    <span>Detail Profil</span>
                    <IoIosArrowForward />
                </h1>
            </Link>
        </div>
    );
};

export default ConsultantCard;
