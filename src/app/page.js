import Counter from "./components/ui/Counter";
import Footer from "./components/ui/Footer";
import Image from "next/image";

export const metadata = {
  title:"Coderhouse app",
  description:"app de muestra em next js"

}

export default function Home() {
  return (
    <>

   <main className="container m-auto">
    <h1 className="text-4xl text-blue-600 text-bold my-4">Next JS</h1>
    <hr />
    <p className="text-base mt-4" >Bienvenidos a TechnoStore en Next JS</p>
    <Counter/>
    <Image 
    src={"https://newcyprusguide.com/wp-content/uploads/2018/06/north-cyprus-guide-pearl-techno-19-1200x800.jpg"}
    alt="cadete espacio"
    width={3000}
    height={1000}
    />
    
   </main>
 
   </>
  );
}
