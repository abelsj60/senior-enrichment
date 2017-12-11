import React, { Component } from 'react';

function SingleStudent(props) {
  return (
   <div>
    <h1>Student Blastoff!</h1>
    <p>Full name: {props.student.fullName}</p>
    <p>Email: {props.student.email}</p>
    <p>GPA: {props.student.gpa}</p>
   </div>
  );
}

export default SingleStudent;
