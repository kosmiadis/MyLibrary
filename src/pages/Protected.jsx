import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import LoadingIndicator from "../UI/LoadingIndicator";
import { useAuthenticateUser } from "../hooks/auth/useAuthenticateUser";

export default function Protected ({children}) {
    
    const { mutate: checkAuth } = useAuthenticateUser();
    const isAuthorized = useSelector((state) => state.auth.authorized);
    const isLoading = useSelector((state) => state.auth.loading);

    useEffect(() => {
        checkAuth();
    }, [])

    if (isLoading) return <div className="m-auto mt-[150px]"><LoadingIndicator text='Please wait' /></div>

    if (!isLoading && !isAuthorized) return <Navigate to='/auth?mode=login'/>

    if (!isLoading && isAuthorized) return children
}