import React, { Component } from 'react';

function SingleCampus(props) {
  return (
   <div>
    <h1>Interstellar Campus</h1>
    <p>Name: {props.campus.name}</p>
    <p>Description: {props.campus.description}</p>
    <img src={props.campus.imageUrl} />
    <h2>Super Students!</h2>
      <ul>
        {
          props.students && props.students.map(student =>
            (
            <li key={student.id}>
              <div>
                <p>Full name: {student.fullName}></p>
                <p>Email: {student.email}</p>
                <p>GPA: {student.gpa}</p>
              </div>
            </li>
          ))
        }
      </ul>
   </div>
  );
}

export default SingleCampus;
