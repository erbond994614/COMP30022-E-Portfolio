import React, { Component } from 'react';
import LoginForm from './LoginForm';
import ImageUploadForm from './ImageUploadForm';

class TestPage extends Component {
  render() {
    return (

      <div className="container-fluid">
        <LoginForm />
        <ImageUploadForm />
      </div>

    );
  }
}

export default TestPage;
