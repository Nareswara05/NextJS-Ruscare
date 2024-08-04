"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSidebar } from "./SidebarContext";
import { logoPurple } from "@/app/lib/utils/svg";
import { RiServiceLine } from "react-icons/ri";
import { VscHistory } from "react-icons/vsc";
import { RxDashboard } from "react-icons/rx";



export default function MainSideBar() {
  const [isSideBarOpen, setIsSideBarOpen] = useSidebar(); 

  const toggleSidebar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  

  return (
    <>
      <div
      className={`lg:w-[30%] sticky top-0 h-screen bg-white flex flex-col border-r-2  ${
        isSideBarOpen ? "flex" : "hidden"
      }`}
    >
      <div className="w-full h-[13%] flex flex-row px-8 justify-between items-center">
        <div className="flex-row h-auto items-center justify-start flex ">
        <Link href="/">
          <Image src={logoPurple} 
          alt="" 
          width={120}
          />
          </Link>
        </div>

        
      </div>

      <div className="w-full flex flex-col px-8 mt-5">
        <div className="w-full flex flex-col">
          <h2 className="text-sm font-medium text-textPrimary">MENU UTAMA</h2>
          <ul className="w-full mt-3">

            
            <li className="flex justify-start items-center text-textPrimary hover:bg-primary hover:text-white rounded-xl p-4 cursor-pointer">
              <RxDashboard className="mr-4" size={25} />
              <Link
                href="/dashboard-student"
                className="text-base font-normal"
              >
                Dashboard
              </Link>
            </li>

            <li className="flex justify-start items-center text-textPrimary hover:bg-primary hover:text-white rounded-xl p-4 cursor-pointer">
              <RiServiceLine  className="mr-4" size={25} />
              <Link
                href="/dashboard-student/consultation"
                className="text-base font-normal"
              >
                Konsultasi
              </Link>
            </li>
            <li className="flex justify-start items-center text-textPrimary hover:bg-primary hover:text-white rounded-xl p-4 cursor-pointer">
              <VscHistory className="mr-4" size={25} />
              <Link href="/dashboard-student/history" className="text-base font-normal">
                Riwayat
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}
