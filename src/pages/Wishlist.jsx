import BooksList from "../components/MyBooks/BooksList";
import Button from "../UI/Button";
import AddBooks from "../components/AddBooks";
import { useDisclosure } from "@nextui-org/react";

export default function Wishlist () {
    const { isOpen, onOpen, onClose, onOpenChange} = useDisclosure();

    return <div className="p-4 w-full">
        <div className="flex sm:justify-between md:gap-4 mb-[50px]">
        <h1 className='text-2xl text-semibold font-specialFont'>Wishlist</h1>
            <div className="flex ml-auto">
                <Button onClick={onOpen}>Add Book</Button>
            </div>
        </div>
        
        <BooksList type={'wishlist'}/>
        <AddBooks isOpen={isOpen} onClose={onClose} onOpenChange={onOpenChange}/>
    </div>
}