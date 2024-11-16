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
        const response = await res.json();
        throw response;
    }
    const data = await res.json();
    return data;
}

export async function deleteBook(bookId) {
    let url = 'http://localhost:5000/books/delete-book';
    const res = await fetch(url, { 
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: bookId })
    });
    if (!res.ok) {
        const message = 'Something went wrong! Could not delete book.'
        throw message;
    }
    const { message } = await res.json();
    return message;
}

export async function updateBook(id, updatedBook) {

    let url = 'http://localhost:5000/books/update-book';
    const res = await fetch(url, { 
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ book: {...updatedBook, id} })
    });
    if (!res.ok) {
        const errorMessages = await res.json(); 
        throw errorMessages;
    }
    const { message } = await res.json();
    return message;
}
