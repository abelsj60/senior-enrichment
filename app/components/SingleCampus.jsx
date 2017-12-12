import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function SingleCampus(props) {
  const filteredStudents = props.students.filter(student => {
    return student.campusId === props.campus.id;
  });

  return (
   <div>
    <h1>Interstellar Campus</h1>
    <p>Name: {props.campus.name}</p>
    <p>Description: {props.campus.description}</p>
    <img src={props.campus.imageUrl} />
    <br />
    <Link to={`/campus/edit/${props.campus.id}`}><button>Edit</button></Link>
    <h2>Super Students!</h2>
      <ul>
        {
          filteredStudents.map(student =>
            (
            <li key={student.id}>
              <div>
                <p>Full name: {student.fullName}</p>
                <Link to={`/students/${student.id}`}><button>View details</button></Link>
              </div>
            </li>
          ))
        }
      </ul>
   </div>
  );
}

export default SingleCampus;
