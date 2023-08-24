import React from 'react';
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

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to ='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/cars' element={<CarListing />} />
        <Route path='/cardetails' element={<CarDetails />} />
        <Route path='/comments' element={<Comment />} />
        <Route path='/commentdetails' element={<CommentDetails />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default Routers