import { useSelector } from "react-redux";
import Button from "../UI/Button";
import { useLogout } from "../hooks/useLogout";
import LoadingIndicator from "../UI/LoadingIndicator";

export default function Profile () {
    const authUser = useSelector((state) => state.auth.authorizedUser);
    const { mutate: logout, isPending, isError, error} = useLogout();

    //if it is not authorized redirect to login or signup page
    function handleLogout () {
        logout();
    }

    return <>
        {isPending && <LoadingIndicator text="Logging out"/>}
        {isError && <p>{error?.message}</p>}
        <h2>Welcome back, {authUser?.firstName}</h2>
        <Button color="danger" onClick={handleLogout}>Logout</Button>
    </>
}