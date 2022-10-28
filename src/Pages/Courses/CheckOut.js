import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';

const CheckOut = () => {

    const checkout = useLoaderData();
    const { name, courseFee, Image } = checkout;
    console.log(checkout);

    const handleEnroll = () => {
        toast.success('Thanks for Enrolling', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }

    return (
        <Card className='w-25 mx-auto p-4'>
            <div>
                <div>
                    <h3>Want to start {name} zero to hero?</h3>
                    <Card.Img src={Image}></Card.Img>
                    <h5 className='pt-2'>Course Price: <span className='text-warning fs-2'>${courseFee}</span></h5>
                    <Button onClick={handleEnroll} className='w-100' variant="primary"><Link className='text-decoration-none text-white'>Enroll Now!!</Link></Button>

                </div>
                <ToastContainer></ToastContainer>
            </div>
        </Card>
    );
};

export default CheckOut;