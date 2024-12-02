import { Link } from "react-router-dom";
import Button from "../UI/Button";
import { useSelector } from "react-redux";
import { useAuthenticateUser } from "../hooks/auth/useAuthenticateUser";
import LoadingIndicator from "../UI/LoadingIndicator";
import { useEffect } from "react";

function Hero () {
    return <>
        <h1 className="">Welcome to MyLibrary📚</h1>
        <p>Your Online Book Library</p>
        <p>Wishlist, Book-Shelf, Favorite Books and many more...</p>
    </>
}

export default function StartingPage () {

    const { mutate: checkAuth } = useAuthenticateUser();
    const isAuthorized = useSelector((state) => state.auth.authorized);
    const isLoading = useSelector((state) => state.auth.loading);

    useEffect(() => {
        checkAuth();
    },[])

    let content;

    if (isLoading) {
        content = <div>
            <LoadingIndicator text='Loading'/>
        </div>
    }

    if (!isLoading && !isAuthorized) {
        content = <>
            <Link to='/auth?mode=login'>
                <Button>Login</Button>
            </Link>

            <Link to='/auth?mode=signup'>
                <Button>Signup</Button>
            </Link>
        </>
    }

    if (!isLoading && isAuthorized) {
        content = <>
            <Link to='/library/my-books'>
                <Button>Go to Your Library</Button>
            </Link>
        </>   
    }

    return <div className="w-full min-h-full flex flex-col align-middle items-center">
        <Hero />
        <div className="">{content}</div>
    </div>
        
}