import React from 'react';
import logo from './logo.svg';
import Header from './components/navbar';
import './App.css';
import reactRouterDom, { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import Home from './components/home/home';
import Footer from './components/footer';
import AboutUs from './components/aboutus/aboutus';
import ErrorPage from './components/pageerror/pageerror';
import OurWork from './components/ourwork/ourworks';
import Order from './components/order-now/ordernow';
import Contact from './components/contact/contact';
import Passport from './components/services/passport';
import Birthcertificate from './components/services/birthcert';
import Fakenotes from './components/services/counterfiet';
import Idcard from './components/services/idcard';
import Ielts from './components/services/ielt';
import License from './components/services/license';
import Permit from './components/services/residence';

function App() {
  return (
    <React-Fragment>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/about-us' component={AboutUs} />
          <Route path='/our-works' component={OurWork} />
          <Route path='/place-order' component={Order} />
          <Route path='/contact-us' component={Contact} />
          <Route path='/services/passport' component={Passport} />
          <Route path='/services/birthcertificate' component={Birthcertificate} />
          <Route path='/services/counterfeit-note' component={Fakenotes} />
          <Route path='/services/id-card' component={Idcard} />
          <Route path='/services/ielts-and-toefl' component={Ielts} />
          <Route path='/services/driver-license' component={License} />
          <Route path='/services/residence-permit' component={Permit} />
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </React-Fragment>
  );
}

export default App;
