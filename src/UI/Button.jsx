export default function Button ({ action, children, classes, ...props }) {

    function handleClick () {
        action();
    }

    return <button className={'bg-accent text-secondaryForeground rounded-md ' + classes} onClick={handleClick} {...props} >
        {children}
    </button>
}