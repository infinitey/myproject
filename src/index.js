import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from "react-router";

import Bootstrap from './js/bootstrap-native.min.js';

import Layout from './pages/Layout';
import Gameplay from './pages/Gameplay';
import News from './pages/News';
import Presskit from './pages/Presskit';
import World from './pages/World';

const app = document.getElementById('main');

ReactDOM.render(
      <Router history={hashHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={World}></IndexRoute>
          <Route path="world" name="world" component={World}></Route>
          <Route path="gameplay" name="gameplay" component={Gameplay}></Route>
          <Route path="presskit" name="presskit" component={Presskit}></Route>
          <Route path="news(/:article)" name="news" component={News}></Route>
        </Route>
      </Router>
, app);
