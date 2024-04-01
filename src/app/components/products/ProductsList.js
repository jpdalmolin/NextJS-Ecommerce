import ProductCard from "./ProductCard"
import { mockData } from "@/app/data/products"

const ProductsList = ({ categoria }) => {

    const items = categoria === 'todos' ? mockData : mockData.filter(item => item.type === categoria)

    return (
        <section className="container m-auto flex justify-center items-center gap-12 flex-wrap">
            {
                items.map(item => <ProductCard key={item.slug} item={item}/>)
            }
        </section>
    )
}

export default ProductsList