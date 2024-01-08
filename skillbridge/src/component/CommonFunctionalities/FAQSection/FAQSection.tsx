import React, { useState } from 'react'
import { plusIcon} from '../../../assets/resource/iconResource';
import { faqForwardButton } from '../../../assets/resource/imgResource';
import { FAQList } from '../../Data/FAQData';

function FAQSection() {

   //  const openCloseIcons = {plusIcon,closeIcon};

    const [showAnswer, setShowAnswer] = useState<number | null>(null);
   //  const [selected, setSelected] = useState(openCloseIcons.plusIcon);

   //  function openAnswer(){
   //      setShowAnswer(null);
   //      showAnswer ? setSelected(openCloseIcons.plusIcon) : setSelected(openCloseIcons.closeIcon);
   //  }

    const RenderFAQ = FAQList.map((FAQ)=>{
        return(
            <div className='FAQ_container card p-1 border' key={FAQ.id} >
            {/* <div class=" p-3 d-flex flex-column gap-3"> */}
               <div
                  className="d-flex flex-column  gap-4 rounded align-content-center p-2">
                  <div
                     className="d-flex justify-content-between  rounded align-content-center p-2 ">
                     <p className="mt-2 fw-medium">{FAQ.question}</p>
                     <button className='open_button border-0 bg-white'
                      onClick={()=>setShowAnswer(FAQ.id)}>   
                     <img src={plusIcon}
                     className='open_close_icon w-100' alt='open_close_icon'/>
                     </button>
                  </div>
                  {showAnswer === FAQ.id &&                         
                  <div className="answer_container border-top py-3">
                     <p className="fw-medium px-2">{FAQ.answer}</p>
                     <div
                        className="bg-light d-flex justify-content-between border rounded align-content-center p-2 ">
                        <p className="mt-3 fw-medium">Enrollment Process for
                           Different Courses</p>
                        <button className="faq_forward_button btn btn-circle">
                           <img src={faqForwardButton} />
                        </button>
                     </div>
                  </div>
                  }
               </div>
            {/* </div> */}
            </div> 
        );
    })
   

  return (
    <React.Fragment>
        <section className="faq_section container mt-5 mb-3 bg-white rounded">
         <div
            className="row row-cols-1 row-cols-md-2 g-4 d-flex justify-content-between p-3">
            <div className="col-md-5">
               <div className="card border-0 p-2">
                  <div className="card-body">
                     <h1>Frequently Asked Questions</h1>
                     <p>
                        Still you have any questions? Contact our Team via
                        support@skillbridge.com
                     </p>
                     <button className="btn fw-bold bg-light border p-2 "
                        style={{width: "150px"}}>See All FAQ’s</button>
                  </div>
               </div>
            </div>
            <div className="col-md-7 d-flex flex-column gap-2">
             {RenderFAQ}       
            </div>  
         </div>   
        </section>
    </React.Fragment>
  )
}

export default FAQSection