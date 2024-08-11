"use client";

import { useState, useEffect } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { logoPurple } from "@/app/lib/utils/svg";
import { useRouter } from "next/navigation";
import loginStudent from "@/app/lib/service/endpoint/auth/login-student";
import EmailPopup from "../../dashboard/components/popup-email";
import Swal from "sweetalert2";

function LoginStudent() {
  const [nis_or_email, setNis_or_email] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nisOrEmailError, setNisOrEmailError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateNisOrEmail = (value) => {
    const nisPattern = /^\d+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nisPattern.test(value) || emailPattern.test(value)) {
      setNisOrEmailError("");
      return true;
    } else {
      setNisOrEmailError("Masukkan NIS yang valid atau email yang benar.");
      return false;
    }
  };

  const handleLogin = async () => {
    if (!nis_or_email || !password) {
      if (!nis_or_email) {
        setNisOrEmailError("NIS atau Email harus diisi.");
      }
      if (!password) {
        setPasswordError("Password harus diisi.");
      }
      return;
    }

    if (!validateNisOrEmail(nis_or_email)) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await loginStudent({ nis_or_email, password });

      if (response.status === 422) {
        setPasswordError("Terjadi kesalahan pada saat login.");
      } else if (response.token) {
        document.cookie = `token=${response.token}; path=/;`;
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
          title: "Login berhasil"
      });
        if (response.user) {
          setUser(response.user);
          if (response.user.email === null) {
            setShowPopup(true);
          }
        }
        setTimeout(() => {
          router.push("/dashboard");
          window.location.reload(); 
        });
      }
    } catch (error) {
      console.error("Terjadi kesalahan saat login:", error);
      setPasswordError("Terjadi kesalahan saat login. Silakan coba lagi.");
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (user && user.email === null) {
      setShowPopup(true);
    }
  }, [user]);

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
            value={nis_or_email}
            onChange={(e) => setNis_or_email(e.target.value)}
          />
          {nisOrEmailError && <div className="text-red-500">{nisOrEmailError}</div>}
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
            Kamu adalah mentor?{" "}
            <Link
              href="http://localhost:3001"
              className="text-primary text-xs sm:text-[16px] font-semibold"
            >
              Masuk
            </Link>
          </h4>
        </div>
        {showPopup && user && user.email === null && (
          <EmailPopup userId={user.id} closePopup={() => setShowPopup(false)} />
        )}
      </div>
    </div>
  );
}

export default LoginStudent;
