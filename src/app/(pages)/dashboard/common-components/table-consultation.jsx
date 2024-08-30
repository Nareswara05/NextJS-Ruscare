import React, { useEffect, useState } from 'react';
import { IoMdEye } from 'react-icons/io';
import { RxCross2 } from 'react-icons/rx';
import Swal from 'sweetalert2';
import Link from 'next/link';
import getUser from '@/app/lib/service/endpoint/user/get-user';
import { VscLocation } from 'react-icons/vsc';
import { PiClockCountdownLight } from "react-icons/pi";
import { BsCalendar2Week } from 'react-icons/bs';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import CancelCounseling from '@/app/lib/service/endpoint/dashboard/cancel-counseling';
import acceptReschedule from '@/app/lib/service/endpoint/dashboard/accept-reschedule';
import { FaCalendarCheck } from 'react-icons/fa';
import listConsultant from '@/app/lib/service/endpoint/api/list-consultant';

const TableConsultation = ({ consultations = [], title, loading }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedData, setSelectedData] = useState(null);
    const [userData, setUserData] = useState(null);
    const [mentorList, setMentorList] = useState([]);
    const tableHead = ["Layanan", "Kategori", "Tanggal", "Waktu", "Aksi"];

    const openModal = (item) => {
        const mentors = mentorList.find(mentors => mentors.grade_id === item.grade_id);
        setSelectedData({
            ...item,
            mentorName: mentors ? mentors.name : 'Unknown'
        }); setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedData(null);
    };

    useEffect(() => {
        const fetchMentor = async () => {
            try {
                const mentor = await listConsultant();
                setMentorList(mentor);
            } catch (error) {
                console.error("Failed to fetch user data:", error);
            }
        };

        fetchMentor();
    },
    [])

    const getMentorName = (grade_id) => {
        const mentors = mentorList.find(mentors => mentors.grade_id === grade_id);
        return mentors ? mentors.name : 'Unknown';
    };

    const handleCancel = async (item) => {
        const { value: text } = await Swal.fire({
            input: "textarea",
            inputLabel: "Apa alasan kamu membatalkan konsultasi?",
            inputPlaceholder: "Masukkan alasan pembatalan konsultasi disini...",
            inputAttributes: {
                "aria-label": "Type your message here"
            },
            showCancelButton: true
        });

        if (text) {
            try {
                const response = await CancelCounseling({ counselingId: item.id, message: text });
                if (response.message == "Status Counseling berhasil diubah") {
                    Swal.fire({
                        title: "Konsultasi berhasil dibatalkan",
                        icon: "success",
                        willClose: () => {
                            window.location.reload();
                        }
                    });
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Gagal membatalkan konsultasi",
                        text: response.message || "Terjadi kesalahan saat membatalkan konsultasi.",
                    });
                }
            } catch (error) {
                Swal.fire({
                    icon: "error",
                    title: "Gagal membatalkan konsultasi",
                    text: "Terjadi kesalahan saat menghubungi server.",
                });
                console.error('Error cancelling consultation:', error);
            }
        }
    };

    const handleAcceptReschedule = async (item) => {
        try {
            const { isConfirmed } = await Swal.fire({
                title: "Konfirmasi Jadwal Ulang",
                text: "Apakah Anda yakin ingin menerima jadwal ulang ini?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Terima",
                cancelButtonText: "Batal"
            });

            if (isConfirmed) {
                const response = await acceptReschedule({ counselingId: item.id });
                if (response.message === "Status Counseling berhasil diubah") {
                    Swal.fire({
                        title: "Konsultasi berhasil dijadwalkan ulang",
                        icon: "success",
                        willClose: () => {
                            window.location.reload();
                        }
                    });
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Gagal menerima jadwal ulang",
                        text: response.message || "Terjadi kesalahan saat menerima jadwal ulang.",
                    });
                }
            } else {
                Swal.fire("Penjadwalan ulang dibatalkan", "", "info");
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Gagal menerima jadwal ulang",
                text: "Terjadi kesalahan saat menghubungi server.",
            });
            console.error('Error accepting reschedule:', error);
        }
    };



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

    let major = "";
    switch (selectedData?.grade_id) {
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

    return (
        <div className="pt-12">
            <div className="flex justify-between">
                <h1 className="font-semibold text-2xl text-textPrimary mb-4">{title}</h1>
                <Link href="/dashboard/history" className="text-primary underline">Lihat Selengkapnya</Link>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            {tableHead.map((headTitle, index) => (
                                <th key={index} className="py-2 px-4 text-textPrimary text-left border-b border-gray-300">
                                    {headTitle}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            Array.from({ length: 5 }).map((_, index) => (
                                <tr key={index} className="border-b border-gray-200">
                                    {tableHead.map((_, i) => (
                                        <td key={i} className="py-4 px-4">
                                            <Skeleton width="100%" height="20px" />
                                        </td>
                                    ))}
                                </tr>
                            ))
                        ) : consultations.length > 0 ? (
                            consultations.map((item, index) => (
                                <tr key={index} className="border-b border-gray-200 text-textPrimary">
                                    <td className="py-4 px-4">{item.service}</td>
                                    <td className="py-4 px-4">{item.subject}</td>
                                    <td className="py-4 px-4">{item.counseling_date}</td>
                                    <td className="py-4 px-4">{item.time}</td>
                                    <td className="py-4 px-4 flex gap-2">
                                        <button
                                            className="text-secondary hover:text-yellow-500 bg-yellow-500 bg-opacity-20 hover:bg-yellow-700 hover:bg-opacity-20 p-2 rounded-lg"
                                            onClick={() => openModal(item)}
                                            title="View Detail"
                                        >
                                            <IoMdEye size={24} />
                                        </button>
                                        {(item.counseling_status_id === 1 || item.counseling_status_id === 2 || item.counseling_status_id === 3) && (
                                            <button
                                                title="Cancel"
                                                className="text-red-500 p-2 bg-red-500 bg-opacity-20 hover:bg-red-700 hover:bg-opacity-20 hover:text-red-700 rounded-lg"
                                                onClick={() => handleCancel(item)}
                                            >
                                                <RxCross2 size={24} />
                                            </button>
                                        )}
                                        {item.counseling_status_id === 3 && (
                                            <button
                                                title="Accept Reschedule"
                                                className="text-orange-500 p-2 bg-orange-500 bg-opacity-20 hover:bg-orange-700 hover:bg-opacity-20 hover:text-orange-700 rounded-lg"
                                                onClick={() => handleAcceptReschedule(item)}
                                            >
                                                <FaCalendarCheck size={24} />
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={tableHead.length} className="py-4 px-4 text-center text-textPrimary">
                                    Tidak ada data konsultasi
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
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
                            <p><strong>Jurusan :</strong> {major}</p>
                            <p><strong>Layanan :</strong> {selectedData.service}</p>
                            <p><strong>Kategori :</strong> {selectedData.subject}</p>
                            <p><strong>Mentor :</strong> {selectedData.mentorName ?? 'Belum tersedia'}</p>
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

export default TableConsultation;
