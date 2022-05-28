import React from 'react';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import google from '../../image/sociallogin/google.png'
import Loading from '../Shared/Loading/Loading';

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if(user){
        navigate('/home')
    }

    if(loading){
        return <Loading></Loading>
    }
    return (
        <div className='mb-5'>
            <div className='d-flex align-items-center '>
                   <div style={{height: '1px'}} className='bg-primary w-50'></div>
                   <div className='px-2'>or</div>
                   <div style={{height: '1px'}} className='bg-primary w-50'></div>
               </div>
               <div>
                   <button className='google-btn w-50 d-block mx-auto' onClick={ () =>signInWithGoogle()}>
                <img className='px-2' src={google} alt=''/>
                       <span>Google Sign In</span>
                   </button>
               </div>
        </div>
    );
};

export default SocialLogin;