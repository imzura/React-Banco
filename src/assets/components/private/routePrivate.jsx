import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const RoutePrivate = ({canLogin}) => {
    if (canLogin) {
        return <Outlet/>
    } else {
        return <Navigate to='/login' replace={true}/>
    }
}

export default RoutePrivate