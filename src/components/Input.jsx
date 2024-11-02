import { motion } from 'framer-motion';

export default function Input ({ textarea=false, type='text', label, name}) {

    const variants = {
        'initial': {
            opacity: 0,
            x: -10
        },
        'show': {
            opacity: 1,
            x: 0
        }
    }

    const transitionValues = {
        duration: 0.3,
        bounce: 0.6,
        staggerChildren: 0.2,
    }

    let inputClasses = 'border-[2px] pl-[10px] text-[18px] py-[6px] rounded-lg border-accent focus:outline-none active:outline-none'

    return <motion.div className='flex flex-col sm:max-w-[250px] sm:mx-auto md:max-w-[300px] md:mx-none' 
    variants={variants} initial='initial' animate='show' transition={transitionValues}>
        <motion.label className='font-special text-md' htmlFor={name}>{label}</motion.label>
        {!textarea && <motion.input className={inputClasses} type={type} id={name} name={name}/>}
        {textarea && <motion.textarea className={inputClasses} type={type} id={name} name={name}></motion.textarea>}
    </motion.div>
}