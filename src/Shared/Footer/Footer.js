import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer class="mt-5 pt-3 text-center">
            <div className='mb-2 fs-4'>
                <Link className='me-2' to=""><FaFacebook></FaFacebook></Link>
                <Link className='me-2' to=""><FaLinkedinIn></FaLinkedinIn></Link>
                <Link to=""><FaInstagram></FaInstagram></Link>
            </div>
            <p><small>©2023. Programming Easy. All rights reserved. Dhaka, Bangladesh.</small></p>
        </footer >
    );
};

export default Footer;