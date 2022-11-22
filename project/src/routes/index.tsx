import { Routes, Route } from "react-router-dom";
import Session from "../pages/Session";
import  Home  from "../pages/Home";
import Login from "../pages/Session/Login";
import Register from "../pages/Session/Register";
export const RoutesComponent = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/session" element={<Session/>}>
                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<Register/>}/>
            </Route>
        </Routes>
    )
}