import React from 'react'
import './DisplayCourses.css'

const DisplayCourses = ({ courses }) => {


    return (
        <div className='Dispalay_courses'>
            {courses.map(course => (
                <div key={course.id} className="course-card">
                    <img src={course.image} alt={`${course.title} cover`} />
                    <h2>{course.title}</h2>
                    <p>{course.description}</p>
                    <p>Status: {course.status}</p>
                </div>
            ))}
        </div>
    )
}

export default DisplayCourses
