import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCampuses } from '../reducers/campus-reducer';
import Campus from './Campus';
import { fetchStudents } from '../reducers/student-reducer';

class CampusLoader extends Component {

  componentDidMount () {
    console.log('invoking thunk');
    this.props.getCampuses();
    this.props.getStudents();
  }

  render() {
    return (
      <div>
        <Campus campuses={this.props.campuses} students={this.props.students} />
      </div>
    );
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

const CampusLoaderContainer = connect(mapStateToProps, mapDispatchToProps)(CampusLoader);

export default CampusLoaderContainer;
