function ProductListCard({name,image,description,price,rating}){
    // const {products} = useContext(ProductContext);
    
    return(
        <div className="container max-w-1/4 rounded-none hover:shadow-2xl m-3 cursor-pointer">
            <div className="size-[28vh]"><img src={image} alt="card" className="rounded-none  w-full h-full object-fill" /></div>
           
        </div>
    )
}
export default ProductListCard;