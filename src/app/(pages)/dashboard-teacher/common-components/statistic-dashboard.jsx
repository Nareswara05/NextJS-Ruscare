import React from 'react';
import { BsCalendar2Week } from "react-icons/bs";
import { PiClockCountdownLight } from "react-icons/pi";
import { GiCheckMark } from "react-icons/gi";
import { HiOutlineUserGroup } from "react-icons/hi2";


const statsData = [
  {
    id: 1,
    title: 'Yang ingin berkonsultasi',
    count: 3,
    color: '#8280FF',
    icon: <HiOutlineUserGroup />,
  },
  {
    id: 2,
    title: 'Sedang Berlangsung',
    count: 3,
    color: '#FF3797',
    icon: <PiClockCountdownLight />,
  },
  {
    id: 3,
    title: 'Telah Selesai',
    count: 3,
    color: '#3AAC75',
    icon: <GiCheckMark />,
  },
];

const DashboardStats = () => {
  return (
    <div>
      <h1 className='text-[24px] text-textPrimary font-bold'>Statistik Mentor</h1>
      <div className='flex flex-row gap-3 pt-8'>
        {statsData.map((stat) => (
          <div key={stat.id} className='flex w-full justify-between p-4 bg-white shadow-custom rounded-lg'>
            <div className='flex flex-col gap-4'>
              <h2 className='text-[16px] text-textPrimary font-semibold'>{stat.title}</h2>
              <h1 className='text-textPrimary text-[32px] font-bold'>{stat.count}</h1>
            </div>
            <div className={`p-4 text-3xl h-fit rounded-2xl`} style={{ color: stat.color, backgroundColor: `${stat.color}33` }}>
              {stat.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardStats;
