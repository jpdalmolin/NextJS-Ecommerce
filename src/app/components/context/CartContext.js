'use client'

import {createContext, useContext, useState} from "react"

const CartContext=createContext()

export const useCartContext=()=>useContext(CartContext)

export const CartProvider=({children})=>{
    
    const [cart,setCart]= useState([])
    console.log(cart)

    const addToCart=(item)=>{
        setCart([...cart,item])
    }

    const removeItem = (slug) => {
        setCart( cart.filter(i => i.slug !== slug) )
    }

    const isInCart = (slug) => {
        return cart.some(item => item.slug === slug)
    }

    const totalQty = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0)
    }

    const totalPrice = () => {
        return cart.reduce((acc, item) => acc + item.quantity * item.price, 0)
    }

    const emptyCart = () => {
        setCart([])
    }
    
    return(
        <CartContext.Provider
        value={{
            cart,
            addToCart,
            isInCart,
            totalQty,
            emptyCart,
            removeItem,
            totalPrice
        }}
        >
            {children}
        </CartContext.Provider>
    )


}