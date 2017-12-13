import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Students (props) {
  return (
    <div>
      <div>
        <h1>Interstellar Students!</h1>
      </div>
      <div>
        <Link to='/students/new'><button>Add student</button></Link>
      </div>
      <div>
        <ul>
        {
          props.students.map(student =>
          (
            <li key={student.id}>
              <div>
                <p>Name: {student.fullName}</p>
                <p>Email: {student.email}</p>
                <p>GPA: {student.gpa}</p>
                <Link to={`/students/${student.id}`}><button>{student.fullName}</button></Link>
              </div>
            </li>
          ))
        }
        </ul>
      </div>
    </div>
  );
};

function mapStateToProps (state) {
  return {
    students: state.students
  };
}

const StudentsContainer = connect(mapStateToProps)(Students);

export default StudentsContainer;
