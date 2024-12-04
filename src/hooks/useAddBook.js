import { useMutation } from "@tanstack/react-query";
import { addBook, queryClient } from "../http/http";

export function useAddBook(onClose) {

    const { mutate, isPending, isError, error } = useMutation({
        mutationFn: (newBook) => addBook(newBook),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['books'] });
            onClose();
        },
        retry: 0
    });
    return { mutate, isPending, isError, error };
}