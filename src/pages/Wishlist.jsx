import BooksList from "../components/MyBooks/BooksList";

export default function Wishlist () {
    return <>
        <BooksList onlyReadBooks={false}/>
    </>
}