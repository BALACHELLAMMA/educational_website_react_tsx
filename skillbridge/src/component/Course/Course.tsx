// import React from 'react';
import { courseList } from '../Data/CourseContent';
import { descriptionList } from '../Data/Description';

interface CourseProps {
   viewCourse: () => void; 
}

const Course: React.FC<CourseProps> = (props)=>{
 
   const renderCourseList = courseList.map((course)=>{
    return(
      <section className="course_section container bg-white  p-3 mt-3 mb-3 rounded d-flex flex-column
      gap-4" key={course.id}>
               <h1>{course.title}</h1>
         <section
            className="course_description d-flex justify-content-between row mb-2"
            key={course.title}>
            <p className="col-md-8">{course.content}</p>
            <div
               className="col d-flex justify-content-md-end justify-content-sm-start mt-sm-2">
               <button className="bg-light border-0 rounded p-3"
               onClick={props.viewCourse}><b>View Course</b></button>
            </div>
         </section>
         <section>
             <div className="d-flex row ">
              <img src={course.images[0]}
               className="col-4 "
               />  
              <img src={course.images[1]} 
               className="col-4"
               />  
              <img src={course.images[2]}
              className="col-4"
              />                 
             </div>
             <div
             className="mt-2 d-flex flex-wrap justify-content-md-between justify-content-start flex-md-row flex-column">
             <div className="duration d-flex gap-2 ">
                <span className="text-center rounded border p-2">{course.duration}</span>
                <span className="text-center rounded border p-2">{course.difficulty_level}</span>
             </div>
             <p className="fw-bold mt-2">{course.instructor}</p>
             </div>
             
             <div className="card mt-2 mb-4">
                <div className="card-header h5 bg-white">Curriculum</div>
                <div className="card-body row d-flex justify-content-evenly">
                    <div className="curriculum col-md-2 col-sm-12 p-3 text-md-center border border-top-0 border-start-0 border-bottom-0 ">
                     <h1>01</h1>
                     <p className="fw-medium">{course.topics[0]}</p> 
                    </div>
                    <div className="curriculum col-md-2 col-sm-12 p-3 text-md-center border border-top-0 border-start-0 border-bottom-0 ">
                     <h1>02</h1>
                     <p className="fw-medium">{course.topics[1]}</p> 
                    </div>
                    <div className="curriculum col-md-2 col-sm-12 p-3 text-md-center border border-top-0 border-start-0 border-bottom-0 ">
                     <h1>03</h1>
                     <p className="fw-medium">{course.topics[2]}</p> 
                    </div>
                    <div className="curriculum col-md-2 col-sm-12 p-3 text-md-center border border-top-0 border-start-0 border-bottom-0 ">
                     <h1>04</h1>
                     <p className="fw-medium">{course.topics[3]}</p> 
                    </div>
                    <div className="col-md-2 col-sm-12 p-3  text-md-center ">
                     <h1>05</h1>
                     <p className="fw-medium">{course.topics[4]}</p> 
                    </div>
                </div>
             </div>
         </section>
     </section>
    );
   });


   return (
         <div className='bg-light'>
         {descriptionList.filter(description=>{
          return(description.title==='course')
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
        
         {renderCourseList}
        </div>
  
  )
}

export default Course;
