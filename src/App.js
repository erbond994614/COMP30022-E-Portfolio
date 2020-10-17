import React from 'react';
import { useSelector } from 'react-redux'
import Router from './router';
// components
import Header from './components/header';
import Footer from './components/footer';

//import Downloads from './components/Downloads';

// includes
import './Assets/css/default.min.css';

const App = () => {
  const auth = useSelector(store => store.userAuth.token)
  return (
    <div className='App'>
      <Header/>
      <Router />
      <Footer />
    </div>
  )
}

export default App