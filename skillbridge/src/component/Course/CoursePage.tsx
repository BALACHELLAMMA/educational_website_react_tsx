import  { useState } from 'react';
import Course from './Course';
import CourseOpenPage from './CourseOpenPage';


type CourseState = 'courses' | 'coursePage';

function CourseContent() {
    const [course, setCourse] = useState<CourseState>('courses');

    return (
        <div>
            {course === 'courses' ? (
                <Course viewCourse={() => setCourse('coursePage')} />
            ):(<CourseOpenPage/>)}

            {/* {course === 'coursePage' && <CourseOpenPage />} */}
        </div>
    );
}

export default CourseContent;
