import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { queryClient, updateBook } from "../http/http";
import { useNavigate } from "react-router-dom";

export function useUpdateBook(id) {
    const [ message, setMessage ] = useState(null);
    const navigate = useNavigate();

    const { mutate, isPending, isError, error } = useMutation({
        mutationFn: (updatedBook) => updateBook(id, updatedBook),
        onSuccess: (message) => {
            setMessage({ err: false, msg: message });
            navigate('../');
            queryClient.invalidateQueries({queryKey: ['books']});
        },
        onError: (message) => {
            setMessage({ err: true, msg: message })
        },
        retry: 1
    });
    return { mutate, isPending, isError, message, error };
}