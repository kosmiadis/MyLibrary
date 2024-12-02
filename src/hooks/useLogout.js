import { useMutation } from "@tanstack/react-query";
import { logout } from "../http/http";
import { useDispatch } from "react-redux";
import { resetAuth } from "../store/authSlice";

export function useLogout () {
    const dispatch = useDispatch();

    const { mutate, isPending, isError, error } = useMutation({
        mutationFn: logout,
        retry: 0,
        onSuccess: () => {
            dispatch(resetAuth());
        }
    });
    return { mutate, isPending, isError, error };
}