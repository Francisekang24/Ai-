import React from 'react'
import { useState } from 'react'
import './Dashboard.css'
import assets from '../../assets/assets'
import coursesData from '../../assets/courses_images/data_courses'
import DisplayCourses from '../../components/DisplayCourses/DisplayCourses.jsx'

const Dashboard = () => {

    const [showAll, setShowAll] = useState(false);

    // Filter courses based on the showAll state
    const filteredCourses = showAll
        ? coursesData
        : coursesData.filter(course => course.status === 'current');

    // Toggle the showAll state
    const handleFilterToggle = () => {
        setShowAll(prevState => !prevState);
    };

    console.log(filteredCourses);
    


    return (
        <div className='dashboard'>
            <div className="dashboard_main">
                <div className="dashboard_header">
                    <h1>Dashborad</h1>
                    <button onClick={handleFilterToggle}>
                        {showAll ? 'Show Current Courses' : 'Show All Courses'}
                        <img src={assets.more_icon} alt="" />
                    </button>
                    <div className="dashboard_more_menu"></div>
                </div>
                <hr />
                <div className="dashboard_content">
                    <DisplayCourses courses={filteredCourses} />
                </div>
            </div>
            <div className="dashboard_todo">
                <div className="todo_header">
                    <h2>Todo</h2>
                    <hr />
                </div>
                <div className="todo_content"></div>
            </div>

        </div>
    )
}

export default Dashboard
