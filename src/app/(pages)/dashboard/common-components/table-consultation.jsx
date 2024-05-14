"use client"
import { PiClockCountdownLight } from "react-icons/pi";
import { BsCalendar2Week } from "react-icons/bs";
import { VscLocation } from "react-icons/vsc";

import React, { useState } from 'react';

const TableConsultation = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedData, setSelectedData] = useState(null);

    const data = [
        {
            name: "Usep",
            jurusan: "Animasi",
            service: "Konseling Individual",
            category: "Pribadi",
            date: "12 April 2024",
            time: "14.00",
            location: "Lab PPLG",
            mentor: "Bu Devyta",
            detail: "Detail tentang Konseling Individual"
        },
        {
            name: "Usep",
            jurusan: "Animasi",
            service: "Konseling Individual",
            category: "Pribadi",
            date: "12 April 2024",
            time: "14.00",
            location: "Lab PPLG",
            mentor: "Bu Devyta",
            detail: "Detail tentang Konseling Individual"
        },
        {
            name: "Usep",
            jurusan: "Animasi",
            service: "Konseling Individual",
            category: "Pribadi",
            date: "12 April 2024",
            time: "14.00",
            location: "Lab PPLG",
            mentor: "Bu Devyta",
            detail: "Detail tentang Konseling Individual"
        },

    ];

    const tableHead = [
        { title: "Layanan" },
        { title: "Kategori" },
        { title: "Tanggal" },
        { title: "Waktu" },
        { title: "" },
    ];

    const openModal = (item) => {
        setSelectedData(item);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedData(null);
    };

    return (
        <div className="pt-12">
            <h1 className="font-semibold text-2xl text-textPrimary mb-4">Konsultasi yang akan datang</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            {tableHead.map((item, index) => (
                                <th key={index} className="py-2 px-4 text-textPrimary text-left border-b border-gray-300">
                                    {item.title}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index} className="border-b border-gray-200 text-textPrimary">
                                <td className="py-4 px-4">{item.service}</td>
                                <td className="py-4 px-4">{item.category}</td>
                                <td className="py-4 px-4">{item.date}</td>
                                <td className="py-4 px-4">{item.time}</td>
                                <td className="py-4 px-4">
                                    <button
                                        className="text-blue-500 hover:underline"
                                        onClick={() => openModal(item)}
                                    >
                                        Detail
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isModalOpen && selectedData && (
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black bg-opacity-50 text-textPrimary">
                    <div className="bg-white p-[50px] rounded-lg w-fit">
                        <h2 className="text-2xl font-semibold mb-4">Detail Konsultasi</h2>
                        <div className="flex flex-row gap-6 items-center ">
                            <div className="flex gap-2 text-textPrimary">
                                <div className="text-2xl">
                                    <PiClockCountdownLight />
                                </div>
                                <h2 className="font-semibold text-[16px] ">{selectedData.time}</h2>
                            </div>
                            <hr className="border-textPrimary border-1 w-4 rotate-90 h-" />
                            <div className="flex gap-2 text-textPrimary">
                                <div className="text-2xl">
                                    <BsCalendar2Week />
                                </div>
                                <h2 className="font-semibold text-[16px] ">{selectedData.date}</h2>
                            </div>
                            <hr className="border-textPrimary border-1 w-4 rotate-90 h-" />
                            <div className="flex gap-2 text-textPrimary">
                                <div className="text-2xl">
                                    <VscLocation />
                                </div>
                                <h2 className="font-semibold text-[16px] ">{selectedData.location}</h2>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 pt-4">
                            <p><strong>Nama :</strong> {selectedData.name}</p>
                            <p><strong>Jurusan : </strong> {selectedData.jurusan}</p>
                            <p><strong>Layanan : </strong> {selectedData.service}</p>
                            <p><strong>Kategori : </strong> {selectedData.category}</p>
                            <p><strong>Mentor : </strong> {selectedData.mentor}</p>
                        </div>
                        <button
                            className="mt-8 w-full py-4 font-bold bg-primary text-white rounded-xl hover:bg-purple-600"
                            onClick={closeModal}
                        >
                            Tutup
                        </button>
                    </div>
                    <div className="w-16 rounded-full bg-primary absolute right-0 bottom-9"></div>
                </div>
            )}
        </div>
    );
}

export default TableConsultation;
