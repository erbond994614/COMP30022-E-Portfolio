import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux'

// components
import Header from './components/header';
import Footer from './components/footer';
import Homepage from './components/Homepage';
import Register from './components/Register';
import Login from './components/Login';
import TestPage from './components/TestPage';
import Portfolio from './components/Portfolio';
import StudentInformation from './components/StudentInformation'
import Logout from './components/Logout'

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
          <Route exact path='/info' component={auth ? StudentInformation : Homepage} />
          <Route exact path='/portfolio' component={auth ? Portfolio : Homepage} />
          <Route exact path='/logout' component={auth ? Logout : Homepage} />
          <Route exact path='/dev' component={TestPage} />
          <Route exact path='/temp' component={Portfolio} />

        </Switch>
      <Footer />
    </div>
  )
}

export default App