import { motion } from 'framer-motion';
import Book from './Book';
import { booksListVariants, bookVariants } from '../../animations/animateBooks';
import { useFetchBooks } from '../../hooks/useFetchBooks';
import LoadindIndicator from '../../UI/LoadingIndicator';
import { useDispatch } from 'react-redux'
import { updateMyBooks } from '../../store/books/myBooksSlice.js';
import { updateWishlist } from '../../store/books/wishlist.js';
import { useEffect } from 'react';

export default function BooksList ({ onlyReadBooks }) {

    const { data, isPending, isError } = useFetchBooks(onlyReadBooks);
    const dispatch = useDispatch();

    const books = data?.books;

    // Update total books only when books change <-- add later!
    useEffect(() => {
        if (books) {
            if (onlyReadBooks) {
                dispatch(updateMyBooks({ books }),)
            }
            else {
                dispatch(updateWishlist({ books }),)
            }
        }
    }, [books])
    
    return <>
    {   /*add filters to sort books like author, price, personal rating etc. */}
    {/*add global context for books */}
        <p>Filter by</p>
        {books?.length > 0 && <span className='text-md font-semibold'></span>}
        <motion.ul 
            variants={booksListVariants}
            initial={'hidden'}
            animate={'show'}
            className='flex flex-wrap justify-center gap-[50px] max-w-[1250px] m-auto'
        >   
            { isPending && <LoadindIndicator text='Loading Books'/>}
            { isError && <p className="m-auto text-lg text-red-600 font-bold font-specialFont">Could not load books!</p>}
            { !isPending && books === null && <p className="m-auto text-lg text-red-600 font-bold font-specialFont">Something went wrong! Please try again later.</p>}
            { !isPending && books?.length === 0 && <p className='m-auto text-lg font-semibold font-specialFont'>There are no books!</p>}
            { !isPending && books?.length > 0 && books?.map(book => (
                <motion.li key={book._id} variants={bookVariants}>
                    <Book book={book}/>
                </motion.li>
            ))}
        </motion.ul>
    </>
}