"use client"

import Boton from "../ui/Boton"
import Counter from "../ui/Counter"
import { useState } from "react"

const QtySelector = ({ item }) => {
    const [quantity, setQuantity] = useState(1)

    const handleAdd = () => {
        console.log({
            ...item,
            quantity
        })
    }

    return (
        <div className="flex flex-col gap-5 mt-6">
            <Counter max={item.inStock} counter={quantity} setCounter={setQuantity} />
            <Boton className="w-full hover:bg-blue-600" onClick={handleAdd}>Agregar al carrito</Boton>
        </div>
    )
}

export default QtySelector