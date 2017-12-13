import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class TransferStudent extends Component {
  constructor() {
    super();
    this.state = {
      transferStudent: ''
    };
  this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    const enteredValue = {
      [event.target.name]: event.target.value
    };
    console.log('---> enteredValue:', enteredValue);
    this.setState(enteredValue);
  }

  render () {
    const filteredStudents = this.props.students.filter(student => {
      return student.campusId === this.props.campus.id
    });

    return (
      <div>
        <div>
          <label>Transfer 1 of
          {
            ' ' + filteredStudents.length + ' '
          }
          students:</label>
          <br />
          <select
          name='transferStudent'
          value={this.state.transferStudent}
          onChange={this.handleChange}>
          <option value="" className="required">Select one</option>
          {
            this.props.students && filteredStudents.map( student => (
              <option key={student.id} value={student.id}>{student.fullName}</option>
            ))
          }
          </select>
          <Link to={`/students/edit/${this.state.transferStudent}`}><button>Go!</button></Link>
        </div>
      </div>
    );
  }

}

export default TransferStudent;
