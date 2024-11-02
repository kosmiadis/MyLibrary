import { useNavigate } from "react-router-dom";
import BooksList from "../components/MyBooks/BooksList";
import Button from "../UI/Button";

export default function MyBooks () {
    //list of books that i have in my possesion.

    const navigate = useNavigate();

    function handleAddBook () {
        navigate('/my-books/add-book');
    }

    return <div className="p-4">
        <div className="flex sm:justify-between md:justify-normal md:gap-4 mb-[50px]">
            <h1 className='text-2xl text-semibold font-specialFont'>MyBooks</h1>
            <div className="flex gap-2">
                <Button onClick={handleAddBook}>Add Book</Button>
            </div>
        </div>
        <BooksList fallBackText={'There are not books!'} />
    </div>
}