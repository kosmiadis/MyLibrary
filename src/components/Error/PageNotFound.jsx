import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import Button from '../../UI/Button';
import { pageNotFoundVariants } from '../../animations/animatePageNotFound';

export default function PageNotFound () {

    const navigate = useNavigate()
    const timeBeforeRedirect = 3000
    const [ timeLeftBeforeRedirect, setTimeLeftBeforeRedirect ] = useState(timeBeforeRedirect);

    useEffect(() => {
        //countdown before user redirected to /my-books (home)
        const countdownRedirectInterval = setInterval(() => {
            setTimeLeftBeforeRedirect(timeLeftBeforeRedirect => timeLeftBeforeRedirect - 1000)
        }, 1000)

        //cleanout redirection countdown function in case user click any other link before redirecting.
        return () => {
            clearInterval(countdownRedirectInterval);
        }
    }, [])

    useEffect(() => {
        //redirects user to /my-books (home) when time elapsed
        const redirectTimeout = setTimeout(() => {
            return navigate('/my-books');
        }, timeLeftBeforeRedirect)

        //cleanout redirection function in case user click any other link before redirecting.
        return () => {
            clearTimeout(redirectTimeout);
        }
    },)

    function handleRedirectButtonClick () {
        navigate('/');
    }

    return <>
        <div className="text-center mt-[100px] mx-auto">
            <motion.h1 variants={pageNotFoundVariants} initial={'hidden'} animate={'shown'} transition={{ delay: 0.2 }} className="mx-auto text-3xl">Oops! Page not found.</motion.h1>
            <motion.p variants={pageNotFoundVariants} initial={'hidden'} animate={'shown'} transition={{ delay: 0.5 }} className="mx-auto text-xl mt-[4px]">You will be automatically redirected in <span className="font-bold">{timeLeftBeforeRedirect / 1000}</span></motion.p>
            <motion.div variants={pageNotFoundVariants} initial={'hidden'} animate={'shown'} transition={{ delay: 0.5 }}><Button classes={'mx-auto px-[8px] py-[6px] text-lg rounded-md font-semibold mt-[15px]'} action={handleRedirectButtonClick} >Redirect Now</Button></motion.div>
        </div>
    </>
}