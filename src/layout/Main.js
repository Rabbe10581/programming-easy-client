import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="3">
                        <h2>Side Nav</h2>
                    </Col>
                    <Col lg="9">
                        <Outlet></Outlet>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default Main;