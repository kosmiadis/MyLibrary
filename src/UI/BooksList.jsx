import { motion } from 'framer-motion';
import { books } from '../dummyData';
import Book from './Book';
import { booksListVariants, bookVariants } from '../animations/animateBooks';

//in the future it will 
export default function BooksList () {

    return <motion.ul 
        variants={booksListVariants}
        initial={'hidden'}
        animate={'show'}
        className='flex flex-wrap justify-center gap-[50px]'
    >
        {!(books.length > 0) && <p>There are no books currently!</p>}
        {books.length > 0 && books.map(b => (
            <motion.li key={b.id} variants={bookVariants}><Book book={b}/></motion.li>
        ))}
    </motion.ul>
}