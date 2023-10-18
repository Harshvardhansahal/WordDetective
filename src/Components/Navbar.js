import React from 'react'
import './Navbar.css'
import { UserOutlined } from '@ant-design/icons'
import { Button, Dropdown, Menu } from 'antd'
import { Link } from 'react-router-dom';
import { useState } from 'react';



function Navbar({user, setLoggedInUser }) {
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const logOut = () => {
    if (!isLoggedOut) {
      setIsLoggedOut(true);
      setLoggedInUser(null);
    }
  };

  const menu = (
    <Menu >
      <Menu.Item key="1" >
        <Link to="/" onClick={logOut}><Button type="primary" htmlType="submit">Logout</Button></Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <nav className='Navbar'>
      <div className="logo">
        <h1>WordDetective</h1>
      </div>
      <div className="user">
      <Dropdown  overlay={menu} placement="bottom">
          <Link to="#" onClick={(e) => e.preventDefault()}>
          <span style={{color:"black"}}>{user}</span> {/* Display user's name */}
            <UserOutlined className='user-icon' />
          </Link>
      </Dropdown>
      </div>
    </nav>
  );
}
export default Navbar
