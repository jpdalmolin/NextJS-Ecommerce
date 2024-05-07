"use client"

import { useAuthContext } from "@/src/app/components/context/AuthContext"

const AdminLayout = ({children, login}) => {
    const { user } = useAuthContext()

    return (
        <>
            {
                true
                    ? children
                    : login
            }
        </>
    )
}

export default AdminLayout