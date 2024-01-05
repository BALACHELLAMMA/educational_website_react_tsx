import { DescriptionList } from '../Description/Description';
import { locationIcon,phoneIcon, mailIcon, linkedInIcon,facebookIcon,twitterIcon } from '../../assets/resource/iconResource';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import './Contact.css';

function Contact() {
  return (
    <>
    <div>
     {DescriptionList.filter(description=>{
      return(description.title==='contact')
     }).map((description)=>{
        return(
          <section className="description_section container mt-5 mb-5 border-bottom">
          <div className="description_container row ">
            <h1 className="col-md-6 col-12">{description.heading}</h1>
            <p className="col-md-6 col-12">{description.content}</p>
          </div>
        </section>
        );
     })
     }
    </div>

     <div className='container'>
    <div className='row row-cols-2 d-flex rounded bg-white p-2'>
    <section className='form_section col-12 col-md-8  p-4'>
    <Form >
      <div className='row row-cols-md-2 '>
      <Form.Group className="mb-3" controlId="firstNameInput">
        <Form.Label className='fw-medium'>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter First Name"
        className='formInput' />
      </Form.Group>

      <Form.Group className="mb-3" controlId="lastNameInput">
        <Form.Label className='fw-medium'>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Last Name" className='formInput' />
      </Form.Group>

      <Form.Group className="mb-3" controlId="emailInput">
        <Form.Label className='fw-medium'>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter Your Email" className='formInput'  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="phoneInput">
        <Form.Label className='fw-medium'>Phone</Form.Label>
        <Form.Control type="password" placeholder="Enter Phonenumber" className='formInput'  />
      </Form.Group>
      </div>
      
      <Form.Group className="mb-3" controlId="subjectInput">
        <Form.Label className='fw-medium'>Subject</Form.Label>
        <Form.Control type="text" placeholder="Enter your Subject" className='formInput'  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className='fw-medium'>Message</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder='Enter your Message here...' 
        className='formInput'  />
      </Form.Group>
    </Form>
    <div className='d-flex justify-content-center'>
      <Button  type="submit" className='send_message_button border-0 justify-content-end text-white'>
        Send Your Message
      </Button>
    </div>
    </section>

    <section className='contact_section col-12 col-md-4 d-flex flex-column gap-3 p-lg-5 flex-wrap'>

      <div className='card p-3  gap-2 d-flex  flex-column justify-content-center align-items-center'>
        <button className='btn bg-light'>
         <img src={mailIcon} alt='email' />
        </button>
         <p>support@skillbridge.com</p>
      </div>

      <div className='card p-3  gap-2 d-flex  flex-column justify-content-center align-items-center'>
      <button className='btn bg-light'>
         <img src={phoneIcon} alt='phone'/>
        </button>
         <p>+91 00000 00000</p>
      </div>

      <div className='card p-3  gap-2 d-flex  flex-column justify-content-center align-items-center' >
         <button className='btn bg-light'>
           <img src={locationIcon} alt='location'/>
         </button>
         <p>Somewhere in the world</p>
      </div>

      <div className='card p-3  d-flex gap-2 justify-content-center align-items-center'>
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
            <p>Social Profiles</p>
      </div>

    </section>
    </div> 
    </div>
    </>
  )
}

export default Contact;
