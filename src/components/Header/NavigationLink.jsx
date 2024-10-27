import { NavLink } from "react-router-dom";

export default function NavigationLink ({ handleClick, to, children }) {

    let classes = ' text-[20px] transition-all font-specialFont font-bold';

    return (
        <NavLink
            onClick={handleClick}
            to={to}
            className={({isActive}) => isActive ? 'text-activeForeground border-b-[1px] border-b-activeForeground' + classes : 'text-accent' + classes}
        >
            {children}
        </NavLink>
    );
}