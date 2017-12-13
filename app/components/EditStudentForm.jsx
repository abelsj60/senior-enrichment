import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';

class EditStudentForm extends Component {
  constructor() {
    super();
    // console.log('props?', this.props);
    // const student = this.props.student;
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      gpa: '',
      campus: '',
      campusID: ''
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
    // console.log('---> handleSubmit props:', this.props.fetchCampuses);
    event.preventDefault();
    let tempCampusState = Object.assign({}, this.state);
    if (tempCampusState.gpa === '') {
      delete tempCampusState.imageUrl;
    }
    axios.put(`/api/students/${this.props.student.id}`, tempCampusState)
      .then( () => {
        this.setState({
          firstName: '',
          lastName: '',
          email: '',
          gpa: '',
          campus: '',
          campusID: ''
        });
      })
      .then(() => {
        console.log('invoking thunk');
        this.props.fetchCampuses();
        this.props.history.push(`/students/${this.props.student.id}`);
      });
  }

  render () {
    const startingCampus = this.props.campuses.find(campus => {
      return campus.id === this.props.student.campusId;
    });
    // console.log('---> this.props.student', this.props.student);
    console.log('---> check state:', this.state);

    return (
      <div>
        <div>
          <h1>Edit {
            this.props.student.fullName
          }
          !</h1>
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>First name:</label>
            <input
              type='text'
              name='firstName'
              placeholder='Change name'
              selected={this.props.student.firstName}
              value={this.state.firstName}
              onChange={this.handleChange} />
            <br />
            <label>Last name:</label>
            <input
              type='text'
              name='lastName'
              placeholder='Change name'
              selected={this.props.student.lastName}
              value={this.state.lastName}
              onChange={this.handleChange} />
            <br />
            <label>Email:</label>
            <input
              type='text'
              name='email'
              placeholder='Change email'
              selected={this.props.student.email}
              value={this.state.email}
              onChange={this.handleChange} />
            <br />
            <label>GPA:</label>
            <input type='text'
              name='gpa'
              placeholder='Change GPA'
              value={this.state.gpa}
              selected={this.props.student.gpa}
              onChange={this.handleChange} />
            <br />
            <label>Campus:</label>
            <select
            name='campusId'
            value={this.state.campusId}
            onChange={this.handleChange}>
            <option selected={this.props.student.campusId}>{
              startingCampus && startingCampus.name
            }</option>
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
        <div>
          <div>
            <h2>Current information</h2>
          </div>
          <div>
            <p>Name: {this.props.student.fullName}</p>
            <p>Description: {this.props.student.email}</p>
            <img src={this.props.student.gpa} />
          </div>
        </div>
      </div>
    );
  }

}

const EditFormWithHistoryWithRouter = withRouter(EditStudentForm);

export default EditFormWithHistoryWithRouter;
