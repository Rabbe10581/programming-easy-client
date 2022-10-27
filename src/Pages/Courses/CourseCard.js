import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CourseCard = ({ course }) => {
    console.log(course);
    const { name, Image, details } = course;
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {details.slice(0, 50)}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};

export default CourseCard;
