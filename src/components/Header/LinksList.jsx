import NavigationLink from "./NavigationLink"

export default function LinksList ({ links, isMobile, setIsMenuOpen }) {

    /*
        this ensures that the mobile navigation menu closes after
        a link its clicked and therefore redirected to a new path.
    */
    function handleLinkClick () {
        if (isMobile) {
            setIsMenuOpen(false);
        }
    }

    return <nav className={isMobile ? 'pl-[14px] mt-[1rem]' : ''}>
        <ul className={isMobile ? 'flex flex-col gap-3' : 'flex gap-3'}>
            {links && links.map(l => (
                <li key={l.id} ><NavigationLink handleClick={handleLinkClick} to={l.to}>{l.text}</NavigationLink></li>
            ))}
        </ul>
    </nav>
}