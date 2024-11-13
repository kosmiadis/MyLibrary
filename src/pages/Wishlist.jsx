import BooksList from "../components/MyBooks/BooksList";
import { useBooks } from "../hooks/useBooks";
import Button from "../UI/Button";
import ModalComponent from "../UI/ModalComponent";
import { useDisclosure } from "@nextui-org/react";

export default function Wishlist () {
    const { totalBooks } = useBooks();
    const { isOpen, onOpen, onClose, onOpenChange} = useDisclosure();

    return <div className="p-4 w-full">
        <div className="flex sm:justify-between md:gap-4 mb-[50px]">
            <h1 className='text-2xl text-semibold font-specialFont'>MyBooks { totalBooks ? '('+totalBooks+')' : '' }</h1>
            <div className="flex ml-auto">
                <Button action={onOpen}>Add Book</Button>
            </div>
        </div>
        
        <BooksList onlyReadBooks={false}/>
        <ModalComponent isOpen={isOpen} onClose={onClose} onOpenChange={onOpenChange}/>
    </div>
}