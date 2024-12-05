import { motion } from 'framer-motion';
import { bookAnimateVariants } from '../../animations/animateBooks';
import { useNavigate } from 'react-router-dom';

export default function Book ({ book }) {
    const { _id, imgUrl, author, personalRating } = book;

    const navigate = useNavigate();

    function handleBookClick () {
        if (location.pathname === '/library/my-books') {
            navigate(`/library/my-books/${_id}`)
        }
        else if (location.pathname === '/library/wishlist') {
            navigate(`/library/wishlist/${_id}`)
        }
    }

    return <motion.button onClick={handleBookClick} variants={bookAnimateVariants} whileHover={'hovered'} className='w-[150px] mx-auto' >
        <img src={imgUrl} className='w-[150px]' alt="book_cover" />
        <p className='font-bold mt-2'>{author}</p>
    </motion.button>
}