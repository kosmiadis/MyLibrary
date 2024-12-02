import { useMutation } from "@tanstack/react-query";
import { login } from "../http/http";
import { useDispatch } from "react-redux";
import { authSuccessful } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

export function useLogin () {
    const dispatch = useDispatch();
    const navigate = useNavigate

    const { mutate, isPending, isError, error } = useMutation({
        mutationFn: login,
        retry: 0,
        onSuccess: ({ user }) => {  
            dispatch(authSuccessful({ user }));
        },
        onError: () => {
            navigate('/login');
        }
    });
    return { mutate, isPending, isError, error };
}