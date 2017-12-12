import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStudents } from '../reducers/student-reducer';
import axios from 'axios';

class AddStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      gpa: '',
      campusId: 1
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    const enteredValue = {
      [event.target.name]: event.target.value
    };
    console.log('enteredValue:', enteredValue);
    this.setState(enteredValue);
  }

  handleSubmit (event) {
    event.preventDefault();
    let tempStudentState = Object.assign({}, this.state);
    if (tempStudentState.gpa === '') {
      delete tempStudentState.gpa;
    }
    axios.post('/api/students/', tempStudentState)
      .then(() => {
        this.setState({
          firstName: '',
          lastName: '',
          email: '',
          gpa: '',
          campusId: 1
        });
      })
      .then(() => {
        console.log('invoking thunk');
        this.props.getStudents();
        console.log('about to change url');
        this.props.history.push('/students');
      })
  }

  render () {

    return (
      <div>
        <div>
          <h1>My form!</h1>
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>First name:</label>
            <input
              type='text'
              name='firstName'
              placeholder='First name'
              value={this.state.firstName}
              onChange={this.handleChange} />
            <br />
            <label>Last name</label>
            <input
            type='text'
            name='lastName'
            placeholder='Last name'
            value={this.state.lastName}
            onChange={this.handleChange} />
            <br />
            <label>Email:</label>
            <input
              type='text'
              name='email'
              placeholder='Enter email'
              value={this.state.email}
              onChange={this.handleChange} />
            <br />
            <label>GPA:</label>
            <input
            type='text'
            name='gpa'
            placeholder='Enter GPA'
            value={this.state.gpa}
            onChange={this.handleChange} />
            <br />
            <label>Campus:</label>
            <select
              name='campusId'
              placeholder='Enter Campus'
              value={this.state.campusId}
              onChange={this.handleChange}>
              {
                this.props.campuses && this.props.campuses.map( campus => (
                  <option key={campus.id} value={campus.id}>{campus.name}</option>
                ))
              }
            </select>
            <br />
            <button
            type='submit'>Submit</button>
          </form>
        </div>
      </div>
    );
  }

}

function mapStateToProps (state) {
  return {
    campuses: state.campuses
  };
}

function mapDispatchToProps (dispatch) {
  console.log('calling thunk');
  return {
    getStudents: function() {
      dispatch(fetchStudents());
    }
  };
}

const AddStudentContainer = connect(mapStateToProps, mapDispatchToProps)(AddStudent);

export default AddStudentContainer;
