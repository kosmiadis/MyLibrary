import { useEffect, useState } from "react";
import { Input } from "@nextui-org/react";

export default function Search ({ type, books, setBooks }) {
    const [ searchTerm, setSearchTerm ] = useState('');
    const [ searchCategory, setSearchCategory] = useState('title');
    const [ searchLabel, setSearchLabel ] = useState('Search by ' + searchCategory)

    function handleOnChange (e) {
        setSearchTerm(e.target.value);
    }

    function handleSelectChange (e) {
        setSearchCategory(e.target.value.toLowerCase());
    }

    function handleSearchAction () {
        setBooks(() => {
            const filteredBooks = 
                searchCategory === 'title' 
                ? [...books].filter(b => b.type === type && b.title.toLowerCase().includes(searchTerm.trim().toLowerCase()))
                : [...books].filter(b => b.type === type && b.author.toLowerCase().includes(searchTerm.trim().toLowerCase()))
            return filteredBooks;
        })
    }

    useEffect(() => {
        setSearchLabel('Search by '+ searchCategory.charAt(0).toUpperCase() + searchCategory.substring(1));
    }, [searchCategory])

    return <div className="flex gap-2 max-w-[400px] mb-[30px]">
            <select className="outline-none " onChange={handleSelectChange} name="filter" id="filter">
                <option value="title">Title</option>
                <option value="author">Author</option>
            </select>
            <Input value={searchTerm} onChange={(e) => {
                handleOnChange(e)
                handleSearchAction()
            }} variant="flat" size='sm' label={searchLabel}/>
    </div>
    

}