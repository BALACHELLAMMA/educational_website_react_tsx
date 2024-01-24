import { courselist } from '../Data/CourseData'
import useToggleState from '../CommonFunctionalities/CustomHook/useToggleState';
import { Link, useNavigate } from 'react-router-dom';

function CourseSection() :JSX.Element{

    const [viewAll, setViewAll] = useToggleState(false);
    const navigate = useNavigate();
    const handleGetItNow = (courseId: number) => {
        navigate('/course', { state: { courseId } });
      };

    const renderCourse = courselist.map((course) => {
        return (
            <div className="col" key={course.id}>
                <div className="card border-0 p-2">
                    <div className="card-body d-flex flex-column gap-2">
                        <img src={course.image}
                            className="card-img-top" alt="web_design_fundamentals" />
                        <div
                            className="mt-2 d-flex justify-content-center flex-wrap justify-content-sm-between">
                            <div className="duration d-flex gap-2">
                                <span className="text-center rounded border p-2">{course.weeks}</span>
                                <span className="text-center rounded border p-2">{course.difficulty_level}</span>
                            </div>
                            <p className="fw-bold mt-2 text-center">{course.instructor}</p>
                        </div>
                        <h5 className="card-title">{course.title}</h5>
                        <p className="card-text">{course.desc}</p>
                        <Link to='/course' className="get_it_now btn btn-light  w-100 fw-bold text-decoration-none"
                          onClick={() => handleGetItNow(course.id)}>Get it now</Link>
                    </div>
                </div>
            </div>
        );
    });
    return (
        <>
            <div className='container mt-5 mb-5'>
                <h1>Our Courses</h1>
                <section
                    className="course_description d-flex justify-content-between row mb-5">
                    <p className="col-md-8">Lorem ipsum dolor sit amet consectetur. Tempus
                        tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim
                        lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat
                        senectus in.</p>
                    <div
                        className="col d-flex justify-content-md-end justify-content-sm-start mt-sm-2">
                         <button className="bg-white border-0 rounded p-3" onClick={setViewAll}>{viewAll ? 'View Less':'View All'}</button>
                    </div>
                </section>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {renderCourse}
                    {viewAll ? renderCourse : null}
                </div>
            </div>
        </>
    )
}

export default CourseSection;