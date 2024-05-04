import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
          <Navbar/>
          {children}
          <Footer/>
      </body>
    </html>
  );
}
