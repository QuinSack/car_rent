import React, { useState, useEffect, useContext } from 'react'
import '../styles/login.css'
import { auth } from '../configs/firebase';
import {signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const {setIsAuthenticated, handleSignIn} = useContext(AuthContext);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                handleSignIn();
                navigate("/home");
                console.log(user.email);
            } else {
                setIsAuthenticated(false);
                console.log("No user is signed in at the moment");
            }
        });

        return () => unsubscribe(); // Cleanup the listener when the component unmounts
    }, []);

    const handleLogin = async (e) => {
        try{
            e.preventDefault();
            const submitLoginDetails = await signInWithEmailAndPassword(auth, email, password);
            console.log(submitLoginDetails);
            // if(auth.currentUser.email.length > 0){
            //     navigate("/home")
            // };
            console.log(auth.currentUser.email);
        }catch(err){
            console.error(err);
        }
    }
  return (
    <div className='logincontainer'>
        <form className='loginform'>
            <h3><strong>WELCOME!</strong></h3>
            <input type='email' placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type='password' placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button type='submit' style={{padding: '10px'}} onClick={(e)=>handleLogin(e)}><strong>Sign In</strong></button>
        </form>
    </div>
  )
}

export default Login