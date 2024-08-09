"use client";
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import React from 'react';
import { listHistory } from './list-history';

const TableHistory = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 8;

    const tableHead = ['Layanan', 'Kategori', 'Status', 'Tanggal dan Waktu'];

    const getStatusStyles = (status) => {
        switch (status) {
            case 'Akan Datang':
                return 'bg-blue-100 text-blue-800 font-medium';
            case 'Selesai':
                return 'bg-green-100 text-green-800 font-medium';
            case 'Dibatalkan':
                return 'bg-red-100 text-red-800 font-medium';
            case 'Kadaluarsa':
                return 'bg-gray-100 text-gray-500 font-medium';
            default:
                return '';
        }
    };

    const getPaginatedData = (data) => {
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        return data.slice(startIndex, endIndex);
    };

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div className="p-4 bg-gray-50 min-h-[520px] rounded-lg shadow-md flex flex-col justify-between">
            <table className="min-w-full bg-white rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                    <tr>
                        {tableHead.map((item, index) => (
                            <th
                                key={index}
                                className="py-3 px-4 text-gray-700 font-semibold text-left"
                            >
                                {item}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {getPaginatedData(listHistory).map((item, index) => (
                        <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition text-textPrimary">
                            <td className="py-3 px-4">{item.service}</td>
                            <td className="py-3 px-4">{item.category}</td>
                            <td className={`py-3 px-4 font-semibold ${getStatusStyles(item.status)}`}>{item.status}</td>
                            <td className="py-3 px-4">{item.dateTime}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-between items-center mt-4">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="bg-primary text-white py-2 px-4 rounded-l-lg hover:bg-primary-dark transition"
                >
                    <FaChevronLeft />
                </button>
                <span className="text-gray-700">
                    Halaman {currentPage} dari {Math.ceil(listHistory.length / pageSize)}
                </span>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === Math.ceil(listHistory.length / pageSize)}
                    className="bg-primary text-white py-2 px-4 rounded-r-lg hover:bg-primary-dark transition"
                >
                    <FaChevronRight />
                </button>
            </div>
        </div>
    );
};

export default TableHistory;
