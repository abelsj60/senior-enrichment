import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Students = props => {
  return (
    <div>
      <h1>Interstellar Students!</h1>
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
  );
};

export default Students;
