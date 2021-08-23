import Title from './Comp/Title';
import UploadForm from './Comp/UploadForm';
import ImageGrid from './Comp/ImageGrid'
import Modal from './Comp/Modal';
import { useState } from 'react'

function App() {


  const [ selectedImg, setSelectedImg ] = useState(null)



  return (
    <>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-6'><Title /></div>
        <div className='col-6 text-right'><UploadForm /></div>
      </div>
    </div>
     
     
     <ImageGrid setSelectedImg={setSelectedImg} />
     {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </>
  );
}

export default App;
