import { motion } from 'framer-motion'

const Modal = ({selectedImg, setSelectedImg}) => {

    const handleClick = (e) => {
       if (e.target.classList.contains('modal')){
            setSelectedImg(null)
       }
    }
    return (
        <motion.div className='modal' 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        onClick={(e) => handleClick(e)}>
            <motion.img src={selectedImg} 
            initial={{ y: '-100vh' }}
            animate={{ y: 0 }}
            alt='img' />
        </motion.div>
    )
}

export default Modal
