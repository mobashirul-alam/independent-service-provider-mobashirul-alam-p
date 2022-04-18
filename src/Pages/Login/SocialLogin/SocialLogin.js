import React from 'react';
import googleLogo from '../../../Images/social/google-logo.png';
import githubLogo from '../../../Images/social/github-logo.png';

const SocialLogin = () => {
    return (
        <div className='w-75 mx-auto mb-3 mt-0'>
            <div className='d-flex justify-content-center align-items-center'>
                <div style={{ height: '1px' }} className='w-50 bg-secondary'>
                </div>
                <p className='mx-2 pt-2'>or</p>
                <div style={{ height: '1px' }} className='w-50 bg-secondary'>
                </div>
            </div>
            <div className='w-75 mx-auto'>
                <button className='btn btn-light border border-secondary w-100 rounded-pill py-2 mb-3'>
                    <img width={25} className='me-1' src={googleLogo} alt="" />
                    Continue with Google
                </button>
                <br />
                <button className='btn btn-light border border-secondary w-100 rounded-pill py-2'>
                    <img width={25} className='me-1' src={githubLogo} alt="" />
                    Continue with Github
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;