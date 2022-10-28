import React from 'react';
import { useContext } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { GoogleAuthProvider } from 'firebase/auth';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

const Login = () => {
    // const [user, setUser] = useState({})
    const [error, setError] = useState('');
    const { signIn, googleProviderLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

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
                setError('');
                navigate(from, { replace: true });
            })
            .catch(e => {
                console.error(e)
                setError(e.message);
            })

    }

    const handleGoogleSignIn = () => {
        googleProviderLogin(googleProvider)
            .then(res => {
                const user = res.user;
                // setUser(user);
                console.log(user);
            })
            .catch(error => console.error(error))
    }


    return (
        <Card className='w-50 mx-auto mt-lg-5 p-4 bg-info'>
            <Form onSubmit={handleSubmit} className='w-100'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="name@example.com" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
                <Button className='w-100' variant="success" type="submit">
                    Login
                </Button>
                <br />
                <ButtonGroup className='mt-4 w-100' vertical>
                    <Button onClick={handleGoogleSignIn} className='mb-2' variant='outline-primary'><FaGoogle />Login with Google</Button>
                    <Button variant='outline-dark'><FaGithub />Login with Github</Button>
                </ButtonGroup>
            </Form>
        </Card>
    );
};

export default Login;