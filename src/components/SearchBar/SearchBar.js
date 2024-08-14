import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
function SearchBar(){
    return (
        <div className="flex items-center justify-center">
            <div className="relative w-1/2 ">
            <input type="text" className="w-full h-8 pl-4 pr-2 rounded-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Search..." />
            <FontAwesomeIcon icon={faSearch} className="absolute right-3 top-2"/>
            </div>
        </div>
    )
}
export default SearchBar;