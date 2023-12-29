// import React from 'react'
import facebookImage from '../../assets/img/fb_icon.svg';
import twitterImage from '../../assets/img/twitter_logo.svg';
import linkedInImage from '../../assets/img/linkedin_icon.svg';
import mailImage from '../../assets/img/mail_icon.svg';
import phoneImage from '../../assets/img/phone_icon.svg';
import locationImage from '../../assets/img/location_icon.svg';

import logo from '../../assets/img/Logo.svg'
// import '../Footer/Footer.css'
import { Link } from 'react-router-dom';


function NewFooter() {
  return (
    <div className='footer mt-5  bg-white '>
      <section  className='container'>
      <div className=' d-flex row p-3'>
        <section className='AddressSection col-12 col-md-5 '>
          <div className='Logo'>
            <img src={logo} alt='logo' />
          </div>
          <div className='addressContainer d-flex flex-column mt-3'>
            <div className='mail d-flex align-items-start gap-2 '>
              <img src={mailImage} alt='logo' />
              <p className='fw-bold'>hello@skillbridge.com</p>
            </div>
            <div className='phoneNumber d-flex align-items-start gap-2'>
              <img src={phoneImage} alt='logo' />
              <p className='fw-bold'>+91 91813 23 2309</p>
            </div>
            <div className='location d-flex align-items-start  gap-2'>
              <img src={locationImage} alt='logo' />
              <p className='fw-bold'>Somewhere in the world</p>
            </div>
          </div>
        </section>
        <section className='LinksContainer col-12 col-md-7 row '>
          <div className='HomeAbout  col-12 col-md-8 row '>
            <div className='Home col-6 d-flex flex-column flex-nowrap'>
              <p className='fw-bold'>Home</p>
              <Link to='' className='text-decoration-none text-secondary'>Benefits</Link>
              <Link to='' className='text-decoration-none text-secondary'>Our Courses</Link>
              <Link to='' className='text-decoration-none text-secondary'>Our Testimonials</Link>
              <Link to='' className='text-decoration-none text-secondary'>Our FAQ</Link>
            </div>
            <div className='About col-6 d-flex flex-column flex-nowrap'>
              <p className='fw-bold'>About Us</p>
              <Link to='' className='text-decoration-none text-secondary'>Our Goals</Link>
              <Link to='' className='text-decoration-none text-secondary'>Achievements</Link>
              <Link to='' className='text-decoration-none text-secondary'>Company</Link>
            </div>
          </div>
          <div className='SocialMediaSection col-12 col-md-4'>
            <p className='fw-bold'>Social Profiles</p>
            <div className='socialMediaContainer d-flex gap-2'>
              <button className='btn bg-light'>
                <img src={facebookImage} alt='icon' />
              </button>
              <button className='btn bg-light'>
                <img src={twitterImage} alt='icon' />
              </button>
              <button className='btn bg-light'>
                <img src={linkedInImage} alt='icon' />
              </button>
            </div>
          </div>
        </section>
      </div>
      </section>
      <section className="bottom_footer border-top p-3 mt-2">
        <p className="text-center">© 2023 Skillbridge. All rights reserved.</p>
      </section>

    </div>
  )
}

export default NewFooter;