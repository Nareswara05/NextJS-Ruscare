"use client"

import React, { useState } from 'react';
import { HiOutlineUserGroup } from "react-icons/hi2";
import { IoMdCheckmark } from 'react-icons/io';
import { RxCross2 } from 'react-icons/rx';
import TableConsultation from './table-consultation';
import data from './data';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { IoCalendarClearOutline } from 'react-icons/io5';
import { TbCalendarClock } from "react-icons/tb";


const getCountByStatus = (status) => {
  return data.filter(item => item.status === status).length;
};

const statsData = [
  {
    id: 1,
    title: 'Pending',
    count: getCountByStatus('pending'),
    color: '#8280FF',
    icon: <HiOutlineUserGroup />,
    status: 'pending',
  },
  {
    id: 2,
    title: 'Telah Diterima',
    count: getCountByStatus('diterima'),
    color: '#3AAC75',
    icon: <IoMdCheckmark />,
    status: 'diterima',
  },
  {
    id: 3,
    title: 'Akan Datang',
    count: getCountByStatus('akanDatang'),
    color: '#F4C918',
    icon: <AiOutlineClockCircle />,
    status: 'akanDatang',
  },
  {
    id: 4,
    title: 'Telah Ditolak',
    count: getCountByStatus('ditolak'),
    color: '#FF3797',
    icon: <RxCross2 />,
    status: 'ditolak',
  },
  {
    id: 5,
    title: 'Jadwal Ulang',
    count: getCountByStatus('reschedule'),
    color: '#9F41EA',
    icon: <TbCalendarClock />,
    status: 'reschedule',
  },
];

const DashboardStats = () => {
  const [selectedStat, setSelectedStat] = useState(statsData[0]);

  const handleChipClick = (stat) => {
    setSelectedStat(stat);
  };

  return (
    <div>
      <h1 className='text-[24px] text-textPrimary font-bold'>Statistik Mentor</h1>
      <div className='flex flex-row gap-3 pt-8'>
        {statsData.map((stat) => (
          <div
            key={stat.id}
            className={`flex w-full justify-between p-4 bg-white shadow-custom rounded-lg cursor-pointer ${selectedStat?.id === stat.id ? 'ring-2 ring-primary' : ''}`}
            onClick={() => handleChipClick(stat)}
          >
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
      {selectedStat && <TableConsultation status={selectedStat.status} title={selectedStat.title} />}
    </div>
  );
};

export default DashboardStats;