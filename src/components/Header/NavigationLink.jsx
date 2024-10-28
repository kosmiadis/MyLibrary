import { NavLink } from "react-router-dom";
import useScreenSize from "../../hooks/useScreenSize";

export default function NavigationLink ({ handleClick, to, children }) {

    const screenWidth = useScreenSize();

    const handleIsActive = ({isActive}) => {
        if (screenWidth > 976) {
            let classes = ' text-[22px] transition-all font-specialFont font-bold hover:text-primaryForeground ';
            return isActive ? 'text-primaryForeground' + classes : 'text-secondaryForeground' + classes
        }
        else {
            let classes = ' text-[20px] transition-all font-specialFont font-bold hover:text-activeForeground ';
            return isActive ? 'text-activeForeground' + classes : 'text-primaryForeground' + classes
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