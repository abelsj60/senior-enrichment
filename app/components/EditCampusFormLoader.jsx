import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCampuses } from '../reducers/campus-reducer';
import { fetchCampus } from '../reducers/one-campus-reducer';
import EditCampusForm from './EditCampusForm';

class EditCampusFormLoader extends Component {

  componentDidMount() {
    console.log('invoking thunk');
    this.props.getCampus && this.props.getCampus(this.props.match.params.id);
  }

  render(){
    return (
      <div>
        <EditCampusForm campus={this.props.campus} students={this.props.students} fetchCampuses={fetchCampuses} />
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    campus: state.campus,
    students: state.students
  };
}

function mapDispatchToProps(dispatch) {
  console.log('calling thunk');
  return {
    getCampus: function (id) {
      dispatch(fetchCampus(id));
    },
    getCampuses: function () {
      dispatch(fetchCampuses());
    }
  };
}

const EditCampusFormLoaderContainer = connect(mapStateToProps, mapDispatchToProps)(EditCampusFormLoader);

export default EditCampusFormLoaderContainer;
