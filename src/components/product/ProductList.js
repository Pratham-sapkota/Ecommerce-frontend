import ProductListCard from "./ProductListCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCaretLeft, faSquareCaretRight } from "@fortawesome/free-solid-svg-icons";

function ProductList(props){
    return(
        <div className=" relative rounded max-w-fit overflow-hidden m-5">
            <section className="grid grid-cols-1 shadow-lg md:grid-cols-2 xl:grid-cols-5 grid-rows-1  p-5 ">
                <ProductListCard value={props.value} />
            </section>
            <div >
                <FontAwesomeIcon icon={faSquareCaretLeft} className=" absolute left-0 top-1/2 size-12 text-gray-400 hover:text-gray-600"/>
                <FontAwesomeIcon icon={faSquareCaretRight} className=" absolute right-0 top-1/2 size-12 text-gray-400 hover:text-gray-600"/>
            </div>

        </div>
    )
}
export default ProductList;