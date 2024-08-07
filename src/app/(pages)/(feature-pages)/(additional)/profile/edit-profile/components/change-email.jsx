"use client";

import changeEmail from '@/app/lib/service/endpoint/user/change-email';
import getUser from '@/app/lib/service/endpoint/user/get-user';
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import ButtonSubmit from './button-submit';
import EditForm from './edit-form';

const ChangeEmail = () => {
    const [oldEmail, setOldEmail] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [userId, setUserId] = useState(null);
    const [storedEmail, setStoredEmail] = useState("");

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const user = await getUser();
                console.log("Fetched user:", user);
                if (user) {
                    setUserId(user.id);
                    setStoredEmail(user.email); 
                }
            } catch (error) {
                console.error("Failed to fetch user data:", error);
            }
        };

        fetchUserData();
    }, []);

    const handleEdit = async () => {
        console.log("handleEdit called");
        console.log("Old Email:", oldEmail);
        console.log("New Email:", newEmail);
        console.log("Stored Email:", storedEmail);
        console.log("User ID:", userId);
        
        if (!userId || !oldEmail || !newEmail) {
            alert("User ID, Old Email, and New Email are required");
            return;
        }

        if (oldEmail !== storedEmail) {
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
                title: "Email lama tidak sesuai!"
            });
            return;
        }

        if (oldEmail === newEmail) {
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
            const response = await changeEmail({ id: userId, email: newEmail });
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
                const updatedUser = { ...response.data, email: newEmail }; // gunakan data dari respons server
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
                    placeholder="Masukkan Email Lama"
                    label="Email Lama"
                    type="email"
                    onChange={(e) => setOldEmail(e.target.value)}
                />
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
                    onClick={handleEdit}
                />
            </div>
        </div>
    );
}

export default ChangeEmail;
