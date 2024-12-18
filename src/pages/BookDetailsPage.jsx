import { useParams } from "react-router-dom"
import BookDetails from '../components/MyBooks/BookDetails';
import { useFetchBook } from '../hooks/useFetchBook';
import LoadingIndicator from '../UI/LoadingIndicator';

export default function BookDetailsPage () {
    const { id } = useParams();
    
    const { data, isPending, isError, error } = useFetchBook(id);
    
    return <div>
        { isPending && <LoadingIndicator text="Loading Book Data"/> } 
        {/*{ isError && <p className="m-auto text-lg text-red-600 font-bold font-specialFont">Something went wrong. Please try again later.</p>}*/}
        { isError && <p className="m-auto text-lg text-red-600 font-bold font-specialFont">{error.message}</p>}
        { data?.book === null && <p className="p-4 text-lg text-red-600 font-bold font-specialFont">Could not load book :(</p>}
        { !isError && data?.book && data?.book._id === id && <BookDetails book={data?.book}/> }
    </div>
}