import { Client, Account, Databases } from 'appwrite';

export const API_ENDPOINT = 'https://cloud.appwrite.io/v1'
export const PROJECT_ID = '658e6d7d87b7d77eab8b'

const client = new Client()
    .setEndpoint(API_ENDPOINT) 
    .setProject(PROJECT_ID);    

export const account = new Account(client);


export const databases = new Databases(client);

    
export const docFromAppwrite = databases.getDocument(
    "65a0d58f05d18f1fd844",
    "65b1f61885bcd03d1583",
    "1",
    );
    
    docFromAppwrite.then(
        function (response) {
            console.log(response);
        },
        function (error) {
            console.log(error);
        }
        );


        
        
        
        export default client;



// const imageArray= [
//     [`${}`,''],
//     [`${}`,''],
//     [`${}`,''],
//     [`${}`,''],
//     [`${}`,'']
// ]

// export let fileId='';
// const storage = new Storage(client);
// const promise = storage.listFiles('659d2349dfa1727378bd');
// export let result:Object;
// promise.then(async function (response) {
//     console.log(response);
//     const fileId = response.files[2].$id;
//     console.log("file Id : ",fileId)
//     result = storage.getFileDownload('659d17a0dab3a9ce3548',fileId);
//     // result = await storage.getFile('659d2349dfa1727378bd', '659d23a7ddca44f34e1f');
//     console.log("Result :",result);
//     console.log("Result href : ",result.href); 
//     result = result.href;
// }, function (error) {
//     console.log(error); 
// });
    
       
//     const promiseFiles = await storage.listFiles('659d2349dfa1727378bd');
//     fileId =  promiseFiles.files[0].$id
//     console.log("id:",fileId);
//     const imageFile = await storage.getFile('659d2349dfa1727378bd', '659d23a7ddca44f34e1f');
//     console.log(imageFile);

    
// })
// export const result = storage.getFileDownload('659d17a0dab3a9ce3548',fileId);
// console.log(result);
// console.log(result.href);
