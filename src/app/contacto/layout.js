import React from 'react'

export default function ContactoLayout({children}) {
  return (
    <>
    {children}
    <footer className="bg-gray-200 w-full">

    <div className="container m-auto py-4 flex items-center gap-4" >
        <h4 className="text-2xl font-bold">
        Seguinos en nuestras redes
        </h4>
        <a>IG</a>
        <a>LinkedIn</a>
        <a>Twitter</a>
    </div>
    </footer>
    </>
    
  )
}

