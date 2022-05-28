import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {  useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Login.css'
import SocialLogin from '../SocialLogin/SocialLogin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Shared/Loading/Loading';


const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
      );


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();


    const from = location.state?.from?.pathname || "/";
    let errorElement;

    //Spinner
    if(loading || sending){
        return <Loading></Loading>
    }

    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
        
    }


   if(user){
    navigate(from, { replace: true });
   }

   //Reset Password
   const resetPassword = async() =>{
    if(email){
       await sendPasswordResetEmail(email);
       toast('Send email');
    }
    else{
        toast('Enter your email address');
    }
}

if (error) {
    errorElement = <p className='text-danger'>Error: {error?.message}</p>
}


    const handleUserLogin = event =>{
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    } 

    return (
        <div className='w-50 mx-auto'>
             <Form onSubmit={handleUserLogin}>
                 <Form.Group className="mb-3" controlId="formBasicEmail">
                     <Form.Label>Email address</Form.Label>
                     <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
                 </Form.Group>

                 <Form.Group className="mb-3" controlId="formBasicPassword">
                     <Form.Label>Password</Form.Label>
                     <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
                 </Form.Group>

                <div className='d-flex justify-content-between'>
                <p><FontAwesomeIcon icon={faCheckSquare}></FontAwesomeIcon> Remember</p>
                 <Button className='text-dark' variant="link" onClick={resetPassword}>Forgot Password?</Button>
                </div>
                 
                 <Button className='w-100' variant="primary" type="submit">
                     Login
                 </Button>
             </Form>
             {errorElement}
               <p>
                   New to X-Autos? <Link to='/signup' className='text-decoration-none'>Create an account</Link>
               </p>
               <SocialLogin></SocialLogin>
               <ToastContainer/>
        </div>
    );
};


export default Login;