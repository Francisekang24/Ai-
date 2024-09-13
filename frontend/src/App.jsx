import React from 'react'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import User from './pages/User/User.jsx'
import Courses from './pages/Courses/Courses.jsx'
import Chats from './pages/Chats/Chats.jsx'
import Calendar from './pages/Calendar/Calendar.jsx'


const App = () => {
  return (
    <div className="app-content">
      <Sidebar />
      <Routes>
        <Route path="/user" element={<User />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </div>
  )
}

export default App
