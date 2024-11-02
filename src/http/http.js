import { QueryClient } from "@tanstack/react-query"

export const queryClient = new QueryClient()

export async function fetchBooks({signal, id}) {
    let url;
    if (id !== '') {
        url = `http://localhost:5000/my-books/${id}`
    }
    else {
        url = 'http://localhost:5000/my-books';
    }
    const response = await fetch(url, { signal: signal});
    return await response.json();
}