import { motion } from 'framer-motion';
import useScreenSize from '../../hooks/useScreenSize';

export default function BookDetails ({ book }) {

    const { id, title, author, img, description, price } = book;

    const screenWidth = useScreenSize();

    const variants = {
        initial: {
            opacity: 0,
            x: -10
        },
        show: {
            opacity: 1,
            x: 0
        }
    }

    const bookRelatedContentTransitions = { 
        bounce: 0.5,
        duration: 0.3,
        delay: 0.6,
        delayChildren: 0.2,
        staggerChildren: 0.05,
    }


    return <motion.div className={''} transition={bookRelatedContentTransitions}>
        <motion.h1 variants={variants} initial={'initial'} animate={'show'} 
        className='text-2xl font-specialFont font-extrabold mt-[20px] text-primaryForeground'>
            Book Details
        </motion.h1>

        <motion.div className={'mx-auto min-w-screen align-middle content-center flex flex-col '} variants={variants} initial="initial" animate="show">
                <img className={'sm:w-[200px] md:w-[100%] xl:w-[100%]' + screenWidth < 976 ? 'mx-auto' : 'max-w-[300px] mx-auto'} src={img} alt={title} />
                <div className='flex flex-col'>
                    <motion.h1 className={'mt-[12px] text-lg font-bold max-w-[300px] ' + screenWidth < 976 ? 'text-center' : 'text-center font-bold mt-2'}  variants={variants} >{title}</motion.h1>
                    <motion.p className={'text-md font-bold ' + screenWidth < 976 ? 'text-center' : 'text-center'} variants={variants} animate='show' initial='initial'>{author}</motion.p>
                </div>
        </motion.div>
    </motion.div>
}