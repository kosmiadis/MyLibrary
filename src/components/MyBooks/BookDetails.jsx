import { motion } from 'framer-motion';
import useScreenSize from '../../hooks/useScreenSize';

export default function BookDetails ({ book }) {

    const {  title, author, imgUrl, description, price, personalRating } = book;

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


    return <div className='flex sm:flex-wrap sm:justify-center md:justify-normal md:flex-nowrap md:gap-8 mt-4'>
        
        <motion.div className={''} transition={bookRelatedContentTransitions}>
            <motion.div className={'mx-auto min-w-screen align-middle content-center flex flex-col max-w-[300px]'} variants={variants} initial="initial" animate="show">
                    <img className={'sm:w-[200px] md:w-[100%] xl:w-[100%]' + screenWidth < 976 ? 'mx-auto' : 'max-w-[300px] mx-auto'} src={imgUrl} alt={title} />
                    <div className='flex flex-col'>
                        <motion.h1 className={'mt-[12px] text-lg font-bold max-w-[300px]' + screenWidth < 976 ? 'text-center' : 'text-center font-bold mt-2'}  variants={variants} >{title}</motion.h1>
                        <motion.p className={'text-md font-bold ' + screenWidth < 976 ? 'text-center' : 'text-center'} variants={variants} animate='show' initial='initial'>{author}</motion.p>
                    </div>
            </motion.div>
        </motion.div>
        <motion.div className='flex flex-col align-center'>
            <p className='text-lg'>{description}</p>
            <p className='text-xl font-semibold font-specialFont mt-4'>{price}€</p>
            <p className=''>{personalRating}⭐</p>
        </motion.div>
    </div>
}