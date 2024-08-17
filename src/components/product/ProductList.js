import ProductListCard from "./ProductListCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCaretLeft, faSquareCaretRight } from "@fortawesome/free-solid-svg-icons";
import { ProductContext } from "../../context/ProductContext";
import { useContext, useState } from "react";

function ProductList(props){
    const [indexes,showNewIndex]= useState(0);
    const {products}= useContext(ProductContext)

    const showPrevious=()=>{
        if(indexes>0){
            showNewIndex(indexes-1)
        }
    }
    const showNext=()=>{
        console.log(products.length)
        if(indexes<products.length){
            console.log("next")
            showNewIndex(indexes+1)
        }
    }
    return(
        <div className=" relative rounded max-w-fit overflow-hidden m-5">
            <section className="flex flex-row flex-wrap justify-center items-center shadow-lg p-5 ">
                {
                    products.slice(indexes,indexes+3).map((product,index)=>(
                        <ProductListCard key={index} name={product.name} image={product.images[0]} description={product.description} price={product.price} rating={product.rating} />
                    ))
                }
            </section>
            <div >
                <FontAwesomeIcon icon={faSquareCaretLeft} className=" absolute left-0 top-1/2 size-12 text-gray-400 hover:text-gray-600" onClick={showPrevious}/>
                <FontAwesomeIcon icon={faSquareCaretRight} className=" absolute right-0 top-1/2 size-12 text-gray-400 hover:text-gray-600" onClick={showNext}/>
            </div>

        </div>
    )
}
export default ProductList;