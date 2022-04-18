import React, { useEffect, useState } from 'react';
import googleLogo from '../../../Images/social/google-logo.png';
import githubLogo from '../../../Images/social/github-logo.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate();
    const [error, setError] = useState();

    const [signInWithGoogle, user, loading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);

    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }
    const handleGithubSignIn = () => {
        signInWithGithub();
    }

    useEffect(() => {
        if (googleError || githubError) {
            const errorMessage = <p>Error: {googleError?.message} {githubError?.message}</p>;
            setError(errorMessage);
        }
    }, [googleError, githubError]);

    if (loading || githubLoading) {
        return <Loading></Loading>;
    }
    if (user || githubUser) {
        navigate('/home');
    }

    return (
        <div className='w-75 mx-auto mb-3 mt-0'>
            <div>
                <p className='text-danger'>{error}</p>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
                <div style={{ height: '1px' }} className='w-50 bg-secondary'>
                </div>
                <p className='mx-2 pt-2'>or</p>
                <div style={{ height: '1px' }} className='w-50 bg-secondary'>
                </div>
            </div>
            <div className='w-75 mx-auto'>
                <button onClick={handleGoogleSignIn}
                    className='btn btn-light border border-secondary w-100 rounded-pill py-2 mb-3'>
                    <img width={25} className='me-1' src={googleLogo} alt="" />
                    Continue with Google
                </button>
                <br />
                <button onClick={handleGithubSignIn}
                    className='btn btn-light border border-secondary w-100 rounded-pill py-2'>
                    <img width={25} className='me-1' src={githubLogo} alt="" />
                    Continue with Github
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;