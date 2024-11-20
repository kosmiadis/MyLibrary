import { useEffect } from "react";
import { useSelector } from "react-redux"

export default function Dashboard () {
    
    //ready for use
    const { myBooks } = useSelector((state) => state.myBooks);
    const { wishlist } = useSelector((state) => state.wishlist);

    useEffect(() => {

    })
    
    return <>
        <p>Total Read Books: {myBooks.length}</p>
        <p>Total Wishlist Books: {wishlist.length}</p>
    </>
}