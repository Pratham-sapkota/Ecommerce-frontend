import SearchBar from "./SearchBar/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars} from "@fortawesome/free-solid-svg-icons";

function NavBar(){

    return (
        <div className="flex flex-row flex-wrap w-screen justify-around p-4 bg-purple-500 ">
            <div>
                <h1 className="font-bold">Ecommerce <br /> Site</h1>
            </div>
            <div className="basis-1/2">
                <SearchBar />
            </div>
            <div className="basis-1/4">
                <ul className="hidden xl:flex flex-row flex-wrap font-semibold  text-white space-x-20 hover:cursor-pointer ">
                    <li className="hover:underline hover:underline-offset-8 hover:delay-300">Home</li>
                    <li className="hover:underline hover:underline-offset-8 hover:delay-300">Product</li>
                    <li className="hover:underline hover:underline-offset-8 hover:delay-300">Contact</li>
                </ul>
                <div className=" xl:hidden text-right flex-nowrap">
                    <FontAwesomeIcon icon={faBars} className="text-4xl text-white"/>
                </div>
            </div>
        </div>
    )
}
export default NavBar;