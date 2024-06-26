import "./globals.css";

import { AuthProvider } from "./components/context/AuthContext";
import { CartProvider } from "./components/context/CartContext";
import Footer from "./components/ui/Footer";
import Header from "./components/ui/Header";

export const metadata=  {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
     <html lang="en">
       <body>
        <AuthProvider>
        <CartProvider>
         <Header/>
         {children}
         <Footer/>
        </CartProvider>
        </AuthProvider>
       </body>
     </html>
   )
 }
 