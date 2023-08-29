import React, { useState } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import CarListing from '../pages/CarListing';
import CarDetails from '../pages/CarDetails';
import Comment from '../pages/Comment';
import CommentDetails from '../pages/CommentDetails';
import NotFound from '../pages/NotFound';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import { AuthContext } from '../context/AuthContext';

const Routers = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignIn = () => {
    setIsAuthenticated(true);
  }

  return (
    <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated, handleSignIn}}>
      <Routes>
          <Route path='/' element={<Navigate to ='/home' />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/cars' element={isAuthenticated ? <CarListing /> : <Navigate to="/login" />} />
          <Route path='/cardetails' element={isAuthenticated ? <CarDetails /> : <Navigate to="/login" />} />
          <Route path='/comments' element={isAuthenticated ? <Comment /> : <Navigate to="/login" />} />
          <Route path='/commentdetails' element={isAuthenticated ? <CommentDetails /> : <Navigate to="/login" />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='*' element={<NotFound />} />
      </Routes>
    </AuthContext.Provider>
  )
}

export default Routers