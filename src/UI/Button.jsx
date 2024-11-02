import { motion } from 'framer-motion';

export default function Button ({ action, children, classes, ...props }) {

    function handleClick () {
        action();
    }

    return <motion.button whileHover={{ scale: 1.01 }} initial='initial' animate='show'  transition={{ duration: 0.1, bounce: 0.5, }} className={'transition-colors duration-200 bg-accent text-secondaryForeground font-semibold hover:bg-secondaryForeground hover:text-accent rounded-2xl px-[12px] py-[8px] ' + classes} onClick={handleClick} {...props} >
        {children}
    </motion.button>
}