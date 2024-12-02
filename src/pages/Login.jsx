import AuthWrapper from '../components/Auth/AuthWrapper';
import AuthForm from '../components/Auth/AuthForm.jsx';
import { useLogin } from '../hooks/useLogin.js';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function Login () {
    
    const { isPending, mutate } = useLogin();

    const isAuthorized = useSelector(({auth}) => auth.authorized);

    if (isAuthorized) return <Navigate to='/library/my-books' />

    return <AuthWrapper title={'Login to your Account'}>
        <AuthForm type={'login'} mutate={mutate} isPending={isPending} loadingText='Logging In'/>
    </AuthWrapper>
}