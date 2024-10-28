import { useState } from "react"
import Hamburger from '../Header/Hamburger';
import LinksList from '../Header/LinksList';
import { motion, AnimatePresence  } from 'framer-motion';
import { mobileNavigationVariants } from '../../animations/animateNavigation';

export default function MobileNavigation ({ links }) {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return <>
        <Hamburger setIsMenuOpen={setIsMenuOpen}/>
        {/* Animate Presence is used to animate back to initial values before it gets removed from the DOM */}
        <AnimatePresence>
            {
                isMenuOpen && 
                <motion.div variants={mobileNavigationVariants} initial={'initial'} exit={'initial'} animate={'animate'} className="pt-[20px] absolute top-0 right-0 w-[40%] h-screen bg-secondaryBackground">
                    <Hamburger setIsMenuOpen={setIsMenuOpen} />
                    <LinksList links={links} setIsMenuOpen={setIsMenuOpen} isMobile={true} />
                </motion.div>
            }
        </AnimatePresence>
    </>
}