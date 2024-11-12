import { useAnimate, stagger } from "framer-motion";
import { useEffect } from "react";

const staggerInputs = stagger(0.1, { startDelay: 0.1 });

export function useFormAnimation () {
    const [scope, animate] = useAnimate();
    
    useEffect(() => {
        animate('input', {x: [], opacity: [0.7, 1]}, { duration: 0.2, repeat: 1, delay: staggerInputs});
    })

    return scope;
}

