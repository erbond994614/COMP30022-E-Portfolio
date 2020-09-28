import React from 'react';
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (

    <div className="container-fluid">
      HOME PAGE CONTENT HERE
      <div>
        <Link to='temp'>Template</Link>
      </div>
    </div>
  )
}

export default Homepage;