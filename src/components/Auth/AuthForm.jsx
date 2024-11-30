import { Input } from "@nextui-org/react"
import Button from "../../UI/Button";
import LoadingIndicator from '../../UI/LoadingIndicator.jsx';

export default function AuthForm ({type, mutate, isPending, loadingText}) {

    let content;

    if ( type === 'login' ) {
        content = <>
            <Input name='email' label='email' type="email" />
            <Input name='password' type='password' label='Password' />
        </>
    }
    else if (type === 'signup') {
        content = <>
            <Input name='firstName' label='First Name' />
            <Input name='lastName' label='Last Name' />
            <Input name='age' label='Age' />
            <Input name='birthDate' label='Date of Birth' type='date' />
            <Input name='email' label='Email' type='email' />
            <Input name='username' label='Username' />
            <Input name='password' type='password' label='Password' />
        </>
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

    return <form onSubmit={handleSubmit} className="bg-accent/70 px-8 py-10 rounded-lg flex flex-col gap-4">
        { isPending && <LoadingIndicator text={loadingText}/>}

        {!isPending &&
        <>
            {content}
            <Button classes={'ml-auto w-min'}>{type === 'login' ? 'Login' : 'Signup'}</Button>
        </>
        }
    </form>
    
}