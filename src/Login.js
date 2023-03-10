import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from "react-router-dom";
import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from './firebase';



function Login() {

    const navigate = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth,email, password).then((userCredential) => {
            const user = userCredential.user;
            navigate.push('/')
        })
        .catch(error => alert(error.message))
    }

    const register = (e) =>{
        e.preventDefault();

        createUserWithEmailAndPassword(auth,email, password).then((userCredential) => {
            const user = userCredential.user;
            navigate.push('/');
        })
        .catch(error => alert(error.message))
    };

    return (
        <div className='login'>
            <Link to='/login'>
                <img className='login-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' />

            </Link>
            <div className='login-container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='email' onChange={(e) => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' onChange={(e) => setPassword(e.target.value)} />

                    <button onClick={login} type='submit' className='login-button'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.

                </p>

                <button onClick={register} className='register-button'>Create your Amazon Account</button>
            </div>

        </div>
    )
}

export default Login