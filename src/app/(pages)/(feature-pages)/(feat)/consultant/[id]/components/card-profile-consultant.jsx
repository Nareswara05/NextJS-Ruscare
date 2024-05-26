import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default async function CardProfileConsultant({ dataConsultant }) {
    return (
        <div className=' flex flex-col justify-center items-center w-[300px]'>
            <div>
                <Image
                    src={dataConsultant.avatar}
                    className="w-[150px] rounded-full bg-black"
                    width={100}
                    height={100}
                    alt={dataConsultant.name}
                />
                <h1 className='font-bold text-[20px] text-center text-textPrimary'>{dataConsultant.name}</h1>
            </div>

            <div className='flex flex-col gap-3 w-full pt-6'>
                <div className='flex justify-between'>
                    <h1 className='font-semibold text-[16px] text-textPrimary'>Jurusan</h1>
                    <h1 className='font-bold text-[16px] text-textPrimary'>{dataConsultant.major}</h1>
                </div>
                <div className='flex justify-between'>
                    <h1 className='font-semibold text-[16px] text-textPrimary'>Tanggal Lahir</h1>
                    <h1 className='font-bold text-[16px] text-textPrimary'>{dataConsultant.birtdate}</h1>
                </div>
                <div className='flex justify-between'>
                    <h1 className='font-semibold text-[16px] text-textPrimary'>Pengalaman</h1>
                    <h1 className='font-bold text-[16px] text-textPrimary'>{dataConsultant.experience}</h1>
                </div>
                <div className='flex justify-between'>
                    <h1 className='font-semibold text-[16px] text-textPrimary'>Pendidikan Terakhir</h1>
                    <h1 className='font-bold text-[16px] text-textPrimary'>{dataConsultant.lastEducation}</h1>
                </div>
                <div className='flex justify-between'>
                    <h1 className='font-semibold text-[16px] text-textPrimary'>Umur</h1>
                    <h1 className='font-bold text-[16px] text-textPrimary'>{dataConsultant.umur}</h1>
                </div>
                <div className='flex justify-between'>
                    <h1 className='font-semibold text-[16px] text-textPrimary'>Umur</h1>
                    <div className='flex'>
                        <div className='flex gap-1'>
                            <Link href={dataConsultant.instagram} className="p-2 text-textPrimary rounded-full hover:bg-primary hover:text-white">
                                <FaInstagram />
                            </Link>
                        </div>
                        <div className='flex gap-1'>
                            <Link href={dataConsultant.facebook} className="p-2 text-textPrimary rounded-full hover:bg-primary hover:text-white">
                                <FaFacebook />
                            </Link>
                        </div>
                        <div className='flex gap-1'>
                            <Link href={dataConsultant.twitter} className="p-2 text-textPrimary rounded-full hover:bg-primary hover:text-white">
                                <FaTwitter />
                            </Link>
                        </div>
                        <div className='flex gap-1'>
                            <Link href={dataConsultant.linkedin} className="p-2 text-textPrimary rounded-full hover:bg-primary hover:text-white">
                                <FaLinkedin />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

