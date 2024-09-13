"use client"
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import RadioButtonCategory from './components/radio-button-category';
import RadioButtonService from './components/radio-button-service';
import createCounseling from '@/app/lib/service/endpoint/dashboard/add-counseling';
import BookingAppointment from './components/select-date';

const ConsultationPage = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [service, setService] = useState('');
  const [category, setCategory] = useState('');
  const [errors, setErrors] = useState({});
  const [session_id, setSessionId] = useState('');

  const handleClick = async () => {
    const newErrors = {};

    if (!date) newErrors.date = 'Tanggal harus diisi';
    if (!time) newErrors.time = 'Waktu harus dipilih';
    if (!service) newErrors.service = 'Layanan harus dipilih';
    if (!category) newErrors.category = 'Kategori harus dipilih';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      const result = await Swal.fire({
        title: 'Konfirmasi',
        text: `Tanggal: ${date}\nWaktu: ${time}\nLayanan: ${service}\nKategori: ${category}`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Ya, Kirim',
        cancelButtonText: 'Batal'
      });

      if (result.isConfirmed) {
        try {
          const apiResult = await createCounseling({
            date,
            time,
            service,
            category,
            session_id
          });

          if (apiResult.message === 'Data Counseling berhasil ditambahkan') {
            Swal.fire({
              title: 'Berhasil!',
              text: 'Pengajuan konsultasi berhasil dibuat',
              icon: 'success',
              confirmButtonText: 'Oke',
              willClose: () => {
                window.location.reload();
            }
            });
            console.log('Counseling Data:', apiResult.data);
          } else if (apiResult.message === 'Tanggal dan waktu konseling tidak tersedia') {
            Swal.fire({
              title: 'Peringatan!',
              text: 'Tanggal dan waktu konseling tidak tersedia',
              icon: 'warning',
              confirmButtonText: 'Oke'
            });
          } else if (apiResult.message === 'Tanggal konseling tidak boleh kurang dari hari ini') {
            Swal.fire({
              title: 'Peringatan!',
              text: 'Tanggal konseling tidak boleh kurang dari hari ini',
              icon: 'warning',
              confirmButtonText: 'Oke'
            });
          } else if (apiResult.message === 'Tanggal konseling tidak boleh di hari Minggu') {
            Swal.fire({
              title: 'Peringatan!',
              text: 'Tanggal konseling tidak boleh di hari Minggu',
              icon: 'warning',
              confirmButtonText: 'Oke'
            });
          } else {
            Swal.fire({
              title: 'Gagal!',
              text: apiResult.message || 'Terjadi kesalahan',
              icon: 'error',
              confirmButtonText: 'Oke'
            });
          }
        } catch (error) {
          const errorMessage = error.message || 'Terjadi kesalahan saat membuat pengajuan konsultasi';
          Swal.fire({
            title: 'Gagal!',
            text: errorMessage,
            icon: 'error',
            confirmButtonText: 'Oke'
          });
        }
      }
    }
  };

  const handleTimeSelect = ({ date, time, session_id }) => {
    setDate(date);
    setTime(time);
    setSessionId(session_id); 
  };


  return (
    <div className='px-12 py-4 bg-white'>
      <div className='flex flex-col gap-6 pt-6'>
        <h1 className='text-[18px] font-semibold text-textPrimary'>Tentukan Waktu Pertemuan</h1>
        <BookingAppointment onTimeSelect={handleTimeSelect} />
        {errors.time && <p className="text-red-500">{errors.time}</p>}

        <div>
          <RadioButtonService value={service} onChange={(e) => setService(e.target.value)} />
          {errors.service && <p className="text-red-500">{errors.service}</p>}
        </div>
        <div>
          <RadioButtonCategory value={category} onChange={(e) => setCategory(e.target.value)} />
          {errors.category && <p className="text-red-500">{errors.category}</p>}
        </div>
        <div className='flex justify-end'>
          <button className='bg-primary  hover:bg-purple-700 text-white px-12 w-fit py-3 text-md rounded-lg font-semibold' onClick={handleClick}>Ajukan</button>
        </div>
      </div>
    </div>
  );
};

export default ConsultationPage;
