import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className='text-center bg-dark text-white py-4'>
            <h6><small>Copyright © {year} Pro-Fits</small></h6>
            <h6 className='mb-0'>
                <small>Terms of use & Privacy policy</small>
            </h6>
        </div>
    );
};

export default Footer;