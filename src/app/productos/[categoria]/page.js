import CategoriesMenu from "@/src/app/components/products/CategoriesMenu"
import ProductsList from "@/src/app/components/products/ProductsList"
import { Suspense } from "react"

export async function generateMetadata({params, searchParams}, parent) {

    return {
        title: `CoderApp - ${params.categoria}`,
    }
}

export function generateStaticParams(){
    return [
        {categoria:'todos'},
        {categoria:'tvs'},
        {categoria:'heladeras'}
    ]
}

export const revalidate=3600

const Productos = ({params}) => {
    const { categoria } = params

    return (
        <main className="container m-auto">
            <h2 className="text-2xl my-10 border-b pb-4">Productos</h2>

            <div className="flex gap-10">
                <CategoriesMenu />
                <Suspense fallback={<div>Cargando...</div>}>
                <ProductsList categoria={categoria}/>
                </Suspense>
            </div>
        </main>
    )
}

export default Productos