import HomePage from "./components/home/HomePage";
import NavBar from "./components/NavBar";
import { useContext, useEffect } from "react";
import './index.css';
import {ProductContext} from "./context/ProductContext";
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
        <div>
            <NavBar />
            <HomePage />
        </div>
    )
}
export default App;