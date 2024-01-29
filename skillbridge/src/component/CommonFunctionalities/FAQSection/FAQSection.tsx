import React, { useReducer } from 'react';
import { closeIcon, plusIcon } from '../../../assets/resource/IconResource';
import { faqForwardButton } from '../../../assets/resource/ImgResource';
import { faqList } from '../../Data/FAQData';
import './FAQSection.scss';


type ActionType =
  | { type: 'SHOW_ANSWER'; id: number }
  | { type: 'HIDE_ANSWER' }
  | { type: 'TOGGLE_VIEW_ALL' };


//state type
interface State {
  showAnswer: number | null;
  viewAll: boolean;
}

const faqReducer = (state: State, action: ActionType): State => {
  switch (action.type) {
    case 'SHOW_ANSWER':
      return { ...state, showAnswer: action.id };
    case 'HIDE_ANSWER':
      return { ...state, showAnswer: null };
    case 'TOGGLE_VIEW_ALL':
      return { ...state, viewAll: !state.viewAll };
    default:
      return state;
  }
};

const initialState: State = {
  showAnswer: null,
  viewAll: false,
};

function FAQSection() {

  const [state, dispatch] = useReducer(faqReducer, initialState);

  const FAQList = () => {
    const renderFAQs = (startIndex: number, endIndex: number) => {
      const renderedFAQs: JSX.Element[] = [];

      for (let i = startIndex; i <= endIndex; i++) {
        const faq = faqList[i];

        renderedFAQs.push(
          <div className='FAQ_container card p-1 border' key={faq.id}>
          <div className="d-flex flex-column  gap-4 rounded align-content-center p-2">
            <div className="d-flex justify-content-between  rounded align-content-center p-2 ">
              <p className="mt-2 fw-medium">{faq.question}</p>
              <button
                className='open_button border-0 bg-white'
                onClick={() =>
                  state.showAnswer === faq.id
                    ? dispatch({ type: 'HIDE_ANSWER' })
                    : dispatch({ type: 'SHOW_ANSWER', id: faq.id })
                }
              >
                <img
                  src={state.showAnswer === faq.id ? closeIcon : plusIcon}
                  className='open_close_icon w-100'
                  alt='open_close_icon'
                />
              </button>
            </div>
            {state.showAnswer === faq.id ? (
              <div className="answer_container border-top py-3">
                <p className="fw-medium px-2">{faq.answer}</p>
                <div className="bg-light d-flex justify-content-between border rounded align-content-center p-2 ">
                  <p className="mt-3 fw-medium">Enrollment Process for Different Courses</p>
                  <button className="faq_forward_button btn btn-circle">
                    <img src={faqForwardButton} alt="Forward Button" />
                  </button>
                </div>
              </div>
            ):null}
          </div>
        </div>
        );
      }

      return renderedFAQs;
    };

    return (
      <div className="d-flex flex-column gap-2">
          {renderFAQs(0, 4)}
          {state.viewAll && renderFAQs(5, faqList.length - 1)}
      </div>
    );
  };

  return (
    <React.Fragment>
      <section className="faq_section container mt-5 mb-3 bg-white rounded">
        <div className="row row-cols-1 row-cols-md-2 g-4 d-flex justify-content-between p-3">
          <div className="col-md-5">
            <div className="card border-0 p-2">
              <div className="card-body">
                <h1>Frequently Asked Questions</h1>
                <p>Still you have any questions? Contact our Team via support@skillbridge.com</p>
                <button
                  className="see_all_faq_button btn fw-bold bg-light border p-2 "
                  onClick={() => dispatch({ type: 'TOGGLE_VIEW_ALL' })}
                 
                >
                  {state.viewAll ? 'See Less' : 'See All FAQ’s'}
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-7 d-flex flex-column gap-2">
            <FAQList/>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default FAQSection;
