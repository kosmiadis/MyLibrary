import { useSelector } from "react-redux";
import Button from "../UI/Button";
import { useLogout } from "../hooks/useLogout";
import LoadingIndicator from "../UI/LoadingIndicator";
import { useDeleteAccount } from '../hooks/useDeleteAccount.js';


export default function Profile () {
    const authUser = useSelector((state) => state.auth.authorizedUser);
    const { mutate: logout, isPending, isError} = useLogout();
    const { mutate: deleteAccount, isPending: deletionPending, isError: deletionIsError } = useDeleteAccount();
    
    //if it is not authorized redirect to login or signup page
    function handleLogout () {
        logout();
    }

    function handleAccountDeletion () {
        deleteAccount();
    }

    return <>
        {(isPending || deletionPending) && <LoadingIndicator text={isPending ? 'Logging out' :'Deleting Account'}/>}
        {isError && <p className="text-red-600 text-lg font-semibold">Logout failed!</p>}
        {deletionIsError && <p className="text-red-600 text-lg font-semibold">Account deletion failed!</p>}
        <h2>Welcome back{authUser?.firstName ? `, ${authUser?.firstName}` : '!'}</h2>

        <div className="mt-[20px]">
            <h2 className="text-md font-bold font-specialFont text-red-600">Danger Zone</h2>
            <div className="flex gap-2 mt-[6px]">
                <Button color="danger" onClick={handleLogout}>Logout</Button>
                <Button color="danger" onClick={handleAccountDeletion}>Delete Account</Button>
            </div>
        </div>
    </>
}