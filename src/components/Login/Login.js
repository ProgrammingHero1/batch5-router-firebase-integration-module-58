import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {singInWithGoogle} = useFirebase();
    return (
        <div>
            <h3>Please Login</h3>
            <div style={{margin: '20px'}}>
            <button onClick={singInWithGoogle}>Google Sign In</button>
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