import { fetchBooks } from "../http/http";
import { useQuery } from "@tanstack/react-query";

export function useFetchBooks(onlyReadBooks) {
    const { data, isPending, isError, error } = useQuery({
        queryKey: ['books'],
        queryFn: ({signal}) => fetchBooks(signal, onlyReadBooks),
    });
    return { data, isPending, isError, error };
}
