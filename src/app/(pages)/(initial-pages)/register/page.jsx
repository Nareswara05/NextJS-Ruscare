import React from "react";
import Image from "next/image";
import { logoPurple } from "@/app/lib/utils/svg";
import FormLayout from "../components/form-layout";

export default function RegisterPage() {
  return (
    <main className="h-full bg-white w-full ">
      <div className="w-full h-screen flex flex-row  ">
        <div className="hidden lg:w-full lg:h-full lg:flex lg:justify-center lg:items-center bg-primary z-10 relative ">
          {/* <Image src={registerIllustration} alt="Register Illustration" className="px-5" /> */}
        </div>
        <div className="w-full h-full bg-white flex flex-col px-8 sm:px-24 lg:px-36 py-8">
          <div className="flex-row h-auto items-center justify-start flex">
          </div>
          <FormLayout />
        </div>
      </div>
    </main>
  );
}
