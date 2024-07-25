"use client";

import React from "react";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi"; 
import { MdArrowBackIosNew } from "react-icons/md";
import { useSidebar } from "./SidebarContext";
import { IoIosArrowDown } from "react-icons/io";
import { usePathname } from "next/navigation";
import MenuProfileDashboard from "./main-profile";
import { FiMail } from "react-icons/fi";

export default function MainHeader() {
  const [isSideBarOpen, toggleSidebar] = useSidebar();

  const handleMenuClick = () => {
    toggleSidebar();
  };

  const pathname = usePathname();
  const getPageTitle = () => {
    switch (pathname) {
      case "/dashboard":
        return "Dashboard";
      case "/dashboard/consultation":
        return "Pengajuan Konsultasi";
      case "/dashboard/history":
        return "Riwayat Konsultasi";
      default:
        return "";
    }
  };

  return (
    <div className="w-full h-[13%] bg-white flex flex-row justify-between items-center border-b-2 pr-8">
      <div className="w-full flex flex-row items-center">
        <div
          className={`flex ml-8 cursor-pointer text-textPrimary`}
          onClick={handleMenuClick}
        >
          {isSideBarOpen ? <MdArrowBackIosNew size={30} /> : <FiMenu size={30} />}
        </div>

        <h2 className="font-bold font-montserrat text-lg lg:text-2xl pl-5 text-textPrimary ">
          {getPageTitle()}
        </h2>
      </div>
      <div className="flex items-center gap-8">
        <MenuProfileDashboard />
      </div>
    </div>
  );
}