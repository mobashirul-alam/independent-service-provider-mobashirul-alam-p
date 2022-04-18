import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className='w-50 shadow mx-auto border border-primary rounded-3 my-3'>
                <h1 className='text-center my-3'>Please Register</h1>
                <Form className='w-75 mx-auto my-3'>
                    <Form.Group className="mb-3">
                        <Form.Label>Your name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
                <p className='w-75 mx-auto'>
                    Already have an account ?
                    <Link className='text-decoration-none' to="/login"> Please Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;