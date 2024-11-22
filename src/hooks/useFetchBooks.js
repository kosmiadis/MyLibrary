import { fetchBooks } from "../http/http";
import { useQuery } from "@tanstack/react-query";

export function useFetchBooks() {
    const { data, isPending, isError, error } = useQuery({
        queryKey: ['books'],
        queryFn: ({signal}) => fetchBooks(signal),
        retry: 2,
    });
    return { data, isPending, isError, error };
}
