import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStudent } from '../reducers/one-student-reducer';
import Student from './Student';

class SingleStudent extends Component {

  componentDidMount() {
    console.log('invoking thuk');
    this.props.getStudent(this.props.match.params.id);
  }

  render () {
    const studentSchool = this.props.campuses.filter(campus => {
      return this.props.student.campusId === campus.id
    });

    return (
      <div>
        <Student student={this.props.student} studentCampus={studentSchool} />
      </div>
    );
  }

}

function mapStateToProps(state) {
  console.log('mapping props to state', state);
  return {
    student: state.student,
    campuses: state.campuses
  };
}

function mapDispatchToProps(dispatch) {
  console.log('calling thunk');
  return {
    getStudent: (studentId) => {
      dispatch(fetchStudent(studentId));
    }
  };
}

const SingleStudentContainer = connect(mapStateToProps, mapDispatchToProps)(SingleStudent);

export default SingleStudentContainer;
