import React from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaUser } from "react-icons/fa";
import { Image } from 'react-bootstrap';

const Header = () => {

    const { user } = useContext(AuthContext)

    return (
        <Navbar collapseOnSelect className='mb-4' expand="lg" bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Programming Easy</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto ps-4">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/courses">Courses</Nav.Link>
                        {/* <Link href="/courses">Courses</Link> */}
                        <Nav.Link href="/faq">FAQ</Nav.Link>
                        <Nav.Link href="/blog">Blog</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">{user?.displayName}</Nav.Link>
                        <Nav.Link href="#deets">
                            {user?.photoURL ?
                                <Image style={{ height: '30px' }} roundedCircle src={user?.photoURL}></Image>
                                :
                                <FaUser></FaUser>
                            }
                        </Nav.Link>
                        <Nav.Link href="/">Login</Nav.Link>
                        <Nav.Link eventKey={2} href="/">
                            Sign-up
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;