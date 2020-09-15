import React, { Component } from 'react';
import LoginForm from './LoginForm';
import ImageUploadForm from './ImageUploadForm';
import FetchImage from '../FetchImage'

class TestPage extends Component {
  render() {
    return (

      <div className="container-fluid">
        <LoginForm />
        <ImageUploadForm />
        <FetchImage imageName='Screenshot (1).png'/>
      </div>

    );
  }
}

export default TestPage;
