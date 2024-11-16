import { useMutation } from "@tanstack/react-query";
import { deleteBook } from "../http/http";
import { useState } from "react";

export function useDeleteBook() {
    const [ message, setMessage ] = useState(null);

    const { mutate, isPending, isError, error } = useMutation({
        mutationFn: (id) => deleteBook(id),
        onSuccess: (message) => {
            setMessage({ err: false, msg: message })
        },
        onError: (message) => {
            setMessage({ err: true, msg: message })
        },
        retry: 1
    });
    return { mutate, isPending, isError, message, error };
}