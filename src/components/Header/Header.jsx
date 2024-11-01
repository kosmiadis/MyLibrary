import useScreenSize from '../../hooks/useScreenSize';
import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';
import Logo from './Logo';

const links = [
    {id: 1, to: '/my-books', text: 'MyBooks'},
    {id: 2, to: '/wishlist', text: 'Wishlist'},
    {id: 3, to: '/dashboard', text: 'Dashboard'},
]

export default function Header () {

    //to check if the screen dimension is mobile or bigger.
    const screenWidth = useScreenSize();
    let headerClasses = screenWidth < 976 ? 'justify-between p-[2rem] max-w-[1200px] sticky top-0 sm:bg-secondaryBackground md:secondaryBackground z-50' : ''

    return <header className={'flex ' + headerClasses}>
            {screenWidth < 976 && <Logo />}
            {screenWidth <= 569 && <MobileHeader links={links}/>}
            {screenWidth > 569 && <DesktopHeader links={links}/>}
    </header>
}