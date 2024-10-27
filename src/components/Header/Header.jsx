import { NavLink } from 'react-router-dom';
import useScreenSize from '../../hooks/useScreenSize';
import MobileHeader from '../Header/MobileHeader';
import DesktopHeader from './DesktopHeader';

const links = [
    {id: 1, to: '/my-books', text: 'MyBooks'},
    {id: 2, to: '/wishlist', text: 'Wishlist'},
    {id: 3, to: '/dashboard', text: 'Dashboard'},
]

export default function Header () {

    //to check if the screen dimension is mobile or bigger.
    const screenSize = useScreenSize();

    return <header className="flex justify-between p-[2rem] max-w-[1200px] mx-auto">

            <div className=''>
                <NavLink to='/' className={'transition-colors text-2xl text-secondaryForeground font-bold font-specialFont'}>MyLibrary📚</NavLink>
            </div>
            {screenSize.width <= 569 && <MobileHeader links={links}/>}
            {screenSize.width > 569 && <DesktopHeader links={links}/>}
    </header>
}