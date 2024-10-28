export const booksListVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0.2,
            staggerChildren: 0.02
        }
    }
}

export const bookVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
}

export const bookAnimateVariants = {
    hovered: { scale: 1.03 }
}