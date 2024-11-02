import { useRef } from 'react';
import Input from '../components/Input';
import Button from '../UI/Button';

export default function AddBook () {
    const formRef = useRef();
    
    function convertFormDataToObject (formData) {
        let obj = {}
        for (const [key,value] of formData) {
            obj[key] = value
        }
        return obj;
    }
    
    function handleSubmit (e) {
        e.preventDefault();
        const formData = new FormData(formRef.current);
        const data = convertFormDataToObject(formData.entries());
        addBook(data);
    }

    return <>
        <h1 className="mt-[10px] text-xl font-semibold font-specialFont">Add a Book</h1>
        <form ref={formRef} onSubmit={handleSubmit} className=''>
            <Input label='Title' name='title' />
            <Input label='Author' name='author' />
            <Input label='Image Link' name='img_link' />            
            <Input label='Personal Rating' type='number' name='personal_rating' />
            <Input label='Price' name='price' />
            <Input textarea label='Description' type='textarea' name='description' />
            <Button action={() => {}} classes={'mt-[20px]'}>Submit</Button>
        </form>
    </>
}