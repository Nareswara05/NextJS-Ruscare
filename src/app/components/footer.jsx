import Image from "next/image";
import Link from "next/link"; 
import { facebook, instagram, logowhite, twitter } from "../lib/utils/svg";

export default function Footer() {

  const menu  =[
    { id: 1, menu: "Tentang Kami", href: "/about" },
    { id: 2, menu: "Kritik Saran", href: "/suggestion" },
    { id: 3, menu: "Kontak", href: "/contact" },
  ]


  return (
    <footer className="flex flex-col items-center justify-center py-14 px-5 bg-primary lg:py-[70px] lg:px-[400px]">
      <div className="flex justify-center flex-col items-center">
        <div className="flex">
          <Image
            src={logowhite}
            alt="Logo"
            width={120}
            height={60}
            className="object-contain"
          />
        </div>
        <h2 className="text-white opacity-50 text-center text-[16px] pt-5">Dengan adanya RusCare diharapkan dapat membantu menyelesaikan masalah peserta didik dan membantu dalam kegiatan pembelajaran</h2>
      </div>
      <ul className="flex flex-col lg:flex-row text-base font-normal  gap-3 text-white pt-12 items-center justify-center">
              {menu.map((item) => (
                <li key={item.id}>
                  <Link href={item.href}>
                    <h3 className="hover-underline-footer">{item.menu}</h3>
                  </Link>
                </li>
              ))}

            </ul>
      <ul className="flex gap-4 flex-row justify-center items-center pt-12">
        <li>
          <Link href="">
            <Image
              src={facebook}
              width={10}
              height={20}
              alt="facebook"
              className="social-icon"
            />
          </Link>
        </li>
        <li>
          <Link href="">
            <Image
              src={twitter}
              width={22}
              height={17}
              alt="twitter"
              className="social-icon"
            />
          </Link>
        </li>
        <li>
          <Link href="">
            <Image
              src={instagram}
              width={22}
              height={22}
              alt="instagram"
              className="social-icon"
            />
          </Link>
        </li>
      </ul>

    </footer>
  );
}