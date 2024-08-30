"use client";

import changeEmail from '@/app/lib/service/endpoint/user/change-email';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import ButtonSubmit from './button-submit';
import EditForm from './edit-form';

const ChangeEmail = () => {
    const [oldEmail, setOldEmail] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [userId, setUserId] = useState(null);
    const [storedEmail, setStoredEmail] = useState("");


    const handlePopup = () => {
        Swal.fire({
            title: "Apakah kamu yakin ingin mengganti email ?",
            text: "Pastikan email yang kamu isi sudah benar",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Iya, ganti email!",
        }).then((result) => {
            if (result.isConfirmed) {
                handleEdit();
            }
        });
    }

    const handleEdit = async () => {

        if (!newEmail) {
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });

            Toast.fire({
                icon: "error",
                title: "Email baru tidak boleh kosong!"
            });
            }
        

        

        if (response.message === 'Email sama dengan sebelumnya') {
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });

            Toast.fire({
                icon: "error",
                title: "Email lama dan email baru tidak boleh sama!"
            });
            return;
        }

        try {
            const response = await changeEmail({ email: newEmail });
            console.log("Response from registration:", response);
            if (response && response.message === 'Email berhasil diubah') {
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });

                Toast.fire({
                    icon: "success",
                    title: "Email berhasil diubah!"
                });
                const updatedUser = { ...response.data, email: newEmail };
                localStorage.setItem('user', JSON.stringify(updatedUser));
            }
        } catch (error) {
            console.error("Error during registration:", error);
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });

            Toast.fire({
                icon: "error",
                title: "Email gagal diubah, silahkan coba lagi"
            });
        }
    };

    return (
        <div>
            <h1 className='text-[24px] font-bold text-textPrimary'>Ganti Email</h1>
            <div className='flex flex-col gap-4 pt-6'>
                <EditForm
                    placeholder="Masukkan Email Baru"
                    label="Email Baru"
                    type="email"
                    onChange={(e) => setNewEmail(e.target.value)}
                />
            </div>
            <div className='flex items-end justify-end'>
                <ButtonSubmit
                    title="Ganti Email"
                    onClick={handlePopup}
                />
            </div>
        </div>
    );
}

export default ChangeEmail;
