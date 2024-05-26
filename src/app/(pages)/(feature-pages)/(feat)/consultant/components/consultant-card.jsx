import React from 'react'
import Image from 'next/image'
import { FaGraduationCap } from 'react-icons/fa'
import { IoIosArrowForward } from 'react-icons/io'

const ConsultantCard = ({ consultant }) => {

    const getMajorStyles = (major) => {
        switch (major) {
          case 'PPLG':
            return 'bg-[#F4C918] text-[#F4C918] bg-opacity-20';
          case 'Animasi 3D':
            return 'bg-[#FF6523] text-[#FF6523] bg-opacity-20';
          case 'Design Grafis':
            return 'bg-[#2347FF] text-[#2347FF] bg-opacity-20';
          case 'Animasi 2D':
            return 'bg-[#9F41EA] text-[#9F41EA] bg-opacity-20';
          case 'Teknik Grafika':
            return 'bg-[#2CDC3E] text-[#2CDC3E] bg-opacity-20';
          default:
            return '';
        }
      };
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
                <div className='flex items-center gap-2'>
                    <h2 className='font-semibold text-[20px] text-textPrimary'>{consultant.name}</h2>
                    <h2 className='text-[12px] font-semibold text-[#616161]'>{consultant.pronouns}</h2>
                </div>
                <div className='text-textPrimary flex items-center gap-2'>
                    <FaGraduationCap />
                    <h1 className=' text-[14px] font-medium'>{consultant.education}</h1>
                </div>
                <div className='flex items-center gap-2'>
                    <h1 className='font-semibold text-textPrimary text-[16px] '>Mentor Jurusan :</h1>
                    <h2
                        className={`w-[158px] py-2 rounded-lg text-center text-[16px] font-bold ${getMajorStyles(consultant.major)}`}
                    >
                        {consultant.major}
                    </h2>
                </div>
            </div>
            <div className='flex text-primary font-semibold text-lg items-center gap-2 pt-8'>
                <h1>Detail Profil</h1>
                <IoIosArrowForward />
            </div>
        </div>
    )
}

export default ConsultantCard
