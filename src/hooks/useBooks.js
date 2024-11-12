import { BooksCtx } from "../../contexts/BooksContext";
import { useContext } from "react";

export function useBooks () {
    const { totalBooks, setTotalBooks, calculateTotalMoneySpent, totalMoneySpent } = useContext(BooksCtx);
    return { totalBooks, setTotalBooks, calculateTotalMoneySpent, totalMoneySpent };
}