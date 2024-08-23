// card for main prodcut page
function ProductCard({name,image,price,rating}){
    return(
        <div className="container h-[60vh] flex flex-col my-4  hover:shadow-xl p-2 ">
            <div className="h-2/3 overflow-hidden ">
                <img src={image} alt="product visual "  className="h-full w-full "/>
            </div>
            <div className="my-2 flex flex-col space-y-2">
                <p className="font-bold text-xl ">{name}</p>
                <p className="text-orange-500 font-semibold">{rating}</p>
                <p className="font-bold text-lg"><strong className="text-xl">$ </strong>{price}</p>
            </div>
            
        </div>
    )

}
export default ProductCard;