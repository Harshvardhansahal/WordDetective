import './Components/Navbar.css';
import React, { useState } from 'react';
import LoginPage from './Components/LoginPage';
import TeacherDashboard from './Components/TeacherDashboard';
import StudentDashboard from './Components/StudentDashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar';
import { message } from 'antd'


function App() {
  const [loggedInUser, setLoggedInUser] = useState(
    localStorage.getItem('loggedInUser') // Check if the user is logged in from localStorage
  );

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser'); // Remove user from localStorage upon logout
    setLoggedInUser(null);
    message.success('LogOut successful');
  };
  return (
    <BrowserRouter>
      <div className="App">
        {loggedInUser && <Navbar user={loggedInUser} setLoggedInUser={handleLogout} />}
        {loggedInUser ? (
          loggedInUser.startsWith('teacher:') ? (
            <TeacherDashboard />
          ) : loggedInUser.startsWith('student:') ? (
            <StudentDashboard />
          ) : null
        ) : (
          <Routes>
            <Route path="/" element={<LoginPage setLoggedInUser={setLoggedInUser} userType={''} />} />
          </Routes>
        )}

      </div>
    </BrowserRouter>
  );
}
export default App;
