import AuthWrapper from '../components/Auth/AuthWrapper';
import AuthForm from "../components/Auth/AuthForm";
import { useSignup } from '../hooks/useSignup.js';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function Signup () {

    const { mutate, isPending, isError, error } = useSignup();

    const isAuthorized = useSelector(({auth}) => auth.authorized);
    const message = error?.message;

    if (isAuthorized) return <Navigate to='/library/my-books' />

    return <AuthWrapper title={'Create a new Account'} isError={isError} error={message}>
        <AuthForm type='signup' mutate={mutate} isPending={isPending} loadingText={'Signing Up'}/>
    </AuthWrapper>
}