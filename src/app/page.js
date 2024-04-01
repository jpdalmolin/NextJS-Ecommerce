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
    <p className="text-base mt-4" >Bienvenidos a Mi pagina</p>
    <Counter/>
    <Image 
    src={"https://img.freepik.com/foto-gratis/colores-arremolinados-interactuan-danza-fluida-sobre-lienzo-que-muestra-tonos-vibrantes-patrones-dinamicos-que-capturan-caos-belleza-arte-abstracto_157027-2892.jpg?w=996&t=st=1711920834~exp=1711921434~hmac=b4306954206cd2e6957c75d4087e1590ad1a36d50bcd7a632f0ac5a1c51f5b90"}
    alt="cadete espacio"
    width={300}
    height={300}
    />
    
   </main>
 
   </>
  );
}
