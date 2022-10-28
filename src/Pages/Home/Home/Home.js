import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Home = () => {

    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div className='w-50 ms-lg-4 rounded-4'>
                <img className='' src="https://i.scdn.co/image/ab67616d0000b273b739f84fcfa450046ae38dd7" alt="" />
            </div>
            <div className='w-50 me-lg-4'>
                <h2>“Success usually comes to those who are too busy looking for it.” — Henry David Thoreau</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus corporis vitae voluptas! At similique quaerat voluptatum dolorem est! Ipsam, option.</p>
                <Button><Link className='text-decoration-none text-white' to="/courses">Get Started</Link ></Button>
            </div>
        </div>
    );
};

export default Home;