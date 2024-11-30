import { useMutation } from "@tanstack/react-query";
import { queryClient, updateBook } from "../http/http";
import { useNavigate } from "react-router-dom";

export function useUpdateBook(id) {
    const navigate = useNavigate();

    const { mutate, isPending, isError, error } = useMutation({
        mutationFn: (updatedBook) => updateBook(id, updatedBook),
        onSuccess: () => {
            navigate('..');
            queryClient.invalidateQueries({queryKey: ['books']});
        },
        retry: 0
    });
    return { mutate, isPending, isError, error };
}