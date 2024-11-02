import { fetchBooks } from "../http/http";
import { useQuery } from "@tanstack/react-query";

export function useFetchBooks(id='') {
    const { data: books, isPending, isError, error } = useQuery({
        queryKey: ['books'],
        queryFn: ({signal}) => fetchBooks({signal, id}),
        staleTime: 30000, //time to refetch data, how much time will the fetched (old) data will stay in memory
        gcTime: 5 * (1000 * 60) //refetch after 5 minutes to fetch new data.
    });

    return { books, isPending, isError, error };
}