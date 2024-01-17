// import '../Footer/Footer.scss'
import {mailIcon, locationIcon , phoneIcon, facebookIcon, twitterIcon, linkedInIcon} from '../../assets/resource/iconResource';
import { logo } from '../../assets/resource/imgResource';
import { Link } from 'react-router-dom';



function Footer() {
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
              <img src={mailIcon} alt='logo' />
              <p className='fw-bold'>hello@skillbridge.com</p>
            </div>
            <div className='phoneNumber d-flex align-items-start gap-2'>
              <img src={phoneIcon} alt='logo' />
              <p className='fw-bold'>+91 91813 23 2309</p>
            </div>
            <div className='location d-flex align-items-start  gap-2'>
              <img src={locationIcon} alt='logo' />
              <p className='fw-bold'>Somewhere in the world</p>
            </div>
          </div>
        </section>
        <section className='LinksContainer col-12 col-md-7 row '>
          <div className='HomeAbout  col-12 col-md-8 row '>
            <div className='Home col-6 d-flex flex-column flex-nowrap'>
              <Link to='/home' className='fw-bold text-black text-decoration-none'>Home</Link>
              <Link to='/home#benefits' className='text-decoration-none text-secondary'>Benefits</Link>
              <a href='/home#courses' className='text-decoration-none text-secondary'>Our Courses</a>
              <a href='/home#testimonials' className='text-decoration-none text-secondary'>Our Testimonials</a>
              <a href='/home#faq' className='text-decoration-none text-secondary'>Our FAQ</a>
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
                <img src={facebookIcon} alt='icon' />
              </button>
              <button className='btn bg-light'>
                <img src={twitterIcon} alt='icon' />
              </button>
              <button className='btn bg-light'>
                <img src={linkedInIcon} alt='icon' />
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

export default Footer;