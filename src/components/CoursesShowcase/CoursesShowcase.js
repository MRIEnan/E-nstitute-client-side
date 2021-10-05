import React from 'react';
import useCourses from '../../Utilities/MyCourses';
import CourseCard from '../CourseCardContainer/CourseCardContainer';

const CoursesShowcase = () => {
    const [courses,setCourses] = useCourses();
    const {mixed} = courses;
    console.log(courses);
    console.log('courses');
    if(courses.length<=0){
        return(
            <div>
            </div>
        )
    }
    return (
        <div>
            <div className="">
                <div className="flex justify-center">
                    <h2 style={{fontSize: '30px'}} className="mt-1 rounded p-4 bg-my-dark-one text-white inline-block font-bold ">Our Courses</h2>
                </div>
                <div>
                    <CourseCard name={mixed}></CourseCard>
                </div>
            </div>
        </div>
    );
};

export default CoursesShowcase;