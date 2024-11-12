import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
/*import Footer from '../components/Footer/Footer';*/
import PageContent from "../UI/PageContent";
import useScreenSize from "../hooks/useScreenSize";

export default function CoreLayout ({ children }) {

    const screenWidth = useScreenSize();
    let classes = ' min-h-screen p-0';
    let sideNavigationBarShouldDisplay = screenWidth > 976

    return <div className={sideNavigationBarShouldDisplay ? 'flex' + classes : 'initial' + classes}>
            <Header />
            <PageContent screenWidth={screenWidth}>
                {children && children}
                {!children && <Outlet />}
            </PageContent>
        {/*<Footer />*/}
    </div>
}