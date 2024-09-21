import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { UseLoginContext } from "../context/userLoginContext";
import RoutePrivate from "../private/routePrivate";
import HomeRouters from "../../routes/home.routes";
import Home from "../pages/home";
import Register from "../pages/auth/register";
import Login from "../pages/auth/login";
import Clients from "../pages/clients/clients";
import Accounts from "../pages/accounts/accounts";



const Header = () => {
    const {userLogin} = useContext(UseLoginContext)

    return(
        <Routes>
            <Route path="/" element={<HomeRouters/>}>
                <Route path="/home" element={<Home/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route element={<RoutePrivate canLogin={userLogin ? true : false}/>}>
                    <Route path="/clients" element={<Clients/>}/>
                    <Route path="/accounts" element={<Accounts/>}/>
                </Route>
            </Route>
        </Routes>
    )
}

export default Header