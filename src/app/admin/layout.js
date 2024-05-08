"use client"

import LoginForm from "../components/auth/LoginForm"
import { useAuthContext } from "@/src/app/components/context/AuthContext"

const AdminLayout = ({children, login}) => {
    const { user,loading } = useAuthContext()

    if (loading){
        return <div>Cargando...</div>
    }
    if(!user){
        return <LoginForm/>

    }
    return <>{children}</>
}

export default AdminLayout