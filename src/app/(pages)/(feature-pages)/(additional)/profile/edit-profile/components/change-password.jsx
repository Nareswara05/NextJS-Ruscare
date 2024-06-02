"use client";

import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import getUser from '@/app/lib/service/endpoint/user/get-user';
import changePassword from '@/app/lib/service/endpoint/user/change-password';
import ButtonSubmit from './button-submit';
import EditForm from './edit-form';

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const user = await getUser();
                console.log("Fetched user:", user);
                if (user) {
                    setUserId(user.id);
                }
            } catch (error) {
                console.error("Failed to fetch user data:", error);
            }
        };

        fetchUserData();
    }, []);

    const handleCheckboxChange = () => {
        setShowPassword(!showPassword);
    };

    const handleChangePassword = async () => {
        if (newPassword !== confirmNewPassword) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Kata sandi baru dan konfirmasi kata sandi tidak cocok!',
            });
            return;
        }

        if (!userId || !oldPassword || !newPassword) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Kata sandi lama, dan kata sandi baru harus diisi!',
            });
            return;
        }

        try {
            const response = await changePassword({ id: userId, password: newPassword });
            console.log("Response from changePassword:", response);
            if (response && response.message === 'Password has been updated') {
                Swal.fire({
                    icon: 'success',
                    title: 'Berhasil',
                    text: 'Kata sandi berhasil diubah!',
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: response.message || 'Gagal mengubah kata sandi!',
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Gagal mengubah kata sandi! Silakan coba lagi.',
            });
        }
    };

    return (
        <div>
            <div>
                <h1 className='text-[24px] font-bold text-textPrimary'>Ganti Password</h1>
                <div className='flex flex-col gap-4 pt-6'>
                    <EditForm
                        placeholder="Masukkan Kata Sandi Lama"
                        label="Kata Sandi Lama"
                        type={showPassword ? "text" : "password"}
                        onChange={(e) => setOldPassword(e.target.value)}
                    />
                    <EditForm
                        placeholder="Masukkan Kata Sandi Baru"
                        label="Kata Sandi Baru"
                        type={showPassword ? "text" : "password"}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <EditForm
                        placeholder="Ulangi Kata Sandi Baru"
                        label="Konfirmasi Kata Sandi Baru"
                        type={showPassword ? "text" : "password"}
                        onChange={(e) => setConfirmNewPassword(e.target.value)}
                    />
                </div>
                <div className='flex justify-between'>
                    <div className='flex items-center pt-4'>
                        <input
                            type="checkbox"
                            id="showPassword"
                            checked={showPassword}
                            onChange={handleCheckboxChange}
                            className='mr-2'
                        />
                        <label htmlFor="showPassword" className='text-textPrimary text-lg'>Perlihatkan kata sandi</label>
                    </div>
                    <ButtonSubmit
                        title="Ganti Kata Sandi"
                        onClick={handleChangePassword}
                    />
                </div>
            </div>
        </div>
    );
};

export default ChangePassword;
