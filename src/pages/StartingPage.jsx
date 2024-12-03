import { Link } from "react-router-dom";
import Button from "../UI/Button";
import { useSelector } from "react-redux";
import { useAuthenticateUser } from "../hooks/auth/useAuthenticateUser";
import LoadingIndicator from "../UI/LoadingIndicator";
import { useEffect } from "react";
import { useAnimate } from "framer-motion";
import { motion } from "framer-motion";
import { stagger } from "framer-motion";

function Hero () {
    const [scope, animate] = useAnimate()

    useEffect(() => {
        animate('h1', { x: 0, opacity: 1 } , { duration: 0.7, ease: 'anticipate' })
        animate('p:first-of-type', { x: 0, opacity: 1 }, { duration: 0.4, delay: 0.4  })
        animate('p:last-of-type', { x: 0, opacity: 1 }, { duration: 0.4, delay: 0.8 })
    })

    return <motion.div ref={scope} className="">
        <motion.h1 initial={{ opacity: 0, x: -30 }} className="text-center text-3xl font-bold font-specialFont">Welcome to MyLibrary📚</motion.h1>
        
        <motion.div className="text-center mt-[8px] flex flex-col gap-[1px]" transition={{ delayChildren: 1.2, delay: 0.7}} >
            <motion.p className="text-xl" initial={{ opacity: 0, x: 30 }}>Your Online Book Library</motion.p>
            <motion.p className="text-xl" initial={{ opacity: 0, x: -30 }}>Wishlist, Book-Shelf, Favorite Books and many more...</motion.p>
        </motion.div>
    </motion.div>
}

export default function StartingPage () {

    const { mutate: checkAuth } = useAuthenticateUser();
    const isAuthorized = useSelector((state) => state.auth.authorized);
    const isLoading = useSelector((state) => state.auth.loading);
    const [scope, animate] = useAnimate();

    useEffect(() => {
        checkAuth();
        animate('div', { opacity: 1 }, { delay: 0.2} )
    },[])

    let content;

    if (isLoading) {
        content = <>
            <LoadingIndicator text='Loading'/>
        </>
    }

    if (!isLoading && !isAuthorized) {
        content = <>
            <Link to='/auth?mode=login'>
                <Button classes='text-lg'>Login</Button>
            </Link>

            <Link to='/auth?mode=signup'>
                <Button classes='text-lg'>Signup</Button>
            </Link>
        </>
    }

    if (!isLoading && isAuthorized) {
        content = <>
            <Link to='/library/my-books'>
                <Button classes='text-lg'>Go to Your Library</Button>
            </Link>
        </>   
    }

    return <div className="w-full h-screen flex flex-col justify-center items-center">
        <Hero />
        <div ref={scope} className="mt-[20px]">
            <motion.div className="flex gap-2" initial={{ opacity: 0 }}>{content}</motion.div>
        </div>
    </div>
        
}