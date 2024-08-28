import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import ProductCard from "./ProductCard";

//When ever searching for any products , products returned from search wiill be displayed by this , /products route
function Products(){
    const {products}= useContext(ProductContext);
 return (
    <div className="flex flex-col  size-vh p-10 my-3 ">
        <div className="p-4">
            <h1 className="text-left font-bold xl:text-5xl  text-3xl text-purple-600">Products</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6 bg-gray-50">
        {
                    products.map((product,index)=>(
                        <ProductCard  key={index} id={product.id} name={product.name} image={product.images[0]} description={product.description} price={product.price} rating={product.rating} />
                    ))
                }
        </div>
    </div>
 )
}

export default Products;