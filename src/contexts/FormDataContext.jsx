import { createContext } from "react";
import { useState } from "react";

export const FormDataCtx = createContext({
    title: String,
    author: String,
    description: String,
    personalRating: Number,
    price: Number,
    imgUrl: String,
    isRead: Boolean
})

export default function FormDataContext ({ children }) {

    const [ title, setTitle ] = useState('');
    const [ author, setAuthor ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ personalRating, setPersonalRating ] = useState(0);
    const [ price, setPrice ] = useState(0);
    const [ imgUrl, setImgUrl ] = useState('');
    const [ isRead, setIsRead ] = useState(false);

    function setValues(newValues) {
        const { title, author, description, personalRating, price, imgUrl, isRead } = newValues;
        setTitle(title);
        setAuthor(author);
        setDescription(description);
        setPersonalRating(personalRating);
        setPrice(price);
        setImgUrl(imgUrl);
        setIsRead(isRead)
    }

    const values = {
        title, setTitle,
        author, setAuthor,
        description, setDescription,
        personalRating, setPersonalRating,
        price, setPrice, 
        imgUrl, setImgUrl,
        isRead, setIsRead,
        setValues
    }
    
    return <FormDataCtx.Provider value={values} >
        { children }
    </FormDataCtx.Provider>
}