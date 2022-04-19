import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const navigate = useNavigate();
    const nameRef = useRef('');
    const emailRef = useRef('');
    const addressRef = useRef('');
    const phoneRef = useRef('');

    const handleConfirmBooking = () => {
        navigate('/checkConfirmed');
    }
    return (
        <div>
            <div className='w-50 shadow-lg mx-auto rounded-3 py-5 my-5'>
                <h1 className='text-center my-3'>Confirm your Info</h1>
                <Form onSubmit={handleConfirmBooking} className='w-75 mx-auto my-3'>
                    <Form.Group className="mb-3">
                        <Form.Control ref={nameRef} type="text" placeholder="Enter your name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control ref={emailRef} type="email" placeholder="Enter your email" required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control ref={addressRef} type="text" placeholder="Your address" required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control ref={phoneRef} type="text" placeholder="Your phone number" required />
                    </Form.Group>
                    <Button className='w-50 d-block mx-auto' variant="primary" type="submit">
                        Confirm Booking
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Checkout;