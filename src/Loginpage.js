import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Loginpage.css'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from "./firebase"

function Loginpage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const signIn = e => {
        e.preventDefault()
    }

    const register = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password).then(
            (res)=>{
                console.log(res)
            }
        ).catch(
            (err)=>{
                console.log(err);
            }
        )
    }


    return (
        <div className='login'>
            <Link to='/'>
                <img className='login_logo' src='https://pngimg.com/uploads/amazon/amazon_PNG1.png' />
            </Link>

            <div className='login_container'>
                <h1>Sign-In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button onClick={signIn} className='login_signin_button'>
                        Sign-in
                    </button>
                </form>

                <p>
                    By signing-in you agree to Amazon Fake clone Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className='login_register_button' onClick={register}>Create your Amazon account</button>

            </div>

        </div>
    )
}


export default Loginpage