import HomePage from "./components/home/HomePage";
import NavBar from "./components/NavBar";
import { useEffect } from "react";

import './index.css'
function App(){
    return (
        <div>
            <NavBar />
            <HomePage />
        </div>
    )
}
export default App;