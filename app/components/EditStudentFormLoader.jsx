import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCampuses } from '../reducers/campus-reducer';
import { fetchStudent } from '../reducers/one-student-reducer';
import EditStudentForm from './EditStudentForm';

class EditStudentFormLoader extends Component {

  componentDidMount() {
    console.log('invoking thunk');
    this.props.getStudent && this.props.getStudent(this.props.match.params.id);
  }

  render(){
    console.log('===> this.props.match.params:', this.props.match.params);
    return (
      <div>
        <EditStudentForm student={this.props.student} campuses={this.props.campuses} fetchCampuses={fetchCampuses} />
      </div>
    );
  }

}

function mapStateToProps(state) {
  console.log('checking on students in SCL:', state);
  return {
    student: state.student,
    campuses: state.campuses
  };
}

function mapDispatchToProps(dispatch) {
  console.log('calling thunk');
  return {
    getStudent: function (id) {
      dispatch(fetchStudent(id));
    },
    getCampuses: function () {
      dispatch(fetchCampuses());
    }
  };
}

const EditStudentFormLoaderContainer = connect(mapStateToProps, mapDispatchToProps)(EditStudentFormLoader);

export default EditStudentFormLoaderContainer;
