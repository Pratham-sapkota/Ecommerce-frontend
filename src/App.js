import HomePage from "./components/home/HomePage";
import NavBar from "./components/NavBar";
import { useContext, useEffect } from "react";
import './index.css';
import {ProductContext} from "./context/ProductContext";
import Footer from "./components/Footer";
import { Routes,Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./components/product/Products";
import ProductDetails from "./components/product/ProductDetail";

function App(){
    const {fetchProductDetails} = useContext(ProductContext)
    useEffect(()=>{
        const fetchData= async ()=>{
            console.log('calling fetch')
             await fetchProductDetails();

        }
        fetchData();
    },[fetchProductDetails])

    return (
        <div className="relative">
            <NavBar />
            {/* <RouterProvider router={router} /> */}
            {/* <HomePage /> */}
            <Routes>
                <Route path="/products" element={<Products />} />
                <Route path="/products/details/:id" element ={ <ProductDetails />} />
                <Route path="" element={<HomePage />} />
            </Routes>
           
            <Footer />
            
        </div>
    )
}
export default App;