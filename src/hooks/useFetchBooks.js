import { useSelector } from "react-redux";
import { fetchBooks } from "../http/http";
import { useQuery } from "@tanstack/react-query";

export function useFetchBooks() {

    const isAuthorized = useSelector((state) => state.auth.authorized);

    const { data, isPending, isError, error } = useQuery({
        queryKey: ['books'],
        queryFn: ({ signal }) => fetchBooks(signal),
        retry: 1,
        enabled: isAuthorized
        /*Fetches books only when the user is authenticated. */
    });
    return { data, isPending, isError, error };
}
