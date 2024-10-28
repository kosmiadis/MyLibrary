export default function Button ({ action, children, classes, ...props }) {

    function handleClick () {
        action();
    }

    return <button className={'bg-accent text-secondaryForeground hover:bg-hoverForeground rounded-md px-[12px] py-[8px] ' + classes} onClick={handleClick} {...props} >
        {children}
    </button>
}