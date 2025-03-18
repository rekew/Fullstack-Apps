import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";

function Routing(){
    return(
        <Routes>
            <Route path = "/home" element = {<HomePage/>}/>
            <Route path = '*' element = {<Navigate to = '/home' replace/>}/>
            <Route path = "/register" element = {<Register/>}/>
        </Routes>
    )
}

export default Routing