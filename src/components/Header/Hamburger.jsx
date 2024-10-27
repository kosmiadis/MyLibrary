import menuIcon from '../../assets/menuHamburger.svg'

export default function Hamburger ({setIsMenuOpen}) {

    function toggleMenu () {
        setIsMenuOpen(prevValue => !prevValue);
    }

    return <button onClick={toggleMenu} className='pl-[12px]'>
        <img width="35px" src={menuIcon} alt="Hamburger Icon for Menu" />
    </button>
}