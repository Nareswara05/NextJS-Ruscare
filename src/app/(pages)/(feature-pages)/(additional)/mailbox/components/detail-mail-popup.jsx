import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { FaStar } from "react-icons/fa";

export default function MailDetailPopup({ data, onClose }) {
    if (!data) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center">
            <div className="bg-white p-5 rounded-lg w-[450px] shadow-lg relative">
                <div className='flex w-full justify-end'>
                    <h1 className='font-normal text-[#77787A] text-[14px]'>{data.date}</h1>
                </div>
                <div className='flex w-full items-center text-secondary gap-2 text-lg pt-6'>
                    <FaStar />
                    <h1 className=' font-semibold text-textPrimary '>{data.title}</h1>
                </div>
                <div className='flex flex-col gap-4 py-8'>
                    <h1 className='text-textPrimary font-normal text-[14px]'>Halo {data.student_name}</h1>
                    <h1 className='text-textPrimary font-normal text-[14px]'>{data.desc}</h1>
                    <div>
                        <h1 className='text-textPrimary font-normal text-[14px]'>Salam,</h1>
                        <h1 className='text-textPrimary font-normal text-[14px]'>{data.mentor_name}</h1>
                    </div>
                </div>
                <button onClick={onClose} className='w-full py-4 bg-primary font-semibold text-white rounded-xl hover:bg-purple-700 flex gap-2 items-center justify-center'>
                    Tutup
                    <FaTimes/>
                </button>
            </div>
        </div>
    );
}
