import { logoPurple } from "@/app/lib/utils/svg";
import Image from "next/image";
import LoginForm from './form-layout';

export default function LoginPage() {

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

            <div className="w-full h-full flex flex-col  items-center justify-center py-[5vh] lg:py-20 lg:px-32 lg:w-1/2">
                <LoginForm/>
            </div>
        </main>
    );
}
