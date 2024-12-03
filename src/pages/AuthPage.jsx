import { useEffect } from "react";
import { Link } from "react-router-dom"
import { useSearchParams } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

function AuthPageHeader ({ mode }) {
    return <header className="px-4 py-2 flex gap-4">
        <Link to='/'><h2 className="text-xl font-semibold">MyLibrary📚</h2></Link>
        <ul className="flex gap-2">
            { mode === 'login' && <li className="my-auto"><Link to='/auth?mode=signup'>Sign Up</Link></li>}
            { mode === 'signup' && <li className="my-auto"><Link to='/auth?mode=login'>Login</Link></li> }
        </ul>
    </header>
}

export default function AuthPage () {
    const [searchParams, setSearchParams] = useSearchParams();
    const mode = searchParams.get('mode');

    function initializeSearchParams () {
        const params = new URLSearchParams();
        params.set('mode', 'login');
        setSearchParams(params);
    }

    useEffect(() => {
        if (mode === null || (mode !== 'login' && mode !== 'signup')) {
            initializeSearchParams();
        }
    }, [])

    return <>
        <AuthPageHeader mode={mode}/>
        {mode === 'login' && <Login />}
        {mode === 'signup' && <Signup />}
    </>
};