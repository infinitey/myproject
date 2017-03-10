import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from "react-router";

import Bootstrap from './js/bootstrap-native.min.js';

import Layout from './pages/Layout';
import Gameplay from './pages/Gameplay';
import News from './pages/News';
import Presskit from './pages/Presskit';
import World from './pages/World';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import PrivatePolicy from './pages/PrivatePolicy';
import Terms from './pages/Terms';

const app = document.getElementById('main');

ReactDOM.render(
      <Router history={hashHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={World}></IndexRoute>
          <Route path="world" name="world" component={World}></Route>
          <Route path="gameplay" name="gameplay" component={Gameplay}></Route>
          <Route path="presskit" name="presskit" component={Presskit}></Route>
          <Route path="news(/:article)" name="news" component={News}></Route>
          <Route path="about" name="about" component={About}></Route>
          <Route path="terms" name="terms" component={Terms}></Route>
          <Route path="privatepolicy" name="privatepolicy" component={PrivatePolicy}></Route>
          <Route path="contactus" name="contactus" component={ContactUs}></Route>
        </Route>
      </Router>
, app);
