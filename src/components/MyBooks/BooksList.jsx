import { motion } from 'framer-motion';
import Book from './Book';
import { booksListVariants, bookVariants } from '../../animations/animateBooks';
import { useFetchBooks } from '../../hooks/useFetchBooks';
import LoadindIndicator from '../../UI/LoadingIndicator';
import { useBooks } from '../../hooks/useBooks';
import { useEffect } from 'react';

export default function BooksList ({ onlyReadBooks }) {

    const { data, isPending, isError } = useFetchBooks(onlyReadBooks);
    const { setTotalBooks, calculateTotalMoneySpent } = useBooks();

    const books = data?.books;

    // Update total books only when books change
    useEffect(() => {
        if (books) {
            calculateTotalMoneySpent(books);
            setTotalBooks(books.length);
        }
    }, [books, setTotalBooks, calculateTotalMoneySpent]);
    
    return <>
    {   /*add filters to sort books like author, price, personal rating etc. */}
    {/*add global context for books */}
        {books?.length > 0 && <span className='text-md font-semibold'></span>}
        <motion.ul 
            variants={booksListVariants}
            initial={'hidden'}
            animate={'show'}
            className='flex flex-wrap justify-center gap-[50px] max-w-[1250px] m-auto'
        >   
            { isPending && <LoadindIndicator text='Loading Books'/>}
            { isError && <p className='text-xl font-semibold'>Could not load books!</p>}
            { books === null && <p>Something went wrong! Please try again later.</p>}
            { books?.length === 0 && <p className='text-xl font-semibold'>There are no books!</p>}
            { books?.length > 0 && books?.map(book => (
                <motion.li key={book._id} variants={bookVariants}>
                    <Book book={book}/>
                </motion.li>
            ))}
        </motion.ul>
    </>
}