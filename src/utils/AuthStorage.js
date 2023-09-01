import React from 'react'

// Function to set the authentication status in localStorage
export const setAuthStatusInLocalStorage = (isAuthenticated) => {
    localStorage.setItem('isAuthenticated', isAuthenticated);
  };
  
  // Function to get the authentication status from localStorage
  export const getAuthStatusFromLocalStorage = () => {
    return localStorage.getItem('isAuthenticated') === 'true';
  };
  