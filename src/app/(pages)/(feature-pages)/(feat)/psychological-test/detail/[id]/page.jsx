"use client"

import React from 'react'
import DisclaimerTes from './components/disclaimer-tes'
import PsychologicalTesDetail from './components/psychological-tes-detail'
import RulesTes from './components/rules-tes'
import { mentalhealth } from '@/app/lib/utils/image'
import DecorationTes from './components/decoration-tes'
import { useParams } from 'next/navigation';


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



export default function TesPsychologicalDetail() {



    const { id } = useParams();
    const psychological = psychologicalData.find(item => item.slug === id);

    if (!psychological) {
        return <div>Test not found</div>;
    }



    return (
        <div className='bg-white relative'>
            <div className='flex flex-col gap-16  p-[200px]'>
                <PsychologicalTesDetail data={psychological} />
                <RulesTes />
                <DisclaimerTes />
            </div>
        </div>
    )
}

