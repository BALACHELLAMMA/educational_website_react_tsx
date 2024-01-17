import './About.scss';
import { descriptionList } from '../Data/Description';
import { aboutContentList } from '../Data/AboutContent';
import {AbstractDesign} from '../../assets/resource/imgResource'

const About = ()=> {
  const RenderAbout = aboutContentList.map((item) => {
    return (
      <section className='content mt-5 mb-5'>
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
      <div className='row row-cols-1 row-cols-md-2 g-4'>
      <div className='col'>
        <div className='card border-0 bg-white p-3 d-flex gap-2'>
          <img src={item.content[0][0]} alt=".." style={{width:"50px"}}/>
          <h6>{item.content[0][1]}</h6>
          <p>{item.content[0][2]}</p>
      </div>
      </div>
      <div className='col'>
        <div className='card border-0 bg-white p-3 d-flex gap-2'>
          <img src={item.content[1][0]} alt=".." style={{width:"50px"}}/>
          <h6>{item.content[1][1]}</h6>
          <p>{item.content[1][2]}</p>
      </div>
      </div>
      <div className='col'>
        <div className='card bg-white border-0 p-3 d-flex gap-2'>
          <img src={item.content[2][0]} alt=".." style={{width:"50px"}}/>
          <h6>{item.content[2][1]}</h6>
          <p>{item.content[2][2]}</p>
      </div>
      </div>
      <div className='col'>
        <div className='card bg-white border-0 p-3 d-flex gap-2'>
          <img src={item.content[3][0]} alt=".." style={{width:"50px"}}/>
          <h6>{item.content[3][1]}</h6>
          <p>{item.content[3][2]}</p>
      </div>
      </div>
      </div>
      </section>
    );
  })
  return (
    <div>
      {descriptionList.filter(description => {
        return (description.title === 'about')
      }).map((description) => {
        return (
          <section className="description_section container mt-5 mb-5 border-bottom ">
            <div className="description_container row ">
              <h1 className="col-md-6 col-12">{description.heading}</h1>
              <p className="col-md-6 col-12">{description.content}</p>
            </div>
          </section>
        );
      })
      }

      <section className='container bg-light'>
        <div className='d-flex flex-column gap-3'>
          {RenderAbout}
        </div>
      </section>

      <section className='container mt-5 bg-light'>
         <div className='bg-white row d-flex  rounded'>

          <div className='p-3 col-12 col-md-6'>
            <h2><span className='text-warning'>Together</span>, let's shape the future of digital innovation</h2>
            <p>Join us on this exciting learning journey and unlock your potential in design and development.</p>
          </div>

          <div className='d-flex  flex-sm-wrap-reverse flex-md-nowrap col-12 col-md-6 row'>
          <div className='border col'>
            <img src={AbstractDesign} alt='abstract_image' 
            id='abstractDesign' style={{width:"100%"}} />
          </div>
            <div className='d-flex  align-items-center justify-content-center col-md-3 col-6 order-first order-md-1 border '>
            <button className='btn bg-warning text-white ' style={{width:"100px"}}>Join Now</button>
            </div>
            </div>
         </div>
      </section>
    </div>
  )
}

export default About;
