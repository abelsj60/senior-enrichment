'use strict'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import Root from './components/Root'
import CampusLoader from './components/CampusLoader';
import SingleCampusLoader from './components/SingleCampusLoader';
import SingleCampus from './components/SingleCampus';
import StudentsLoader from './components/StudentsLoader';
import SingleStudentLoader from './components/SingleStudentLoader';
import AddCampus from './components/AddCampus';
import NavBar from './components/NavBar';
import Home from './components/Home';
import { Link, Switch, Redirect, Route, HashRouter as Router } from 'react-router-dom';

render (
  <Provider store={store}>
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/students' component={StudentsLoader} />
          <Route path='/students/:id' component={SingleStudentLoader} />
          <Route exact path='/campus' component={CampusLoader} />
          <Route exact path='/campus/new' component={AddCampus} />
          <Route exact path='/campus/:id' component={SingleCampusLoader} />
          <Route path='/home' component={Home} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('main')
);
