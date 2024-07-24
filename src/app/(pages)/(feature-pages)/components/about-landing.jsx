import React from 'react'
import Image from 'next/image'
import { about } from '@/app/lib/utils/image'


const AboutLanding = () => {
  return (
    <div className='px-[177px] flex gap-24'>
        <div className='flex flex-col gap-2'>
            <hr className='w-32 border-[5px] border-primary'/>
            <h1 className='text-textPrimary font-bold text-[40px]'>Kenapa Harus RusCare?</h1>
            <h1 className='font-normal text-[16px] text-justify text-textPrimary'>RusCare adalah pilihan utama untuk konseling siswa SMK Raden Umar Said karena fitur-fitur unggulannya. Dengan layanan booking, Selfcare, dan tes psikologi, RusCare memberikan akses mudah dan komprehensif untuk mendapatkan bimbingan yang dibutuhkan. Dibuat khusus untuk kebutuhan SMK Raden Umar Said, RusCare menjamin pengalaman konseling yang terfokus dan terpercaya bagi setiap siswa.</h1>
        </div>
        <Image
        src={about}
        />
    </div>
  )
}

export default AboutLanding