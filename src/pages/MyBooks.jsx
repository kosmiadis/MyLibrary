import BooksList from "../components/MyBooks/BooksList";
import Button from "../UI/Button";
import { useDisclosure } from "@nextui-org/react";
import { useBooks } from '../hooks/useBooks.js';
import AddBooks from "../components/AddBooks.jsx";

export default function MyBooks () {

    
    //list of books that i have in my possesion.
    const { isOpen, onOpen, onClose, onOpenChange} = useDisclosure();
    const { totalBooks, totalMoneySpent } = useBooks();

    return <div className="p-4 w-full">
        <div className="flex sm:justify-between md:gap-4 mb-[50px]">
            <h1 className='text-2xl text-semibold font-specialFont'>MyBooks { totalBooks ? '('+totalBooks+') ' + totalMoneySpent + '€' : '' }</h1>
            <div className="flex ml-auto">
                <Button onClick={onOpen}>Add Book</Button>
            </div>
        </div>
        <BooksList onlyReadBooks={true}/>

        {/*Modal component */}
        <AddBooks isOpen={isOpen} onClose={onClose} onOpenChange={onOpenChange}/>
    </div>
}