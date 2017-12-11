import axios from 'axios';

// ACTION TYPE

const GET_STUDENTS = 'GET_STUDENTS';

// ACTION CREATOR

function getStudents(students) {
  const action = {
    type: GET_STUDENTS,
    students: students
  };
  return action;
}

// THUNK CREATOR

export function fetchStudents() {
  return function thunk(dispatch) {
    return axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        dispatch(getStudents(students));
      })
      // .catch(err);
  };
}

// REDUCER

export default function reducer (state = [], action) {
  switch (action.type) {
    case GET_STUDENTS:
      return action.students;
    default:
      return state;
  }
}
