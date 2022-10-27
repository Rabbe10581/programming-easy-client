import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Login from '../../Login/Login/Login';

const Home = () => {

    const { googleProviderLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        googleProviderLogin(googleProvider)
            .then(res => {
                const user = res.user;
                // console.log(user);
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='d-flex align-items-center text-center'>
            <div className='w-50'>
                <img className='w-100 mt-4' src="https://www.medialabz.ca/wp-content/uploads/2019/04/Web-Design-Calgary.png" alt="" />
            </div>
            <div className='w-50'>
                <Login></Login>
                <ButtonGroup vertical>
                    <Button onClick={handleGoogleSignIn} className='mb-2' variant='outline-primary'><FaGoogle />Login with Google</Button>
                    <Button variant='outline-dark'><FaGithub />Login with Github</Button>
                </ButtonGroup>
            </div>
        </div>
    );
};

export default Home;