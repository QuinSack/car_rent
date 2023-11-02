import React, { useContext, useState, useEffect } from 'react';
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
import Careers from '../pages/Careers';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import {setAuthStatusInLocalStorage, getAuthStatusFromLocalStorage} from '../utils/AuthStorage'
import FAQ from '../pages/FAQ';
import ContactUs from '../pages/ContactUs';
import EligibilityRequirements from '../pages/EligibilityRequirements';

const Routers = () => {

  const {isAuthenticated, setIsAuthenticated} = useContext(AuthContext);

  useEffect(() => {
    const storedAuthStatus = getAuthStatusFromLocalStorage();
    if (storedAuthStatus !== null) {
      setIsAuthenticated(storedAuthStatus);
    }
  }, [setIsAuthenticated]);

  return (
      <Routes>
          <Route path='/' element={<Navigate to ='/home' />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/cars' element={isAuthenticated ? <CarListing /> : <Navigate to="/login" />} />
          <Route path='/cars/:id' element={isAuthenticated ? <CarDetails /> : <Navigate to="/login" />} />
          <Route path='/comments' element={isAuthenticated ? <Comment /> : <Navigate to="/login" />} />
          <Route path='/commentdetails' element={isAuthenticated ? <CommentDetails /> : <Navigate to="/login" />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/careers' element={<Careers />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/faqs' element={<FAQ />} />
          <Route path='/eligibility-requirements' element={<EligibilityRequirements />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='*' element={<NotFound />} />
      </Routes>
  )
}

export default Routers