import "../Home/Home.scss"
import { Link } from 'react-router-dom'
import { LightiningIcon, zapier, spotify, netflix, notion, adobe, amazon, zoom } from "../../assets/resource/iconResource"
import { AbstractIcon, videoImg } from "../../assets/resource/imgResource"
import CourseSection from '../CourseSection/CourseSection'
import TestimonialSection from '../TestimonialSection/TestimonialSection'
import FAQSection from '../CommonFunctionalities/FAQSection/FAQSection'
import PricingSection from "../CommonFunctionalities/PricingSection/PricingSection"
import BenefitList from "../BenefitList/BenefitList"



function Home() {
  return (
    <div className='' id='home'>
      <section className="hero_section container 
      d-flex flex-column align-items-center justify-content-center">
        <div className="position-relative  p-4">
          <img src={AbstractIcon} alt="abstract_icon"
            className="position-absolute top-0 start-0" />
          <div
            className="hero_section_heading rounded bg-white d-flex p-2 gap-3 w-100">
            <img src={LightiningIcon} alt="lightining_icon" id="lightining_icon" />
            <h1 className="fw-medium fs-md-3 fs-sm-6 mt-md-3 mt-sm-2"><span>Unlock</span>
              Your Creative Potential</h1>
          </div>
        </div>
        <h4 className="text-wrap text-center">with Online Design and Development
          Courses.</h4>
        <p className="text-center fw-medium text-wrap">Learn from Industry Experts
          and Enhance Your Skills.</p>
        <div className="view_pricing_explore_courses d-flex gap-3">
          <a href='#courses' className="explore_courses_button rounded text-decoration-none text-white fw-medium border-0 p-2">Explore
            Courses</a>
          <a href='#pricing' className="btn view_pricing_button text-decoration-none bg-white rounded border-0 fw-medium">View
            Pricing</a>

        </div>
      </section>

      <section className="container card_section mt-5 mb-5">
        <div
          className="card_container  d-flex justify-content-lg-evenly  bg-white rounded p-md-2 p-3">
          <div className="img_container p-md-3 w-md-50  p-5">
            <Link to="#">
              <img src={zapier} alt="zapier" className="card-img" />
            </Link>
          </div>
          <div className="img_container p-md-3 w-md-50  p-5">
            <Link to="#">
              <img src={spotify} alt="spotify" className="card-img" />
            </Link>
          </div>
          <div className="img_container p-md-3 w-md-50  p-5">
            <Link to="#">
              <img src={zoom} alt="zoom" className="card-img" />
            </Link>
          </div>
          <div className="img_container p-md-3 w-md-50 p-5 ">
            <Link to="#">
              <img src={amazon} alt="amazon" className="card-img" />
            </Link>
          </div>
          <div className="img_container p-md-3 w-md-50  p-5 ">
            <Link to="#" >
              <img src={adobe} alt="adobe" className="card-img" />
            </Link>
          </div>
          <div className="img_container p-md-3 w-md-50  p-5">
            <Link to="#">
              <img src={notion} alt="notion" className="card-img" />
            </Link>
          </div>
          <div className="p-md-3 w-md-50 p-5">
            <Link to="#">
              <img src={netflix} alt="netflix" className="card-img" />
            </Link>
          </div>
        </div>
      </section>

      <section className='container'>
        <img src={videoImg} className="w-100" />
      </section>

      <div id="benefits">
        <BenefitList/>
      </div>
      <div id="courses">
        <CourseSection />
      </div>
      <div id="testimonials">
        <TestimonialSection />
      </div>
      <div id='pricing'>
        <PricingSection/>
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      
    </div>
  )
}

export default Home;