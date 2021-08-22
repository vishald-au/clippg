import { useState } from "react"
import ProgressBar from "./ProgressBar"

const UploadForm = () => {

    const types = ['image/png', 'image/jpeg']
    const [ file, setFile ] = useState(null)
    const [ error, setError ] = useState(null)

    const changeHandler = (e) => {
        let selected = e.target.files[0]
            if (selected && types.includes(selected.type)) {
                setFile(selected)
                setError(null)
            } else {
                setError('unable to upload this file')
                setFile(null)
            }
    }
    return (
        <form>
            <input type='file' onChange={changeHandler}/>
            {error && <div class="bg-red">{error}</div>}
            {file && <div class="bg-info">{file.name}</div>}
            {file && <ProgressBar file={file} setFile={setFile} />}
        </form>
    )
}

export default UploadForm
