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
import StudentInformation from './components/pages/StudentInformation/StudentInformation'
import AboutMe from './components/pages/StudentInformation/AboutMe'

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
          <Route exact path='/dev' component={TestPage} />
          <Route exact path='/temp' component={Portfolio} />
          <Route exact path='/aboutme' component={auth ? AboutMe : Homepage} />

        </Switch>
      <Footer />
    </div>
  )
}

export default App