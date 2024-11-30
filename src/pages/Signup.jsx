import AuthWrapper from '../components/Auth/AuthWrapper';
import AuthForm from "../components/Auth/AuthForm";
import { useSignup } from '../hooks/useSignup.js';

export default function Signup () {

    const { mutate, isPending } = useSignup();

    return <AuthWrapper title={'Create a new Account'}>
        <AuthForm type='signup' mutate={mutate} isPending={isPending} loadingText={'Signing Up'}/>
    </AuthWrapper>
}