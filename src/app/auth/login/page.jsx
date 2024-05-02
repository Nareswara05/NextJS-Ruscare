"use client"
import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'; 
import { logoPurple } from "@/app/lib/utils/svg";
import Form from "../components/form";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <main className="h-screen w-screen flex flex-col items-center px-8 py-10 lg:flex-row-reverse lg:py-0 lg:px-0 bg-white">
            <div className="w-full flex justify-start lg:justify-center mb-16 lg:bg-primary lg:h-full lg:mb-0 lg:w-1/2">
                <Image
                    className="flex items-end"
                    src={logoPurple}
                    alt="Logo"
                    width={115}
                    height={50}
                />
            </div>

            <div className="w-full h-full flex flex-col items-start lg:justify-between py-[5vh] lg:py-20 lg:px-32 lg:w-1/2">
                <Image
                    className=" items-end hidden lg:block"
                    src={logoPurple}
                    alt="Logo"
                    width={115}
                    height={50}
                />
                <div className="w-full ">

                    <h1 className="text-black font-semibold text-2xl lg:text-[36px] mb-3">Masuk</h1>
                    <h3 className="text-[#8D8D8D] font-light text-base mb-12">Selamat Datang Kembali!</h3>

                    <div className="w-full flex flex-col gap-7 mb-5">
                        <Form label="Email" />
                        <div className="relative">
                            <Form
                                label="Password"
                                type={showPassword ? 'text' : 'password'}
                            />
                            <button
                                className="absolute top-12 text-3xl transform -translate-y-1/2 right-4 text-textPrimary focus:outline-none opacity-50"
                                onClick={toggleShowPassword}
                                type="button" 
                            >
                                {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-col gap-5">
                    <button className="w-full bg-primary py-4 rounded-2xl text-white font-medium text-sm lg:text-lg">Masuk</button>
                    <div className="w-full flex gap-2 justify-center items-center">
                        <h3 className="text-textPrimary text-xs lg:text-[16px]">Tidak mempunyai akun?</h3>
                        <Link href="/auth/register" className="text-primary font-semibold text-sm lg:text-[18px]">Daftar</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
