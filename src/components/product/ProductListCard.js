// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import ProductDetails from "./ProductDetail";

function ProductListCard(props){
    // const {products} = useContext(ProductContext);
  
    return(
        <div className="container max-w-1/4 rounded-none hover:shadow-2xl m-3 cursor-pointer"  >
           <Link to={`/products/details/${props.id}`}>
           <div className="size-[28vh]"><img src={props.image} alt="card" className="rounded-none  w-full h-full object-fill" /></div>
           </Link>
        </div>
    )
}
export default ProductListCard;