import SearchBar from "./SearchBar/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faCartShopping} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function NavBar(){

    return (
        <div className="flex flex-row flex-wrap w-screen justify-around p-4 bg-purple-500 ">
            <div>
                <h1 className="font-bold">Ecommerce <br /> Site</h1>
            </div>
            <div className="basis-1/2">
                <SearchBar />
            </div>
            <div className="">
                <ul className="hidden lg:flex xl:flex 2xl:flex flex-row flex-wrap font-semibold  text-white space-x-20 hover:cursor-pointer ">
                    <li className="hover:underline hover:underline-offset-8 hover:delay-300"><Link to="">Home</Link></li>
                    <li className="hover:underline hover:underline-offset-8 hover:delay-300">Contact</li>
                    <li><FontAwesomeIcon icon={faCartShopping} className=" text-2xl text-white"/></li>
                </ul>
                <div className=" hidden text-right md:flex sm:flex">
                    <FontAwesomeIcon icon={faBars} className="text-4xl text-white"/>
                </div>
            </div>
        </div>
    )
}
export default NavBar;