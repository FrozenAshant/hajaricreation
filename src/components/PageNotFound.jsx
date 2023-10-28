import React from 'react';
import {NavLink} from 'react-router-dom';


const PageNotFound = () => {
  return (
    <div>
      <h2>Page Not Found</h2>
      <h3>Go Back To Home Page</h3>
      <NavLink to="/">Home</NavLink>
    </div>
  )
}

export default PageNotFound
