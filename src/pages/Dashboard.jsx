import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Dashboard () {
    const isLoading = useSelector((state) => state.auth.loading);
    const navigate = useNavigate();
    const isAuthorized = useSelector((state) => state.auth.authorized);

    useEffect(() => {
        if (!isLoading && !isAuthorized) {
            navigate('/login');
        }
    }, [isAuthorized, isLoading]);

    return <>
        Dashboard
    </>
}