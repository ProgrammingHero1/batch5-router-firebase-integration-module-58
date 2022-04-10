import { getAuth } from 'firebase/auth';
import React from 'react';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';

const auth = getAuth(app);

const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth)
    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || '/';
    
    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then( () =>{
            navigate(from, {replace: true})
        })
    }

    return (
        <div>
            <h3>Please Login</h3>
            <div style={{margin: '20px'}}>
            <button onClick={handleGoogleSignIn}>Google Sign In</button>
            </div>
            
            <form>
                <input type="email" placeholder='Your Email' />
                <br />
                <input type="password" name="" id="" placeholder='Password'/>
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;