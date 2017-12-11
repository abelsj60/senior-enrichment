import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStudents } from '../reducers/student-reducer';
import Students from './Students';

class StudentLoader extends Component {

  componentDidMount () {
    console.log('invoking thunk');
    this.props.getStudents();
  }

  render () {
    return (
      <div>
        <Students students={this.props.students} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    students: state.students
  };
};

const mapDispatchToProps = dispatch => {
  console.log('calling thunk');
  return {
    getStudents: function() {
      dispatch(fetchStudents());
    }
  };
};

const StudentLoaderContainer = connect(mapStateToProps, mapDispatchToProps)(StudentLoader);

export default StudentLoaderContainer;
