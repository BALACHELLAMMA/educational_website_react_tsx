import React from 'react';
import { Link} from "react-router-dom";
import { useAuth } from '../../utils/AuthContext';
import logo from '../../assets/img/Logo.svg'
import hamburger from '../../assets/img/hamburger.svg'
import strokeImg from '../../assets/img/stroke.svg'

import '../../component/Header/HeaderComponent.scss'

function HeaderComponent() {
    // const navigate = useNavigate()
    const {user, logoutUser} = useAuth()

    // const logoutClick = () => {
    //     navigate('/')
    // }
    return (
            <div className='header bg-light'>
                <p className="topBanner font-weight-bold text-center text-white p-3">Free Courses 🌟 Sale
                    Ends Soon, Get It Now
                    <img src={strokeImg} />
                </p>
                <div className='bg-light'>
                <nav className="navbar container  navbar-expand-lg ">
                    <img className="navbar-brand" src={logo}
                        alt="Skill bridge" />

                    <div className="offcanvas offcanvas-end"
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title"
                                id="offcanvasNavbarLabel">
                                <img className="navbar-brand" src={logo}
                                    alt="Skill bridge" />
                                Skill bridge</h5>
                            <button type="button" className="btn-close"
                                data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul
                                className="navbar-nav justify-content-start flex-grow-3 pe-3">
                                <li className="nav-item">
                                    <Link to="/Home" className="nav-link">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Course" className="nav-link">Courses</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/About' className="nav-link">About Us</Link>
                                </li>
                                <li className="nav-item">
                                <Link to='/Pricing' className="nav-link">Pricing</Link>
                                </li>
                                <li className="nav-item">
                                <Link to="/Contact" className="nav-link">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="login_signup_toggle_container d-flex gap-2">
                    {user ? (
                            <button onClick={logoutUser} className='logout_button  rounded border-0 text-white'>Logout</button>
                        )
                        :
                        (
                         <div>
                             <Link to='/signup' className="sign_up_button bg-light rounded border-0 p-2 text-decoration-none text-black">Sign up</Link>
                             <Link to='/' className="login_button rounded border-0   text-white p-2 text-decoration-none">Login</Link>
                         </div>
                             )}

                        <button className="navbar-toggler border-0 shadow-none" type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasNavbar"
                            aria-controls="offcanvasNavbar"
                            aria-label="Toggle navigation">
                            <img src={hamburger} />
                        </button>
                    </div>
                </nav>    
                </div>
            </div>

    )
}

export default HeaderComponent