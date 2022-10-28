import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import CardGroup from 'react-bootstrap/CardGroup';

const CourseCard = ({ course }) => {
    // console.log(course);
    const { name, Image, id } = course;


    return (
        <CardGroup style={{ width: '18rem' }} className='gap-4'>
            <Card >
                <Card.Img style={{ maxHeight: "15rem" }} variant="top" src={Image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Button variant="primary"><Link className='text-decoration-none text-white' to={`/details/${id}`}>Show details</Link></Button>
                </Card.Body>
            </Card>
        </CardGroup>

    );
};

export default CourseCard;