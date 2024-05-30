"use client";

import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { logoPurple } from "@/app/lib/utils/svg";
import register from "@/app/lib/service/endpoint/auth/register";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

function FormLayout() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [serverError, setServerError] = useState(""); // State untuk menyimpan pesan kesalahan dari server
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const isEmailValid = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleRegister = async () => {
    if (!name || !email || !password || !confirmPassword) {
      alert("Semua input harus diisi!");
      return;
    }

    if (!isEmailValid(email)) {
      setEmailError("Format email tidak valid!");
      return;
    } else {
      setEmailError("");
    }

    if (password.length < 8) {
      setPasswordError("Password harus memiliki minimal 8 karakter!");
      return;
    } else {
      setPasswordError("");
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError("Konfirmasi password tidak cocok dengan password");
      return;
    } else {
      setConfirmPasswordError("");
    }

    try {
      const response = await register({ name, email, password });
      console.log("Respons dari pendaftaran:", response);

      Swal.fire({
        title: "Pendaftaran Berhasil",
        text: "Akun Anda telah berhasil dibuat. Silakan login untuk melanjutkan.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        router.push("/login");
      });
    } catch (error) {
      console.error("Terjadi kesalahan saat pendaftaran:", error);
      if (error.response && error.response.data && error.response.data.message) {
        if (error.response.data.message === "email has already been taken") {
          setServerError("Email sudah terdaftar");
        } else {
          setServerError(error.response.data.message);
        }
      } else {
        setServerError("Terjadi kesalahan saat pendaftaran");
      }
    }
  };

  return (
    <div className="w-full px-5 lg:px-16">
      <div className="w-full flex flex-col">
        <Image src={logoPurple} width={115} height={50} alt="Logo" />
        <div className="mt-6 font-montserrat text-textPrimary">
          <div className="font-semibold text-3xl">Daftar</div>
          <div className="mt-4">
            Mari kita mulai dengan mengisi data di bawah ini
          </div>
        </div>
        <input type="hidden" name="_csrf" value={null} />
        <div className="flex flex-col font-montserrat w-full mt-16">
          <h2 className="text-[#252525] text-sm mb-2">Nama</h2>
          <input
            className="w-[95%] border-b border-black focus:outline-none text-textPrimary"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col font-montserrat w-full mt-10">
          <h2 className="text-[#252525] text-sm mb-2">Email</h2>
          <input
            className="w-[95%] border-b border-black focus:outline-none text-textPrimary"
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError("");
              setServerError(""); 
            }}
          />
          {emailError && <div className="text-red-500">{emailError}</div>}
          {serverError && <div className="text-red-500">{serverError}</div>}
        </div>
        <div className="flex flex-col font-montserrat w-full mt-10">
          <h2 className="text-[#252525] text-sm mb-2">Password</h2>
          <div className="flex flex-row font-montserrat w-full relative">
            <input
              className="w-[95%] border-b border-black focus:outline-none text-textPrimary"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
        <div className="flex flex-col font-montserrat w-full mt-10">
          <h2 className="text-[#252525] text-sm mb-2">Confirm Password</h2>
          <div className="flex flex-row font-montserrat w-full relative">
            <input
              className="w-[95%] border-b border-black focus:outline-none text-textPrimary"
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div
              className="flex mb-2 items-end cursor-pointer text-textPrimary absolute right-8"
              onClick={toggleConfirmPasswordVisibility}
            >
              {showConfirmPassword ? (
                <AiOutlineEye size={20} />
              ) : (
                <AiOutlineEyeInvisible size={20} />
              )}
            </div>
          </div>
          {confirmPasswordError && (
            <div className="text-red-500">{confirmPasswordError}</div>
          )}
        </div>
        <div className="w-full flex flex-col mt-10 font-montserrat text-sm sm:text-xl gap-6">
          <button
            type="submit"
            onClick={handleRegister}
            className="w-full py-3 flex items-center justify-center rounded-2xl bg-primary hover:bg-purple-700"
          >
            Buat Akun
          </button>
          <h4 className="text-black text-xs sm:text-[16px] flex justify-center gap-3">
            Sudah mempunyai akun?{" "}
            <Link
              href="/login"
              className="text-primary text-xs sm:text-[16px] font-semibold"
            >
              Masuk
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default FormLayout;
