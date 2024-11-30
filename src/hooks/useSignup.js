import { useMutation } from "@tanstack/react-query";
import { signup } from "../http/http";
import { useDispatch } from "react-redux";
import { authSuccessful } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

export function useSignup () {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const { mutate, isPending, isError, error } = useMutation({
        mutationFn: signup,
        retry: 0,
        onSuccess: ({ user }) => {
            dispatch(authSuccessful({ user }))
            navigate('/');
        },
    });
    return { mutate, isPending, isError, error };
};