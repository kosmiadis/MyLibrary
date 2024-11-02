import { useParams } from "react-router-dom"
import BookDetails from '../components/MyBooks/BookDetails';

export default function BookDetailsPage () {
    const { id } = useParams();

    
    return <>
    {/*isPending && <p>Loading...</p>}
        {foundBook && <BookDetails book={foundBook}/>}
        {!foundBook && <p>Book was not found!</p>*/}
    </>    
}