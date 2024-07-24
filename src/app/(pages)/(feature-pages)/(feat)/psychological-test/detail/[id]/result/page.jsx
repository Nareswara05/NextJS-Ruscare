"use client";

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { IoIosArrowBack } from 'react-icons/io';
import Image from 'next/image';
import { goodmental, mentalPoblems } from '@/app/lib/utils/image';

const ConclusionPage = () => {
    const pathname = usePathname();
    const router = useRouter();
    const urlParams = new URLSearchParams(window.location.search);
    const answers = JSON.parse(decodeURIComponent(urlParams.get('answers')));

    const isSevereCase = answers.filter(answer => answer === 'yes').length >= 3;

    return (
        <div className='py-36 px-44 bg-white'>
            <div className='flex flex-col gap-12 pt-12'>

                <div className='flex gap-8'>
                    <Image 
                    src={isSevereCase ? mentalPoblems : goodmental}
                    className='w-80'
                    />
                    <div>
                        <h1 className='text-[28px] text-textPrimary font-bold'>
                            {isSevereCase ? "Sepertinya kamu butuh bantuan" : "Kondisi kamu cukup baik, jangan lupa tetap memperhatikan kesehatan mental mu"}
                        </h1>
                        <p className='text-textPrimary pt-2 text-justify '>
                        {isSevereCase
                            ? "Kamu mungkin mengalami gangguan mental yang cukup serius. Ini adalah saat yang penting untuk mendapatkan dukungan profesional agar kamu dapat memahami dan menangani masalah yang mungkin sedang kamu hadapi. Jangan ragu untuk menghubungi psikolog atau psikiater terdekat yang bisa membantu kamu melalui proses ini. Ingat, mencari bantuan adalah langkah awal yang sangat penting untuk kesehatan mentalmu. Dengan dukungan yang tepat, kamu bisa menemukan cara untuk mengatasi tantangan ini dan merasa lebih baik."
                            : "Jangan ragu untuk berbicara dengan orang terdekatmu jika kamu merasa sedang tidak baik-baik saja. Terkadang, hanya dengan membagikan perasaan dan pikiranmu dengan seseorang yang kamu percayai sudah bisa membuat perbedaan besar. Jangan anggap remeh perasaanmu—berbicara dengan teman atau keluarga bisa membantu kamu merasa lebih didukung dan terhubung. Jika perasaan ini terus berlanjut atau kamu merasa butuh bantuan lebih lanjut, pertimbangkan untuk berbicara dengan seorang profesional untuk mendapatkan dukungan tambahan."
                        }
                    </p>
                    </div>
                </div>
                <div className='flex gap-8'>
                    {isSevereCase ? (
                        <div className='flex w-full gap-8'>
                            <button onClick={() => router.push('/dashboard')} className='w-full py-5 shadow-custom text-white bg-primary text-lg font-semibold border-2 rounded-xl duration-300 transform hover:scale-105 border-transparent  hover:border-primary'>
                                Konsultasi Sekarang
                            </button>

                            <button onClick={() => router.push('/psychological-test')} className='w-full py-5 shadow-custom text-textPrimary text-lg font-semibold border-2 rounded-xl duration-300 transform hover:scale-105 border-transparent hover:text-primary hover:border-primary'>
                                Kembali ke halaman utama
                            </button>
                        </div>
                    ) : (
                        <button onClick={() => router.push('/psychological-test')} className='w-full py-5 shadow-custom text-textPrimary text-lg font-semibold border-2 rounded-xl duration-300 transform hover:scale-105 border-transparent hover:text-primary hover:border-primary'>
                            Kembali ke halaman utama
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ConclusionPage;
