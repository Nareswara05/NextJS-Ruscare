"use client";

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { mentalhealth } from '@/app/lib/utils/image';
import { IoIosArrowBack } from 'react-icons/io';

const TestPage = () => {
    const psychologicalData = [
        {
            id: 1,
            image: mentalhealth,
            title: "Tes Level Kurikulum Satu Persen",
            slug: "tes-level-kurikulum-satu-persen",
            desc: "Bagaimana kondisi kehidupanmu saat ini? Pada aspek kehidupan apa saja kamu memiliki risiko maupun kekuatan? Aspek apa saja yang harus ditingkatkan dan dipertahankan dalam kehidupanmu? Yuk, ketahui hal tersebut melalui tes Kurikulum Satu Persen!",
            desc_full: 'Bagaimana kondisi kehidupanmu saat ini? Pada aspek kehidupan apa saja kamu memiliki risiko maupun kekuatan? Aspek apa saja yang harus ditingkatkan dan dipertahankan dalam kehidupanmu? Yuk, ketahui hal tersebut melalui tes Kurikulum Satu Persen Tes ini ditujukan untuk mengetahui bagaimana kondisi kehidupanmu secara menyeluruh menurut Kurikulum Satu Persen. Tidak ada jawaban benar ataupun salah. Kamu dapat menjawab "ya" apabila pernyataan dalam tes ini menggambarkan kehidupanmu saat ini. Sebaliknya, jawab pernyataan tersebut dengan jawaban "tidak" apabila pernyataan tersebut tidak menggambarkan kehidupanmu saat ini.',
            questions: [
                "Apakah kamu sering merasa cemas?",
                "Apakah kamu merasa kesulitan tidur?",
                "Apakah kamu merasa kelelahan tanpa sebab yang jelas?",
                "Apakah kamu merasa tertekan atau sedih?",
                "Apakah kamu kesulitan berkonsentrasi?"
            ]
        },
    ];

    const pathname = usePathname();
    const slug = pathname.split('/')[3];
    const psychological = psychologicalData.find(item => item.slug === slug);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setProgress(((currentQuestionIndex + 1) / psychological.questions.length) * 100);
    }, [currentQuestionIndex, psychological.questions.length]);

    if (!psychological) {
        return <div>Test not found</div>;
    }

    const handleAnswer = (answer) => {
        const updatedAnswers = [...answers, answer];
        setAnswers(updatedAnswers);

        if (currentQuestionIndex < psychological.questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            const encodedAnswers = encodeURIComponent(JSON.stringify(updatedAnswers));
            const resultUrl = `/psychological-test/detail/${slug}/result?answers=${encodedAnswers}`;
            window.location.href = resultUrl;
        }
    };

    return (
        <div className='pt-36 pb-12 px-20 bg-white'>
            <div className='text-6xl text-textPrimary hover:text-primary w-fit'>
                <Link href="/psychological-test"><IoIosArrowBack /></Link>
            </div>
            <div className='flex flex-col gap-12 pt-12'>
                <h1 className='text-[28px] text-textPrimary font-semibold'>
                    {psychological.questions[currentQuestionIndex]}
                </h1>
                <div className='flex gap-8'>
                    <button onClick={() => handleAnswer('yes')} className='w-full py-5 shadow-custom text-textPrimary text-lg font-semibold border-2 rounded-xl duration-300 transform hover:scale-105 border-transparent hover:text-primary hover:border-primary'>
                        Ya
                    </button>
                    <button onClick={() => handleAnswer('no')} className='w-full py-5 shadow-custom text-textPrimary text-lg font-semibold border-2 rounded-xl duration-300 transform hover:scale-105 border-transparent hover:text-primary hover:border-primary'>
                        Tidak
                    </button>
                </div>
            </div>
            <div className='w-1/2 mx-auto mt-32 bg-gray-200 rounded-full h-2.5'>
                <div className='bg-primary h-2.5 rounded-full transition-all duration-300' style={{ width: `${progress}%` }}></div>
            </div>
        </div>
    );
};

export default TestPage;
