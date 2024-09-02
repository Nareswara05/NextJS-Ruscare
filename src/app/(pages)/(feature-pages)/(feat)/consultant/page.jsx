"use client"

import React, { useState, useEffect } from 'react';
import listConsultant from '@/app/lib/service/endpoint/api/list-consultant';
import ConsultantCard from './components/consultant-card';
import HeaderConsultant from './components/header-consultant';
import { ClipLoader } from 'react-spinners'; 

export default function ConsultantPage() {
  const [consultants, setConsultants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchConsultants() {
      try {
        const data = await listConsultant();
        setConsultants(data);
      } catch (error) {
        console.error('Failed to fetch consultants:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchConsultants();
  }, []);

  return (
    <div className='bg-white pb-24 overflow-x-hidden'>
      <HeaderConsultant />
      {loading ? (
        <div className='flex justify-center items-center pt-24'>
          <ClipLoader color="#123abc" loading={loading} size={50} /> 
        </div>
      ) : (
        <div className='flex flex-wrap justify-center gap-10 pt-8'>
          {consultants.map((consultant) => (
            <ConsultantCard key={consultant.id} consultant={consultant} />
          ))}
        </div>
      )}
    </div>
  );
}
