import React from 'react'
import { mentalhealth } from '@/app/lib/utils/image'
import CardPsychological from './components/card-psychological'
import PsychologicalHeader from './components/psychological-header';

const TesPsikologiPage = () => {

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


  

  return (
    <div className='bg-white w-full flex flex-col items-center justify-center'>
      <PsychologicalHeader />
      <div className='flex flex-col gap-4 py-16'>
        <h1 className='font-bold text-textPrimary text-[28px]'>Tes Terpopuler</h1>
        <div className='grid grid-cols-4 gap-9'>
          {psychologicalData.map((psychological) => (
            <CardPsychological key={psychological.id} data={psychological} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TesPsikologiPage