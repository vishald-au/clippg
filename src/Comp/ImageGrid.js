import useFirestore from "../hooks/useFirestore"
import { motion } from 'framer-motion'

const ImageGrid = ({setSelectedImg}) => {


    const { docs } = useFirestore('images')
    console.log(docs)



    return (
        <div className="container-fluid">
            <div className="row">
                {docs && docs.map(doc => (
                    <motion.div className='col-sm-12 col-md-4 noMargin' 
                    layout
                    whileHover={{ opacity: 1 }}
                    key={doc.id} onClick={() => setSelectedImg(doc.url)}>
                        <motion.img className='imgw' 
                        initial={{ opacity: 0, scale: 0}}
                        animate={{ opacity: 1, scale: 1}}
                        transition={{ delay: 1 }}

                        alt='img' src={doc.url} />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default ImageGrid
