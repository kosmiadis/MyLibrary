import Header from "../Header/Header"
import PageContent from '../../UI/PageContent';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import Button from '../../UI/Button';

export default function PageNotFound () {

    const navigate = useNavigate()
    const [ timeLeftBeforeRedirect, setTimeLeftBeforeRedirect ] = useState(5000);

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
            return navigate('/');
        }, timeLeftBeforeRedirect)

        //cleanout redirection function in case user click any other link before redirecting.
        return () => {
            clearTimeout(redirectTimeout);
        }
    },)

    /* animations */
    const shown = {
        y: 0,
        opacity: 1   
    }
    const hidden = {
        y: '-20px',
        opacity: 0
    }

    function handleRedirectButtonClick () {
        navigate('/');
    }

    return <>
        <Header />
        <PageContent>
            <div className="text-center mt-[100px]">
                <motion.h1 initial={hidden} animate={shown} transition={{ delay: 0.2 }} className="text-3xl">Oops! Page not found.</motion.h1>
                <motion.p initial={hidden} animate={shown} transition={{ delay: 0.5 }} className="text-xl mt-[4px]">You will be automatically redirected in <span className="font-bold">{timeLeftBeforeRedirect / 1000}</span></motion.p>
                <motion.div initial={hidden} animate={shown} transition={{ delay: 0.5 }}><Button classes={'px-[8px] py-[6px] text-lg rounded-md font-semibold mt-[15px]'} action={handleRedirectButtonClick} >Redirect Now</Button></motion.div>
            </div>
        </PageContent>
    </>
}