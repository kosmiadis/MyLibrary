import { useAnimate } from "framer-motion"
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function AuthWrapper ({title, isError, error, children}) {

    const [scope, animate] = useAnimate();
    
    useEffect(() => {
        animate('h1', { opacity: 1, y: 0}, { duration: 0.6, ease: "anticipate"})
        animate('div', { opacity: 1, y: 0}, {duration: 0.6, ease: "anticipate"})
    })
    
    const initialH1 = {
        opacity: 0,
        y: -15
    }

    
    const initialDiv = {
        opacity: 0,
        y: 15
    }

    return <motion.div ref={scope}  className=" max-w-[300px] mx-auto mt-[50px]">
        <motion.h1 initial={initialH1} className="text-xl mb-[10px] font-specialFont font-bold text-primaryForeground ">{title}</motion.h1>
        {isError && <p className="text-md font-specialFont font-bold text-red-500">{error || 'Something went wrong!'}</p>}
        <motion.div initial={initialDiv}>
            {children}
        </motion.div>
    </motion.div>
}