import { useState } from "react"
import Hamburger from '../Header/Hamburger';
import LinksList from '../Header/LinksList';
import { motion, AnimatePresence  } from 'framer-motion';

export default function MobileNavigation ({ links }) {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    //values before starting the animation (*also exit values)
    const mobileNavigationInitial = {
        x: '35%',
        opacity: 0
    }

    //values after starting the animation
    const mobileNavigationAnimate = {
        x: 0,
        opacity: 1
    }

    return <>
        <Hamburger setIsMenuOpen={setIsMenuOpen}/>
        {/* Animate Presence is used to animate back to initial values before it gets removed from the DOM */}
        <AnimatePresence>
            {
                isMenuOpen && 
                <motion.div initial={mobileNavigationInitial} exit={mobileNavigationInitial} animate={mobileNavigationAnimate} className="pt-[20px] absolute top-0 right-0 w-[40%] h-screen bg-secondaryBackground">
                    <Hamburger setIsMenuOpen={setIsMenuOpen} />
                    <LinksList links={links} setIsMenuOpen={setIsMenuOpen} isMobile={true} />
                </motion.div>
            }
        </AnimatePresence>
    </>
}