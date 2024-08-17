import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
function ProductListCard({name,image,description,price,rating}){
    // const {products} = useContext(ProductContext);
    
    return(
        <div className="flex-initial max-w-sm rounded border border-gray-200 overflow-hidden shadow-2xl m-3 cursor-pointer">
            <img src={image} alt="card" className="rounded-t-lg h-64  w-full" />
            <div className="px-6 py-4">
                <div className="my-1"><h1 className="font-bold text-xl text-sky-600"> {name}</h1></div>
                <div className="my-1">{rating}</div>
                <div className="my-1"><p className="italic text-sm"> {description} </p></div>
                <div className="my-1"><h2 className="font-bold">{price}</h2></div>

            </div>
        </div>
    )
}
export default ProductListCard;