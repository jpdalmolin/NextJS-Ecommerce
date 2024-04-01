'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const links=[
    {
        label:"Inicio",
        href:"/"

    },
    {
        label:"Productos",
        href:"/productos/todos"

    },
    {
        label:"Nosotros",
        href:"/nosotros"
    },
    {
        label:"Contacto",
        href:"/contacto"
    },
    {
        label:"Admin",
        href:"/admin"
    }
]

const Header = () => {

    const pathname=usePathname()
  return (
    <header className='w-full bg-gray-600'>
    <div className='container m-auto py-6 flex justify-between items-center'>
        <Link href={"/"}>
        <Image
        src={"/logo.png"}
        alt="Logo"
        width={200}
        height={200}
        />
        </Link>
        <nav className='flex justify-between gap-2'>
           {
            links.map(link=>{
                return <Link
                key={link.label}
                href={link.href}
                className={`${pathname === link.href ? "font-semibold boder-b":''}text-base text-slate-100 p-3`}
                >
                    {link.label}
                    </Link>
            })
           }
        </nav>
    </div>
       
       
        
    </header>
  )
}

export default Header