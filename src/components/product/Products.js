import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import ProductListCard from "./ProductListCard";
function Products(){
    const {products}= useContext(ProductContext);
 return (
    <div className="flex flex-col w-full p-10 my-3">
        <div className="p-4">
            <h1 className="text-left font-bold xl:text-5xl  text-3xl text-purple-600">Products</h1>
        </div>
        <div className="flex flex-row flex-wrap">
            {
               products.map((product,index)=>(
                <ProductListCard key={index} name={product.name} image={product.images[0]} description={product.description} price={product.price} rating={product.rating} />
               )) 
            }
        </div>
    </div>
 )
}

export default Products;