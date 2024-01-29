import { Query } from "appwrite";
import { databases } from "../../AppwriteConfig";

const benefitDocFromAppwrite = databases.listDocuments(
  "65a0d58f05d18f1fd844",
  "65b1f61885bcd03d1583",
  [Query.orderAsc('benefit_number')]
);

export let benefits;
export let benefitsLength;

benefitDocFromAppwrite.then(
  function (response) {
      // console.log(response.documents?.[0]?.benefit_number);
      benefits = response;
    console.log(benefits);
    benefitsLength = benefits.documents?.length;
    console.log(benefitsLength);
  },
  function (error) {
    console.log(error);
}
);

//create document 

// for(const benefit in benefitsData){
//     databases.createDocument( "65a0d58f05d18f1fd844",
//     "65b1f61885bcd03d1583",
//     (benefitsData[benefit].id).toString(),
//     {
//         benefit_number : benefitsData[benefit].benefit_number,
//         title : benefitsData[benefit].title, 
//         desc:benefitsData[benefit].desc, 
//     })
// }


