import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {

    const data = useLoaderData();
    // console.log(data);
    const { name, Image, details, ques } = data;

    return (
        <Card className='w-50 mx-auto'>
            <Card.Header className='text-center'>{ques}</Card.Header>
            <Card.Img variant="top" src={Image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <div className='d-flex justify-content-evenly'>
                    <Button variant="primary">
                        <Link className='text-decoration-none text-white' to={`/checkout/${data.id}`}>
                            Get premium access
                        </Link>
                    </Button>
                    <Button variant="primary">Download PDF Now</Button>
                </div>
            </Card.Body>

        </Card >
    );
};

export default CourseDetails;