import { useBooks } from "../hooks/useBooks"

export default function Dashboard () {
    
    const { totalMoneySpent } = useBooks();
    
    return <>
        <p>Total Money Spent {totalMoneySpent}</p>
    </>
}