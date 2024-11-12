import { useAnimate, stagger } from "framer-motion";
import { useEffect } from "react";

const staggerSpans = stagger(0.1, { startDelay: 0.15 });


export function useLoadingAnimation () {
    const [scope, animate] = useAnimate();
    
    useEffect(() => {
        animate('p', {opacity: [0.4, 1, 0.4]}, { duration: 2, repeat: Infinity });
        animate('span', {opacity: [0.2, 1, 0.2]}, {duration: 2, repeat: Infinity,delay: staggerSpans});
    })

    return scope
}