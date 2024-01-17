import { Link, NavLink, useLocation } from "react-router-dom";
import { useAuth } from '../../utils/AuthContext';
import logo from '../../assets/img/Logo.svg'
import hamburger from '../../assets/img/hamburger.svg'
import strokeImg from '../../assets/img/stroke.svg'

import '../../component/Header/HeaderComponent.scss'
// import { useState } from "react";

function HeaderComponent() {
    const { user, logoutUser } = useAuth();
    // const [activeButton, setActiveButton] = useState<number>(1);

    // const handleButtonClick = (buttonNumber: number) => {
    //     setActiveButton(buttonNumber);
    // };

    // const buttonClass = (buttonNumber: number) => {
    //     return `${activeButton === buttonNumber ? 'btn-orange' : 'btn-transparent'}`;
    // };

    const { pathname } = useLocation();

    const linkClassName = (path:string) => {
      return `auth-link ${pathname === path ? 'active-link' : 'inactive-link'}`;
    };


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
                                    <Link to="/home" className="nav-link">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/course" className="nav-link">Courses</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/about' className="nav-link">About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/pricing' className="nav-link">Pricing</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className="nav-link">Contact Us</Link>
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
                                <div className="d-flex gap-2">
                                    <NavLink to='/signUp' className="signupLink">
                                        Sign Up
                                    </NavLink>
                                    <Link to='/' className="loginLink">
                                        Login
                                    </Link>
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