import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';

const CourseCard = ({ course }) => {
    console.log(course);
    const { name, Image } = course;
    const navigate = useNavigate();

    const handleCourseDetail = () => {
        navigate('/courseDetails')
    }

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                {/* <Card.Text>
                    {details.slice(0, 50)}
                </Card.Text> */}
                <Button onClick={handleCourseDetail} variant="primary"><Link className='text-decoration-none text-white' to={`/courses/${course.id}`}>Go somewhere</Link></Button>
            </Card.Body>
        </Card>
    );
};

export default CourseCard;
