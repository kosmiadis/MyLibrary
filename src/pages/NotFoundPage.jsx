import { Link } from "react-router-dom"

export default function NotFoundPage () {
    return <>
        <h2>Sorry, the page you are looking for does not exist!</h2>
        <p>Go back to <Link to='/' className="underline text-accent">Home</Link></p>
    </>
}