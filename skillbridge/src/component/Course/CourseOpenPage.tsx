// import React from 'react'
import { DescriptionList } from '../Description/Description';
import '../Course/Course.css'
import uiux_design from "../../assets/img/uiux_design.svg";
import clock_icon from "../../assets/img/clock_icon.svg";
import { IndividualCourseData } from './IndividualCourseData';



function CourseOpenPage() {
    return (
        <div>
            {DescriptionList.filter(description => {
                return (description.title === 'coursepage')
            }).map((description) => {
                return (
                    <section className="description_section container mt-5 mb-5 border-bottom">
                        <div className="description_container row ">
                            <h1 className="col-md-6 col-12">{description.heading}</h1>
                            <p className="col-md-6 col-12">{description.content}</p>
                        </div>
                    </section>
                );
            })
            }
            <div className='courseImageContainer container'>
                <img src={uiux_design} className='courseImage' />
            </div>


            <div className='d-flex flex-column gap-2 container mt-5 mb-5'>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {IndividualCourseData.map((course) => {
                        return (
                            <div className="col">
                                <div className="card border-0 p-2">
                                    <div className="card-body d-flex flex-column gap-2">
                                        <div className='d-flex justify-content-end'><h1>{course.id}</h1></div>
                                        <h4>{course.heading}</h4>
                                        <div className='content_container d-flex align-items-start justify-content-between border p-2 rounded'>
                                            <div>
                                                <h5>{course.content[0][0]}</h5>
                                                <p>{course.content[0][1]}</p>
                                            </div>
                                            <div className='duration_container btn bg-light border rounded d-flex align-items-start w-25 p-1'>
                                                <img src={clock_icon} className='clockIcon' />
                                            <p className='duration_text'>{course.content[0][2]}</p></div>
                                        </div>

                                        <div className='content_container d-flex align-items-start justify-content-between border p-2 rounded'>
                                            <div>
                                                <h5>{course.content[1][0]}</h5>
                                                <p>{course.content[1][1]}</p>
                                            </div>
                                            <div className='duration_container btn bg-light border rounded d-flex align-items-start w-25 p-1'>
                                                <img src={clock_icon} className='clockIcon' />
                                            <p className='duration_text'>{course.content[0][2]}</p></div>
                                        </div>

                                        <div className='content_container row d-flex align-items-start justify-content-between border p-2 rounded'>
                                            <div className='col col-7 border'>
                                                <h6>{course.content[2][0]}</h6>
                                                <p>{course.content[2][1]}</p>
                                            </div>
                                            <div className='col col-4 border duration_container btn bg-light border rounded d-flex align-items-start p-1'>
                                                <img src={clock_icon} className='clockIcon mt-2' />
                                            <p className='duration_text mt-2 '>{course.content[0][2]}</p></div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )
                    }

                    )}
                </div>
            </div>
        </div>
    )
}

export default CourseOpenPage;

{/* <div className='col card p-3'>
<div className='d-flex justify-content-end'><h1>01</h1></div>
<h4>Introduction to UI/UX Design</h4>
<div className='d-flex align-items-start justify-content-between border p-2 rounded'>
   <div>
       <h5>Introduction to uiux principle</h5>
       <p>Lesson 01</p>
   </div>
   <button className='btn btn-light'><img src={clock_icon}/>1 Hour</button>
</div>
</div>  */}