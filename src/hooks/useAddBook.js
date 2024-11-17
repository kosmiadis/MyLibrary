import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { addBook, queryClient } from "../http/http";
import { useNavigate } from "react-router-dom";

export function useAddBook(onClose) {
    const [ message, setMessage ] = useState(null);
    const navigate = useNavigate();

    const { mutate, isPending, isError, error } = useMutation({
        mutationFn: (newBook) => addBook(newBook),
        onSuccess: (message) => {
            setMessage({ err: false, msg: message });
            navigate('../');
            queryClient.invalidateQueries({ queryKey: ['books'] });
            onClose();
        },
        onError: (message) => {
            setMessage({ err: true, msg: message })
            
        },
        retry: 1
    });
    return { mutate, isPending, isError, message, error };
}