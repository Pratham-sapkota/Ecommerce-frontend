import ProductListCard from "./ProductListCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCaretLeft, faSquareCaretRight } from "@fortawesome/free-solid-svg-icons";
import { ProductContext } from "../../context/ProductContext";
import { useContext, useRef} from "react";
import { Link, Route, Routes } from "react-router-dom";
import ProductDetails from "./ProductDetail";

//displays list of products in home page where we can slide to see , can later be used to create new , hot and specific category
function ProductList(props){
    const {products}= useContext(ProductContext)
    const ref= useRef(null);

    const scrollLeft=()=>{
        if(ref.current){
            ref.current.scrollBy({left:-200})
        }
    }
    const scrollRight=()=>{
        if(ref.current){
            ref.current.scrollBy({left:200})
        }
    }
    // const passImageKey =()=>{
    //     console.log()
    // }

    return(
        <div className=" rounded m-5">

            <div className="mx-2" >
            
            <section className=" custom-scroll flex flex-row overflow-x-scroll  scroll-smooth border border-gray-200 px-6" ref={ref} >
                <style>
                    {`
                    .custom-scroll::-webkit-scrollbar {
                    width: 8px;
                    height: 8px;
                    }

                    .custom-scroll::-webkit-scrollbar-thumb {
                    background-color: #a0aec0; /* Customize color */
                    border-radius: 10px;
                    }

                    .custom-scroll::-webkit-scrollbar-track {
                    background-color: #edf2f7; /* Customize track color */
                    }
                `}
                </style>
               
                {
                    products.map((product,index)=>(
                            <ProductListCard  key={product.id} id={product.id}  name={product.name} image={product.images[0]} description={product.description} price={product.price} rating={product.rating} />
                        
                    ))
                }
                
            </section>
            
            <div >
                <FontAwesomeIcon icon={faSquareCaretLeft} className=" absolute left-0 top-1/2 size-12 text-gray-400 hover:text-gray-600"  onClick={scrollLeft}/>
                <FontAwesomeIcon icon={faSquareCaretRight} className=" absolute right-0 top-1/2 size-12 text-gray-400 hover:text-gray-600"  onClick={scrollRight}/>
            </div>
            </div>

        </div>
    )
}
export default ProductList;