"use client"
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import React from 'react';

const TableHistory = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 8;

    const lisData = [
        {
            service: "Bimbingan Kelompok",
            status: "Akan Datang",
            category: "Pribadi",
            mentor: "Dr. Andi Wijaya",
            dateTime: "2024-05-14 09:00"
        },
        {
            service: "Layanan Klasikan",
            status: "Selesai",
            category: "Belajar",
            mentor: "Bu Siti Rahmawati",
            dateTime: "2024-05-10 10:00"
        },
        {
            service: "Konseling Individual",
            status: "Dibatalkan",
            category: "Karir",
            mentor: "Pak Budi Santoso",
            dateTime: "2024-05-09 14:00"
        },
        {
            service: "Konseling Kelompok",
            status: "Akan Datang",
            category: "Sosial",
            mentor: "Dr. Rina Hartono",
            dateTime: "2024-05-18 16:00"
        },
        {
            service: "Layanan Konsultasi",
            status: "Selesai",
            category: "Pribadi",
            mentor: "Bu Nurul Fajri",
            dateTime: "2024-05-12 11:00"
        },
        {
            service: "Bimbingan Kelompok",
            status: "Akan Datang",
            category: "Sosial",
            mentor: "Dr. Yusuf Hidayat",
            dateTime: "2024-05-20 13:00"
        },
        {
            service: "Layanan Klasikan",
            status: "Selesai",
            category: "Karir",
            mentor: "Pak Rahmat Hidayat",
            dateTime: "2024-05-08 09:30"
        },
        {
            service: "Konseling Individual",
            status: "Akan Datang",
            category: "Pribadi",
            mentor: "Bu Anita Sari",
            dateTime: "2024-05-21 15:00"
        },
        {
            service: "Konseling Kelompok",
            status: "Dibatalkan",
            category: "Belajar",
            mentor: "Pak Agus Prasetyo",
            dateTime: "2024-05-05 10:00"
        },
        {
            service: "Layanan Konsultasi",
            status: "Akan Datang",
            category: "Karir",
            mentor: "Bu Dian Lestari",
            dateTime: "2024-05-22 14:30"
        }
    ];

    const tableHead = [
        { menu: 'Layanan' },
        { menu: 'Kategori' },
        { menu: 'Mentor' },
        { menu: 'Status' },
        { menu: 'Tanggal dan Waktu' },
    ];

    const getStatusStyles = (status) => {
        switch (status) {
            case 'Akan Datang':
                return 'bg-blue-100 text-blue-800 font-medium';
            case 'Selesai':
                return 'bg-green-100 text-green-800 font-medium';
            case 'Dibatalkan':
                return 'bg-red-100 text-red-800 font-medium';
            default:
                return '';
        }
    };

    const getPaginatedData = (data) => { // Replace 'data' with your actual data array
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        return data.slice(startIndex, endIndex);
    };

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div>
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        {tableHead.map((item, index) => (
                            <th
                                key={index}
                                className={`py-4 ${item.menu === 'Status' ? 'px-0' : 'px-4'} text-textPrimary text-left border-b border-gray-300`}
                            >
                                {item.menu}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {getPaginatedData(lisData).map((item, index) => (
                        <tr key={index} className="border-b border-gray-200 text-sm text-textPrimary">
                            <td className="py-4 px-4">{item.service}</td>
                            <td className="py-4 px-4">{item.category}</td>
                            <td className="py-4 px-4">{item.mentor}</td>
                            <td className={`px-4 py-4 font-semibold ${getStatusStyles(item.status)}`}>{item.status}</td>
                            <td className="py-4 px-4">{item.dateTime}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-between mt-4">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="bg-primary hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-l"
                >
                    <FaChevronLeft />
                </button>
                <span className="text-gray-700 py-2 px-4">
                    Halaman {currentPage} dari {Math.ceil(lisData.length / pageSize)}
                </span>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === Math.ceil(lisData.length / pageSize)}
                    className="bg-primary hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-r"
                >
                    <FaChevronRight />
                </button>

            </div>
        </div >
    );
};

export default TableHistory;
