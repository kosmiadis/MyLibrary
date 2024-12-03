import { Input } from "@nextui-org/react"
import Button from "../../UI/Button";
import LoadingIndicator from '../../UI/LoadingIndicator.jsx';
import { motion, stagger } from "framer-motion";
import { useAnimate } from "framer-motion";
import { useEffect } from "react";

export default function AuthForm ({type, mutate, isPending, loadingText}) {

    let content;

    const [scope, animate] = useAnimate();

    useEffect(() => {
        if (scope.current) {
            animate('input, label', { opacity: [0, 1] }, { duration: 0.5, delay: stagger(0.05)})
        }
    })

    if ( type === 'login' ) {
        content = <motion.div className="flex flex-col gap-4" ref={scope} transition={{ delayChildren: 1}}>
            <Input name='email' label='Email' type="email" />
            <Input name='password' type='password' label='Password' />
        </motion.div>
    }
    else if (type === 'signup') {
        content = <motion.div className="flex flex-col gap-4" ref={scope} transition={{ delayChildren: 1}}>
            <Input name='firstName' label='First Name' />
            <Input name='lastName' label='Last Name' />
            <Input name='age' label='Age' />
            <Input name='email' label='Email' type='email' />
            <Input name='username' label='Username' />
            <Input name='password' type='password' label='Password' />
        </motion.div>
    }
    
    function handleSubmit (e) {
        e.preventDefault();
        const formData = new FormData(e.target)
        const credentials = Object.fromEntries(formData);
    
        if (type === 'login') {
            mutate({
                email: credentials.email, 
                password: credentials.password
            });
        }
        if (type === 'signup') {
            mutate({
                ...credentials
            })
        }
    }

    return <form onSubmit={handleSubmit} className='py-8 bg-accent/50 p-4 rounded-md'>
        { isPending && <LoadingIndicator text={loadingText}/>}

        {!isPending &&
        <>
            {content}
            <Button classes={'mt-[20px] w-min'}>{type === 'login' ? 'Login' : 'Signup'}</Button>
        </>
        }
    </form>
    
}