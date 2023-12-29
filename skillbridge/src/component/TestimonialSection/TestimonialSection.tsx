import React from 'react'
import { Testimoniallist } from './TestimonialData'



function TestimonialSection() {


    const RenderTestimonial = Testimoniallist.map((testimonial) => {
        return (
            <div className="col-sm-6 mt-3 ">
            <div className="card border-0">
               <div className="comments card-header bg-white container">
                  <p>{testimonial.desc}</p>
               </div>
               <div
                  className="profile_container card-body d-flex justify-content-between flex-wrap gap-3">
                  <div className="profile d-flex  align-items-center gap-3">
                     <img src={testimonial.image} alt='testimonial'/>
                     <h5 className="card-title align-items-center">{testimonial.name}</h5>
                  </div>
                  <button className="btn btn-light fw-medium">Read Full Story</button>
               </div>
            </div>
         </div>
        );
    });
    return (
        <React.Fragment>
            <div className='container mt-5 mb-5'>
                <h1>Our Testimonials</h1>
                <section
                    className="testimonial_description d-flex justify-content-between row mb-5">
                    <p className="col-md-8">Lorem ipsum dolor sit amet consectetur. Tempus
                        tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim
                        lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat
                        senectus in.</p>
                    <div
                        className="col d-flex justify-content-md-end justify-content-sm-start mt-sm-2">
                        <button className="bg-white border-0 rounded p-3"><b>View All</b></button>
                    </div>
                </section>
                <div className="row">
                    {RenderTestimonial}
                </div>
            </div>
        </React.Fragment>
    )
}

export default TestimonialSection;