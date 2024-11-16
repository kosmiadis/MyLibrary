import { motion } from 'framer-motion';
import { bookAnimateVariants } from '../../animations/animateBooks';
import { useNavigate } from 'react-router-dom';

export default function Book ({ book }) {
    const { _id, imgUrl, author, personalRating } = book;

    const navigate = useNavigate();

    function handleBookClick () {
        navigate(`/my-books/${_id}`)
    }

    return <motion.button onClick={handleBookClick} variants={bookAnimateVariants} whileHover={'hovered'} className='w-[150px] mx-auto' >
        <img src={imgUrl} className='w-[150px]' alt="book_cover" style={{
        boxShadow: '10px 5px 5px rgb(0, 0, 0, 0.2)',
        minHeight: '180px'
    }}/>
        <p className='font-bold mt-2'>{author}</p><span>{personalRating} ⭐</span>
    </motion.button>
}