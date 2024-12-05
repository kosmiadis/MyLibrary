import { useSelector } from "react-redux";
import { fetchBooks, queryClient } from "../http/http";
import { useQuery } from "@tanstack/react-query";

export function useFetchBooks() {

    const isAuthorized = useSelector((state) => state.auth.authorized);

    const { data, isPending, isError, error } = useQuery({
        queryKey: ['books'],
        queryFn: ({ signal }) => fetchBooks(signal),
        retry: 0,
        onError: () => {
            queryClient.clear();
        },
        /*Fetches books only when the user is authenticated. */
        enabled: isAuthorized,
    });

    return { data, isPending, isError, error };
}
