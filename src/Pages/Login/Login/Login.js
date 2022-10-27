import React from 'react';
import { useContext } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {

    const { signIn, googleProviderLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        googleProviderLogin(googleProvider)
            .then(res => {
                const user = res.user;
                // console.log(user);
            })
            .catch(error => console.error(error))
    }


    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate('/courses')
            })
            .catch(e => console.error(e))

    }


    return (
        <Form onSubmit={handleSubmit} className='w-50 mx-auto'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
            <Form.Text className="text-danger">

            </Form.Text>
            <Button variant="primary" type="submit">
                Login
            </Button>
            <br />
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className='mb-2' variant='outline-primary'><FaGoogle />Login with Google</Button>
                <Button variant='outline-dark'><FaGithub />Login with Github</Button>
            </ButtonGroup>
        </Form>
    );
};

export default Login;