import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { formatDate } from '@/app/lib/utils/formatDate'
import { unknownProfile } from '@/app/lib/utils/image'

export default async function CardProfileConsultant({ dataConsultant }) {

    let major = "";

    if (dataConsultant.grade_id === 1) {
        major = "PPLG";
    } else if (dataConsultant.grade_id === 2) {
        major = "Animasi 3D";
    } else if (dataConsultant.grade_id === 3) {
        major = "Animasi 2D";
    } else if (dataConsultant.grade_id === 4) {
        major = "Desain Grafis";
    } else if (dataConsultant.grade_id === 5) {
        major = "Teknik Grafika";
    }

    let LastEdu = "";
    if (dataConsultant.last_education === "S1") {
        LastEdu = "(Sarjana)";
    } else if (dataConsultant.last_education === "S2") {
        LastEdu = "(Magister)";
    } else if (dataConsultant.last_education === "S3") {
        LastEdu = "(Doktor)";
    }

    const imageUrl = dataConsultant.image ? `https://api.ruscarestudent.com/${dataConsultant.image}` : unknownProfile;




    return (
        <div className=' flex flex-col justify-center items-center w-[300px]'>
            <div className='flex flex-col items-center justify-center gap-3'>
                <Image
                    src={imageUrl}
                    className="w-[150px] h-[150px] object-cover rounded-full bg-black border"
                    width={1000}
                    height={1000}
                    alt={dataConsultant.name}
                />
                <h1 className='font-bold text-[20px] text-center text-textPrimary'>{dataConsultant.name}</h1>
            </div>

            <div className='flex flex-col gap-3 w-full pt-6'>
                <div className='flex justify-between'>
                    <h1 className='font-semibold text-[16px] text-textPrimary'>Jurusan</h1>
                    <h1 className='font-bold text-[16px] text-textPrimary'>{major}</h1>
                </div>
                <div className='flex justify-between'>
                    <h1 className='font-semibold text-[16px] text-textPrimary'>Tanggal Lahir</h1>
                    <h1 className='font-bold text-[16px] text-textPrimary'>{formatDate(dataConsultant.birth_date)}</h1>
                </div>
                <div className='flex justify-between'>
                    <h1 className='font-semibold text-[16px] text-textPrimary'>Pengalaman</h1>
                    <h1 className='font-bold text-[16px] text-textPrimary'>{dataConsultant.experience} Tahun</h1>
                </div>
                <div className='flex justify-between'>
                    <h1 className='font-semibold text-[16px] text-textPrimary'>Pendidikan Terakhir</h1>
                    <h1 className='font-bold text-[16px] text-textPrimary'>{LastEdu} {dataConsultant.last_education}</h1>
                </div>
                <div className='flex justify-between'>
                    <h1 className='font-semibold text-[16px] text-textPrimary'>Umur</h1>
                    <h1 className='font-bold text-[16px] text-textPrimary'>{dataConsultant.age} Tahun</h1>
                </div>
                <div className='flex justify-between'>
                    <h1 className='font-semibold text-[16px] text-textPrimary'>Sosmed</h1>
                    <div className='flex'>
                        <div className='flex gap-1'>
                            <Link href="www.instagram.com" className="p-2 text-textPrimary rounded-full hover:bg-primary hover:text-white">
                                <FaInstagram />
                            </Link>
                        </div>
                        <div className='flex gap-1'>
                            <Link href="https:/www.facebook.com" className="p-2 text-textPrimary rounded-full hover:bg-primary hover:text-white">
                                <FaFacebook />
                            </Link>
                        </div>
                        <div className='flex gap-1'>
                            <Link href="https:/www.twitter.com" className="p-2 text-textPrimary rounded-full hover:bg-primary hover:text-white">
                                <FaTwitter />
                            </Link>
                        </div>
                        <div className='flex gap-1'>
                            <Link href="https:/www.linkedin.com" className="p-2 text-textPrimary rounded-full hover:bg-primary hover:text-white">
                                <FaLinkedin />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

