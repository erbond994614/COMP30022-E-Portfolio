import React from 'react';
import Register from './Register'
import Login from './Login';
import FileUpload from './FileUpload';
import DisplayFile from './DisplayFile'

const TestPage = () => {
  return (

    <div className="container-fluid">
      {/* <Register />
      <Login /> */}
      <FileUpload />
      <DisplayFile fileId='5f7bd9987b37a0320816352d'/>
    </div>

  )
}

export default TestPage;