import React from 'react';
import logo from '../../../Images/pt.png'

const Display = () => {
    return (
        <div className='row p-5 my-3'>
            <div className='col-6 d-flex justify-content-center'>
                <img src={logo} alt="" />
            </div>
            <div className='col-6 my-auto'>
                <p>
                    <span className='display-1'>Most Desired</span>
                    <br />
                    <span className='display-1 border-bottom border-warning border-5'>Most Wanted</span>
                    <div className='pt-2'>
                        <span className='fs-3'>Personal Fitness Service Provider</span>
                        <br />
                        <span className='fs-3 border-bottom border-warning border-5'>in Your City.</span>
                    </div>
                </p>
            </div>
        </div>
    );
};

export default Display;