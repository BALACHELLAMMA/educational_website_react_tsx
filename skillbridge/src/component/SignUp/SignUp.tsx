import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../utils/AuthContext'
import '../SignUp/SignUp.css'


import sarahImg from '../../assets/img/Sarah L.svg'
import backwardArrow from '../../assets/img/backward_arrow.svg'
import forwardArrow from '../../assets/img/forward_arrow.svg'
import loginArrow from '../../assets/img/login_arrow.svg'
import googleLogo from '../../assets/img/google_logo.svg'




function SignUp() {
    const {registerUser} = useAuth()
    const registerForm = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
    
        const name = registerForm.current.name.value
        const email = registerForm.current.email.value
        const password = registerForm.current.password.value
        // const password2 = registerForm.current.password2.value
    
        // if(password1 !== password2){
        //     alert('Passwords did not match!')
        //     return 
        // }
        
        const userInfo = {name, email, password}
    
        registerUser(userInfo)
    }
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
                            <img src={sarahImg} alt="avatar" />
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
            <form ref={registerForm} onSubmit={handleSubmit}
                className=" col-md-5 border order-first order-md-1 bg-white d-flex flex-column gap-3 p-4 rounded">
                <span className="h3 text-center"><b>Sign Up</b></span>
                <p className="create_account text-center">
                    Create an account to unlock exclusive features.
                </p>
                <div className="form-group">
                    <label for="exampleInputName"><b>Name</b> </label>
                    <input type="text" className="form-control p-3" name="name"
                        id="exampleInputName" aria-describedby="emailHelp"
                        placeholder="Enter name" required />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail"><b>Email</b> </label>
                    <input type="email" className="form-control p-3" name="email"
                        id="exampleInputEmail" aria-describedby="emailHelp"
                        placeholder="Enter email" required />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword"><b>Password</b></label>
                    <input type="password" className="form-control p-3" name="password"
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
                        <Link to="/" className="text-black"> Login
                            <img src={loginArrow} alt="login" />
                        </Link>
                    </p>
                </div>
            </form>
        </div>
        </div>
        </div>
    )
}

export default SignUp