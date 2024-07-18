"use client";

import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { logoPurple } from "@/app/lib/utils/svg";
import login from "@/app/lib/service/endpoint/auth/login";
import { useRouter } from "next/navigation";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const isEmailValid = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Semua input harus diisi!");
      return;
    }

    if (!isEmailValid(email)) {
      setEmailError("Format email tidak valid!");
      return;
    } else {
      setEmailError("");
    }

    setIsLoading(true);

    try {
      const response = await login({ email, password });

      if (response.status === 422) {
        if (response.message === "Invalid credential") {
          setPasswordError("Terjadi kesalahan pada saat login.");
          setEmailError("");
        } else {
          setEmailError("Terjadi kesalahan, silakan coba lagi.");
          setPasswordError("");
        }
      } else {
        console.log("Respons dari login:", response);
        
        localStorage.setItem("authToken", response.token);
        
        setTimeout(() => {
          router.push("/dashboard");
        });
      }
    } catch (error) {
      console.error("Terjadi kesalahan saat login:", error);
      setEmailError("Terjadi kesalahan pada server, silakan coba lagi.");
      setPasswordError("");
    }

    setIsLoading(false);
  };

  return (
    <div className="w-full px-5 lg:px-12">
      <div className="w-full flex flex-col">
        <Image src={logoPurple} width={115} height={50} alt="Logo" />
        <div className="mt-6 font-montserrat text-textPrimary">
          <div className="font-semibold text-3xl">Masuk sebagai siswa</div>
          <div className="mt-4">Masukkan NIS dan password Anda untuk masuk</div>
        </div>
        <div className="flex flex-col font-montserrat w-full mt-16">
          <h2 className="text-[#252525] text-sm mb-2">NIS / Email</h2>
          <input
            className="w-[95%] border-b border-black focus:outline-none text-textPrimary"
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError("");
            }}
          />
          {emailError && <div className="text-red-500">{emailError}</div>}
        </div>
        <div className="flex flex-col font-montserrat w-full mt-10">
          <h2 className="text-[#252525] text-sm mb-2">Password</h2>
          <div className="flex flex-row font-montserrat w-full relative">
            <input
              className="w-[95%] border-b border-black focus:outline-none text-textPrimary"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError("");
              }}
            />
            <div
              className="flex mb-2 items-end cursor-pointer text-textPrimary absolute right-8"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <AiOutlineEye size={20} />
              ) : (
                <AiOutlineEyeInvisible size={20} />
              )}
            </div>
          </div>
          {passwordError && <div className="text-red-500">{passwordError}</div>}
        </div>
        <div className="w-full flex flex-col mt-10 font-montserrat text-sm sm:text-xl gap-6">
          <button
            type="submit"
            onClick={handleLogin}
            className="w-full py-3 flex items-center justify-center rounded-2xl hover:bg-purple-700 bg-primary relative"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-white"></div>
            ) : null}
            {!isLoading && "Masuk"}
          </button>
          <h4 className="text-black text-xs sm:text-[16px] flex justify-center gap-3">
            Belum mempunyai akun?{" "}
            <Link
              href="/register"
              className="text-primary text-xs sm:text-[16px] font-semibold"
            >
              Daftar
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;