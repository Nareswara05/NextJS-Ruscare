"use client";
import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaEye } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { PiClockCountdownLight } from 'react-icons/pi'; // Make sure to install and import icons
import { BsCalendar2Week } from 'react-icons/bs';
import { VscLocation } from 'react-icons/vsc';
import getHistoryStudent from '@/app/lib/service/endpoint/dashboard/history-student';
import getUser from '@/app/lib/service/endpoint/user/get-user';
import { IoMdEye } from 'react-icons/io';
import getStatusCounseling from '@/app/lib/service/endpoint/api/list-status';
import Skeleton from 'react-loading-skeleton';

const TableHistory = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [historyData, setHistoryData] = useState([]);
    const [statusList, setStatusList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedData, setSelectedData] = useState(null);
    const [userData, setUserData] = useState(null);
    const pageSize = 8;

    const tableHead = ['Layanan', 'Kategori', 'Status', 'Tanggal dan Waktu', 'Detail'];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [historyResponse, statusResponse] = await Promise.all([
                    getHistoryStudent(),
                    getStatusCounseling()
                ]);

                setHistoryData(historyResponse);
                setStatusList(statusResponse);
                setLoading(false);
            } catch (err) {
                setError('Gagal memuat data');
                setLoading(false);
                Swal.fire({
                    title: 'Gagal!',
                    text: 'Terjadi kesalahan saat memuat data.',
                    icon: 'error',
                    confirmButtonText: 'Oke'
                });
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const data = await getUser();
                setUserData(data);
            } catch (error) {
                console.error("Failed to fetch user data:", error);
            }
        };

        fetchUserData();
    }, []);

    const getStatusName = (statusId) => {
        const status = statusList.find(item => item.id === statusId);
        return status ? status.status : 'Unknown';
    };

    const getStatusStyles = (statusName) => {
        switch (statusName) {
            case 'Akan Datang':
                return 'bg-[#F4C918] text-[#F4C918] bg-opacity-30 font-medium';
            case 'Dibatalkan':
                return 'bg-[#FF3797] text-[#FF3797] bg-opacity-30 font-medium';
            case 'Selesai':
                return 'bg-[#3AAC75] text-[#3AAC75] bg-opacity-30 font-medium';
            case 'Menunggu Konfirmasi':
                return 'bg-[#8280FF] text-[#8280FF] bg-opacity-30 font-medium';
            case 'Jadwal Ulang':
                return 'bg-[#9F41EA] text-[#9F41EA] bg-opacity-30 font-medium';
            case 'Tidak Hadir':
                return 'bg-[#808080] text-[#808080] bg-opacity-30 font-medium';
            default:
                return 'bg-gray-200 text-gray-500';
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

    const openModal = (data) => {
        setSelectedData(data);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedData(null);
    };

    if (loading) {
        return (
            <div className="p-4 min-h-[520px] rounded-lg ">
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
                        {Array.from({ length: pageSize }).map((_, index) => (
                            <tr key={index} className="border-b border-gray-200">
                                {tableHead.map((_, i) => (
                                    <td key={i} className="py-3 px-4 bg-transparent">
                                        <Skeleton width="100%" height="20px" />
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }

    if (error) {
        return <div className="p-4 bg-gray-50 min-h-[520px] rounded-lg shadow-md flex items-center justify-center">{error}</div>;
    }

    return (
        <div className="p-4 min-h-[520px] rounded-lg flex flex-col justify-between">
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
                    {getPaginatedData(historyData).map((item, index) => (
                        <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition text-textPrimary">
                            <td className="py-3 px-4">{item.service}</td>
                            <td className="py-3 px-4">{item.subject}</td>
                            <td className={`px-4 py-4 font-semibold rounded-xl text-center ${getStatusStyles(getStatusName(item.counseling_status_id))}`}>
                                {getStatusName(item.counseling_status_id)}
                            </td>
                            <td className="py-3 px-4">{item.counseling_date} pukul {item.time}</td>
                            <td className="py-3 px-4">
                                <button
                                    className="text-secondary hover:text-yellow-500 bg-yellow-500 bg-opacity-20 hover:bg-yellow-700 hover:bg-opacity-20 p-2 rounded-lg"
                                    onClick={() => openModal(item)}
                                    title="View Detail"
                                >
                                    <IoMdEye size={24} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-between items-center mt-4">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition"
                >
                    <FaChevronLeft />
                </button>
                <span className="text-gray-700">
                    Halaman {currentPage} dari {Math.ceil(historyData.length / pageSize)}
                </span>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === Math.ceil(historyData.length / pageSize)}
                    className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition"
                >
                    <FaChevronRight />
                </button>
            </div>

            {isModalOpen && selectedData && (
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black bg-opacity-50 text-textPrimary">
                    <div className="bg-white p-8 rounded-lg w-fit">
                        <h2 className="text-2xl font-semibold mb-4">Detail Konsultasi</h2>
                        <div className="flex flex-row gap-6 items-center">
                            <div className="flex gap-2 text-textPrimary">
                                <div className="text-2xl">
                                    <PiClockCountdownLight />
                                </div>
                                <h2 className="font-semibold text-[16px]">{selectedData.time}</h2>
                            </div>
                            <hr className="border-textPrimary border-1 w-4 rotate-90" />
                            <div className="flex gap-2 text-textPrimary">
                                <div className="text-2xl">
                                    <BsCalendar2Week />
                                </div>
                                <h2 className="font-semibold text-[16px]">{selectedData.counseling_date}</h2>
                            </div>
                            <hr className="border-textPrimary border-1 w-4 rotate-90" />
                            <div className="flex gap-2 text-textPrimary">
                                <div className="text-3xl">
                                    <VscLocation />
                                </div>
                                <h2 className="font-semibold text-[16px]">{selectedData.place ?? 'belum ditentukan'}</h2>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 pt-4">
                            <p><strong>Nama :</strong> {userData?.name ?? 'Belum tersedia'}</p>
                            <p><strong>Jurusan :</strong> {userData?.grade_id ?? 'Belum tersedia'}</p>
                            <p><strong>Layanan :</strong> {selectedData.service}</p>
                            <p><strong>Kategori :</strong> {selectedData.subject}</p>
                            <p><strong>Mentor :</strong> {selectedData.mentor ?? 'Belum tersedia'}</p>
                        </div>
                        <h1 className='text-xl font-bold text-textPrimary pt-4'>Catatan </h1>
                        <p className='text-sm'>{selectedData.note ?? 'Tidak ada catatan'}</p>
                        <button
                            className="mt-8 w-full py-4 font-bold bg-primary text-white rounded-lg hover:bg-purple-600"
                            onClick={closeModal}
                        >
                            Tutup
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TableHistory;
