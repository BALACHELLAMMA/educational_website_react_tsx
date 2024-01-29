import { storage } from "../../AppwriteConfig";

const ImageUploadInAppwrite = () => {
  const handleImageUpload = ()=>{
    const bucketId = '659d2349dfa1727378bd';
    let fileId = prompt('Enter file id : ')
    const promise = storage.createFile(bucketId, fileId, document.getElementById('uploader').files[0]);

    promise.then(function (response) {
        console.log(response); 
    }, function (error) {
        console.log(error); 
    });
  }

  return (
   <div className="container">
     <h1>Upload Images into Appwrite</h1>
     <input type="file" id='uploader'/>
     <button onClick={handleImageUpload} className="btn btn-primary">upload</button>
   </div>
  );
}

export default ImageUploadInAppwrite;
