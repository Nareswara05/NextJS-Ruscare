"use client"
import React, { useEffect, useState } from 'react'
import CardSelfcare from './components/card-selfcare'
import HeaderSelfcare from './components/header-selfcare'
import listSelfcare from '@/app/lib/service/endpoint/api/list-selfcare'
import { ClipLoader } from 'react-spinners';

export default function Page() {
  const [selfcare, setSelfcare] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSelfcare() {
      try {
        const data = await listSelfcare();
        setSelfcare(data);
      } catch (error) {
        console.error('Failed to fetch selfcare:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchSelfcare();
  }, []);


  return (
    <div className='pb-24 bg-white overflow-x-hidden flex flex-col gap-20 justify-center items-center'>
      <HeaderSelfcare />
      {loading ? (
        <div className='flex justify-center items-center pt-24'>
          <ClipLoader color="#123abc" loading={loading} size={50} />
        </div>
      ) : (
        <div className='grid grid-cols-2 gap-6 items-center'>
          {selfcare.map((data, index) => (
            <CardSelfcare key={index} data={data} />
          ))}
        </div>
      )}
    </div>
  )
}
