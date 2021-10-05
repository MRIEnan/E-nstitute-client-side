import React from 'react';
import Course from '../Course/Course';

const CourseCardContainer = (props) => {
    const allCourse = (props.name)
    console.log(allCourse);
    return (
        <div className="flex flex-wrap justify-center">
            {
                allCourse.map(course => <Course key={(course.name.length*course.duration)} course={course}></Course>)
            }
        </div>
    );
};

export default CourseCardContainer;