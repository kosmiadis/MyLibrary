import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from '../components/Footer/Footer';
import PageContent from "../UI/PageContent";

export default function CoreLayout () {
    return <>
        <Header />
        <PageContent>
            <Outlet />
        </PageContent>
        <Footer />
    </>
}