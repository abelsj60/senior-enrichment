import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCampuses } from '../reducers/campus-reducer';
import { fetchStudents } from '../reducers/student-reducer';


class Home extends Component {

  componentDidMount () {
    console.log('invoking thunk');
    this.props.getCampuses();
    this.props.getStudents();
  }

  render () {
    return (
      <div>
      <h1>Home Page</h1>
      <img src='http://main.sfiacademy.org/images/10154000_10204333701377555_5192769921788264488_n.jpg' />
      </div>
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

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
