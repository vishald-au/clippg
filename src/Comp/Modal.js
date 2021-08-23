

const Modal = ({selectedImg, setSelectedImg}) => {
    return (
        <div className='modal' onClick={() => setSelectedImg(null)}>
            <img src={selectedImg} alt='img' />
        </div>
    )
}

export default Modal
