import React from 'react'
import './Navbar.css'
import { UserOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { Link } from 'react-router-dom';
import { useState } from 'react';


function Navbar({ setLoggedInUser }) {
  // console.log('setLoggedInUser prop in Navbar:', setLoggedInUser);
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const logOut = () => {
    if (!isLoggedOut) {
      // message.success('LogOut successful');
      setIsLoggedOut(true);
      setLoggedInUser(null);
    }
  };

  return (
    <nav className='Navbar'>
      <div className="logo">
        <h1>WordDetective</h1>
      </div>
      <div className="user">
        <UserOutlined className='user-icon' />
        <Link to="/">
          <Button type='primary' htmlType='submit' onClick={logOut}>
            Logout
          </Button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar
