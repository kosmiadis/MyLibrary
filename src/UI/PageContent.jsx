import { motion } from 'framer-motion';

export default function PageContent ({ screenWidth, children }) {

    let classes = screenWidth > 976 ? 'p-4 ' : 'p-2 ';

    return <motion.main className={classes}>
        {children}
    </motion.main>
}