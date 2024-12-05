import ModalComponent from "../UI/ModalComponent.jsx";
import { useUpdateBook } from "../hooks/useUpdateBook.js";


export default function UpdateBook ({ startingValues, isOpen, onClose, onOpenChange }) {
    
    //mutation to update books
    const mutationObj = useUpdateBook(startingValues._id);

    return <ModalComponent loadingText={'Updating Book'} startingValues={startingValues} mutationObj={mutationObj} formTitle={'Update Book'} submitBtnText={'Update'} isOpen={isOpen} onClose={onClose} onOpenChange={onOpenChange}/>
}