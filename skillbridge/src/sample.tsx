import {  Databases, Query } from "appwrite";
import { useEffect, useState } from "react";
import client, { docFromAppwrite } from "./appwriteConfig";

const Sample = () => {
  const [doc, setDoc] = useState<Promise>("");
  const databases = new Databases(client);
//   useEffect(() => {
    
//     const docFromAppwrite = databases.getDocument(
//       "65a0d58f05d18f1fd844",
//       "65b1f61885bcd03d1583",
//       "1",
//     );
//     setDoc(docFromAppwrite);

//     docFromAppwrite.then(
//       function (response) {
//         console.log(response);
//       },
//       function (error) {
//         console.log(error);
//       }
//     );
//   });
  return (
    <>
      <div>{docFromAppwrite}</div>
    </>
  );
};

export default Sample;

// const promise = databases.createDocument(
//     '65a0d58f05d18f1fd844','65b1f61885bcd03d1583',
//     ID.unique(),{

//     }
// );

// console.log(promise)
