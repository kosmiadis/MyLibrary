import { useQuery } from "@tanstack/react-query";
export function useFetchUser() {
    const { data, isPending, isError, error } = useQuery({
        queryKey: ['users', 'user'],
        queryFn: ({ signal }) => function () {
            fetch('http://localhost:5000/users/me', {
                signal,
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                return res.json();
            })
            .catch(e => {
                throw new Error(e.message);
            })
        },
        retry: 1,
        /*Loads user profile only when the user is authenticated. */
    });
    return { data, isPending, isError, error };
}
