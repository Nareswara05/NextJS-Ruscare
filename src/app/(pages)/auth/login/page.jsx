import { student, students } from "@/app/lib/utils/image";
import Image from "next/image";
import LoginForm from './form-layout';

export default function LoginPage() {

    return (
        <main className="h-screen w-screen flex flex-col items-center px-8 py-10 lg:flex-row lg:py-0 lg:px-0 bg-white">
            <div className="hidden lg:flex lg:justify-center mb-16 lg:items-center lg:mb-0 lg:w-1/2">
                <Image
                    className="flex w-[420px] items-end object-cover "
                    src={students}
                    alt="Logo"
                   
                />
            </div>

            <div className="w-full h-full flex flex-col  items-center justify-center py-[5vh] lg:py-20 lg:px-32 lg:w-1/2">
                <LoginForm/>
            </div>
        </main>
    );
}
