import BooksList from "../components/MyBooks/BooksList";
import Button from "../UI/Button";
import { useDisclosure } from "@nextui-org/react";
import ModalComponent from "../UI/ModalComponent";
import { useBooks } from '../hooks/useBooks.js';

export default function MyBooks () {

    
    //list of books that i have in my possesion.
    const { isOpen, onOpen, onClose, onOpenChange} = useDisclosure();
    const { totalBooks } = useBooks();

    return <div className="p-4 w-full">
        <div className="flex sm:justify-between md:gap-4 mb-[50px]">
            <h1 className='text-2xl text-semibold font-specialFont'>MyBooks { totalBooks ? '('+totalBooks+')' : '' }</h1>
            <div className="flex ml-auto">
                <Button action={onOpen}>Add Book</Button>
            </div>
        </div>
        <BooksList onlyReadBooks={true}/>
        <ModalComponent isOpen={isOpen} onClose={onClose} onOpenChange={onOpenChange}/>
    </div>
}