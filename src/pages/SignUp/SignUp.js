import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError]= useState()
  const navigate = useNavigate();
  const [agree, setAgree] = useState(false);


  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    
  ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

  const handleNameBlur = event =>{
    setName(event.target.value)
  }

  const handleEmailBlur=event =>{
    setEmail(event.target.value)
  }

  const handlePasswordBlur=event =>{
    setPassword(event.target.value)
  } 

  const handleConfirmPasswordBlur=event =>{
    setConfirmPassword(event.target.value)
  }


  // if(password.length <6){
  //   alert('Password should be 6 character or logner');
  // }

  if(user){
    navigate('/home');
  }

  if(loading){
    return <Loading></Loading>
}

  const handleUserSignUp = event =>{
    event.preventDefault();

    if(password !== confirmPassword){
      setError('Your password did not matched');
      return;
    }

    if(password.length<6){
      setError('Password must be 6 characters or longer');
      return;
    }
    
    createUserWithEmailAndPassword(email, password);
  }
    return (
        <div className='w-50 mx-auto'> 
            <Form onSubmit={handleUserSignUp}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control onBlur={handleNameBlur} type="text" placeholder="Enter name" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control onBlur={handleConfirmPasswordBlur} type="password" placeholder="Confirm Password" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check className={`ps-2 ${agree? '' : 'text-danger'}`} onClick={() =>setAgree(!agree)} type="checkbox" label="Accept X-Autos Terms and Conditions" />
  </Form.Group>
  <p style={{color:'red'}}>{error}</p>
  <Button disabled={!agree} className='w-100' variant="primary" type="submit" value='SignUp'>
    Sign Up
  </Button>
</Form>
    <p>
          Already have an account? <Link to='/login' className='text-decoration-none'>Login</Link>
    </p>
<SocialLogin></SocialLogin>
        </div>
    );
};

export default SignUp;