import useFirestore from "../hooks/useFirestore"

const ImageGrid = ({setSelectedImg}) => {


    const { docs } = useFirestore('images')
    console.log(docs)



    return (
        <div className="container-fluid">
            <div className="row">
                {docs && docs.map(doc => (
                    <div className='col-sm-12 col-md-4 noMargin' key={doc.id} onClick={() => setSelectedImg(doc.url)}>
                        <img className='imgw' alt='img' src={doc.url} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ImageGrid
