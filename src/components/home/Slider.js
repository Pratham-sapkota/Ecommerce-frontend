function Slider(props){
    return (
        <div> 
            <div className="relative">
                <img src={props.value} alt="for slider" className="absolute top-0 left-0 w-full h-[70vh] object-contain " />
            </div>
        </div>
    )
}
export default Slider;