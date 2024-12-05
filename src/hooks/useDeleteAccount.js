import { useNavigate } from "react-router-dom";
import { deleteAccount } from "../http/http";
import { useMutation } from "@tanstack/react-query";

export function useDeleteAccount() {
    const navigate = useNavigate();

    const { mutate, isPending, isError, error } = useMutation({
        mutationFn: deleteAccount,
        onSuccess: () => {
            navigate('/')
        },
        retry: 0
    });
    return { mutate, isPending, isError, error };
}