import React, { useState, useEffect, useContext } from 'react';
import '../styles/login.css';
import { auth } from '../configs/firebase';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const { setIsAuthenticated, handleSignIn } = useContext(AuthContext);

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
        e.preventDefault();
        try {
            setLoading(true);

            const submitLoginDetails = await signInWithEmailAndPassword(auth, email, password);
            console.log(submitLoginDetails);

            console.log("Logged in user: " + auth.currentUser.email);

        } catch (error) {
            setLoading(false);

            if (error.code === 'auth/wrong-password') {
                setError("Incorrect password. Please try again.");
            } else {
                console.error(error);
                setError("An error occurred. Please try again later.");
            }
        }
    };

    return (
        <div className='logincontainer'>
            <form className='loginform'>
                <h3><strong>WELCOME!</strong></h3>
                <input type='email' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <div style={{ position: 'relative' }}>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder='Enter your password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <i
                        onClick={() => setShowPassword(!showPassword)}
                        style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
                    >
                        {showPassword ? '👁️' : '👁️‍🗨️'}
                    </i>
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type='submit' style={{ padding: '5px', width: '30%', borderRadius: '20px' }} onClick={(e) => handleLogin(e)}><strong>Sign In</strong></button>
                {loading && <p>Signing you in...</p>}
            </form>
        </div>
    );
};

export default Login;
