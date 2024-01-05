// import React from 'react'
import '../SignUp/SignUp.css'
import {SarahImg, forwardArrow, backwardArrow, googleLogo,loginArrow} from '../../assets/resource/imgResource'

function SignUp() {
    return (
        <div className='bg-light '>
        <div className='hero_section container bg-light mb-5'>
        <div className='main_container modal-body row d-flex justify-content-between'>
            <section className="col-md-6 d-flex flex-column">
                <div className="testimonial_description p-3">
                    <span className="h1">Students Testimonials</span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Tempus
                        tincidunt etiam eget elit id imperdiet et. Cras eu
                        sit dignissim lorem nibh et. Ac cum eget habitasse
                        in velit fringilla feugiat senectus in.
                    </p>
                </div>
                <div className="comments_container bg-white">
                    <p className="p-4">The web design course provided a solid
                        foundation for me. The instructors were
                        knowledgeable and
                        supportive, and the interactive learning environment
                        was engaging. I highly recommend it!</p>
                    <div className="profile_container border-top p-4 
                      d-flex justify-content-between ">
                        <div
                            className="profile  d-flex gap-3 align-items-center">
                            <img src={SarahImg} alt="avatar" />
                            <p className="mt-3">Sarah L</p>
                        </div>
                        <button
                            className="read_more_button rounded  border-0 fw-medium p-3">Read
                            Full Story</button>
                    </div>
                </div>
                <div className="button_container align-self-end mt-3">
                    <button className="bg-white rounded border-0 p-3 "><img
                        src={backwardArrow} /></button>
                    <button className="bg-white rounded border-0 p-3 ms-2"><img
                        src={forwardArrow} /></button>
                </div>
            </section>
            <form
                className=" col-md-5 border order-first order-md-1 bg-white d-flex flex-column gap-3 p-4 rounded">
                <span className="h3 text-center"><b>Sign Up</b></span>
                <p className="create_account text-center">
                    Create an account to unlock exclusive features.
                </p>
                <div className="form-group">
                    <label htmlFor="exampleInputName"><b>Name</b> </label>
                    <input type="text" className="form-control p-3"
                        id="exampleInputName" aria-describedby="emailHelp"
                        placeholder="Enter name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail"><b>Email</b> </label>
                    <input type="email" className="form-control p-3"
                        id="exampleInputEmail" aria-describedby="emailHelp"
                        placeholder="Enter email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword"><b>Password</b></label>
                    <input type="password" className="form-control p-3"
                        id="exampleInputPassword" placeholder="Password" required />
                </div>
                <div className="form-group d-flex gap-2">
                    <input type="checkbox" />
                    <label>I agree with <a href="#" className="terms_of_use ">Terms of Use </a>and <a href="#" className="privacy_policy"> Privacy Policy</a></label>
                </div>
                <button type="submit"
                    className="sign_up_submit_button border-0 rounded w-100 text-white mb-2 p-3">Sign Up</button>
                <div className="border-0 border-bottom pb-3 text-center position-relative">
                    <span className="position-absolute top-100 translate-middle bg-white p-2">Or</span>
                </div>
                <button type="submit"
                    className="google_sign_up_button border-0 rounded w-100 mt-2 p-3"><img
                        src={googleLogo} className="pe-3" />Sign Up with Google</button>
                <div className="form-link">
                    <p className="text-center">Already have an account?
                        <a href="index.html" className="text-black"> Login
                            <img src={loginArrow} alt="login" />
                        </a>
                    </p>
                </div>
            </form>
        </div>
        </div>
        </div>
    )
}

export default SignUp