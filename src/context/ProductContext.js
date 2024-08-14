import { useContext, createContext } from "react";
import axios from "axios";

const ProductContext= createContext();

function Provider({children}){
    const fetchProductDetails=async()=>{
        const response = await axios.get('http://localhost:3000/products');
        return response.data;
    }
    <ProductContext.Provider value={fetchProductDetails} >{children}</ProductContext.Provider>

}

export default ProductContext;