import { QueryClient } from "@tanstack/react-query"

export const queryClient = new QueryClient()

export async function fetchBooks(signal) {
    let url = 'http://localhost:5000/books';
        
    const res = await fetch(url, {
        credentials: 'include',
        signal
    });
    if (!res.ok) {
        throw new Error('Could not load books.')
    }
    const data = await res.json();
    return data;
}

export async function fetchBook(signal, id) {
    
    let url = 'http://localhost:5000/books/' + id;
    const res = await fetch(url, {
        credentials: 'include',  
        signal
    });
    if (!res.ok) {
        //error message
        const { message } = await res.json();

        throw new Error(message)
    }
    const data = await res.json();
    return data;
}

export async function addBook(book) {
    let url = 'http://localhost:5000/books/add-book';
    const res = await fetch(url, { 
        method: "POST",
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ book })
    });
    if (!res.ok) {
        const message = await res.json();
        throw message;
    }
    const message = await res.json();
    return message;
}

export async function deleteBook(bookId) {
    let url = 'http://localhost:5000/books/delete-book';
    const res = await fetch(url, { 
        method: 'DELETE',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: bookId })
    }); 
    if (!res.ok) {
        throw await res.json();
    }
    return await res.json();
}

export async function updateBook(id, updatedBook) {

    let url = 'http://localhost:5000/books/update-book';
    const res = await fetch(url, { 
        method: 'PATCH',
        credentials: 'include',
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

export async function login ({email, password}) {

    let url = 'http://localhost:5000/login';
    const res = await fetch(url, { 
        method: "POST",
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
    });
    if (!res.ok) {
        const message = await res.json();
        throw message;
    }
    const message = await res.json();
    return message;
}

export async function signup ({ firstName, lastName, age, birthDate, email, username, password }) {
    
    let url = 'http://localhost:5000/signup';

    const user = {
        firstName,
        lastName,
        age,
        birthDate,
        email,
        username,
        password
    };

    const res = await fetch(url, { 
        method: "POST",
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user })
    });

    if (!res.ok) {
        const message = await res.json();
        throw message
    }
    return await res.json();
}

export async function authenticateUser () {
    
    let url = 'http://localhost:5000/users/me';

    const res = await fetch(url, { 
        method: "GET",
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!res.ok) {
        const message = await res.json();
        throw new Error(message);
    }
    const user = await res.json();
    return user;
    
}

export async function logout () {
    let url = 'http://localhost:5000/logout';
    
    const res = await fetch(url, { 
        method: "GET",
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!res.ok) {
        const message = await res.json();
        throw new Error(message);
    }
    const user = await res.json();
    return user;
}
