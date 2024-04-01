import "./globals.css";

import Footer from "@/app/components/ui/Footer"
import Header from "@/app/components/ui/Header"

export const metadata=  {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
     <html lang="en">
       <body>
         <Header/>
         {children}
         <Footer/>
       </body>
     </html>
   )
 }
 