
import { Navbar, NavbarDemo } from "@/components/Navbar";
import "./globals.css";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#EDE8F5]">
   <NavbarDemo  />
      
        {children}
      </body>
    </html>
  );
}
