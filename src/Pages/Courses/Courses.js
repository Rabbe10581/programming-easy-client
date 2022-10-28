import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from './CourseCard';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="3">
                        {
                            courses.map(course => <p
                                key={course.id}
                            >
                                <Link
                                    to={`/details/${course.id}`}
                                    className='text-decoration-none'
                                >{course.name}</Link>
                            </p>)
                        }
                    </Col>
                    <Col lg="9">
                        <Row>
                            {
                                courses.map(course => <Col className='mb-3' key={course.id}>
                                    <CourseCard
                                        course={course}
                                    ></CourseCard>
                                </Col>)
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;