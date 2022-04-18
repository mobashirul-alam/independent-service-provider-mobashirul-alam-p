import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className='w-50 shadow mx-auto border border-primary rounded-3 my-3'>
                <h1 className='text-center my-3'>Please Login</h1>
                <Form className='w-75 mx-auto my-3'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
                <div className='w-75 mx-auto'>
                    <p>
                        New to Pro-Fit ?
                        <Link className='text-decoration-none' to="/register"> Please Register</Link>
                    </p>
                    <p>
                        Forget Password ?
                        <Link className='text-decoration-none' to="/register"> Reset Password</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;