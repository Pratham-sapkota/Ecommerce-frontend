function ProductListCard(props){
    return(
        <div className="max-w-sm rounded border border-gray-200 overflow-hidden shadow-2xl m-3 cursor-pointer">
            <img src={props.value} alt="card" className="rounded-t-lg h-64  w-full" />
            <div className="px-6 py-4">
                <div className="my-1"><h1 className="font-bold text-xl text-sky-600"> Dress Name</h1></div>
                <div className="my-1">Rating</div>
                <div className="my-1"><p className="italic text-sm"> this is description of product being displayed. </p></div>
                <div className="my-1"><h2 className="font-bold">Price</h2></div>

            </div>
        </div>
    )
}
export default ProductListCard;