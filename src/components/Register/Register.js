import React from 'react';

const Register = () => {
    return (
        <div>
            <h3>Please Register now</h3>
            <form>
                <input type="text" placeholder='Your name'/>
                <br />
                <input type="email" placeholder='Your Email' />
                <br />
                <input type="password" name="" id="" placeholder='Password'/>
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;