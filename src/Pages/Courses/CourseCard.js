import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    // console.log(course);
    const { name, Image, id } = course;


    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Button variant="primary"><Link className='text-decoration-none text-white' to={`/details/${id}`}>Go somewhere</Link></Button>
            </Card.Body>
        </Card>
    );
};

export default CourseCard;
