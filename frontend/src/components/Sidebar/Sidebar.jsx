import React from 'react'
import { NavLink } from 'react-router-dom'
import assets from '../../assets/assets'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="logo">
                <img src={assets.logo} alt="" />
            </div>
            <div className="sidebar-options">
                <NavLink to='/user' className="sidebar-option">
                    <img src={assets.user} alt="" />
                    <p>User</p>
                </NavLink>
                <NavLink to='/' className="sidebar-option">
                    <img src={assets.dashboard_icon} alt="" />
                    <p>Dashboard</p>
                </NavLink>
                <NavLink to='/courses' className="sidebar-option">
                    <img src={assets.courses_icon} alt="" />
                    <p>Courses</p>
                </NavLink>
                <NavLink to='/chats' className="sidebar-option">
                    <img src={assets.chat_icon} alt="" />
                    <p>Chats</p>
                </NavLink>
                <NavLink to='/calendar' className="sidebar-option">
                    <img src={assets.calendar_icon} alt="" />
                    <p>Calendar</p>
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar
