import React from 'react';
import { hot } from 'react-hot-loader/root';
import '@babel/polyfill';
import { Provider } from 'react-redux';

import store from '../store/index';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Home from '../pages/Home';

const App = () => (
  <Provider store={store}>
    <NavBar />
    <Home />
    <Footer />
  </Provider>
);

export default hot(App);
