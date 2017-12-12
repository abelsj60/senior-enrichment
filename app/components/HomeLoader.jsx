'use strict'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { render } from 'react-dom';
import { Link, Switch, Redirect, Route, HashRouter as Router } from 'react-router-dom';
import Campus from './Campus';
import Students from './Students';
import SingleCampusLoader from './SingleCampusLoader';
import SingleStudentLoader from './SingleStudentLoader';
import AddCampus from './AddCampus';
import AddStudent from './AddStudent';
import EditCampusFormLoader from './EditCampusFormLoader';
import Home from './Home';
import NavBar from './NavBar';
import { fetchCampuses } from '../reducers/campus-reducer';
import { fetchStudents } from '../reducers/student-reducer';

class HomeLoader extends Component {

  componentDidMount () {
    console.log('invoking thunk');
    this.props.getCampuses();
    this.props.getStudents();
  }

  render () {

    return (
      <Router>
      <div>
        <NavBar />
        <Switch>
        <Route exact path='/campus/new' component={AddCampus} />
        <Route exact path='/students/new' component={AddStudent} />
        <Route exact path='/campus/edit/:id' component={EditCampusFormLoader} />
        <Route path='/campus/:id' component={SingleCampusLoader} />
        <Route path='/students/:id' component={SingleStudentLoader} />
        <Route exact path='/campus' component={Campus} />
        <Route exact path='/students' component={Students} />
        <Route exact path='*' component={Home} />
        </Switch>
      </div>
    </Router>
    )
  }
}

const mapStateToProps = state => {
  return {
    campuses: state.campuses,
    students: state.students
  };
};

const mapDispatchToProps = dispatch => {
  console.log('calling thunk');
  return {
    getCampuses: function() {
      dispatch(fetchCampuses());
    },
    getStudents: function() {
      dispatch(fetchStudents());
    }
  };
};

const HomeLoaderContainer = connect(mapStateToProps, mapDispatchToProps)(HomeLoader);

export default HomeLoaderContainer;
