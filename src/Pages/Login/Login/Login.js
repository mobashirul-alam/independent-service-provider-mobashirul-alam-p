import React, { useEffect, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const navigate = useNavigate();
    const [err, setErr] = useState();
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, updateError] = useSendPasswordResetEmail(auth);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const handlePasswordReset = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Check your gmail inbox');
        }
        else (
            toast('Please enter your email')
        )
    }

    useEffect(() => {
        if (error || updateError) {
            const errorMessage = <p>Error: {error?.message} {updateError?.message}</p>;
            setErr(errorMessage);
        }
    }, [error, updateError]);

    if (loading) {
        return <Loading></Loading>;
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
                    <Button className='w-50 d-block mx-auto' variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
                <div className='w-75 mx-auto'>
                    <p className='text-danger'>{err}</p>
                    <p>
                        New to Pro-Fit ?
                        <Link className='text-decoration-none' to="/register"> Please Register</Link>
                    </p>
                    <p className='mb-0'>
                        Forget Password ?
                        <button onClick={handlePasswordReset}
                            className='btn btn-link text-decoration-none p-0'> Reset Password</button>
                    </p>
                </div>
                <SocialLogin></SocialLogin>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;