import Button from '../UI/Button';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function GoBackButton () {

    const navigate = useNavigate();

    function handleAction () {
        if (location.pathname.includes('/my-books')) {
            navigate('/my-books');
        }
        else if (location.pathname.includes('/wishlist')) {
            navigate('/wishlist');
        }
    }

    const goBackButtonVariants = {
        initial: {
            opacity: 0,
            x: -5
        },
        show: {
            opacity: 1,
            x: 0,
        }
    }

    const transitionValues = {
        bounce: 0.5, duration: 0.3
    }

    return <motion.div className='ml-[10px]' initial={'initial'} animate={"show"} variants={goBackButtonVariants} transition={transitionValues}>
        <Button onClick={handleAction}>
            Go Back 
        </Button>
    </motion.div>
}