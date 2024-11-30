import { useMutation } from "@tanstack/react-query";
import { addBook, queryClient } from "../http/http";
import { useNavigate } from "react-router-dom";

export function useAddBook(onClose) {
    const navigate = useNavigate();

    const { mutate, isPending, isError, error } = useMutation({
        mutationFn: (newBook) => addBook(newBook),
        onSuccess: () => {
            navigate('..');
            queryClient.invalidateQueries({ queryKey: ['books'] });
            onClose();
        },
        retry: 0
    });
    return { mutate, isPending, isError, error };
}