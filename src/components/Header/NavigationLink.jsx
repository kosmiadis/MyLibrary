import { NavLink } from "react-router-dom";
import useScreenSize from "../../hooks/useScreenSize";

export default function NavigationLink ({ handleClick, to, children }) {

    const screenWidth = useScreenSize();

    const handleIsActive = ({isActive}) => {
        if (screenWidth > 976) {
            let classes = ' text-[26px] transition-all font-specialFont font-bold hover:text-primaryForeground ';
            return isActive ? 'text-primaryForeground' + classes : 'text-secondaryForeground' + classes
        }
        else if (screenWidth > 569) {
            let classes = ' text-[22px] transition-all font-specialFont font-bold hover:text-hoverForeground ';
            return isActive ? 'text-accent' + classes : 'text-primaryForeground' + classes
        }
        else {
            let classes = ' text-[30px] transition-all font-specialFont font-bold hover:text-white ';
            return isActive ? 'text-white' + classes : 'text-primaryForeground' + classes
        }
    }

    return (
        <NavLink
            onClick={handleClick}
            to={to}
            className={handleIsActive}
        >
            {children}
        </NavLink>
    );
}