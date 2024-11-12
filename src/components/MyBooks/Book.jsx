import { motion } from 'framer-motion';
import { bookAnimateVariants } from '../../animations/animateBooks';
import { useNavigate } from 'react-router-dom';

export default function Book ({ book }) {
    const { _id, imgUrl, author, personalRating } = book;

    const navigate = useNavigate();

    function handleBookClick () {
        navigate(`/my-books/book/${_id}`)
    }

    return <motion.button onClick={handleBookClick} variants={bookAnimateVariants} whileHover={'hovered'} className='w-[150px] h-[100px] mx-auto'>
        <img src={imgUrl} className='w-[150px]' alt="" />
        <p>{author}</p><span>{personalRating} ⭐</span>
    </motion.button>
}