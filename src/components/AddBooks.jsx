import ModalComponent from "../UI/ModalComponent.jsx";
import { useAddBook } from "../hooks/useAddBook.js";

export default function AddBooks ({ isOpen, onClose, onOpenChange }) {

    const mutationObj = useAddBook(onClose);
    return <ModalComponent loadingText={'Adding book'} mutationObj={mutationObj} formTitle={'Add Book'} submitBtnText={'Add'} isOpen={isOpen} onClose={onClose} onOpenChange={onOpenChange}/>
}
