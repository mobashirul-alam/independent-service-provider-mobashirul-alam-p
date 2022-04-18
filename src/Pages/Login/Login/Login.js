import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const navigate = useNavigate();
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    if (loading) {
        return <p className='text-center display-1'>Loading...</p>
    }
    if (user) {
        navigate('/home')
    }


    return (
        <div>
            <div className='w-50 shadow-lg mx-auto py-2 rounded-3 my-3'>
                <h1 className='text-center my-3'>Please Login</h1>
                <Form onSubmit={handleLogin} className='w-75 mx-auto my-3'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" />
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
                    <p className='mb-0'>
                        Forget Password ?
                        <Link className='text-decoration-none' to="/register"> Reset Password</Link>
                    </p>
                </div>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;