import React, { useRef } from "react";
import client, { account, databases } from "./appwriteConfig";
import { ID, Query, Storage } from "appwrite";

const ImageUpload = () => {
  const imageIdRef = useRef(null);
  const imageUrlRef = useRef(null);
  let result;
  const storage = new Storage(client);


  const handleUpload = () => {
    try {
    //   const imageUploadPromise = databases.createDocument(
    //     "65a0d58f05d18f1fd844",
    //     "65b0ebfe884bae608374",
    //     ID.unique(),
    //     {
    //       imageId: imageIdRef.current.value,
    //       imageUrl: imageUrlRef.current.value,
    //     }
    //   );

    //   const getImage = databases.getDocument(
    //     "65a0d58f05d18f1fd844",
    //     "65b0ebfe884bae608374",
    //     "65b0ef89d4a5acb4d9ff"
    //   );
    //   console.log(getImage);

    //   const listImage:any  = databases.listDocuments(
    //     "65a0d58f05d18f1fd844",
    //     "65b0ebfe884bae608374",
    //     [
    //         Query.equal('imageId', 'abstract')
    //     ]
    // );
    // console.log(listImage[0]);

    // result =  storage.getFileDownload('659d2349dfa1727378bd','659e2bd06b818753eb9e');
    // result = result.href;

    result = storage.getFile('659d2349dfa1727378bd','659e2bd06b818753eb9e');
    console.log(result);

    // result = storage.listFiles('659d2349dfa1727378bd','659e2bd06b818753eb9e');
} catch (error) {
    console.error(error);
}
  };
  return (
    <>
      <img src={`${storage.getFilePreview(result)}`}/>
      <input className="imageId" type="text" ref={imageIdRef} />
      <input className="imageUrl" type="file" ref={imageUrlRef} />
      <button className="upload" type="submit" onClick={handleUpload}>
        upload
      </button>
    </>
  );
};

export default ImageUpload;

// import { Storage } from "appwrite";
// import { useState, useEffect } from "react";
// import client, { account } from "./appwriteConfig";

// function ImageUpload() {
//     const storage = new Storage(client);
//   const [imageList, setImageList] = useState([]);

//   const getImage = async () => {
//     const images = await storage.listFiles('659d2349dfa1727378bd',['659e2bd06b818753eb9e']);
//     setImageList(images.files);
//   };

//   useEffect(() => {
//     getImage();
//   }, []);

//   const [image, setImage] = useState();

//   const uploadImage = async (e) => {
//     e.preventDefault();

//     const user = await account.getSession("current");

//     if (user) {
//       const newImage = await storage.createFile(image, ["*"], ["*"]);
//       console.log(newImage);
//     } else {
//       await account.createAnonymousSession();
//       const newImage = await storage.createFile(image, ["*"], ["*"]);
//       console.log(newImage);
//     }
//   };

//   return (
//     <div className="container-xl border my-5 p-3">
//       <h2 className="text-center my-2">Image Hub</h2>

//       <div className="container border p-3 my-3">
//         <form>
//           <div className="form-group">
//             <label htmlFor="exampleFormControlFile1">
//               <b>Upload your image</b> :
//             </label>
//             <input
//               onChange={(e) => {
//                 setImage(e.target.files[0]);
//               }}
//               type="file"
//               className="btn form-control-file"
//               id="exampleFormControlFile1"
//             />
//           </div>
//           <button className="btn btn-primary" onClick={(e) => uploadImage(e)}>
//             Upload
//           </button>
//         </form>
//       </div>
//       <div className="container-xxl d-flex flex-wrap justify-content-start">
//         { imageList && imageList.map((img) => {
//           return (
//             <div className="card col-sm-3 col-xl-3">
//               <img
//                 class="card-img-top"
//                 src={storage.getFilePreview(img.$id)}
//                 alt="Card image cap"
//               />
//               <div className="card-body">
//                 <button className="btn btn-danger">Delete</button>
//                 <button className="btn btn-primary mx-2">Download</button>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default ImageUpload;
