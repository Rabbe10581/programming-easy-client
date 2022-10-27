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
                                    to={`/courses/${course.id}`}
                                    className='text-decoration-none'
                                >{course.name}</Link>
                            </p>)
                        }
                    </Col>
                    <Col lg="9">
                        {
                            courses.map(course => <CourseCard
                                key={course.id}
                                course={course}
                            ></CourseCard>)
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;