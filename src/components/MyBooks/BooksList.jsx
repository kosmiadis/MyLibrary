import { motion } from 'framer-motion';
import Book from './Book';
import { booksListVariants, bookVariants } from '../../animations/animateBooks';
import LoadindIndicator from '../../UI/LoadingIndicator';
import Search from '../Search.jsx';
import { useEffect, useState } from 'react';
import { useFetchBooks } from '../../hooks/useFetchBooks.js';

export default function BooksList ({ type }) {
    const { data, isError, isPending, error } = useFetchBooks();
    const [ displayedBooks, setDisplayedBooks ] = useState(null); /*Starts with undefined value instead of null,
        because it would have rendered the case where books === null
    */

    const books = data?.books;

    //display only books that match the onlyReadBooks prop value
    useEffect(() => {
        if (books) {
            setDisplayedBooks(() => {
                const filteredBooks = [...books].filter(book => {
                    return book.type === type
                });
                return filteredBooks
            })
    }}, [books])
   
    
    return <>
            {books && <Search type={type} books={books} setBooks={setDisplayedBooks} /> /* filters for searching books by author, title etc...*/}
            { isPending && <LoadindIndicator text='Loading Books'/>}
        <motion.ul 
            variants={booksListVariants}
            initial={'hidden'}
            animate={'show'}
            className='flex flex-wrap justify-center gap-[50px] max-w-[1250px] m-auto'
        >   
            { isError && <p className="m-auto text-lg text-red-600 font-bold font-specialFont">{error?.message || 'Could not load books!'}</p>}
            { !isError && !isPending && displayedBooks?.length === 0 && <p className='m-auto text-lg font-semibold font-specialFont'>There are no books!</p>}
            { !isError && !isPending && displayedBooks?.length > 0 && displayedBooks?.map(book => (
                <motion.li key={book._id} variants={bookVariants}>
                    <Book book={book}/>
                </motion.li>
            ))}
        </motion.ul>
    </>
}