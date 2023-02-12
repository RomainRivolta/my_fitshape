import { User } from "firebase/auth";
import React from "react";
import { Navigate } from "react-router-dom";

const Protected = ({user, redirectPath = '/signup', children}: {user: User | null ,redirectPath?: string ,children :any}) => {
    if(!user){
        return <Navigate to={redirectPath} replace />
    }
    return children;
}

export default Protected;