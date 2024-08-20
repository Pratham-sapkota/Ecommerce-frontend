function ProductListCard({name,image,description,price,rating}){
    // const {products} = useContext(ProductContext);
    
    return(
        <div className="container max-w-72  flex flex-col   rounded border border-gray-200 hover:shadow-2xl m-3 cursor-pointer">
            <div className="h-48 overflow-hidden"><img src={image} alt="card" className="rounded-t-lg  w-full h-full object-contain" /></div>
            <div className="flex flex-col justify-between px-6 py-4 h-48 ">
                <div className="my-1"><h1 className="font-bold text-xl text-sky-600"> {name}</h1></div>
                <div className="my-1">{rating}</div>
                <div className="my-1"><p className="italic text-sm"> {description} </p></div>
                <div className="my-1"><h2 className="font-bold">{price}</h2></div>

            </div>
        </div>
    )
}
export default ProductListCard;