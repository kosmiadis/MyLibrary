import { useAuthenticateUser } from "./hooks/auth/useAuthenticateUser";
import { useEffect } from 'react';
import { useSelector } from "react-redux";
import LoadingIndicator from "./UI/LoadingIndicator";
import App from "./App";

export default function AppInitializer () {
    const { mutate: authenticate } = useAuthenticateUser();
    const isLoading = useSelector((state) => state.auth.loading);

    useEffect(() => {
        authenticate(); // Fetch auth state on load
    }, []);

    if (isLoading) {
        return <LoadingIndicator text="Loading Auth" />; // Or use a spinner
    }

    return <App />
}