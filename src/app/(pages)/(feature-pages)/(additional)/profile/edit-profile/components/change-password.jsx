"use client"

import React, { useState } from 'react';
import ButtonSubmit from './button-submit';
import EditForm from './edit-form';

const ChangePassword = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleCheckboxChange = () => {
        setShowPassword(!showPassword);
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
                    />
                    <EditForm
                        placeholder="Masukkan Kata Sandi Baru"
                        label="Kata Sandi Baru"
                        type={showPassword ? "text" : "password"}
                    />
                    <EditForm
                        placeholder="Ulangi Kata Sandi Baru"
                        label="Konfirmasi Kata Sandi Baru"
                        type={showPassword ? "text" : "password"}
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
                        />
                </div>
            </div>
        </div>
    );
};

export default ChangePassword;
