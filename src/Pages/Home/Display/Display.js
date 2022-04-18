import React from 'react';
import logo from '../../../Images/pt.png'

const Display = () => {
    return (
        <div className='row'>
            <div className='col-6'>
                <img src={logo} alt="" />
            </div>
            <div className='col-6'>
                <p>Most Wanted & Desired Personal Fitness Service Provider in your city.</p>
            </div>
        </div>
    );
};

export default Display;