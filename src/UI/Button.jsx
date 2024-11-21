import { motion } from 'framer-motion';

export default function Button ({ type, onClick, children, classes, color, ...props }) {

    const colorClasses = color === 'danger' ? ' bg-red-600 text-white hover:text-red-600' : ' bg-accent text-white hover:text-accent'

    return <motion.button type={type} whileHover={{ scale: 1.01 }} initial='initial' animate='show'  transition={{ duration: 0.1, bounce: 0.5, }} className={'transition-colors duration-200 hover:bg-secondaryForeground rounded-2xl px-[12px] py-[6px] ' + classes + colorClasses} onClick={onClick} {...props} >
        {children}
    </motion.button>
}