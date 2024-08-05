import React from 'react'
import InputDate from './components/input-date'
import InputName from './components/input-name'
import RadioButtonCategory from './components/radio-button-category'
import RadioButtonService from './components/radio-button-service'

const ConsultationPage = () => {
  return (
    <div className='px-12 py-8 bg-white'>
      <h1 className='text-[28px] font-bold text-textPrimary '>Pengajuan Konsultasi</h1>
      <div className='flex flex-col gap-6 pt-12'>
        <InputDate />
        <RadioButtonService />
        <RadioButtonCategory />
        <div className='flex justify-end'>
          <button className='bg-primary hover:bg-purple-700 text-white px-8 w-fit py-3 font-semibold rounded-lg'>Selanjutnya</button>
        </div>
      </div>
    </div>
  )
}

export default ConsultationPage