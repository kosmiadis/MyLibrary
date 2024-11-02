import { motion } from 'framer-motion';
import Book from './Book';
import { booksListVariants, bookVariants } from '../../animations/animateBooks';
import { useFetchBooks } from '../../hooks/useFetchBooks';
import LoadindIndicator from '../../UI/LoadingIndicator';

export default function BooksList ({ fallBackText }) {

    const { books, isPending, isError, error } = useFetchBooks();

    return <motion.ul 
        variants={booksListVariants}
        initial={'hidden'}
        animate={'show'}
        className='flex flex-wrap justify-center gap-[50px]'
    >   
        {isPending && <LoadindIndicator />}
        {isError && <p>{error.message}</p>}
        {!isPending && !(books.length > 0) && <p>{fallBackText}</p>}
        {!isPending && books.length > 0 && books.map(b => (   
            <motion.li key={b.id} variants={bookVariants}>
                <Book book={b}/>
            </motion.li>
        ))}
    </motion.ul>
}