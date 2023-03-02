import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {getUserRole, isUserAuthenticated} from "../store/accessors/user";
import React from 'react';

const ProtectedRoute = ({userRole, element}) => {
    const isAuthenticated = useSelector(isUserAuthenticated);
    const currentUserRole = useSelector(getUserRole);

    if (!isAuthenticated) {
        return <Navigate to="/" replace/>
    } else if (userRole === 'ADMIN' && currentUserRole !== 'ADMIN') {
        return <Navigate to="/" replace/>
    } else {
        return element;
    }
};

export default ProtectedRoute;
