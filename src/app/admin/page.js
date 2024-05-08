import AdminLayout from "./layout";
import Link from "next/link";
import LogoutButton from "../components/admin/LogoutButton";
import ProductsTable from "@/src/app/components/admin/ProductsTable"

export default function Admin() {
    
  return (
    <AdminLayout>
      <main className="mb-auto flex flex-col justify-between p-10">
        <h1 className="text-3xl font-bold">Admin</h1>
        
        
        <hr />
        <Link
          href={`/admin/create`}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2 flex justify-center items-center mx-auto"
        >
          Crear producto
        </Link>
        <hr />
        <ProductsTable />
        <LogoutButton/>
      </main>
    </AdminLayout>
  );
}