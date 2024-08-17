import { createContext, useState } from "react";
import axios from "axios";

const ProductContext= createContext();

function Provider({children}){
    const [products,setProducts]= useState([])
    const fetchProductDetails=async()=>{
        const response = await axios.get('http://localhost:3001/products/');
        if(products.length !== response.data.length){
            setProducts(response.data)
        }
       
    }
   
    return (
        <ProductContext.Provider value={{products,fetchProductDetails}}>{children}</ProductContext.Provider>
    )

}

export  {Provider,ProductContext};