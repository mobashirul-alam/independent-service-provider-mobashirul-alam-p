import React from 'react';
import logo from '../../../Images/pt.png'
import backgroundImage from '../../../Images/banner/banner-4.jpg'

const Display = () => (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <div style={{ backgroundColor: 'rgba(0, 0, 0, .3)' }}>
            <div className='container row py-5 my-5 mx-auto'>
                <div className='col-12 col-md-6 d-flex justify-content-center'>
                    <img className='img-fluid' src={logo} alt="" />
                </div>
                <div className='col-12 col-md-6 my-auto'>
                    <p className='text-white'>
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
        </div>
    </div>
);

export default Display;