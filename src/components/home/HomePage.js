import Slider from "./Slider";
import image1 from "../../images/cloths.jpg" ;
import image2 from "../../images/image2.jpeg";
import image3 from "../../images/image3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCaretLeft, faSquareCaretRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ProductList from "../product/ProductList";
import citizenImage from "../../images/citizen.jpg"
function HomePage(){
    const [count,setCount]= useState(0);
    let image=[image1,image2,image3];
    const onClickRight=()=>{
        if(!((count+1)>=image.length)){
            setCount(count+1);
        }else{
            setCount(count)
        }
       
    }
    const onClickLeft=()=>{
        if(!((count-1)<0)){
            setCount(count-1);
        }else{
            setCount(count)
        }
        
    }
    return (
        <div className="grid grid-cols-1 m-5">
            <div className="relative h-[70vh] bg-cover bg-center rounded m-3 shadow-2xl" style={{ backgroundImage: `url(${image[count]})` }}>
            <div className="absolute inset-0  bg-black opacity-50"></div>
                <Slider value={image[count]} />
                <div className="absolute left-2 top-1/2 text-slate-900 hover:text-slate-700 active:text-slate-600 cursor-pointer w-fit">
                    <FontAwesomeIcon icon={faSquareCaretLeft} className="size-9 md:size-12" onClick={onClickLeft}/>
                </div>
                <div className="absolute right-2 top-1/2 text-slate-900 hover:text-slate-700 active:text-slate-600 cursor-pointer w-fit">
                    <FontAwesomeIcon icon={faSquareCaretRight} className="size-9 md:size-12" onClick={onClickRight}/>
                </div>
            </div>
            <div className="my-16">
                <h1 className="text-center font-bold xl:text-5xl  text-3xl text-purple-600">List Of Products</h1>
                <ProductList />
            </div>
        </div>
    )
}
export default HomePage;