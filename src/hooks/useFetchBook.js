import { fetchBook } from "../http/http";
import { useQuery } from "@tanstack/react-query";

export function useFetchBook(id) {
    const { data, isPending, isError, error } = useQuery({
        queryKey: ['books', 'book'],
        queryFn: ({ signal }) => fetchBook(signal, id),
        retry: 0,
    });
    return { data, isPending, isError, error };
}