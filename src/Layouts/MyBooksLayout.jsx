import { Outlet, useLocation } from "react-router-dom";
import GoBackButton from "../components/GoBackButton";


export default function MyBooksLayout () {

    const location = useLocation();

    return <>
        <section className='w-full'>
            {/*prevent from loading the go back button in they my books page*/}
            {!(location.pathname === '/library/my-books') && <GoBackButton />}
                <Outlet />
        </section>
    </>
}