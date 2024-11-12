import { createContext, useState } from "react";

export const BooksCtx = createContext({
    totalBooks: 0,
    totalMoneySpent: 0,
    setTotalBooks: () => {},
    calculateTotalMoneySpent: () => {},
});

export default function BooksContext ({ children }) {

    const [ totalBooks, setTotalBooks ] = useState(0);
    const [ totalMoneySpent, setTotalMoneySpent ] = useState(0);

    function calculateTotalMoneySpent (books) {
        let sum = 0;
        for (const book of books) {
            sum += parseFloat(book.price);
        }
        setTotalMoneySpent(sum.toFixed(2));
    }

    return <BooksCtx.Provider value={{
        totalBooks, setTotalBooks, totalMoneySpent, calculateTotalMoneySpent
    }}>
        {children}
    </BooksCtx.Provider>
}