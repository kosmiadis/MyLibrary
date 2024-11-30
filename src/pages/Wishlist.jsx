import BooksList from "../components/MyBooks/BooksList";
import Button from "../UI/Button";
import AddBooks from "../components/AddBooks";
import { useDisclosure } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Wishlist () {
    const { isOpen, onOpen, onClose, onOpenChange} = useDisclosure();
    const isAuthorized = useSelector((state) => state.auth.authorized);
    const isLoading = useSelector((state) => state.auth.loading);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoading && !isAuthorized) {
            navigate('/login');
        }
    }, [isAuthorized, isLoading]);

    return <div className="p-4 w-full">
        <div className="flex sm:justify-between md:gap-4 mb-[50px]">
        <h1 className='text-2xl text-semibold font-specialFont'>Wishlist</h1>
            <div className="flex ml-auto">
                <Button onClick={onOpen}>Add Book</Button>
            </div>
        </div>
        
        <BooksList onlyReadBooks={false}/>
        <AddBooks isOpen={isOpen} onClose={onClose} onOpenChange={onOpenChange}/>
    </div>
}