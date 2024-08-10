"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { AvatarTes, bgProfil } from '@/app/lib/utils/image';
import Link from 'next/link';
import getUser from '@/app/lib/service/endpoint/user/get-user';
import { ClipLoader } from 'react-spinners';

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
    return (
      <div className="h-screen bg-white flex justify-center items-center">
        <ClipLoader size={50} color={"#123abc"} loading={loading} />
      </div>
    );
  }

  if (!userData) {
    return <div>Error loading user data</div>;
  }

  let status = "";
  if (userData.role_id === 1) {
    status = "Admin";
  } else if (userData.role_id === 2) {
    status = "Guru";
  } else if (userData.role_id === 3) {
    status = "Murid";
  } else {
    status = "Unknown";
  }

  let major = "";
  switch (userData.grade_id) {
    case 1:
      major = "PPLG";
      break;
    case 2:
      major = "Animasi 3D";
      break;
    case 3:
      major = "Animasi 2D";
      break;
    case 4:
      major = "Design Grafis";
      break;
    case 5:
      major = "Teknik Grafika";
      break;
    default:
      major = "Unknown";
  }

  const imageUrl = `https://api.ruscarestudent.com/${userData.image}`;

  return (
    <div className='h-screen bg-white flex justify-center pb-16'>
      <div className='w-screen h-72'>
        <Image
          src={bgProfil}
          className="w-full object-cover h-full"
          alt="Background"
        />
      </div>
      <div className='absolute items-center top-32 pb-8 px-[75px] max-w-[500px] justify-center flex flex-col w-[500px] bg-white shadow-custom rounded-xl'>
        <div className='relative -top-16 flex flex-col items-center justify-center'>
          <Image
            src={imageUrl}
            width={145}
            height={145}
            className="w-[145px] border-white bg-primary border-8 object-cover h-full rounded-full"
            alt="Avatar"
          />
          <h1 className='text-[22px] font-bold text-center text-textPrimary'>{userData.name}</h1>
          <h1 className='text-[16px] font-medium text-center text-textPrimary'>{userData.email}</h1>
        </div>
        <div className='w-full flex flex-col gap-4'>
          <div className='flex justify-between'>
            <h1 className='font-semibold text-[16px] text-textPrimary'>Username</h1>
            <h1 className='font-bold text-[16px] text-textPrimary'>{userData.username}</h1>
          </div>
          <div className='flex justify-between'>
            <h1 className='font-semibold text-[16px] text-textPrimary'>Status</h1>
            <h1 className='font-bold text-[16px] text-primary'>{status}</h1>
          </div>
          <div className='flex justify-between'>
            <h1 className='font-semibold text-[16px] text-textPrimary'>Tanggal Lahir</h1>
            <h1 className='font-bold text-[16px] text-textPrimary'>{userData.birth_date}</h1>
          </div>
          <div className='flex justify-between'>
            <h1 className='font-semibold text-[16px] text-textPrimary'>Jurusan</h1>
            <h1 className='font-bold text-[16px] text-textPrimary'>{major}</h1>
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
