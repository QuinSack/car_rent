import React, { useState } from 'react'
import '../styles/signup.css'
import { auth } from '../configs/firebase';
import {createUserWithEmailAndPassword, signOut} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const currentUser = auth.currentUser;

    const handleSignup = async (e) => {
      try{
        e.preventDefault();
        const submitDetails = await createUserWithEmailAndPassword(auth, email, password);
        console.log(submitDetails);
        setEmail("");
        setPassword("");
        navigate("/home");
      }catch(err){
        console.error(err)
      }
    }

    const handleSignout = async (e) => {
      try{
        e.preventDefault();
        const signUserOut = await signOut(auth);
        console.log(signUserOut);
      }catch(err){
        console.error(err);
      }
    }

    console.log(currentUser);

  return (
    <div className='signupcontainer'>
        <form className='signupcontent'>
            <h3><strong>Create An Account</strong></h3>
            <h5>Create an account to enjoy all the services</h5>
            <h5>without any ads for free</h5>
            <section className='signupinput'>
                <input type='email' placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </section>
            <button onClick={(e)=>handleSignup(e)}><strong>Create Account</strong></button>
        </form>
        <button type='submit' onClick={(e)=>handleSignout(e)}>Sign Out</button>
    </div>
  )
}

export default SignUp