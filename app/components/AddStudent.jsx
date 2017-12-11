import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class AddStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      gpa: 0.0,
      campusId: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    const enteredValue = {
      [event.target.name]: event.target.value
    };
    // console.log(this);
    console.log('enteredValue:', enteredValue);
    this.setState(enteredValue);
  }

  handleSubmit (event) {
    event.preventDefault();
    console.log('button clicked', typeof this.state.gpa);
    axios.post('/api/students/', this.state);
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
            <select name='campusId'
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

const AddStudentContainer = connect(mapStateToProps)(AddStudent);

export default AddStudentContainer;
