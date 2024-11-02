import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import Button from './Button';
import closeIcon from '../assets/closeIcon.svg';

function ModalChild ({ childen }) {

}

export default function Modal ({title, children}) {
    return createPortal(<>
        <div className=''></div>
        <motion.dialog open>
        <Button>
            <img width='24px' src={closeIcon} alt="close icon" />
        </Button>
        <motion.h2>{title}</motion.h2>
        {(children) => {
            children.map(child => (
                <ModalChild key={child}>{child}</ModalChild>
            ))
        }}
    </motion.dialog></>, document.getElementById('modal'))
}