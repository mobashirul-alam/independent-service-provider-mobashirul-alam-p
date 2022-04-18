import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { async } from '@firebase/util';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const navigate = useNavigate();
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [errorMessage, setErrorMessage] = useState('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const handleRegister = async (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        // alert('Updated profile');
    }

    if (loading || updating) {
        return <Loading></Loading>;
    }
    if (user) {
        navigate('/home');
    }

    if (error || updateError) {
        const errMessage = error?.message || updateError?.message;
        setErrorMessage(errMessage);
    }

    return (
        <div>
            <div className='w-50 shadow-lg mx-auto rounded-3 py-2 my-3'>
                <h1 className='text-center my-3'>Please Register</h1>
                <Form onSubmit={handleRegister} className='w-75 mx-auto my-3'>
                    <Form.Group className="mb-3">
                        <Form.Label>Your name</Form.Label>
                        <Form.Control ref={nameRef} type="text" placeholder="Enter your name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button className='w-50 d-block mx-auto' variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
                <p className='text-danger'>{errorMessage}</p>
                <p className='w-75 mx-auto mb-0'>
                    Already have an account ?
                    <Link className='text-decoration-none' to="/login"> Please Login</Link>
                </p>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;