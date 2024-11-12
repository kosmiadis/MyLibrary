import { QueryClient } from "@tanstack/react-query"

export const queryClient = new QueryClient()

export async function fetchBooks(signal, onlyReadBooks) {
    let url;    
    if (onlyReadBooks === true) {
        url = 'http://localhost:5000/books?isRead=true';
    }
    else {
        url = 'http://localhost:5000/books?isRead=false';
    }
    const res = await fetch(url, {signal});
    if (!res.ok) {
        throw new Error('Could not load books.')
    }
    const data = await res.json();
    return data;
}

export async function fetchBook(signal, id) {
    
    let url = 'http://localhost:5000/books/' + id;
    const res = await fetch(url, {signal});
    if (!res.ok) {
        throw new Error('Could not load book.')
    }
    const data = await res.json();
    return data;
}

export async function addBook(book) {
    let url = 'http://localhost:5000/books/add-book';
    const res = await fetch(url, { 
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ book })
    });
    if (!res.ok) {
        throw new Error('Could not add book.')
    }
    const data = await res.json();
    return data;
}