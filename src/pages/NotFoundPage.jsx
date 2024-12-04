import { useAnimate, motion } from "framer-motion"
import { useEffect } from "react";
import { Link } from "react-router-dom"
import pageNotFoundImage from '../assets/pageNotFoundImage.png'


export default function NotFoundPage () {

    const [scope, animate] = useAnimate();

    useEffect(() => {
        animate('img', { opacity: 1, y: 0}, {duration: 0.4, ease: 'anticipate'})
        animate('h2', { opacity: 1, y: 0}, {duration: 0.4, delay: 0.4, ease: 'anticipate'})
        animate('p', { opacity: 1, y: 0}, {duration: 0.4, delay: 0.8, ease: 'anticipate'})
    },[])

    return <div ref={scope} className="absolute top-[20%] left-[50%] translate-x-[-50%] p-4 w-full max-w-[450px] text-center">
        <motion.img initial={{opacity: 0, y: -30}} className="w-[200px] m-auto mb-[20px]" src={pageNotFoundImage}/>
        <motion.h2 initial={{ opacity: 0, y: -30 }} className="text-xl font-semibold font-specialFont">Sorry, the page you are looking for does not exist! :(</motion.h2>
        <motion.p initial={{ opacity: 0, y: 30 }} className="text-lg font-normal">Go back to <Link to='/' className="underline text-accent">Home</Link></motion.p>
    </div>
}