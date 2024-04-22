import ContactForm from "../components/contacto/ContactForm";
import Footer from '../components/ui/Footer';
import React from 'react'

function Contacto() {
  return (
    <>
    

    <main className='container m-auto'>
        <h1 className='text-4xl text-blue-600 font-bold my-4'>
            Contacto
        </h1>
        <hr/>
        <ContactForm/>
    </main>
    
    </>
  )
}

export default Contacto