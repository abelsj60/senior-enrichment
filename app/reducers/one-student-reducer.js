import axios from 'axios';

// ACTION TYPE

const GET_STUDENT = 'GET_STUDENT';

// ACTION CREATOR

function getStudent(student) {
  const action = {
    type: GET_STUDENT,
    student: student
  };
  return action;
}

// THUNK CREATOR

export function fetchStudent(studentID) {
  return function thunk(dispatch) {
    console.log('running thunk:', studentID)
    return axios.get(`/api/students/${studentID}`)
      .then(res => res.data)
      .then(student => {
        console.log('exiting thunk:', student);
        dispatch(getStudent(student));
      });
  };
}

// REDUCER

export default function reducer (state = {}, action) {
  switch (action.type) {
    case GET_STUDENT:
      return action.student;
    default:
      return state;
  }
}
