"use client";

import React, { useState } from 'react';
import InputDate from './components/input-date';
import Swal from 'sweetalert2';
import RadioButtonCategory from './components/radio-button-category';
import RadioButtonService from './components/radio-button-service';

const ConsultationPage = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [service, setService] = useState('');
  const [category, setCategory] = useState('');
  const [errors, setErrors] = useState({});

  const handleClick = () => {
    const newErrors = {};

    if (!date) newErrors.date = 'Tanggal harus diisi';
    if (!time) newErrors.time = 'Waktu harus dipilih';
    if (!service) newErrors.service = 'Layanan harus dipilih';
    if (!category) newErrors.category = 'Kategori harus dipilih';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      Swal.fire({
        title: 'Berhasil!',
        text: 'Pengajuan konsultasi berhasil dibuat',
        icon: 'success',
        confirmButtonText: 'Oke'
      });
    }
  };

  return (
    <div className='px-12 py-8 bg-white'>
      <h1 className='text-[28px] font-bold text-textPrimary'>Pengajuan Konsultasi</h1>
      <div className='flex flex-col gap-6 pt-12'>
        <div>
          <InputDate 
            dateValue={date} 
            timeValue={time} 
            onDateChange={(e) => setDate(e.target.value)} 
            onTimeChange={(option) => setTime(option.value)} 
          />
          {errors.date && <p className="text-red-500">{errors.date}</p>}
          {errors.time && <p className="text-red-500">{errors.time}</p>}
        </div>
        <div>
          <RadioButtonService value={service} onChange={(e) => setService(e.target.value)} />
          {errors.service && <p className="text-red-500">{errors.service}</p>}
        </div>
        <div>
          <RadioButtonCategory value={category} onChange={(e) => setCategory(e.target.value)} />
          {errors.category && <p className="text-red-500">{errors.category}</p>}
        </div>
        <div className='flex justify-end'>
          <button className='bg-primary hover:bg-purple-700 text-white px-8 w-fit py-3 font-semibold rounded-lg' onClick={handleClick}>Selanjutnya</button>
        </div>
      </div>
    </div>
  );
};

export default ConsultationPage;
