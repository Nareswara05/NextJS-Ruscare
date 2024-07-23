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
        desc_full: 'Bagaimana kondisi kehidupanmu saat ini? Pada aspek kehidupan apa saja kamu memiliki risiko maupun kekuatan? Aspek apa saja yang harus ditingkatkan dan dipertahankan dalam kehidupanmu? Yuk, ketahui hal tersebut melalui tes Kurikulum Satu Persen Tes ini ditujukan untuk mengetahui bagaimana kondisi kehidupanmu secara menyeluruh menurut Kurikulum Satu Persen. Tidak ada jawaban benar ataupun salah. Kamu dapat menjawab "ya" apabila pernyataan dalam tes ini menggambarkan kehidupanmu saat ini. Sebaliknya, jawab pernyataan tersebut dengan jawaban "tidak" apabila pernyataan tersebut tidak menggambarkan kehidupanmu saat ini.'
    },
    {
        id: 2,
        image: mentalhealth,
        title: "Mengelola Stres dengan Efektif",
        slug: "mengelola-stres-dengan-efektif",
        desc: "Pelajari cara-cara efektif untuk mengelola stres dalam kehidupan sehari-hari. Tes ini akan membantu kamu memahami tingkat stres yang kamu alami dan memberikan rekomendasi yang sesuai.",
        desc_full: 'Pelajari cara-cara efektif untuk mengelola stres dalam kehidupan sehari-hari. Tes ini akan membantu kamu memahami tingkat stres yang kamu alami dan memberikan rekomendasi yang sesuai. Tes ini ditujukan untuk mengetahui seberapa baik kamu mengelola stres dan memberikan tips untuk mengurangi stres dalam hidupmu. Jawablah setiap pernyataan dengan "ya" atau "tidak" sesuai dengan kondisimu saat ini.'
    },
    {
        id: 3,
        image: mentalhealth,
        title: "Tes Kesehatan Mental",
        slug: "tes-kesehatan-mental",
        desc: "Apakah kamu merasa cemas atau tertekan? Tes ini dirancang untuk membantu kamu mengevaluasi kesehatan mentalmu dan memberikan saran yang bermanfaat.",
        desc_full: 'Apakah kamu merasa cemas atau tertekan? Tes ini dirancang untuk membantu kamu mengevaluasi kesehatan mentalmu dan memberikan saran yang bermanfaat. Tidak ada jawaban benar atau salah. Jawablah setiap pertanyaan dengan jujur untuk mendapatkan hasil yang akurat mengenai kondisi kesehatan mentalmu saat ini.'
    },
    {
        id: 4,
        image: mentalhealth,
        title: "Tes Kebahagiaan",
        slug: "tes-kebahagiaan",
        desc: "Seberapa bahagia kamu dengan hidupmu saat ini? Tes ini akan membantumu mengukur tingkat kebahagiaan dan memberikan tips untuk meningkatkan kebahagiaanmu.",
        desc_full: 'Seberapa bahagia kamu dengan hidupmu saat ini? Tes ini akan membantumu mengukur tingkat kebahagiaan dan memberikan tips untuk meningkatkan kebahagiaanmu. Jawablah setiap pernyataan dengan "ya" atau "tidak" sesuai dengan perasaanmu saat ini. Hasil tes ini akan memberikan gambaran tentang aspek-aspek kehidupan yang dapat ditingkatkan untuk mencapai kebahagiaan yang lebih besar.'
    },
    {
        id: 5,
        image: mentalhealth,
        title: "Tes Kepribadian",
        slug: "tes-kepribadian",
        desc: "Kenali lebih dalam tentang dirimu melalui tes kepribadian ini. Tes ini akan memberikan wawasan mengenai karakteristik dan trait kepribadianmu.",
        desc_full: 'Kenali lebih dalam tentang dirimu melalui tes kepribadian ini. Tes ini akan memberikan wawasan mengenai karakteristik dan trait kepribadianmu. Tidak ada jawaban benar atau salah, cukup jawab setiap pernyataan dengan "ya" atau "tidak" sesuai dengan apa yang paling menggambarkan dirimu. Hasil tes ini akan membantu kamu memahami diri sendiri dengan lebih baik.'
    },
    {
        id: 6,
        image: mentalhealth,
        title: "Tes Hubungan Interpersonal",
        slug: "tes-hubungan-interpersonal",
        desc: "Bagaimana hubunganmu dengan orang lain? Tes ini akan membantu kamu mengevaluasi kualitas hubungan interpersonalmu dan memberikan saran untuk memperbaikinya.",
        desc_full: 'Bagaimana hubunganmu dengan orang lain? Tes ini akan membantu kamu mengevaluasi kualitas hubungan interpersonalmu dan memberikan saran untuk memperbaikinya. Jawablah setiap pernyataan dengan jujur untuk mendapatkan gambaran yang akurat tentang hubunganmu dengan orang-orang di sekitarmu. Hasil tes ini akan memberikan rekomendasi untuk memperbaiki dan meningkatkan hubungan interpersonalmu.'
    },
    {
        id: 7,
        image: mentalhealth,
        title: "Tes Pengendalian Emosi",
        slug: "tes-pengendalian-emosi",
        desc: "Seberapa baik kamu mengendalikan emosimu? Tes ini dirancang untuk mengevaluasi kemampuan pengendalian emosi dan memberikan tips untuk peningkatan.",
        desc_full: 'Seberapa baik kamu mengendalikan emosimu? Tes ini dirancang untuk mengevaluasi kemampuan pengendalian emosi dan memberikan tips untuk peningkatan. Jawablah setiap pernyataan dengan "ya" atau "tidak" sesuai dengan pengalamamu. Hasil tes ini akan membantu kamu memahami kekuatan dan area yang perlu ditingkatkan dalam pengendalian emosimu.'
    },
    {
        id: 8,
        image: mentalhealth,
        title: "Tes Motivasi",
        slug: "tes-motivasi",
        desc: "Apakah kamu merasa termotivasi dalam hidupmu? Tes ini akan membantu kamu mengevaluasi tingkat motivasi dan memberikan cara untuk meningkatkan semangat.",
        desc_full: 'Apakah kamu merasa termotivasi dalam hidupmu? Tes ini akan membantu kamu mengevaluasi tingkat motivasi dan memberikan cara untuk meningkatkan semangat. Jawablah setiap pernyataan dengan "ya" atau "tidak" sesuai dengan situasi hidupmu saat ini. Hasil tes ini akan memberikan rekomendasi untuk meningkatkan motivasi dan mencapai tujuan-tujuanmu.'
    },
    {
        id: 9,
        image: mentalhealth,
        title: "Tes Kecerdasan Emosional",
        slug: "tes-kecerdasan-emosional",
        desc: "Tes ini akan membantu kamu mengevaluasi kecerdasan emosionalmu dan memberikan saran untuk meningkatkan kemampuan dalam mengelola emosi.",
        desc_full: 'Tes ini akan membantu kamu mengevaluasi kecerdasan emosionalmu dan memberikan saran untuk meningkatkan kemampuan dalam mengelola emosi. Jawablah setiap pernyataan dengan jujur untuk mendapatkan hasil yang akurat. Hasil tes ini akan membantu kamu memahami kekuatan dan kelemahan dalam kecerdasan emosional serta memberikan tips untuk perbaikan.'
    },
    {
        id: 10,
        image: mentalhealth,
        title: "Tes Kepemimpinan",
        slug: "tes-kepemimpinan",
        desc: "Apakah kamu memiliki kemampuan kepemimpinan yang baik? Tes ini akan membantu kamu mengevaluasi potensi kepemimpinanmu dan memberikan saran untuk pengembangan.",
        desc_full: 'Apakah kamu memiliki kemampuan kepemimpinan yang baik? Tes ini akan membantu kamu mengevaluasi potensi kepemimpinanmu dan memberikan saran untuk pengembangan. Jawablah setiap pernyataan dengan "ya" atau "tidak" sesuai dengan pengalamamu. Hasil tes ini akan memberikan wawasan tentang kekuatan dan area yang perlu ditingkatkan dalam kemampuan kepemimpinanmu.'
    }
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