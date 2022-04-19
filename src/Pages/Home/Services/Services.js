import React from 'react';
import useGetServiceData from '../../../CustomHooks/useGetServiceData/useGetServiceData';
import Service from '../Service/Service';

const Services = () => {
    const [services] = useGetServiceData();

    return (
        <div id='services' className='container'>
            <h1 className='text-center display-3 mb-5'>I PROVIDE</h1>
            <div className='row g-5 mb-5'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;