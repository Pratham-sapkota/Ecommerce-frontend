import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//here we will create main product details page , where we see details of product ,rate it and add to cart
function ProductDetails(){
    const [productDetail,setProductDetail]= useState([])
    let id = useParams('id')
    let url=`http://localhost:3001/products/${id.id}`
    useEffect(()=>{
        fetchDetails()
    },[])

    const fetchDetails=async()=>{
        const response= await axios.get(url)
        console.log(response.data)
        return response.data
    }
   return(
    <div>
       
    </div>
   )
}
export default ProductDetails;