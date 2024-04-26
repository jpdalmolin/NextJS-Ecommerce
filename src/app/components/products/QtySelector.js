"use client"

import Boton from "../ui/Boton"
import Counter from "../ui/Counter"
import { useCartContext } from "../context/CartContext"
import { useState } from "react"

const QtySelector = ({ item }) => {

    const {addToCart}=useCartContext()
    const [quantity, setQuantity] = useState(1)

    const handleAdd = () => {
       addToCart({
            ...item,
            quantity,
       })
    }

    return (
        <div className="flex flex-col gap-5 mt-6">
            <Counter max={item.stock} counter={quantity} setCounter={setQuantity} />
            <Boton className="w-full hover:bg-blue-600" onClick={handleAdd}>Agregar al carrito</Boton>
        </div>
    )
}

export default QtySelector