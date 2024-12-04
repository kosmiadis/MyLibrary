import { useMutation } from "@tanstack/react-query";
import { deleteBook } from "../http/http";
import { useNavigate } from "react-router-dom";

export function useDeleteBook() {
    const navigate = useNavigate();
    
    const { mutate, isPending, isError, error } = useMutation({
        mutationFn: (id) => deleteBook(id),
        onSuccess: () => {
            navigate('/library/my-books')
        },
        retry: 1
    });
    return { mutate, isPending, isError, error };
}