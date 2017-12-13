import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function SingleStudent(props) {
  const schoolName = props.studentCampus;

  return (
   <div>
    <h1>Student Blastoff!</h1>
    <p>Full name: {props.student.fullName}</p>
    <p>Email: {props.student.email}</p>
    <p>GPA: {props.student.gpa}</p>
    <Link to={`/students/edit/${props.student.id}`}><button>Edit</button></Link>
    <p>School: {
      props.studentCampus.length && props.studentCampus[0].name
    }</p>
    <Link to={`/campus/${props.student.campusId}`}><button>Details...</button></Link>
   </div>
  );
}

export default SingleStudent;
