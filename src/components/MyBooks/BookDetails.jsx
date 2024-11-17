import { motion } from 'framer-motion';
import useScreenSize from '../../hooks/useScreenSize';
import Button from '../../UI/Button';
import { useDeleteBook } from '../../hooks/useDeleteBook';
import LoadingIndicator from '../../UI/LoadingIndicator';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDisclosure } from '@nextui-org/react';
import UpdateBook from '../UpdateBook';
import { useFormData } from '../../hooks/useFormData';

export default function BookDetails ({ book }) {

    const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

    const {  _id ,title, author, imgUrl, description, price, personalRating, isRead } = book;
    const { setValues } = useFormData();

    const screenWidth = useScreenSize();
    const { mutate, isPending, isError, message } = useDeleteBook();

    const navigate = useNavigate();

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

    function handleDelete() {
        mutate(_id);
    }

    //navigate back to books after succesfull deletion.
    useEffect(() => {
        let redirectTimeout;
        if (message?.msg === 'Book was deleted.') {
            redirectTimeout = setTimeout(() => {
                navigate('../')
            }, 2000);
        }

        return () => {
            clearTimeout(redirectTimeout);
        }
    }, [message])

    return <div className='p-4 flex sm:flex-wrap sm:justify-center md:justify-normal md:flex-nowrap md:gap-8 mt-4'>
        {isPending && <LoadingIndicator text='Deleting book'/>}
        {!isPending && (message?.err === true || message === null) && <>
            <motion.div transition={bookRelatedContentTransitions}>
            { isError && <p className='text-md font-bold font-specialFont text-red-600'>{message?.msg}</p> }
                <motion.div className={'mx-auto min-w-screen align-middle content-center flex flex-col max-w-[300px]'} variants={variants} initial="initial" animate="show">
                        <img className={'sm:w-[200px] md:w-[100%] xl:w-[100%]' + screenWidth < 976 ? 'mx-auto' : 'max-w-[300px] mx-auto'} src={imgUrl} alt={title} />
                        <div className='flex flex-col'>
                            <motion.h1 className={'mt-[12px] text-lg font-bold max-w-[300px]' + screenWidth < 976 ? 'text-center' : 'text-center font-bold mt-2'}  variants={variants} >{title}</motion.h1>
                            <motion.p className={'text-md font-bold ' + screenWidth < 976 ? 'text-center' : 'text-center'} variants={variants} animate='show' initial='initial'>{author}</motion.p>
                        </div>
                </motion.div>
            </motion.div>
            <motion.div className='flex flex-col align-center sm:mt-8'>
                <p className='text-lg'>{description}</p>
                <div className='flex gap-2 mt-4 align-middle items-center'>
                    <p className='my-auto text-xl font-semibold font-specialFont'>{price}€</p>
                    <p className=''>{personalRating}⭐</p>
                    <div className='ml-2 flex gap-2'>
                        <Button onClick={() => {
                            setValues({
                                title,
                                author,
                                description,
                                imgUrl,
                                personalRating,
                                price,
                                isRead
                            })
                            onOpen()
                            }}>Edit Book</Button>
                        <Button color={'danger'} onClick={handleDelete}>Delete Book</Button>
                    </div>
                </div>
            </motion.div>
        </>}

        {/*if it is not pending and deletion was succesful */}
        {!isPending && message?.err === false && <div className='flex flex-col gap-4'>
            <p className='m-auto text-xl text-green-600 font-bold font-specialFont'>Book was deleted succesfully!</p>
            <LoadingIndicator text='Redirecting'/>
        </div>}
        <UpdateBook startingValues={{ id: _id, title, author, imgUrl, description, price, personalRating, isRead}} isOpen={isOpen} onClose={onClose} onOpenChange={onOpenChange} />
    </div>
}