import { motion } from 'framer-motion';
import { desktopNavigationVariants } from '../../animations/animateNavigation';
import LinksList from "./LinksList";
import useScreenSize from '../../hooks/useScreenSize';
import Logo from './Logo';

export default function DesktopHeader ({ links }) {

    const screenWidth = useScreenSize();
    let sideBarStyles = screenWidth > 976 ? ' flex-col pt-[50px] pl-[20px] w-[250px] left-0' : ''

    return <motion.div className={'flex lg:bg-accent' + sideBarStyles} variants={desktopNavigationVariants} initial={'initial'} animate={'animate'} >
        {screenWidth >= 976 && <>
            <Logo />
            <br></br>
        </>}
        
        <LinksList links={links} verticalPlacement={screenWidth > 976} isMobile={false}/> 
    </motion.div>
}