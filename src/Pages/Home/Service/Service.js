import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const navigate = useNavigate();
    const { name, price, shortDescription, img } = service;

    const handleBookingCheckout = () => {
        navigate('/checkout')
    }

    return (
        <div className='col-12 col-md-6 col-lg-4 position-relative'>
            <Card className='shadow h-100 pb-5 rounded-pill' style={{ width: '18rem' }}>
                <div className='pb-5'>
                    <Card.Img variant="top" height={190} src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {shortDescription}
                        </Card.Text>
                        <div className='w-100 mt-5 position-absolute bottom-0 start-50 translate-middle-x'>
                            <Card.Text className='text-center mb-1 py-0 border-top border-info border-3 rounded-pill'>
                                <small>
                                    Only
                                    <span className='fs-2 fw-bolder ms-1'>${price}</span>
                                    /month
                                </small>
                            </Card.Text>
                            <Button onClick={handleBookingCheckout}
                                className='w-100 py-2 fs-5' variant="primary">Get Booking</Button>
                        </div>
                    </Card.Body>
                </div>
            </Card>
        </div>
    );
};

export default Service;