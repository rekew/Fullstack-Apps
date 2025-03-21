import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import Board from "./pages/Board";

function Routing(){
    return(
        <Routes>
            <Route path = "/home" element = {<HomePage/>}/>
            <Route path = '*' element = {<Navigate to = '/home' replace/>}/>
            <Route path = "/register" element = {<Register/>}/>
            <Route path = '/board' element = {<Board />}/>
        </Routes>
    )
}

export default Routing