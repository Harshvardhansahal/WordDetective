import React, { useState } from 'react';
import './LoginPage.css';
import { Form, Input, Button, Typography, message } from 'antd';
import teachersData from '../teachers.json';
import studentsData from '../students.json';

function LoginPage({ setLoggedInUser }) {
    const [error, setError] = useState('');
    const onFinish = (values) => {
        const { username, password } = values;
        // Load the appropriate JSON data based on userType
        const teacher = teachersData.find(
            (teacher) => teacher.id === username && teacher.password === password
        );

        const student = studentsData.find(
            (student) => student.id === username && student.password === password
        );

        if (teacher) {
            const role = 'teacher';
            localStorage.setItem('loggedInUser', `${role}:${username}`);
            setLoggedInUser(`${role}:${username}`);
            message.success('Log In successful');
            setError('');
        } else if (student) {
            const role = 'student';
            localStorage.setItem('loggedInUser', `${role}:${username}`);
            setLoggedInUser(`${role}:${username}`);
            message.success('Log In successful');
            setError('');
        } else {
            setError('Invalid username or password');
        }
    };
    return (
        <div className="appBg">
            <Form
                name="login-form"
                className='loginForm'
                onFinish={onFinish}
                initialValues={{ remember: true }}
            >
                <Typography.Title style={{ color: 'black', fontVariantCaps: 'small-caps' }}>WordDetective</Typography.Title>
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input placeholder='Username' allowClear />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password placeholder='Password' allowClear />
                </Form.Item>
                <Form.Item>
                    <Button className='Button' type="primary" htmlType="submit">
                        Log in
                    </Button>
                </Form.Item>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </Form>

        </div>
    );
}
export default LoginPage
