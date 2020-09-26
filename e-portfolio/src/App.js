import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux'

// components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/Homepage';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import TestPage from './components/pages/TestPage';
import Portfolio from './components/Portfolio';

// includes
import './Assets/css/default.min.css';

const App = () => {
  const auth = useSelector(store => store.userAuth.token)

  return (
    <div className='App'>
      <Header/>
        <Switch>

          <Route exact path='/' component={Homepage} />
          <Route exact path='/Login' component={Login} />
          <Route exact path='/Register' component={Register} />
          <Route exact path='/dev' component={TestPage} />
          <Route exact path='/temp' component={Portfolio} />
          <Route exact path='/portfolio' component={auth ? Portfolio : Homepage} />

        </Switch>
      <Footer />
    </div>
  )
}

export default App