"use client"

import Boton from "../ui/Boton"
import { useAuthContext } from "@/src/app/components/context/AuthContext"

const LogoutButton = () => {
    const { logout } = useAuthContext()

    return <Boton onClick={logout} className="bg-red-500">Cerrar sesión</Boton>
}

export default LogoutButton