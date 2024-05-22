"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { AvatarTes, bgProfil } from '@/app/lib/utils/image';
import Link from 'next/link';
import getUser from '@/app/lib/service/endpoint/auth/get-user';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getUser();
        setUserData(data);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userData) {
    return <div>Error loading user data</div>;
  }

  let status = "";
  if (userData.role_id === 3) {
    status = "Murid";
  } else if (userData.role_id === 4) {
    status = "Guest";
  } else {
    status = "Unknown";
  }

  return (
    <div className='h-screen bg-white flex justify-center'>
      <div className='w-screen h-72'>
        <Image
          src={bgProfil}
          className="w-full object-cover h-full"
          alt="Background"
        />
      </div>
      <div className='absolute items-center top-44 pb-8 px-[75px] justify-center flex flex-col w-[500px] bg-white shadow-custom rounded-xl'>
        <div className='relative -top-16'>
          <Image
            src={AvatarTes}
            className="w-[145px] border-white border-8 object-cover h-full rounded-full"
            alt="Avatar"
          />
          <h1 className='text-[22px] font-bold text-center text-textPrimary'>{userData.name}</h1>
          <h1 className='text-[16px] font-medium text-center text-textPrimary'>{userData.email}</h1>
        </div>
        <div className='w-full flex flex-col gap-4'>
          <div className='flex justify-between'>
            <h1 className='font-semibold text-[16px] text-textPrimary'>Status</h1>
            <h1 className='font-bold text-[16px] text-primary'>{status}</h1>
          </div>
          <div className='flex justify-between'>
            <h1 className='font-semibold text-[16px] text-textPrimary'>Tanggal Lahir</h1>
            <h1 className='font-bold text-[16px] text-textPrimary'>{userData.birthDate}</h1>
          </div>
          <div className='flex justify-between'>
            <h1 className='font-semibold text-[16px] text-textPrimary'>Jurusan</h1>
            <h1 className='font-bold text-[16px] text-textPrimary'>{userData.major}</h1>
          </div>
          <div className='flex justify-between'>
            <h1 className='font-semibold text-[16px] text-textPrimary'>NIS</h1>
            <h1 className='font-bold text-[16px] text-textPrimary'>{userData.nis}</h1>
          </div>
        </div>
        <Link href="profile/edit-profile" className='w-full'>
          <button className='mt-9 font-semibold rounded-lg py-4 w-full bg-primary hover:bg-purple-700 text-white text-lg'>
            Edit Profil
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
