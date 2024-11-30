import { useDispatch } from "react-redux";
import { authSuccessful, resetAuth } from "../../store/authSlice";
import { authenticateUser } from '../../http/http';
import { useMutation } from '@tanstack/react-query';
import { authPending } from "../../store/authSlice";

export function useAuthenticateUser () {

    const dispatch = useDispatch();

    const { mutate, isPending } = useMutation({
        mutationFn: authenticateUser,
        retry: 0,
        onMutate: () => {
            dispatch(authPending());
        },
        onSuccess: ({ user }) => {
            dispatch(authSuccessful({ user })) 
        },
        onError: () => {
            dispatch(resetAuth());
        }
    });

    return { mutate, isPending };
}