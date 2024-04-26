"use client"

import Image from "next/image"
import Link from "next/link"
import { useCartContext } from "../context/CartContext"

const CartWidget = () => {
    const { totalQty } = useCartContext()

    return (
        <Link href={"/cart"} className={`text-base text-slate-100 p-3 flex items-center`}>
            <Image 
                src={"/cart.svg"}
                alt="Cart icon"
                width={30}
                height={30}
            />
            <span>{totalQty()}</span>
        </Link>
    )
}

export default CartWidget