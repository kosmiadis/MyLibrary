import BooksList from "../components/MyBooks/BooksList";
import Button from "../UI/Button";
import { useDisclosure } from "@nextui-org/react";
import AddBooks from "../components/AddBooks.jsx";
import { useEffect } from "react";
import { useFormData } from "../hooks/useFormData.js";
import { queryClient } from "../http/http.js";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";

export default function MyBooks () {
    
    //list of books that i have in my possesion.
    const { isOpen, onOpen, onClose, onOpenChange} = useDisclosure();
    const { setValues } = useFormData();

    useEffect(() => {
        queryClient.invalidateQueries();
    }, [])

    /*
        delete form's fields values when component loads (starting screen) so
        that the add book modal form is clear
    */
    useEffect(() => {
        setValues({ 
            title: '',
            description: '',
            author: '',
            personalRating: 0,
            price: 0,
            imgUrl: '',
            isRead: false
          })
    }, [])

    return <>
        
            <div className="p-4 w-full">
            <div className="flex sm:justify-between md:gap-4 mb-[50px]">
                <h1 className='text-2xl text-semibold font-specialFont'>MyBooks</h1>
                <div className="flex ml-auto">
                    <Button onClick={onOpen}>Add Book</Button>
                </div>
            </div>
            <BooksList onlyReadBooks={true} />

            {/*Modal component */}
            <AddBooks isOpen={isOpen} onClose={onClose} onOpenChange={onOpenChange}/>
        </div>
    </>
}