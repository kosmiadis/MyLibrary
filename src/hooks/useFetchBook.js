import { fetchBook } from "../http/http";
import { useQuery } from "@tanstack/react-query";

export function useFetchBook(id) {
    const { data, isPending, isError, error } = useQuery({
        queryKey: ['books', 'book'],
        queryFn: ({ signal }) => fetchBook(signal,id),
        retry: 2,
    });
    return { data, isPending, isError, error };
}