import React from "react";
import { Montserrat } from "next/font/google";
import { SidebarProvider } from "./components/SidebarContext";
import MainSideBar from "./components/main-sidebar";
import MainHeader from "./components/main-header";


export default function DashboardLayout({ children }) {
  return (
    <main>
      <div className="w-full h-full  flex flex-row">
        <SidebarProvider>
          <MainSideBar />
          <div className="w-full relative flex flex-col ">
            <MainHeader />
            <main className="w-full min-h-screen bg-white ">{children}</main>
          </div>
        </SidebarProvider>
      </div>
    </main>
  );
}
