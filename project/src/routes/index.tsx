import { Routes, Route } from "react-router-dom";
import Session from "../pages/Session";
import  Home  from "../pages/Home";
export const RoutesComponent = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/session" element={<Session/>}/>
        </Routes>
    )
}